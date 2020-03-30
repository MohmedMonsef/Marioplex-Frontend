import axios from "axios";

export default {
  namespaced: true,
  state: {
    user_albums: [],
    user_artists:[],
    user_songs:[]
  },
  mutations: {
    setUserAlbums(state, albums) {
      state.user_albums = albums;
    },
    setUserArtists(state, artists) {
      state.user_artists = artists;
    },
    setUserSongs(state, songs) {
      state.user_songs = songs;
    },
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
        .get("/api/me/following")
        .then(response => {
          let artists = response.data;
          commit("setUserArtists", artists);
        })
        .catch(error => {
          console.log(error);
        });
    },
    showUserSongs({ commit }) {
      axios
        .get("/api/me/tracks")
        .then(response => {
          let songs = response.data;
          commit("setUserSongs", songs);
        })
        .catch(error => {
          console.log(error);
        });
    },
    
  },
  getters: {
    albums: state => state.user_albums,
    artists: state => state.user_artists,
    songs: state => state.user_songs
  }
};
