import axios from "axios";
export default {
  namespaced: true,
  state: {
    playlist_tracks: [],
    playlist_loaded: false,
  },
  mutations: {
    set_playlist(state, playlist_tracks) {
    state.playlist_tracks = playlist_tracks;
    },
    set_playlist_loaded(state , status){
        state.playlist_loaded = status;
    },
    ReorderTracks(state,track){
      state.playlist_tracks.push({
         track
      })
    },
    AddTrack(state,tracks){
      state.playlist_tracks.push({
        tracks
      })
    }
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
          })
          .catch(error => {
            console.log(error);
          });
        },
        ReorderTracks({commit},payload){
          axios
          .put("api/playlists/tracks",{data:payload})
          .then(response=>{
            let track=response.data;
            console.log("theresponse from mirage is",response)
            commit("ReorderTracks",track)
          })
          .catch(error=>{
            console.log(error)
          })
          
        },
        async AddTrack({commit},payload){
          console.log("to add track in playlist.js the playlistid is",payload.playlistoftrack)
          const data =axios
          .post("playlists/"+payload.playlistoftrack+"/tracks")
          .then(response=>{
            let tracks=response.data;
            commit ("AddTracks",tracks)
          })
          .catch(error=>{
            console.log(error);
          })
          return data;

        }
        // AddToPlaylist({commit},song_id){
        //   axios
        //   .post("api/")
        //   .then(response=>{
        //     let song=response.data;
        //     commit("AddToPlaylist",song.)
        //   })
        // }
      
  },
  getters: {
    playlist_tracks: state => state.playlist_tracks,
    playlist_loaded: state => state.playlist_loaded
  }
};
