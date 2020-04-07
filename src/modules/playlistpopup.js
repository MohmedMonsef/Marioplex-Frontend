// import axios from "axios";
//donot forget to add the playlist image here
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
    }
  },
  actions: {
    toggleModal({ commit }) {
      commit("toggleModal");
    }
  }
};
