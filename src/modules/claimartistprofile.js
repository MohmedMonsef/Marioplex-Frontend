import axios from "axios";
export default {
  namespaced: true,
  state: {
    showModal: false
  },
  getters: {
    showModal: state => {
      return state.showModal;
    }
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    ClaimArtistProfile(state, payload) {
      state.user.push({
        id: payload.id,
        Name: payload.name,
        Genre: payload.Genre,
        Description: payload.Description
      });
      console.log("nori", this.users);
    }
  },
  actions: {
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    ClaimArtistProfile({ commit }, payload) {
      console.log("wslllllll", payload);
      axios
        .post("/api/me/ToArtist", payload)
        .then(response => {
          const claim = response.status;
          if (claim == 200) {
            commit("logout");
            localStorage.removeItem("x-auth-token");
            delete axios.defaults.headers.common["x-auth-token"];
            //console.log("wsl", claim);
            commit("ClaimArtistProfile");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
