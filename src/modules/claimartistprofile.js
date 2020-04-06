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
      axios
        .put("api/claimartist", { data: payload })
        .then(response => {
          const claim = response.data;
          console.log("wsl", claim);
          commit("ClaimArtistProfile", claim);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
