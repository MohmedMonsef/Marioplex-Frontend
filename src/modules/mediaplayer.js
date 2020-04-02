import axios from "axios";
var i = 0;
export default {
  namespaced: true,
  state: {
    currentsong: {
      track: {
        name: "You are my sunshine",
        __v: 0,
        albumId: "5e7d93dad82adf07f4121bb0",
        artistId: "5e7d93dad82adf07f4121bb2",
        artists: ["civil wars", "john", "jasmine"],
        length: "3:33",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
      },
      _id: "5e7d93dad82adf07f4121bb6",
      albumName: "Barton Hallow",
      isLiked: true,
      isPlayable: true
    },
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
    // songs: [],
    liked: false,
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
    setplaysong(state, playsong) {
      state.songs.song = playsong;
    },
    setpausesong(state) {
      state.playicon = false;
      if (state.currentaudio) state.currentaudio.pause();
    },
    setprevsong(state, prevsong) {
      state.songs.song = prevsong;
    },
    setnextsong(state, nextsong) {
      state.songs.song = nextsong;
    },
    setreapetsong(state, repeatsong) {
      state.repeatsong = repeatsong;
    },
    setshufflesongs(state, shufflesongs) {
      state.shufflesongs = shufflesongs;
    },
    set_currentsong(state, currentsong) {
      state.currentsong = currentsong;
    },
    startcurrentaudio(state, info) {
      console.log("staaart", info);
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
    nextsong_state({state, commit ,dispatch}) {
      axios
        .get("/player/next")
        .then(response => {
          var nextsong = response.data.nextsong;
          console.log("in get currentsong", nextsong);
          commit("set_currentsong", nextsong);
          let info={
            index:state.currentsong_info.index+1 ,//should handle if its the first track on playlist or album return to zero
            song_id: nextsong[0]._id,
            album_id: nextsong[0].track.albumId,
            playlist_id:state.currentsong_info.playlist_id,
            is_playlist: state.currentsong_info.is_playlist
          }
          dispatch("playsong_state",info)
        })
        .catch(error => {
          console.log(error);
        });
    },
    prevsong_state({state, commit ,dispatch}) {
      axios
        .get("/player/previous")
        .then(response => {
          var prevsong = response.data.prevsong;
          console.log("in get currentsong", prevsong);
          commit("set_currentsong", prevsong);
          let info={
            index:state.currentsong_info.index==0? 0:state.currentsong_info.index -1,//
            song_id: prevsong[0]._id,
            album_id: prevsong[0].track.albumId,
            playlist_id:state.currentsong_info.playlist_id,
            is_playlist: state.currentsong_info.is_playlist
          }
          dispatch("playsong_state",info)
        })
        .catch(error => {
          console.log(error);
        });
    },
    repeatsong_state({ commit }) {
      axios
        .get("/api/player/repeat")
        .then(response => {
          let repeatsong = response.data.song;
          commit("setreapetsong", repeatsong);
        })
        .catch(error => {
          console.log(error);
        });
    },
    shufflesong_state({ commit }) {
      axios
        .get("/api/player/shuffle")
        .then(response => {
          let shfflesongs = response.data.song;
          commit("setshufflesongs", shfflesongs);
        })
        .catch(error => {
          console.log(error);
        });
    },
    ////////////here i should send end point of like with id
    likesong({ commit }) {
      commit("setliked", true);
    },
    ///////////here i should send end point of unlike with id
    unlikesong({ commit }) {
      commit("setliked", false);
    },
    stateofsong({ commit }) {
      axios
        .get("/api/me/like")
        .then(response => {
          let like = response.data;
          commit("setliked", like[i].liked);
        })
        .catch(error => {
          console.log(error);
        });
    },
    advance_progress({ state }) {
      if (state.currentaudio) {
        if (!state.currentaudio.ispaused) {
          state.trackduration = state.currentaudio.duration;
          state.progress = state.currentaudio.currentTime;
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
      return state.liked;
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
    currentsong_info: state => state.currentsong_info
  }
};
