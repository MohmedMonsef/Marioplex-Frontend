import axios from "axios";
import store from "../store";
import router from "../router/index";

export default {
  namespaced: true,
  state: {
    status: "",
    upgraded: true,
    token: localStorage.getItem("x-auth-token") || "",
    User: {}
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
        Description: payload.Description
      });
      //state.User +=payload
      console.log("nori", payload.Name);
    }
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
          birthday: user.birthday
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem("x-auth-token", token);
          axios.defaults.headers.common["x-auth-token"] = token;
          store.dispatch("authorization/get_user", true);
        })
        .catch(error => {
          commit("auth_error", "signup_err");
          localStorage.removeItem("x-auth-token");
          console.log(error);
        });
    },
    facebook_signUp({ commit }) {
      commit("auth_request");
      axios
        .get("/api/auth/facebook")
        .then(response => {
          const token = response.headers.token;
          localStorage.setItem("x-auth-token", token);
          axios.defaults.headers.common["x-auth-token"] = token;
          store.dispatch("authorization/get_user", true);
        })
        .catch(error => {
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
        .get("/api/me")
        .then(response => {
          const user = response.data[0];
          console.log(user);
          commit("auth_success", { token, user });
          if (flag) router.push("/");
        })
        .catch(error => {
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
          password: user.password
        })
        .then(response => {
          console.log(response.data.token);
          const token = response.data.token;
          localStorage.setItem("x-auth-token", token);
          axios.defaults.headers.common["x-auth-token"] = token;
          store.dispatch("authorization/get_user", true);
        })
        .catch(error => {
          console.log(error);
          commit("auth_error", "login_err");
          localStorage.removeItem("x-auth-token");
          console.log(error);
        });
    },
    toPremium({ commit,state }, payload) {
      console.log("payload",payload.cardNumber)
      axios
        .put("api/me/promote", {
          expiresDate: payload.expiresDate,
          cardNumber: payload.cardNumber,
          isMonth: payload.isMonth
        })
        .then(() => {
          state.User.product="premium";
          store.dispatch("authorization/get_user", true);
        })
        .catch(error => {
          console.log(error);
          commit("upgrade", false);
        });
    },
    reset({ commit }, user) {
      axios
        .post("/api/login/forgetpassword", {
          email: user.email
        })
        .then(() => {
          commit("logout");
        })
        .catch(error => {
          commit("auth_error", "reset_err");
          console.log(error);
          localStorage.removeItem("x-auth-token");
        });
      console.log(Request.headers);
    },
    logout({ commit }) {
      commit("logout");
      localStorage.removeItem("x-auth-token");
      delete axios.defaults.headers.common["x-auth-token"];
    },
    ClaimArtistProfile({ commit }, payload) {
      console.log("wslllllll", payload);
      axios
        .put("/api/me/ToArtist", payload)
        .then(response => {
          const claim = response.data;
          console.log("wsl", claim);
          commit("ClaimArtistProfile", claim);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    Username: state => state.User.displayName,
    GetStatus: state => state.status,
    upgraded: state => state.upgraded
  }
};
