import axios from "axios";
export default {
  namespaced: true,
  state: {
    search_Value: "",
    topres: [],
    result5: [],
    result: [],
    albumres5: [],
    albumres: [],
    playlistres5: [],
    playlistres: [],
    load: false,
    in: false,
    searchfocus: false,
    showme: "h",
    user: [],
    user5: [],
    track: [],
    track3: [],
  },
  mutations: {
    setclear(state) {
      state.topres = [];
      state.result5 = [];
      state.albumres5 = [];
      state.albumres = [];
      state.playlistres5 = [];
      state.playlistres = [];
      state.user = [];
      state.user5 = [];
      state.track = [];
      state.track3 = [];
    },
    set_value(state, searchvalue) {
      state.search_Value = searchvalue;
    },
    settopres(state, match_valuet) {
      if (match_valuet.length) {
        if (match_valuet[0].images.length == 0)
          match_valuet[0].images.push({ _id: "5eb52f1863eea332d416b9fa" });
      }
      state.topres = match_valuet;
    },
    setresult5(state, match_value5) {
      match_value5.forEach((match) => {
        if (match.images.length == 0)
          match.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.result5 = match_value5;
    },
    setresult(state, match_value) {
      match_value.forEach((match) => {
        if (match.images.length == 0)
          match.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.result = match_value;
    },
    setalbumres5(state, match_valuea5) {
      match_valuea5.forEach((match) => {
        if (match.images.length == 0)
          match.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.albumres5 = match_valuea5;
    },
    setalbumres(state, match_valuea) {
      match_valuea.forEach((match) => {
        if (match.images.length == 0)
          match.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.albumres = match_valuea;
    },
    setplaylistres5(state, match_valuep5) {
      match_valuep5.forEach((match) => {
        if (match.images.length == 0)
          match.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.playlistres5 = match_valuep5;
    },
    setplaylistres(state, match_valuep) {
      match_valuep.forEach((match) => {
        if (match.images.length == 0)
          match.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.playlistres = match_valuep;
    },
    set_load(state, status) {
      state.load = status;
    },
    set_in(state, status) {
      state.in = status;
    },
    searchfocus(state, status) {
      state.searchfocus = status;
    },
    setshower(state, val) {
      state.showme = val;
    },
    setuser5(state, match_valueu5) {
      match_valueu5.forEach((match) => {
        if (match.images.length == 0)
          match.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.user5 = match_valueu5;
    },
    setuser(state, match_valueu) {
      match_valueu.forEach((match) => {
        if (match.images.length == 0)
          match.images.push({ _id: "5eb52f1863eea332d416b9fa" });
      });
      state.user = match_valueu;
    },
    settrack(state, match_valuetrack) {
      state.track = match_valuetrack;
    },
    settrack3(state, match_valuetrack3) {
      state.track3 = match_valuetrack3;
    },
  },
  actions: {
    clear({ commit }) {
      commit("setclear");
    },
    search_V({ commit }, searchvalue) {
      commit("set_value", searchvalue);
    },
    showresult({ commit }, val) {
      commit("setshower", val);
    },
    // when integrate with back
    searchaboutartist({ commit }, search_value) {
      commit("settopres", []);
      commit("setresult5", []);
      commit("setalbumres5", []);
      commit("setplaylistres5", []);
      commit("setuser5", []);
      commit("settrack3", []);
      commit("setresult", []);
      commit("setalbumres", []);
      commit("setplaylistres", []);
      commit("setuser", []);
      commit("settrack", []);
      var match_value5 = new Array();
      var match_valuea5 = new Array();
      var match_valuep5 = new Array();
      var match_valueu5 = new Array();
      var match_valuetrack3 = new Array();

      commit("set_load", false);
      axios
        .get(
          "/api/search?name=" +
            search_value +
            "&type=top,artist,album,playlist,track,profile"
        )
        .then((response) => {
          const match_value = response.data.artist;
          const match_valuea = response.data.album;
          const match_valuep = response.data.playlist;
          const match_valuet = [response.data.top];
          const match_valueu = response.data.profile;
          const match_valuetrack = response.data.track;
          if (match_value.length >= 5) {
            for (let i = 0; i < 5; i++) {
              match_value5.push(match_value[i]);
            }
            commit("setresult5", match_value5);
          } else {
            commit("setresult5", match_value);
          }
          if (match_valuea.length >= 5) {
            for (let i = 0; i < 5; i++) {
              match_valuea5.push(match_valuea[i]);
            }
            commit("setalbumres5", match_valuea5);
          } else {
            commit("setalbumres5", match_valuea);
          }
          if (match_valuep.length >= 5) {
            for (let i = 0; i < 5; i++) {
              match_valuep5.push(match_valuep[i]);
            }
            commit("setplaylistres5", match_valuep5);
          } else {
            commit("setplaylistres5", match_valuep);
          }
          if (match_valueu.length >= 5) {
            for (let i = 0; i < 5; i++) {
              match_valueu5.push(match_valueu[i]);
            }
            commit("setuser5", match_valueu5);
          } else {
            commit("setuser5", match_valueu);
          }

          if (match_valuetrack.length >= 3) {
            for (let i = 0; i < 3; i++) {
              match_valuetrack3.push(match_valuetrack[i]);
            }
            commit("settrack3", match_valuetrack3);
          } else {
            commit("settrack3", match_valuetrack);
          }
          commit("settopres", match_valuet);
          commit("setresult", match_value);
          commit("setalbumres", match_valuea);
          commit("setplaylistres", match_valuep);
          commit("setuser", match_valueu);
          commit("settrack", match_valuetrack);
          commit("set_load", true);
        })
        //)
        .catch((errors) => {
          commit("settopres", []);
          commit("setresult5", []);
          commit("setalbumres5", []);
          commit("setplaylistres5", []);
          commit("setuser5", []);
          commit("settrack3", []);
          commit("setresult", []);
          commit("setalbumres", []);
          commit("setplaylistres", []);
          commit("setuser", []);
          commit("settrack", []);
          // react on errors.
          console.error(errors);
        });
    },
    artistin({ commit }, set) {
      commit("set_in", set);
    },
    searchfocus({ commit }, val) {
      commit("searchfocus", val);
    },
  },
  getters: {
    get_value(state) {
      return state.search_Value;
    },
    gettopres(state) {
      return state.topres;
    },
    getresult5(state) {
      return state.result5;
    },
    getresult(state) {
      return state.result;
    },
    getalbumres5(state) {
      return state.albumres5;
    },
    getalbumres(state) {
      return state.albumres;
    },
    getplaylistsres5(state) {
      return state.playlistres5;
    },
    getplaylistsres(state) {
      return state.playlistres;
    },
    loadingsearch: (state) => state.load,

    searchfocus: (state) => state.searchfocus,
    showeres: (state) => state.showme,
    getuser5(state) {
      return state.user5;
    },
    getuser(state) {
      return state.user;
    },
    gettrack3(state) {
      return state.track3;
    },
    gettrack(state) {
      return state.track;
    },
  },
};
