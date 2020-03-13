import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: []
    //short cicuit evaluation if the first argument return anything but null it will be stored if not token=''
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    signUp({ commit },user) {
      commit('auth_request')
      axios
        .post("/api/signup",
         {
            data: user
         }
         )
        .then(response => {
          if(response.status == 200){
          const token = response.headers.token;
          localStorage.setItem('token', token);
          console.log(response);
          const user = response.data.user;
          axios.defaults.headers.common['Authorization'] = token;
          commit("auth_success", token, user);}
        })
        .catch(error => {
          commit('auth_error', error);
          localStorage.removeItem('token');
          console.log("axios cought it");
          console.log(error);
        });
    },
    login({ commit },user) {
      commit('auth_request')
      axios
        .post("/api/login",
         {
            data: user
         }
         )
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          console.log(token);
          const user = response.data.user;
          axios.defaults.headers.common['Authorization'] = token;
          commit("auth_success", token, user);
        })
        .catch(error => {
          commit('auth_error', error);
          localStorage.removeItem('token');
          console.log(error);
        });
    }
  },
    getters: {
     UserName: state => state.user.username,
     GetStatus:state =>state.status
    },
    modules: {}
});
