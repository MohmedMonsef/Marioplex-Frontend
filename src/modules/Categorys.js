import axios from "axios";
export default {
  namespaced: true,
  state: {
    category: [],
    loading: false,
    categoryplaylists: [],
    categoryplaylists5: [],
    loadingplaylists: false,
    category_name: "",
  },
  mutations: {
    setcategory(state, rescategory) {
      rescategory.forEach((category) => {
        if (category.images.length == 0)
          category.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.category = rescategory;
    },
    set_loading(state, status) {
      state.loading = status;
    },
    setcategoryplaylists(state, categoryplaylistsres) {
      categoryplaylistsres.forEach((playlist) => {
        if (playlist.images.length == 0)
          playlist.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.categoryplaylists = categoryplaylistsres;
    },
    set_loadingplaylists(state, status) {
      state.loadingplaylists = status;
    },
    setcategoryplaylists5(state, categoryplaylistsres5) {
      categoryplaylistsres5.forEach((playlist) => {
        if (playlist.images.length == 0)
          playlist.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.categoryplaylists5 = categoryplaylistsres5;
    },
    set_categoryname(state, name) {
      state.category_name = name;
    },
  },
  actions: {
    showcategory({ commit }) {
      commit("set_loading", false);
      axios
        .get("/api/browse/categories/")
        .then((respons) => {
          let rescategory = respons.data.category;
          commit("setcategory", rescategory);
          commit("set_loading", true);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    categoryname({ commit }, name) {
      commit("set_categoryname", name);
    },
    categoryplaylists({ commit }, category_id) {
      var categoryplaylistsres5 = new Array();
      commit("set_loadingplaylists", false);
      axios
        .get("/api/browse/categories/" + category_id + "/playlists")
        .then((respons) => {
          let categoryplaylistsres = respons.data.playlists;
          if (categoryplaylistsres.length >= 5) {
            for (let i = 0; i < 5; i++) {
              categoryplaylistsres5.push(categoryplaylistsres[i]);
            }
            commit("setcategoryplaylists5", categoryplaylistsres5);
          } else {
            commit("setcategoryplaylists5", categoryplaylistsres);
          }

          commit("setcategoryplaylists", categoryplaylistsres);
          commit("set_loadingplaylists", true);
        })
        .catch((error) => {
          commit("setcategoryplaylists5", []);
          commit("setcategoryplaylists", []);
          console.log(error);
        });
    },
  },
  getters: {
    getcategory: (state) => state.category,
    loading: (state) => state.loading,
    loadingplaylists: (state) => state.loadingplaylists,
    getcategoryplaylists: (state) => state.categoryplaylists,
    getcategoryplaylists5: (state) => state.categoryplaylists5,
    getcategory_name: (state) => state.category_name,
  },
};
