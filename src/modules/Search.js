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
      state.topres = match_valuet;
    },
    setresult5(state, match_value5) {
      state.result5 = match_value5;
    },
    setresult(state, match_value) {
      state.result = match_value;
    },
    setalbumres5(state, match_valuea5) {
      state.albumres5 = match_valuea5;
    },
    setalbumres(state, match_valuea) {
      state.albumres = match_valuea;
    },
    setplaylistres5(state, match_valuep5) {
      state.playlistres5 = match_valuep5;
    },
    setplaylistres(state, match_valuep) {
      state.playlistres = match_valuep;
    },
    set_load(state, status) {
      state.load = status;
    },
    set_in(state, status) {
      state.in = status;
    },
    searchfocus(state, status) {
      console.log(status);
      state.searchfocus = status;
    },
    setshower(state, val) {
      state.showme = val;
    },
    setuser5(state, match_valueu5) {
      state.user5 = match_valueu5;
    },
    setuser(state, match_valueu) {
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
      console.log(searchvalue);
    },
    showresult({ commit }, val) {
      commit("setshower", val);
      console.log(val);
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
      // const requestOne = axios.get(
      //     "/api/search?name=" + search_value + "&type=top"
      // );
      // const requestTwo = axios.get(
      //     "/api/search?name=" + search_value + "&type=artist"
      // );
      // const requestThree = axios.get(
      //     "/api/search?name=" + search_value + "&type=album"
      // );
      // const requestfour = axios.get(
      //     "/api/search?name=" + search_value + "&type=playlist"
      // );
      var match_value5 = new Array();
      var match_valuea5 = new Array();
      var match_valuep5 = new Array();
      var match_valueu5 = new Array();
      var match_valuetrack3 = new Array();

      commit("set_load", false);

      // const requestOne = axios.get("/search/top");
      //const requestTwo = axios.get("/search/artist");
      // const requestThree = axios.get("/search/album");
      //const requestfour = axios.get("/search/playlist");
      axios
        // .all([requestTwo, requestThree, requestfour, requestOne])
        .get(
          "/api/search?name=" +
            search_value +
            "&type=top,artist,album,playlist,track,profile"
        )
        .then((response) => {
          //  axios.spread((...responses) => {
          const match_value = response.data.artist;
          const match_valuea = response.data.album;
          const match_valuep = response.data.playlist;
          const match_valuet = [response.data.top];
          const match_valueu = response.data.profile;
          const match_valuetrack = response.data.track;
          // use/access the results
          if (match_value.length >= 5) {
            for (let i = 0; i < 5; i++) {
              match_value5.push(match_value[i]);
            }
            console.log(match_value5);
            commit("setresult5", match_value5);
          } else {
            commit("setresult5", match_value);
          }
          console.log(match_value);
          ///
          if (match_valuea.length >= 5) {
            for (let i = 0; i < 5; i++) {
              match_valuea5.push(match_valuea[i]);
            }
            console.log(match_valuea5);
            commit("setalbumres5", match_valuea5);
          } else {
            commit("setalbumres5", match_valuea);
          }
          console.log(match_valuea);
          ////
          if (match_valuep.length >= 5) {
            for (let i = 0; i < 5; i++) {
              match_valuep5.push(match_valuep[i]);
            }
            console.log(match_valuep5);
            commit("setplaylistres5", match_valuep5);
          } else {
            commit("setplaylistres5", match_valuep);
          }
          console.log(match_valuep, "playlist in axios");
          ////
          if (match_valueu.length >= 5) {
            for (let i = 0; i < 5; i++) {
              match_valueu5.push(match_valueu[i]);
            }
            console.log(match_valueu5);
            commit("setuser5", match_valueu5);
          } else {
            commit("setuser5", match_valueu);
          }
          console.log(match_valueu);

          if (match_valuetrack.length >= 3) {
            for (let i = 0; i < 3; i++) {
              match_valuetrack3.push(match_valuetrack[i]);
            }
            console.log(match_valuetrack);
            commit("settrack3", match_valuetrack3);
          } else {
            commit("settrack3", match_valuetrack);
          }
          console.log(match_value);
          ///////
          commit("settopres", match_valuet);
          console.log(match_valuet.length);
          // if (match_value.length > 6) {
          //   commit("setresult", match_value);
          //   console.log(match_value);
          // }
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
