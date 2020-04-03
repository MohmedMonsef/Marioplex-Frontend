import axios from "axios";
export default {
  namespaced: true,
  state: {
    playlist_tracks: [],
    playlist_loaded: false,
    playlist_length: "",
    playlist_name:"",
    owner_name: "",
    playlist_image:""
  },
  mutations: {
    set_playlist(state, playlist_tracks) {
    state.playlist_tracks = playlist_tracks;
    },
    set_playlist_loaded(state , status){
        state.playlist_loaded = status;
    },
    set_playlist_length(state , length){
        state.playlist_length = length;
    },
    set_playlist_name(state , name){
        state.playlist_name = name;
    },
    set_owner_name(state , name){
      state.owner_name = name;
  },
  set_playlist_image(state , image){
    state.playlist_image = image;
},
  },
  actions: {
    playlist_tracks({ commit } , playlist_id) {
        commit("set_playlist_loaded" , false);
        axios
          .get("/playlists/" + playlist_id)
          .then(response => {
            let playlist = response.data;
            commit("set_playlist", playlist.tracks);
            commit("set_playlist_loaded" , true);
            commit("set_playlist_length", response.data.tracks.length);
            commit ("set_playlist_name" , playlist.name)
            commit ("set_owner_name" , playlist.ownerName)
            commit ("set_playlist_image" , playlist.images[0])
          })
          .catch(error => {
            console.log(error);
          });
        }  
  },
  getters: {
    playlist_tracks: state => state.playlist_tracks,
    playlist_loaded: state => state.playlist_loaded,
    playlist_length: state => state.playlist_length,
    playlist_name: state => state.playlist_name,
    owner_name: state => state.owner_name,
    playlist_image:state => state.playlist_image,
  }
};
