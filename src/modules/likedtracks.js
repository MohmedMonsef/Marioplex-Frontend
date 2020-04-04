import axios from "axios";
export default {
  namespaced: true,
  state: {
    likedtracks_tracks: [],
    likedtracks_loaded: false,
    likedtracks_length: "",
    owner_name: "",
  },
  mutations: {
    set_likedtracks(state, likedtracks_tracks) {
    state.likedtracks_tracks = likedtracks_tracks;
    },
    set_likedtracks_loaded(state , status){
        state.likedtracks_loaded = status;
    },
    set_likedtracks_length(state , length){
        state.likedtracks_length = length;
    },
    set_owner_name(state , name){
      state.owner_name = name;
  }
  },
  actions: {
    likedtracks_tracks({ commit }) {
        commit("set_likedtracks_loaded" , false);
        axios
          .get("/me/tracks")
          .then(response => {
            let likedtracks = response.data;
            commit("set_likedtracks", likedtracks[0].tracks);
            commit("set_likedtracks_loaded" , true);
            commit("set_likedtracks_length", likedtracks[0].tracks.length);
            commit ("set_owner_name" , likedtracks[0].ownerName)
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
  }
};