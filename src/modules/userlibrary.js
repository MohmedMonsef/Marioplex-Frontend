import axios from "axios";

export default {
  namespaced: true,
  state: {
    user_albums: [],
    user_artists: [],
    user_songs: [],
    loadingalbums: 0,
    loadingartists: 0
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
    set_loading_albums(state, status) {
      state.loadingalbums = status;
    },
    set_loading_artists(state, status) {
      state.loadingartists = status;
    }
  },
  actions: {
    showUserAlbums({ commit, state }) {
      axios
        .get("/api/me/albums")
        .then(response => {
          let albums = response.data;
          console.log(albums);
          commit("setUserAlbums", albums);
          if (state.loadingalbums == 0) {
            state.loadingalbums = 1;
          }
        })
        .catch(error => {
          console.log(error);
          let albums = [];
          commit("setUserAlbums", albums);
          if (state.loadingalbums == 0) {
            state.loadingalbums = 1;
          }
        });
    },
    showUserArtists({ commit, state }) {
      axios
        .get("/api/me/followingArtist")
        .then(response => {
          let artists = response.data.Artists;
          if (response.status != 200) {
            artists = [];
          }
          commit("setUserArtists", artists);
          if (state.loadingartists == 0) {
            state.loadingartists = 1;
          }
        })
        .catch(error => {
          let artists = [];
          commit("setUserArtists", artists);
          if (state.loadingartists == 0) {
            state.loadingartists = 1;
          }
          console.log(error);
        });
    },
    showUserSongs({ commit }) {
      axios
        .get("/api/me/tracks")
        .then(response => {
          let songs = response.data;
          commit("setUserSongs", songs.tracks);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    albums: state => state.user_albums,
    artists: state => state.user_artists,
    songs: state => state.user_songs,
    loadingalbums: state => state.loadingalbums,
    loadingartists: state => state.loadingartists
  }
};
