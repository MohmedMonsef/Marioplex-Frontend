import axios from "axios";

export default {
  namespaced: true,
  state: {
    user_albums: [],
    user_artists:[]
  },
  mutations: {
    setUserAlbums(state, albums) {
      state.user_albums = albums;
    },
    setUserArtists(state, artists) {
      state.user_artists = artists;
    }
  },
  actions: {
    showUserAlbums({ commit }) {
      axios
        .get("/api/me/albums")
        .then(response => {
          let albums = response.data;
          commit("setUserAlbums", albums);
        })
        .catch(error => {
          console.log(error);
        });
    },
    showUserArtists({ commit }) {
      axios
        .get("/api/me/following?type=artist")
        .then(response => {
          let artists = response.data;
          commit("setUserArtists", artists);
        })
        .catch(error => {
          console.log(error);
        });
    },
    
  },
  getters: {
    albums: state => state.user_albums,
    artists: state => state.user_artists,
  }
};
