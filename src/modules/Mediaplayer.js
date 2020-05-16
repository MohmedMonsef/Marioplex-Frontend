import axios from "axios";
import store from "../store";
import {
  setupPlayer,
  currentaudio_pause,
  currentaudio_play,
  currentaudio_volume,
  get_currentaudio,
  currentaudio_time,
  currentaudio_src,
  currentaudio_repeat
} from "../javascript/play.js";
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
    currentSongIndex: 0,
    //flag weather the song is playing or not
    playicon: false,
    volumeprogress: 0,
    progress: 0,
    trackduration: 0,
    premiumPopup: false,
    premiumAd: 1
  },
  mutations: {
    setPopup(state, value) {
      state.premiumPopup = value;
    },
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
      if (currentaudio_src) {
        currentaudio_pause();
      }
    },
    set_currentsong(state, currentsong) {
      state.currentsong = currentsong;
    },
    startcurrentaudio(state, info) {
      state.currentSongIndex = info.index;
      if (
        state.playicon &&
        info.song_id == state.currentsong.track._id &&
        (info.album_id == state.currentsong.album._id ||
          info.playlist_id == state.currentsong.playlistId)
      ) {
        currentaudio_play();
        currentaudio_volume(state.volumeprogress);
      } else {
        currentaudio_play();
        currentaudio_volume(state.volumeprogress);
        state.currentSongIndex = info.index;
      }
      state.playicon = true;
    }
  },
  actions: {
    playicon_state({ commit }, status) {
      commit("setplayicon", status);
    },
    //get the current song from backend
    get_currentsong({ commit, dispatch }, getTrack) {
      axios
        .get("/api/me/player/currently-playing")
        .then(response => {
          var currentsong = response.data;
          console.log("in get currentsong", currentsong);
          commit("set_currentsong", currentsong);
          if (getTrack) {
            var id = currentsong.track._id;
            dispatch("trackUrl", {id:id,playFlag:true});
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    trackUrl({ state }, {id,playFlag}) {
      console.log("idd", id);
      let token = localStorage.getItem("x-auth-token");
      let keyRoute = "/api/tracks/encryption/" + id + "/keys";
      let trackroute =
        "http://52.205.254.29/api/tracks/web-player/" +
        id +
        "/?type=medium&token=" +
        token;
      axios
        .get(keyRoute)
        .then(async response => {
          state.audioKey = response.data.key;
          state.audioKeyID = response.data.keyId;
          setupPlayer(trackroute, state.audioKey, state.audioKeyID,playFlag);
        })
        .catch(error => {
          console.log("get trackurl error", error);
        })
        .then(() => {});
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
      dispatch("update_progress", 0);
      var user = store.getters["Authorization/user"];
      if (user.product != "premium") {
        currentaudio_pause();
        state.premiumPopup = true;
        var ad = new Audio();
        if (state.premiumAd % 2 == 0) {
          ad.src = require("../assets/ad1.mp3");
        } else {
          ad.src = require("../assets/ad2.mp3");
        }
        state.premiumAd = (state.premiumAd + 1) % 4;
        ad.play();
        ad.volume = 1;
        setTimeout(() => {
          state.premiumPopup = false;
          axios
            .post("/api/me/player/next-playing")
            .then(response => {
              var nextsong = response.data;
              commit("set_currentsong", nextsong);
              if (typeof nextsong.fristInSource == "undefined")
                state.currentSongIndex = state.currentSongIndex + 1;
              else state.currentSongIndex = 0;

              let info = {
                //should handle if its the first track on playlist or album return to zero
                index: state.currentSongIndex,
                song_id: nextsong.track._id,
                album_id: nextsong.album._id,
                playlist_id: state.playlist_id,
                is_playlist: state.currentsong.isPlaylist
              };
              if(state.playicon)
              {
                  dispatch("playsong_state", info);
                  dispatch("trackUrl", { id:nextsong.track._id,playFlag:true});
             }
             else{
                   dispatch("trackUrl", { id:nextsong.track._id,playFlag:false});
              }
              dispatch("Queue/Queue", null, { root: true });
            })
            .catch(error => {
              console.log(error);
            });
        }, 17000);
      } else {
        axios
          .post("/api/me/player/next-playing")
          .then(response => {
            var nextsong = response.data;
            commit("set_currentsong", nextsong);
            if (typeof nextsong.fristInSource == "undefined")
              state.currentSongIndex = state.currentSongIndex + 1;
            else state.currentSongIndex = 0;

            let info = {
              //should handle if its the first track on playlist or album return to zero
              index: state.currentSongIndex,
              song_id: nextsong.track._id,
              album_id: nextsong.album._id,
              playlist_id: state.playlist_id,
              is_playlist: state.currentsong.isPlaylist
            };
            if(state.playicon)
              {
                  dispatch("playsong_state", info);
                  dispatch("trackUrl", { id:nextsong.track._id,playFlag:true});
             }
             else{
                   dispatch("trackUrl", { id:nextsong.track._id,playFlag:false});
              }
            dispatch("Queue/Queue", null, { root: true });
          })
          .catch(error => {
            console.log(error);
          });
      }
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
            var i =
              state.currentSongIndex == 0 ? 0 : state.currentSongIndex - 1;
            state.currentSongIndex = i;
            console.log("in preeev", state.currentSongIndex);
            let info = {
              index: i,
              song_id: prevsong.track._id,
              album_id: prevsong.album._id,
              playlist_id: prevsong.playlistId,
              is_playlist: prevsong.isPlaylist
            };
            if(state.playicon)
            { 
              dispatch("playsong_state", info);
              dispatch("trackUrl",{id:prevsong.track._id,playFlag:true});
            }
            else{
              dispatch("trackUrl",{id:prevsong.track._id,playFlag:false});
            }
            dispatch("Queue/Queue", null, { root: true });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        dispatch("update_progress", 0);
      }
    },
    repeatsong_state({ dispatch }, flag) {
      console.log("kkk", flag);
      if (flag == 1) currentaudio_repeat(true);
      else if (flag == 0) {
        currentaudio_repeat(false);
        axios
          .put("/api/player/repeat?state=" + false)
          .then(() => {
            dispatch("Queue/Queue", null, { root: true });
          })
          .catch(error => {
            console.log(error);
          });
      } else if (flag == 2) {
        currentaudio_repeat(false);
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
          dispatch("get_currentsong", false);
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
          dispatch("get_currentsong", false);
          dispatch("LikedTracks/likedtracks_tracks", null, { root: true });
        })
        .catch(error => {
          console.log(error);
        });
    },
    advance_progress({ state, dispatch }) {
      if (currentaudio_src()) {
        if (!get_currentaudio().ispaused) {
          state.trackduration = get_currentaudio().duration;
          state.progress = get_currentaudio().currentTime;
          if (state.progress == state.trackduration) {
            console.log("p", state.progress, "d", state.trackduration);
            dispatch("nextsong_state");
          }
        }
      }
    },
    update_progress({ state }, pos) {
      if (get_currentaudio()) {
        currentaudio_time(pos);
        state.progress = pos;
      }
    },
    update_volume({ state }, pos) {
      if (get_currentaudio()) {
        currentaudio_volume(pos);
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
    progress: state => {
      return state.progress;
    },
    duration: state => {
      return state.trackduration;
    },
    volume: state => {
      return state.volumeprogress;
    },
    Index: state => {
      return state.currentSongIndex;
    },
    premiumPopup: state => {
      return state.premiumPopup;
    },
    premiumAd: state => {
      return state.premiumAd;
    }
  }
};
