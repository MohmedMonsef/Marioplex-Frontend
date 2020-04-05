import axios from "axios";
export default {
  namespaced: true,
  state: {
    album_tracks: [],
    album_loaded: false,
    album_length: "",
    album_name:"",
    artist_name: "",
    album_image:"",
    likedalbum:false
  },
  mutations: {
    set_album(state, album_tracks) {
    state.album_tracks = album_tracks;
    },
    set_album_loaded(state , status){
        state.album_loaded = status;
    },
    set_album_length(state , length){
        state.album_length = length;
    },
    set_album_name(state , name){
        state.album_name = name;
    },
    set_artist_name(state , name){
      state.artist_name = name;
  },
  set_album_image(state , image){
    state.album_image = image;
},
set_likedalbum(state , like){
  state.likedalbum = like;
},
  },
  actions: {
    album_tracks({ commit } , album_id) {
        commit("set_album_loaded" , false);
        axios
          .get("/albums/" + album_id)
          .then(response => {
            let album = response.data;
            console.log("nihal id" , album_id)
            commit("set_album", album.tracks);
            commit("set_album_loaded" , true);
            commit("set_album_length", response.data.tracks.length);
            commit ("set_album_name" , album.name)
            commit ("set_artist_name" , album.artist)
            commit ("set_album_image" , album.images[0])
          })
          .catch(error => {
            console.log(error);
          });
        } ,

        like_album({ commit } , album_id) {
          commit("set_album_loaded" , false);
          axios
            .put("/me/" + album_id)
            .then(response => {
              let album = response.data;
              commit ("set_likedalbum" , album.like = true)
            })
            .catch(error => {
              console.log(error);
            });
          },
          unlike_album({ commit } , album_id){
            commit("set_album_loaded" , false);
            axios
              .delete("/me/" + album_id)
              .then(response => {
                let album = response.data;
                commit ("set_likedalbum" , album.like = false)
              })
              .catch(error => {
                console.log(error);
              });
          } 
        
  },
  getters: {
    album_tracks: state => state.album_tracks,
    album_loaded: state => state.album_loaded,
    album_length: state => state.album_length,
    album_name: state => state.album_name,
    artist_name: state => state.artist_name,
    album_image:state => state.album_image,
    likealbum:state => state.likedalbum
  }
};