import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    user_play_lists :[],
    popular_playlists:[]
  },
  mutations: {
    setUserPlaylist(state, playlists) {
      state.user_play_lists = playlists;
    },

    setPopularPlaylists(state, POPplaylists) {
      state.popular_playlists = POPplaylists;
    }
  },
  actions: {
    showplaylists({ commit }) {
      axios
        .get("/api/users")
        .then(response => {
          let playlists = response.data;
          commit("setUserPlaylist", playlists);
        })
        .catch(error => {
          console.log(error);
        });
      },

      showPopularPlaylists({ commit }) {
        axios
          .get("/api/user")
          .then(response => {
            let POPplaylists = response.data;
            commit("setPopularPlaylists", POPplaylists);
          })
          .catch(error => {
            console.log(error);
          });
        },

  },
  getters:{
    playlists: state => state.user_play_lists,

    POPplaylists: state => state.popular_playlists
  },
  modules: {}
});

