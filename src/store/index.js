import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    User: []
    //short cicuit evaluation if the first argument return anything but null it will be stored if not token=''
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;   
      state.User= user;
      console.log("this is the user state");
     console.log(state.user);
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
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
          localStorage.setItem("token", token);
          console.log(response);
          const user = response.data.user;
          axios.defaults.headers.common["Authorization"] = token;
          commit("auth_success", token, user);
        })
        .catch(error => {
          commit("auth_error", error);
          localStorage.removeItem("token");
          console.log("axios cought it");
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
          const user = response.data.user;
          console.log("in Response vuex");
          console.log(JSON.stringify(user));
          commit("auth_success",token, user);
          console.log("STATUS",user);
          localStorage.setItem("token", token);
          console.log(token);

          axios.defaults.headers.common["Authorization"] = token;
        })
        .catch(error => {
          commit("auth_error", error);
          localStorage.removeItem("token");
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
          localStorage.removeItem("token");
        });
      console.log(Request.headers);
    },
    logout({ commit }) {
      commit("auth_request");
      axios
        .post("/api/logout",()=> {
         
        })
        .then(() => { 
          commit("logout");
          localStorage.removeItem("token");
          delete axios.defaults.headers.common["Authorization"];
        })
        .catch(error => {
          commit("auth_error", error);
          console.log(error);
          localStorage.removeItem("token");
        });
    }
  },
  getters: {
    CurrentUser: state => state.User,
    GetStatus: state => state.status
  },
  modules: {}
});
