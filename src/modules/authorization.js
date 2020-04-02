import axios from "axios";
import store from "../store";

export default {
  namespaced: true,
  state: {
    status: "",
    token: localStorage.getItem("x-auth-token") || "",
    User: {}
    //short cicuit evaluation if the first argument return anything but null it will be stored if not token=''
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, { token, user }) {
      state.status = "success";
      state.token = token;
      state.User = user;
      console.log("this is the user state");
      console.log(state.User);
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.User={};
    },
    ClaimArtistProfile(state,payload){
        state.User.update({
          Name:payload.Name,
        Genre:payload.Genre,
        Description:payload.Description
      });
      //state.User +=payload
      console.log('nori',payload.Name)
      
  }
  },
  actions: {
    signUp({ commit }, user) {
      commit("auth_request");
      axios
        .post("/api/signup", {
          data: user
        })
        .then(response => {
          const token = response.headers.token;
          localStorage.setItem("x-auth-token", token);
          store.dispatch("authorization/get_user");
        })
        .catch(error => {
          commit("auth_error", error);
          localStorage.removeItem("x-auth-token");
          console.log("axios cought it");
          console.log(error);
        });
    },
    facebook_signUp({ commit }) {
      commit("auth_request");
      axios
        .post("/auth/facebook")
        .then(response => {
          const token = response.headers.token;
          localStorage.setItem("x-auth-token", token);
          store.dispatch("authorization/get_user");
        })
        .catch(error => {
          commit("auth_error", error);
          localStorage.removeItem("token");
          console.log(error);
        });
    },
    get_user({ commit }) {
      commit("auth_request");
      axios
        .get("/api/getuser")
        .then(response => {
          const token = localStorage.getItem("x-auth-token");
          const user = response.data.user;
          axios.defaults.headers.common["x-auth-token"] = token;
          commit("auth_success", { token, user });
        })
        .catch(error => {
          commit("auth_error", error);
          localStorage.removeItem("x-auth-token");
          console.log(error);
        });
    },
    login({ commit }, user) {
      commit("auth_request");
      axios
        .post("/api/login", {
          data: user
        })
        .then(response => {
          const token = response.headers.token;
          localStorage.setItem("x-auth-token", token);
          store.dispatch("authorization/get_user");
        })
        .catch(error => {
          commit("auth_error", error);
          localStorage.removeItem("x-auth-token");
          console.log(error);
        });
    },

    reset({ commit }, user) {
      axios
        .post("/api/reset", {
          data: user
        })
        .then(() => {
          commit("logout");
        })
        .catch(error => {
          commit("auth_error", error);
          console.log(error);
          localStorage.removeItem("x-auth-token");
        });
      console.log(Request.headers);
    },
    logout({ commit }) {
      commit("auth_request");
      axios
        .post("/api/logout", () => {})
        .then(() => {
          commit("logout");
          localStorage.removeItem("x-auth-token");
          delete axios.defaults.headers.common["x-auth-token"];
        })
        .catch(error => {
          commit("auth_error", error);
          console.log(error);
          localStorage.removeItem("x-auth-token");
        });
    },
    ClaimArtistProfile({commit},payload){
      console.log("wslllllll", payload);
      axios.put("/api/claimartist",{data:payload})
      .then(response=>{
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
    Username: state => state.User.username,
    GetStatus: state => state.status
  }
};
