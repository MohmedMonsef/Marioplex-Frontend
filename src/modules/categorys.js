import axios from "axios";
export default {
  namespaced: true,
  state: {
    category: [],
    loading: false,
    categoryplaylists:[],
    categoryplaylists5:[],
    loadingplaylists:false,
    /////////////////
    playlist_info5: [
      {
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
       
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      }],
    playlist_info: [
      {
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
       
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      },{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      }
      ,{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      }
      ,{
        _id: "5e7d93dad82adf07f4121bac",
        type: "playlist",
        name: "dhjgjdjdjg",
        ownerId: "5e7d9045854b0419f4f409b7",
        ownerName:"hmaki",
        images:[],
        category_name:"pop"
      }
    ],
  },
  mutations: {
    setcategory(state, rescategory) {
      state.category = rescategory;
    },
    set_loading(state, status) {
      state.loading = status;
    },
    setcategoryplaylists(state, categoryplaylistsres) {
      state.categoryplaylists = categoryplaylistsres;
    },
    set_loadingplaylists(state, status) {
      state.loadingplaylists = status;
    },
    setcategoryplaylists5(state, categoryplaylistsres5) {
      state.categoryplaylists5 = categoryplaylistsres5;
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
    },
    categoryplaylists({ commit },category_Id) {
      var categoryplaylistsres5 = new Array();
      commit("set_loadingplaylists", false);
      axios
        .get("/api/browse/categories/?category="+category_Id)
        .then(respons => {
          let categoryplaylistsres = respons.data.category.playlists;
          if (categoryplaylistsres.length >= 5) {
            for (let i = 0; i < 5; i++) {
              categoryplaylistsres5.push(categoryplaylistsres[i]);
            }
            console.log(categoryplaylistsres5);
        }
          commit("setcategoryplaylists5", categoryplaylistsres5);
          commit("setcategoryplaylists", categoryplaylistsres);
          commit("set_loadingplaylists", true);
        })
        .catch(error => {
          console.log(error);
        });
    }

  },
  getters: {
    getcategory: state => state.category,
    loading: state => state.loading,
    loadingplaylists: state => state.loadingplaylists,
  //  getcategoryplaylists: state => state.categoryplaylists,
  //  getcategoryplaylists5: state => state.categoryplaylists5,
    /////totest////////////playlist_info
    getcategoryplaylists: state => state.playlist_info,
    getcategoryplaylists5: state => state.playlist_info5
  }
};
