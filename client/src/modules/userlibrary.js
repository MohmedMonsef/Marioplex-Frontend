import axios from "axios";

export default {
  namespaced: true,
  state: {
    user_albums: [],
    user_artists:[],
    user_songs:[],
    loadingalbums:false,
    loadingartists:false,
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
    showUserAlbums({ commit }) {
      commit("set_loading_albums", false);
      axios
        .get("/me/albums")
        .then(response => {
          let albums = response.data;
          console.log(albums)
          commit("setUserAlbums", albums);
          commit("set_loading_albums", true);
        })
        .catch(error => {
          console.log(error);
       
            let albums=[];
            commit("setUserAlbums", albums);
            commit("set_loading_albums", true);
 
        });
    },
    showUserArtists({ commit }) {
      commit("set_loading_artists", false);
      axios
        .get("/me/followingArtist")
        .then(response => {
          let artists = response.data;
          if(response.status != 200){
            console.log("jjjjjjj",artists)
            artists=[];
          }
          console.log("meeeeeeeeee",artists)
          commit("setUserArtists", artists);
          commit("set_loading_artists", true);
        })
        .catch(error => {
          let artists = [];
          commit("setUserArtists", artists);
          commit("set_loading_artists", true);
          console.log(error);
        });
    },
    showUserSongs({ commit }) {
      axios
        .get("/me/tracks")
        .then(response => {
          let songs = response.data.tracks;
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
    songs: state => state.user_songs,
    loadingalbums: state => state.loadingalbums,
    loadingartists: state => state.loadingartists
  }
};