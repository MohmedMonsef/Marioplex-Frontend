import axios from "axios";
import store from "../store";

export default {
  namespaced: true,
  state: {
    NextUp: [],
    Queued: [],
    demo: true,
    loading:false
  },
  mutations: {
    set_nextup(state, queue) {
      state.NextUp = [];
      queue.forEach(q => {
        if (!q.isQueue) state.NextUp.push(q);
      });
    },
    set_queued(state, queue) {
      state.Queued = [];
      queue.forEach(q => {
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
    }
  },
  actions: {
    Queue({ commit }) {
      commit("set_loading", false);
      axios
        .get("/me/queue")
        .then(response => {
          const queue = response.data;
          console.log("My queue in action", queue);
          commit("set_nextup", queue);
          commit("set_queued", queue);
          commit("set_loading", true);
        })
        .catch(error => {
          console.log(error);
        });
    },
    AddToQueue({ dispatch }, song) {
      axios
        .post("/player/add-to-queue/"+ song.playlistId +"/"+ song.trackId)
        .then(() => {
          dispatch("Queue");
        })
        .catch(error => {
          console.log(error);
        });
    },
    CreateQueue({ commit }, info) {
      commit("demo");
      if (info == "") {
        info = {
          index: 1,
          song_id: "5e7d93dad82adf07f4121bb6",
          album_id: "5e7d93dad82adf07f4121bb0",
          playlist_id: "0",
          is_playlist: false

        };
      }
      console.log("in queue front",info)
      //var isPlaylist=true
      axios
        .post("/createQueue/" + info.playlist_id + "/" + info.song_id+"?isPlaylist="+info.is_playlist
        )
        .then(response => {
          console.log("success", response);
          var cs = store.getters["mediaplayer/currentaudio"];
          if (cs) {
            store.dispatch("mediaplayer/get_currentsong");
            store.dispatch("mediaplayer/playsong_state", info);
          } else {
            setTimeout(() => {
              store.dispatch("mediaplayer/playsong_state", info);
            }, 500);
            store.dispatch("mediaplayer/get_currentsong");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    Get_Queued: state => state.Queued,
    Get_Nextup: state => state.NextUp,
    loading: state => state.loading
  }
};
