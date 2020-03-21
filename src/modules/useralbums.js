import axios from "axios";

export default {
  namespaced: true,
  state: {
    user_albums: []
  },
  mutations: {
    setUserAlbums(state, albums) {
      state.user_albums = albums;
    }
  },
  actions: {
    showUserAlbums({ commit }) {
      axios
        .get("/api/useralbums")
        .then(response => {
          let albums = response.data;
          commit("setUserAlbums", albums);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    albums: state => state.user_albums
  }
};
