import axios from "axios";
export default {
  namespaced: true,
  state: {
    playlist_tracks: [],
    playlist_loaded: -1,
    playlist_length: "",
    playlist_name: "",
    owner_name: "",
    playlist_image: "",
    likedplaylist: Boolean
  },
  mutations: {
    set_playlist(state, playlist_tracks) {
      state.playlist_tracks = playlist_tracks;
    },
    set_playlist_loaded(state, status) {
      state.playlist_loaded = status;
    },
    ReorderTracks(state, track) {
      state.playlist_tracks.push({
        track
      });
    },
    AddTrack(state, tracks) {
      state.playlist_tracks.push({
        tracks
      });
    },
    set_playlist_length(state, length) {
      state.playlist_length = length;
    },
    set_playlist_name(state, name) {
      state.playlist_name = name;
    },
    set_owner_name(state, name) {
      state.owner_name = name;
    },
    set_playlist_image(state, image) {
      state.playlist_image = image;
    },
    set_likedplaylist(state, like) {
      state.likedplaylist = like;
    }
  },
  actions: {
    playlist_tracks({ commit }, playlist_id) {
      // commit("set_playlist_loaded", false);
      axios
        .get("/api/playlists/" + playlist_id)
        .then(response => {
          let playlist = response.data;
          commit("set_playlist", playlist[0].tracks);
          commit("set_playlist_length", playlist[0].tracks.length);
          commit("set_playlist_name", playlist[0].name);
          commit("set_owner_name", playlist[1].ownerName);
          commit("set_playlist_image", playlist[0].images[0]);
          commit("set_likedplaylist", playlist[0].isfollowed);
          commit("set_playlist_loaded", true);
        })
        .catch(error => {
          console.log(error);
        });
    },
    ReorderTracks({ commit }, payload) {
      axios
        .put("/api/playlists/" + payload.playlist_id + "/tracks", { data: payload })
        .then(response => {
          if (status == 200) {
            let track = response.data;
            console.log("theresponse from mirage is", response.data);
            commit("ReorderTracks", track);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    async AddTrack({ commit }, payload) {
      console.log(
        "to add track in playlist.js the playlistid is",
        payload.playlistoftrack
      );
      const data = axios
        .post("/api/playlists/" + payload.playlistoftrack + "/tracks")
        .then(response => {
          let tracks = response.data;
          commit("AddTracks", tracks);
        })
        .catch(error => {
          console.log(error);
        });
      return data;
    },
    // AddToPlaylist({commit},song_id){
    //   axios
    //   .post("api/")
    //   .then(response=>{
    //     let song=response.data;
    //     commit("AddToPlaylist",song.)
    //   })
    // }

    like_playlist({ commit }, playlist_id) {
      axios
        .put("/api/playlists/" + playlist_id + "/followers")
        .then(response => {
          let playlist = response.status;
          if (playlist == 200) {
            commit("set_likedplaylist", true);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    unlike_playist({ commit }, playlist_id) {
      axios
        .delete("/api/playlists/" + playlist_id + "/followers")
        .then(response => {
          let playlist = response.status;
          if (playlist == 200) {
            commit("set_likedplaylist", false);
          }
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
    playlist_image: state => state.playlist_image,
    likeplaylist: state => state.likedplaylist
  }
};
