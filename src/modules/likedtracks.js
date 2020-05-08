import axios from "axios";
export default {
  namespaced: true,
  state: {
    likedtracks_tracks: [],
    likedtracks_loaded: 0,
    likedtracks_length: "",
    owner_name: "",
    id:""
  },
  mutations: {
    set_likedtracks(state, likedtracks_tracks) {
      state.likedtracks_tracks = [];
      state.likedtracks_tracks = likedtracks_tracks;
    },
    set_likedtracks_loaded(state, status) {
      state.likedtracks_loaded = status;
    },
    set_likedtracks_length(state, length) {
      state.likedtracks_length = length;
    },
    set_owner_name(state, name) {
      state.owner_name = name;
    },
    playlist_id(state,id){
      state.id=id;
    }
  },
  actions: {
    likedtracks_tracks({ state, commit }) {
      axios
        .get("/api/me/tracks")
        .then(response => {
          let likedtracks = response.data;
          commit("set_likedtracks", likedtracks.tracks);
          commit("set_likedtracks_loaded", true);
          commit("set_likedtracks_length", likedtracks.tracks.length);
          commit("set_owner_name", likedtracks.ownerName);
          commit("playlist_id",likedtracks.playlistId)
          if (state.likedtracks_loaded == 0) {
            state.likedtracks_loaded = 1;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    likedtracks_tracks: state => state.likedtracks_tracks,
    likedtracks_loaded: state => state.likedtracks_loaded,
    likedtracks_length: state => state.likedtracks_length,
    owner_name: state => state.owner_name,
    playlist_id:state=>state.id
  }
};
