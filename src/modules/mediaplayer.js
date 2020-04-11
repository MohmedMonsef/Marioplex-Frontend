import axios from "axios";
export default {
  namespaced: true,
  state: {
    currentsong: {
      track: {
        availableMarkets: ["EG,US"],
        _id: "5e80ceb853e67b1e284a0f15",
        trackNumber: 1,
        name: "HAVANA",
        artistId: "5e80c9b614c8566d6cd9b40e",
        albumId: "5e80cc2b14c8566d6cd9b40f",
        discNumber: 1,
        explicit: false,
        type: "Track",
        acousticness: 10,
        danceability: 23,
        energy: 100,
        instrumentalness: 4,
        key: 90,
        liveness: 25,
        loudness: 70,
        mode: 56,
        speechiness: 67,
        tempo: 76,
        timeSignature: "2020-03-29T16:37:12.554Z",
        valence: 70,
        __v: 0,
        images: []
      },
      isLiked: false,
      album: {
        name: "HELLO KIDS",
        _id: "5e80cc2b14c8566d6cd9b40f",
        artist: { name: "nada", _id: "5e80c9b614c8566d6cd9b40e" }
      },
      isPlaylist: true,
      playlistId: "5e891c8edb96e26db4efc790",
      isPlayable: true
    },
    //component info
    currentsong_info: {
      track: {
        availableMarkets: ["EG,US"],
        _id: "5e80ceb853e67b1e284a0f15",
        trackNumber: 1,
        name: "HAVANA",
        artistId: "5e80c9b614c8566d6cd9b40e",
        albumId: "5e80cc2b14c8566d6cd9b40f",
        discNumber: 1,
        explicit: false,
        type: "Track",
        acousticness: 10,
        danceability: 23,
        energy: 100,
        instrumentalness: 4,
        key: 90,
        liveness: 25,
        loudness: 70,
        mode: 56,
        speechiness: 67,
        tempo: 76,
        timeSignature: "2020-03-29T16:37:12.554Z",
        valence: 70,
        __v: 0,
        images: []
      },
      isLiked: false,
      album: {
        name: "HELLO KIDS",
        _id: "5e80cc2b14c8566d6cd9b40f",
        artist: { name: "nada", _id: "5e80c9b614c8566d6cd9b40e" }
      },
      isPlaylist: true,
      playlistId: "5e891c8edb96e26db4efc790",
      isPlayable: true
    },
    //flag weather the song is playing or not
    playicon: false,
    currentaudio: null,
    volumeprogress: 0,
    progress: 0,
    trackduration: 0
    // toAdd: 0
  },
  mutations: {
    setplayicon(state, playicon) {
      state.playicon = playicon;
    },
    setliked(state, like) {
      state.currentsong.isLiked = like;
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
        info.song_id == state.currentsong.track._id &&
        info.album_id == state.currentsong.album._id &&
        info.playlist_id == state.currentsong.playlistId
      ) {
        state.currentaudio.play();
        state.currentaudio.volume = state.volumeprogress;
      } else {
        if (state.currentaudio) {
          state.currentaudio.pause();
          state.currentaudio = null;
        }
        if (typeof state.currentsong.track.url == "undefined")
          state.currentaudio = new Audio(
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
          );
        else state.currentaudio = new Audio(state.currentsong.track.url);
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
        .get("/api/me/player/currently-playing")
        .then(response => {
          var currentsong = response.data;

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
        .post("/api/me/player/next-playing")
        .then(response => {
          var nextsong = response.data;
          console.log("in get currentsong", nextsong);
          commit("set_currentsong", nextsong);
          let info = {
            //should handle if its the first track on playlist or album return to zero
            song_id: nextsong.track._id,
            album_id: nextsong.album._id,
            playlist_id: state.playlist_id,
            is_playlist: state.currentsong.isPlaylist
          };
          dispatch("playsong_state", info);
          dispatch("Queue/Queue", null, { root: true });
        })
        .catch(error => {
          console.log(error);
        });
    },
    prevsong_state({ state, commit, dispatch }) {
      console.log("in prev action", state.progress);

      if (state.progress <= 5) {
        axios
          .post("/api/me/player/prev-playing")
          .then(response => {
            var prevsong = response.data;
            console.log("in get currentsong", prevsong);
            commit("set_currentsong", prevsong);
            let info = {
              index:
                state.currentsong_info.index == 0
                  ? 0
                  : state.currentsong_info.index - 1, //
              song_id: prevsong.track._id,
              album_id: prevsong.album._id,
              playlist_id: prevsong.playlistId,
              is_playlist: prevsong.isPlaylist
            };
            dispatch("playsong_state", info);
            dispatch("Queue/Queue", null, { root: true });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        dispatch("update_progress", 0);
      }
    },
    repeatsong_state({ state, dispatch }, flag) {
      console.log("kkk", flag);
      if (flag == 1 && state.currentaudio) state.currentaudio.loop = true;
      else if (flag == 0 && state.currentaudio) {
        state.currentaudio.loop = false;
        axios
          .put("/api/player/repeat?state=" + false)
          .then(() => {
            dispatch("Queue/Queue", null, { root: true });
          })
          .catch(error => {
            console.log(error);
          });
      } else if (flag == 2 && state.currentaudio) {
        state.currentaudio.loop = false;
        axios
          .put("/api/player/repeat?state=" + true)
          .then(() => {
            dispatch("Queue/Queue", null, { root: true });
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    shufflesong_state({ dispatch }, flag) {
      axios
        .put("/api/me/player/shuffle?state=" + flag)
        .then(() => {
          dispatch("Queue/Queue", null, { root: true });
        })
        .catch(error => {
          console.log(error);
        });
    },
    ////////////here i should send end point of like with id
    Like({ state, commit, dispatch }, track_id) {
      var songbar = false;
      if (track_id == "") {
        track_id = state.currentsong.track._id;
        songbar = true;
      }
      console.log("in likke", track_id);
      axios
        .put("/api/me/like/" + track_id)
        .then(() => {
          if (songbar || track_id == state.currentsong.track._id)
            commit("setliked", true);
          dispatch("get_currentsong");
        })
        .catch(error => {
          console.log(error);
        });
    },
    UnLike({ state, commit, dispatch }, track_id) {
      var songbar = false;
      if (track_id == "") {
        track_id = state.currentsong.track._id;
        songbar = true;
      }
      axios
        .delete("/api/me/unlike/" + track_id)
        .then(() => {
          if (songbar || track_id == state.currentsong.track._id)
            commit("setliked", false);
          dispatch("get_currentsong");
          dispatch("likedtracks/likedtracks_tracks", null, { root: true });
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
      return state.currentsong;
    },
    playicon: state => {
      return state.playicon;
    },
    liked: state => {
      return state.currentsong.isLiked;
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
    // toadd: state => {
    //   return state.toadd;
    // },

    currentsong_info: state => {
      return state.currentsong_info;
    }
  }
};
