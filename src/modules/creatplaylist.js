import axios from "axios";
export default {
  namespaced: true,
  state: {
    showModal: false,
    Playlists: []
  },
  getters: {
    showModal: state => {
      return state.showModal;
    },
    playlists: state => state.Playlists
  }, 
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },

    CreatePlaylist(state, { id, i }) {
      state.Playlists.push({
        id: id,
        playlistname: i
      });
      console.log("nori");
    },
    setUserPlaylist(state, playlists) {
      state.Playlists = playlists;
    },
    DeletePlaylist(state, id) {
      state.Playlists.splice(id, 1);
    }
  },
  actions: {
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    CreatePlaylist({ commit }, payload) {
      axios
        .post("/api/playlists", { data: payload })
        .then(response => {
          const playlists = response.data;
          var id = response.data.id;
          console.log("wsl", playlists);
          var i = playlists.playlistname;

          console.log(i, "de i");
          commit("CreatePlaylist", { id, i });
        })
        .catch(error => {
          console.log(error);
        });
    },

    showplaylists({ commit }) {
      axios
        .get("/api/playlists")
        .then(response => {
          let playlists = response.data;
          console.log("test function", playlists);
          commit("setUserPlaylist", playlists);
        })
        .catch(error => {
          console.log(error);
        });
    },
    DeletePlaylist({ commit }, id) {
      axios
        .delete(`/api/playlist/${id}`)
        .then(response => {
          //const deletedplaylist=response.data.id;
          //deletedplaylist.Playlists.destroy();
          console.log(response.data);
          console.log("wsl");
          // response.Playlists.find(id).destroy();
          // response.Playlists.splice(id, 1)
          commit("DeletePlaylist", id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
