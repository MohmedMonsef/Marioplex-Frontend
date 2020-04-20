//import axios from "axios";
//import store from "../store";
export default {
  namespaced: true,
  state: {
    showModal: false,
    showModalUpload: false
  },
  getters: {
    showModal: state => {
      return state.showModal;
    },
    showModalUpload: state => {
      return state.showModalUpload;
    }
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    toggleModalUpload(state) {
      state.showModalUpload = !state.showModalUpload;
    }
  },
  actions: {
    toggleModalUpload({ commit }) {
      commit("toggleModalUpload");
    },
    toggleModal({commit}) {
     commit("toggleModal");
    },
    /* EditBio({commit},payload){

        }*/
  }
};
