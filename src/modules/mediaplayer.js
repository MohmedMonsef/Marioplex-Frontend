import axios from "axios";
export default {
  namespaced: true,
  state: {
    currentsong: [{
      track: {
        name: "You are my sunshine",
        __v: 0,
        albumId: "5e7d93dad82adf07f4121bb0",
        artistId: "5e7d93dad82adf07f4121bb2",
        artists: ["civil wars", "john", "jasmine"],
        length: "3:33",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        _id: "5e7d93dad82adf07f4121bb6"
      },
      albumName: "Barton Hallow",
      isLiked: true,
      isPlayable: true
    }],
    //component info
    currentsong_info: {
      index: 1,
      song_id: "5e7d93dad82adf07f4121bb6",
      album_id: "5e7d93dad82adf07f4121bb0",
      playlist_id: "0",
      is_playlist: false
    },
    //flag weather the song is playing or not
    playicon: false,
    currentaudio: null,
    volumeprogress: 0,
    progress: 0,
    trackduration: 0
  },
  mutations: {
    setplayicon(state, playicon) {
      state.playicon = playicon;
    },
    setliked(state, like) {
      state.currentsong[0].isLiked = like;
    },
    setalbumimage(state, albumimage) {
      state.songs.album_image = albumimage;
    },
    setsongname(state, songname) {
      state.songs.song_name = songname;
    },
    setartistsname(state, artistsname) {
      state.songs.artist_name = artistsname;
    },
    setpausesong(state) {
      state.playicon = false;
      if (state.currentaudio) state.currentaudio.pause();
    },
    set_currentsong(state, currentsong) {
      state.currentsong = currentsong;
    },
    startcurrentaudio(state, info) {
      state.playicon = true;
      if (
        state.currentaudio &&
        info.song_id == state.currentsong_info.song_id &&
        info.album_id == state.currentsong_info.album_id &&
        info.index == state.currentsong_info.index &&
        info.playlist_id == state.currentsong_info.playlist_id
      ) {
        state.currentaudio.play();
        state.currentaudio.volume = state.volumeprogress;
      } else {
        if (state.currentaudio) {
          state.currentaudio.pause();
          state.currentaudio = null;
        }
        state.currentaudio = new Audio(state.currentsong[0].track.url);
        state.currentaudio.play();
        state.currentaudio.volume = state.volumeprogress;
        state.currentsong_info = info;
      }
    }
  },
  actions: {
    playicon_state({ commit }, status) {
      commit("setplayicon", status);
    },
    //get the current song from backend
    get_currentsong({ commit }) {
      axios
        .get("/api/currentsong")
        .then(response => {
          var currentsong = response.data.currentsong;
          console.log("in get currentsong", currentsong);
          commit("set_currentsong", currentsong);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //start playing the current audio
    playsong_state({ commit }, info) {
      console.log("in plaay state", info);
      commit("startcurrentaudio", info);
    },
    pausesong_state({ commit }) {
      commit("setpausesong");
    },
    nextsong_state({ state, commit, dispatch }) {
      axios
        .get("/player/next")
        .then(response => {
          var nextsong = response.data.nextsong;
          console.log("in get currentsong", nextsong);
          commit("set_currentsong", nextsong);
          let info = {
            index: state.currentsong_info.index + 1, //should handle if its the first track on playlist or album return to zero
            song_id: nextsong[0]._id,
            album_id: nextsong[0].track.albumId,
            playlist_id: state.currentsong_info.playlist_id,
            is_playlist: state.currentsong_info.is_playlist
          };
          dispatch("playsong_state", info);
        })
        .catch(error => {
          console.log(error);
        });
    },
    prevsong_state({ state, commit, dispatch }) {
      console.log("in prev action", state.progress);

      if (state.progress <= 5) {
        axios
          .get("/player/previous")
          .then(response => {
            var prevsong = response.data.prevsong;
            console.log("in get currentsong", prevsong);
            commit("set_currentsong", prevsong);
            let info = {
              index:
                state.currentsong_info.index == 0
                  ? 0
                  : state.currentsong_info.index - 1, //
              song_id: prevsong[0]._id,
              album_id: prevsong[0].track.albumId,
              playlist_id: state.currentsong_info.playlist_id,
              is_playlist: state.currentsong_info.is_playlist
            };
            dispatch("playsong_state", info);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        dispatch("update_progress", 0);
      }
    },
    repeatsong_state({state},flag) {
      if(flag==1)
         state.currentaudio.loop=true;
      else if(flag==0){
        state.currentaudio.loop=false;
      axios
        .get("/api/player/repeat",null,{state:false})
        .then(response => {       
          console.log(response );
        })
        .catch(error => {
          console.log(error);
        });
      }
      else{
        state.currentaudio.loop=false;
        axios
        .get("/api/player/repeat",null,{state:true})
        .then(response => {       
          console.log(response );
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    shufflesong_state({dispatch },flag) {
      axios
        .put("/api/player/shuffle",null,{state:flag})
        .then(() => {
          dispatch("Queue/Queue",null,{root: true});
        })
        .catch(error => {
          console.log(error);
        });
    },
    ////////////here i should send end point of like with id
    Like({ state, commit }, track_id) { 
      if (track_id == "") track_id = state.currentsong[0].track._id;
      console.log("in likke",track_id);
      axios
        .put("/me/like/" + track_id)
        .then(() => {
          commit("setliked", true);
        })
        .catch(error => {
          console.log(error);
        });
    },
    UnLike({ state, commit }, track_id) {
      if (track_id == "") track_id = state.currentsong[0].track._id;
      console.log("in unn likke",track_id);
      axios
        .put("/me/like/" + track_id)
        .then(() => {
          commit("setliked", false);
        })
        .catch(error => {
          console.log(error);
        });
    },
    advance_progress({ state, dispatch }) {
      if (state.currentaudio) {
        if (!state.currentaudio.ispaused) {
          state.trackduration = state.currentaudio.duration;
          state.progress = state.currentaudio.currentTime;
          if (state.progress == state.trackduration) {
            dispatch("nextsong_state");
          }
        }
      }
    },
    update_progress({ state }, pos) {
      if (state.currentaudio) {
        state.currentaudio.currentTime = pos;
        state.progress = pos;
      }
    },
    update_volume({ state }, pos) {
      if (state.currentaudio) {
        state.currentaudio.volume = pos;
        state.volumeprogress = pos;
      }
    }
  },
  getters: {
    Get_Currentsong: state => {
      return state.currentsong[0];
    },
    playicon: state => {
      return state.playicon;
    },
    liked: state => {
      return state.currentsong[0].isLiked;
    },
    currentaudio: state => {
      return state.currentaudio;
    },
    progress: state => {
      return state.progress;
    },
    duration: state => {
      return state.trackduration;
    },
    volume: state => {
      return state.volumeprogress;
    },
    currentsong_info: state => {
      return state.currentsong_info;
    }
  }
};
