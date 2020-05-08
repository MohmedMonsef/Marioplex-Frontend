export default {
  namespaced: true,
  state: {
    showModal: false,
    showpagesModal: false
  },
  getters: {
    showModal: state => {
      return state.showModal;
    },
    showpagesModal: state => {
      return state.showpagesModal;
    }
  },
  mutations: {
    togglepopup(state) {
      state.showModal = !state.showModal;
    },
    togglepagespopup(state) {
      state.showpagesModal = !state.showpagesModal;
    }
  },
  actions: {
    togglePopup({ commit }) {
      commit("togglepopup");
    },
    togglepagespopup({ commit }) {
      commit("togglepagespopup");
    }
  }
};
