import axios from "axios";
export default {
  namespaced: true,
  state: {
    playlists: [],
    loading: false,
    user: [],
  },
  mutations: {
    set_playlists(state, playlists) {
      playlists.forEach((playlist) => {
        if (playlist.images.length == 0)
          playlist.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.playlists = playlists;
    },
    set_user(state, user) {
      if(user.images.length==0)
           user.images.push({_id:"5eb52f1863eea332d416b9fa"});
      state.user = user;
    },
  },
  actions: {
    user_playlists({ commit, state }, id) {
      state.loading = false;
      axios
        .get("api/users/" + id + "/playlists")
        .then((response) => {
          let playlists = response.data;
          commit("set_playlists", playlists);
          state.loading = true;
        })
        .catch((error) => {
          let playlists = [];
          commit("set_playlists", playlists);
          if (!state.loading) 
              state.loading = true;
          console.log(error);
        });
    },
    user_info({ commit }, id) {
      axios
        .get("api/users/" + id)
        .then((response) => {
          let user = response.data;
          commit("set_user", user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    playlists: (state) => state.playlists,
    user: (state) => state.user,
    loading: (state) => state.loading
  },
};
