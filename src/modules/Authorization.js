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
    emailConfirmed: Boolean
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
        .then(() => {

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
    get_user({ commit, dispatch }, flag) {
      const token = localStorage.getItem("x-auth-token");
      axios.defaults.headers.common["x-auth-token"] = token;
      commit("auth_request");
      axios
        .get("/api/me-player")
        .then((response) => {
          const user = response.data[0];
        if(!user.player.haveQueue){
            dispatch("Queue/CreateQueue","", { root: true });
          }
          else{
            dispatch("Mediaplayer/get_currentsong",2, { root: true });
          }
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
          const token = response.data.token;
          localStorage.setItem("x-auth-token", token);
          axios.defaults.headers.common["x-auth-token"] = token;
          store.dispatch("Authorization/get_user", true);
        })
        .catch((error) => {
          console.log(error);
          commit("auth_error", "login_err");
          localStorage.removeItem("x-auth-token");
        });
    },
    toPremium({ commit }, payload) {
      axios
        .put("api/me/promote", {
          expiresDate: payload.expiresDate,
          cardNumber: payload.cardNumber,
          isMonth: payload.isMonth,
        })
        .then(() => {
          store.dispatch("Authorization/logout");
          router.replace("/EmailConfirmation");
        })
        .catch((error) => {
          console.log(error);
          commit("upgrade", false);
        });
    },
    toFree({ commit}) {
      axios
        .put("api/me/free")
        .then(() => {
          store.dispatch("Authorization/logout");
          router.replace("/");
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
    },
    resetPassword({ commit }, payload) {
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
    },
    logout({ commit, state }) {
      commit("logout");
      console.log("id when log out",state.User._id);
      axios.post("/api/user/logout/?id=" + state.User._id).then(() => {
        localStorage.removeItem("x-auth-token");
        delete axios.defaults.headers.common["x-auth-token"];
      });
    },
    ClaimArtistProfile({ commit }, payload) {
      axios
        .put("/api/me/ToArtist", payload)
        .then((response) => {
          const claim = response.data;
          commit("ClaimArtistProfile", claim);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveEdit({ commit }, user) {
      axios
        .put("/api/me/update", {
          user,
        })
        .then(() => {
          commit("is_edit", "success");
        })
        .catch((error) => {
          if(error.response.data.error.details[0].message=='"cardNumber" must be a credit card')
            commit("is_edit", "carderror");
          else
            commit("is_edit", "faild");
        });
    },
    showDeletedPlaylists({ commit }) {
      axios
        .get("/api/me/deletedplaylists")
        .then((response) => {
          let playlists = response.data;
          commit("setDeletedPlaylists", playlists);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ConfirmEmail({ state } , userId) {
      axios
        .post("/api/login/confirm?id=" + userId)
        state.emailConfirmed = true;
    },
  },
  getters: {
    Username: (state) => state.User.displayName,
    GetStatus: (state) => state.status,
    user: (state) => state.User,
    isEdited: (state) => state.isEdited,
    deleted_playlists: (state) => state.deleted_playlists,
    upgraded: (state) => state.upgraded,
    userid:(state) => state.User._id,
  },
};
