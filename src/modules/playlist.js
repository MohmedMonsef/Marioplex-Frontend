import axios from "axios";
export default {
  namespaced: true,
  state: {
    playlist_tracks: [],
    playlist_loaded: false
  },
  mutations: {
    set_playlist(state, playlist_tracks) {
      state.playlist_tracks = playlist_tracks;
    },
    set_playlist_loaded(state, status) {
      state.playlist_loaded = status;
    }
  },
  actions: {
    playlist_tracks({ commit }, playlist_id) {
      commit("set_playlist_loaded", false);
      axios
        .get("/playlists/" + playlist_id + "/tracks")
        .then(response => {
          let playlist = response.data;
          console.log(playlist[0].tracks);
          commit("set_playlist", playlist[0].tracks);
          commit("set_playlist_loaded", true);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    playlist_tracks: state => state.playlist_tracks,
    playlist_loaded: state => state.playlist_loaded
  }
};
