import axios from "axios";
import store from "../store";

export default {
  namespaced: true,
  state: {
    NextUp: [],
    Queued: [],
    demo: true,
    loading: 0,
  },
  mutations: {
    set_nextup(state, queue) {
      state.NextUp = [];
      queue.forEach((q) => {
        if (!q.isQueue) state.NextUp.push(q);
      });
    },
    set_queued(state, queue) {
      state.Queued = [];
      queue.forEach((q) => {
        if (q.isQueue) state.Queued.push(q);
      });
    },
    add_to_queue(state, song) {
      state.Queued.push(song);
    },
    demo(state) {
      state.demo = !state.demo;
    },
    set_loading(state, status) {
      state.loading = status;
    },
  },
  actions: {
    Queue({ commit, state }) {
      axios
        .get("/api/me/queue")
        .then((response) => {
          const queue = response.data;
          console.log("My queue in action", queue);
          commit("set_nextup", queue);
          commit("set_queued", queue);
          if (state.loading == 0) {
            state.loading = 1;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    AddToQueue({ dispatch }, song) {
      var srcid;
      if (song.isPlaylist) srcid = song.playlistId;
      else srcid = song.albumId;
      axios
        .post(
          "/api/player/add-to-queue/" +
            srcid +
            "/" +
            song.trackId +
            "/?isPlaylist=" +
            song.isPlaylist
        )
        .then(() => {
          dispatch("Queue");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async CreateQueue({ commit }, info) {
      commit("demo");
      var firstTime=1;
      if (info == "") {
        firstTime=2;
        var albumId;
        await axios
        .get("/api/browse/new-releases")
        .then((response) => {
          albumId = response.data.albums[0].id;
        })
        .catch((error) => {
          console.log(error);
        });
        await axios
        .get("/api/albums/" + albumId)
        .then((response) => {
          let album = response.data;
          info = {
            index: 0,
            song_id: album.track[0]._id,
            album_id: albumId,
            playlist_id: "0",
            is_playlist: false,
          };
        })
        .catch((error) => {
          console.log(error);
        });
      }
      if (info.playlist_id != "0") {
        axios
          .post(
            "/api/createQueue/" +
              info.playlist_id +
              "/" +
              info.song_id +
              "?isPlaylist=" +
              info.is_playlist
          )
          .then(() => {
            store.dispatch("Mediaplayer/get_currentsong",firstTime);
            store.dispatch("Mediaplayer/playsong_state", info);
            
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post(
            "/api/createQueue/" +
              info.album_id +
              "/" +
              info.song_id +
              "?isPlaylist=" +
              info.is_playlist
          )
          .then(() => {
          
            store.dispatch("Mediaplayer/get_currentsong",firstTime);
            if(firstTime !=2)
            store.dispatch("Mediaplayer/playsong_state", info);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  getters: {
    Get_Queued: (state) => state.Queued,
    Get_Nextup: (state) => state.NextUp,
    loading: (state) => state.loading,
  },
};
