import axios from "axios";
import store from "../store";
import router from "../router/index";

export default {
  namespaced: true,
  state: {
    status: "",
    upgraded: true,
    token: localStorage.getItem("x-auth-token") || "",
    User: {},
    isEdited: "",
    deleted_playlists: [],
    //short cicuit evaluation if the first argument return anything but null it will be stored if not token=''
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    upgrade(state, flag) {
      state.upgraded = flag;
    },
    auth_success(state, { token, user }) {
      state.status = "success";
      state.token = token;
      state.User = user;
      console.log("this is the user state");
      console.log(state.User);
    },
    auth_error(state, err_msg) {
      state.status = err_msg;
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.User = {};
    },
    ClaimArtistProfile(state, payload) {
      state.User.update({
        Name: payload.Name,
        Genre: payload.Genre,
        Description: payload.Description,
      });
      //state.User +=payload
      console.log("nori", payload.Name);
    },
    is_edit(state, msg) {
      state.isEdited = msg;
    },
    setDeletedPlaylists(state, playlists) {
      state.deleted_playlists = playlists;
    },
  },
  actions: {
    signUp({ commit }, user) {
      commit("auth_request");
      axios
        .post("/api/sign_up", {
          email: user.email,
          password: user.password,
          username: user.username,
          gender: user.gender,
          country: user.country,
          birthday: user.birthday,
        })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("x-auth-token", token);
          axios.defaults.headers.common["x-auth-token"] = token;
          store.dispatch("Authorization/get_user", true);
        })
        .catch((error) => {
          commit("auth_error", "signup_err");
          localStorage.removeItem("x-auth-token");
          console.log(error);
        });
    },
    facebook_signUp({ commit }) {
      commit("auth_request");
      axios
        .get("/api/auth/facebook")
        .then((response) => {
          const token = response.headers.token;
          localStorage.setItem("x-auth-token", token);
          axios.defaults.headers.common["x-auth-token"] = token;
          store.dispatch("Authorization/get_user", true);
        })
        .catch((error) => {
          commit("auth_error", "facebook_err");
          localStorage.removeItem("x-auth-token");
          console.log(error);
        });
    },
    get_user({ commit }, flag) {
      const token = localStorage.getItem("x-auth-token");
      axios.defaults.headers.common["x-auth-token"] = token;
      commit("auth_request");
      axios
        .get("/api/me-player")
        .then((response) => {
          const user = response.data[0];
          console.log(user);
          commit("auth_success", { token, user });
          if (flag) router.replace("/");
        })
        .catch((error) => {
          commit("auth_error", "user_err");
          localStorage.removeItem("x-auth-token");
          console.log(error);
        });
    },
    login({ commit }, user) {
      commit("auth_request");
      axios
        .post("/api/login", {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          console.log(response.data.token);
          const token = response.data.token;
          localStorage.setItem("x-auth-token", token);
          axios.defaults.headers.common["x-auth-token"] = token;
          store.dispatch("Authorization/get_user", true);
        })
        .catch((error) => {
          console.log(error);
          commit("auth_error", "login_err");
          localStorage.removeItem("x-auth-token");
          console.log(error);
        });
    },
    toPremium({ commit, state }, payload) {
      console.log("payload", payload.cardNumber);
      axios
        .put("api/me/promote", {
          expiresDate: payload.expiresDate,
          cardNumber: payload.cardNumber,
          isMonth: payload.isMonth,
        })
        .then(() => {
          state.User.product = "premium";
          store.dispatch("Authorization/get_user", true);
        })
        .catch((error) => {
          console.log(error);
          commit("upgrade", false);
        });
    },
    reset({ commit }, user) {
      axios
        .post("/api/login/forgetpassword", {
          email: user.email,
        })
        .then(() => {
          commit("logout");
        })
        .catch((error) => {
          commit("auth_error", "reset_err");
          console.log(error);
          localStorage.removeItem("x-auth-token");
        });
      console.log(Request.headers);
    },
    resetPassword({ commit }, payload) {
      console.log("reset", payload.token);
      axios.defaults.headers.common["x-auth-token"] = payload.token;
      axios
        .post("api/login/reset_password", {
          password: payload.password,
        })
        .then(() => {
          router.replace("/login");
        })
        .catch((error) => {
          commit("logout");
          console.log(error);
          delete axios.defaults.headers.common["x-auth-token"];
        });
      console.log(Request.headers);
    },
    logout({ commit }) {
      commit("logout");
      axios.post("/api/user/logout").then(() => {
        localStorage.removeItem("x-auth-token");
        delete axios.defaults.headers.common["x-auth-token"];
      });
    },
    ClaimArtistProfile({ commit }, payload) {
      console.log("wslllllll", payload);
      axios
        .put("/api/me/ToArtist", payload)
        .then((response) => {
          const claim = response.data;
          console.log("wsl", claim);
          commit("ClaimArtistProfile", claim);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    SaveEdit({ commit }, user) {
      console.log("user in save edit", user);
      commit("auth_request");
      axios
        .put("/api/me/update", {
          // email: user.email,
          // password: user.password,
          // newpassword: user.newpassword,
          // gender: user.gender,
          // country: user.country,
          // birthday: user.birthday
          user,
        })
        .then((response) => {
          console.log(response.data);
          commit("is_edit", "success");
        })
        .catch((error) => {
          commit("is_edit", "faild");
          console.log(error);
        });
    },
    showDeletedPlaylists({ commit }) {
      axios
        .get("/api/me/deletedplaylists")
        .then((response) => {
          console.log("deleted playlists dai", response);
          let playlists = response.data;
          commit("setDeletedPlaylists", playlists);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    Username: (state) => state.User.displayName,
    GetStatus: (state) => state.status,
    user: (state) => state.User,
    isEdited: (state) => state.isEdited,
    deleted_playlists: (state) => state.deleted_playlists,
    upgraded: (state) => state.upgraded,
  },
};
