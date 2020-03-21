import axios from "axios";

export default {
  namespaced: true,
  state: {
    NextUp: [],
    Queued: []
  },
  mutations: {
    set_nextup(state, queue) {
        state.NextUp=[];
      queue.forEach(q => {
        if (!q.isqueue)
          state.NextUp.push(q);
      });
    },
    set_queued(state, queue) {
        state.Queued=[];
        queue.forEach(q => {
            if (q.isqueue)
            state.Queued.push(q);
      });
    }
  },
  actions: {
    Queue({ commit }) {
      axios
        .get("/api/queue")
        .then(response => {
          const queue = response.data.queue;
          console.log("My queue in action" ,queue);
          commit("set_nextup", queue);
          commit("set_queued", queue);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    Get_Queued: state => state.Queued,
    Get_Nextup: state => state.NextUp
  }
};
