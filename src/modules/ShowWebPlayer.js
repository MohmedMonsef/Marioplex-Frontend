import axios from "axios";

export default ({
  namespaced:true,
  state: {
    popular_playlists:[]
  },
  mutations: {
    setPopularPlaylists(state, POPplaylists) {
      state.popular_playlists = POPplaylists;
    }
  },
  actions: {
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
    POPplaylists: state => state.popular_playlists
  }
});



