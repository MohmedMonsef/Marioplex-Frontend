import axios from "axios";
var i = 0;
export default {
  namespaced: true,
  state: {
    // albumimage: String,
    // songname: String,
    // artistsname: [],
    // playsong: String,
    // pausesong: String,
    // prevsong: String,
    // nextsong: String,
    // starttime: String,
    // endtime: String,
    // repeatsong: String,
    // shufflesongs: String
    songs: []
  },
  mutations: {
    setalbumimage(state, albumimage) {
      state.songs.album_image = albumimage;
    },
    setsongname(state, songname) {
      state.songs.song_name = songname;
    },
    setartistsname(state, artistsname) {
      state.songs.artist_name = artistsname;
    },
    // setplaysong(state, playsong) {
    //   state.playsong = playsong;
    // },
    setplaysong(state, playsong) {
      state.songs.song = playsong;
    },
    setpausesong(state, pausesong) {
      state.songs.song = pausesong;
    },
    setprevsong(state, prevsong) {
      state.songs.song = prevsong;
    },
    setnextsong(state, nextsong) {
      state.songs.song = nextsong;
    },
    setstarttime(state, starttime) {
      state.songs.start_time = starttime;
    },
    setendtime(state, endtime) {
      state.songs.end_time = endtime;
    },
    setreapetsong(state, repeatsong) {
      state.repeatsong = repeatsong;
    },
    setshufflesongs(state, shufflesongs) {
      state.shufflesongs = shufflesongs;
    }
  },
  actions: {
    currentsong_info({ commit }) {
      axios
        .get("/api/player/currently-playing")
        .then(response => {
          let albumimage = response.data;
          let songname = response.data;
          let artistsname = response.data;
          let starttime = response.data;
          let endtime = response.data;
          commit("setalbumimage", albumimage[0].album_image);
          commit("setsongname", songname[0].song_name);
          commit("setartistsname", artistsname[0].artist_name);
          commit("setstarttime", starttime[0].start_time);
          commit("setendtime", endtime[0].end_time);
        })
        .catch(error => {
          console.log(error);
        });
    },
    playsong_state({ commit }) {
      axios
        .get("/api/player/play")
        .then(response => {
          let playsong = response.data;
          console.log("playsong", Object.keys(playsong).length);
          console.log("inside axios", playsong[i].song);
          commit("setplaysong", playsong[i].song);
        })
        .catch(error => {
          console.log(error);
        });
    },
    pausesong_state({ commit }) {
      axios
        .get("/api/player/pause")
        .then(response => {
          let pausesong = response.data;
          commit("setpausesong", pausesong[i].song);
        })
        .catch(error => {
          console.log(error);
        });
    },
    nextsong_state({ commit }) {
      axios
        .get("/api/player/next")
        .then(response => {
          let nextsong = response.data;
          i += 1;
          console.log(i);
          console.log(Object.keys(nextsong).length);
          if (i == Object.keys(nextsong).length) {
            i = 0;
            commit("setnextsong", nextsong[i].song);
          } else commit("setnextsong", nextsong[i].song);
        })
        .catch(error => {
          console.log(error);
        });
    },
    prevsong_state({ commit }) {
      axios
        .get("/api/player/previous")
        .then(response => {
          let prevsong = response.data;
          i -= 1;
          if (i < 0) i = 0;
          else commit("setprevsong", prevsong[i].song);
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
    }
  }
  // modules: {},
  //   getters: {
  //     albumimage: state => state.albumimage,
  //     songname: state => state.songname,
  //     artistsname: state => state.artistsname,
  //     starttime: state => state.starttime,
  //     endtime: state => state.endtime,
  //     playsong: state => state.playsong
  //   }
};
