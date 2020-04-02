import axios from "axios";
export default {
  namespaced: true,
  state: { category: [] },
  mutations: {
    setcategory(state, rescategory) {
      state.category = rescategory;
    }
  },
  actions: {
    showcategory({ commit }) {
      axios
        .get("/api/category")
        .then(respons => {
          let rescategory = respons.data;
          console.log("test function", rescategory);
          commit("setcategory", rescategory);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    getcategory: state => state.category
  }
};
