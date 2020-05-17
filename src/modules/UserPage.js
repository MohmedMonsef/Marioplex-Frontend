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
      state.playlists = playlists;
    },
    set_user(state, user) {
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
          console.log("user playlists", playlists);
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
          console.log("user", user);
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
