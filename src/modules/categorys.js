import axios from "axios";
export default {
  namespaced: true,
  state: {
    category: [],
    loading: false
  },
  mutations: {
    setcategory(state, rescategory) {
      state.category = rescategory;
    },
    set_loading(state, status) {
      state.loading = status;
    }
  },
  actions: {
    showcategory({ commit }) {
      commit("set_loading", false);
      axios
        .get("/api/browse/categories/")
        .then(respons => {
          let rescategory = respons.data.category;
          console.log(respons.data);
          console.log("test function", rescategory);
          commit("setcategory", rescategory);
          commit("set_loading", true);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    getcategory: state => state.category,
    loading: state => state.loading
  }
};
