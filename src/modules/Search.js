import axios from "axios";
export default {
  namespaced: true,
  state: {
    search_Value: "",
    topres: [],
    result5: [],
    result: [],
    albumres5: [],
    playlistres5: [],
    load: false,
    in: false,
    searchfocus: false
  },
  mutations: {
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
    setplaylistres5(state, match_valuep5) {
      state.playlistres5 = match_valuep5;
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
    }
  },
  actions: {
    search_V({ commit }, searchvalue) {
      commit("set_value", searchvalue);
      console.log(searchvalue);
    },
    // when integrate with back
    searchaboutartist({ commit }, search_value) {
      const requestOne = axios.get(
        "/search?name=" + search_value + "&type=top"
      );
      const requestTwo = axios.get(
        "/search?name=" + search_value + "&type=artist"
      );
      const requestThree = axios.get(
        "/search?name=" + search_value + "&type=album"
      );
      const requestfour = axios.get(
        "/search?name=" + search_value + "&type=playlist"
      );
      var match_value5 = new Array();
      var match_valuea5 = new Array();
      var match_valuep5 = new Array();

      commit("set_load", false);

      // const requestOne = axios.get("/search/top");
      //const requestTwo = axios.get("/search/artist");
      // const requestThree = axios.get("/search/album");
      //const requestfour = axios.get("/search/playlist");
      axios
        .all([requestTwo, requestThree, requestfour, requestOne])
        .then(
          axios.spread((...responses) => {
            const match_value = responses[0].data.artist;
            const match_valuea = responses[1].data.album;
            const match_valuep = responses[2].data.playlist;
            const match_valuet = [responses[3].data.top];

            // use/access the results
            if (match_value.length >= 5) {
              for (let i = 0; i < 5; i++) {
                match_value5.push(match_value[i]);
              }
              console.log(match_value5);
            }
            console.log(match_value);
            ///
            if (match_valuea.length >= 5) {
              for (let i = 0; i < 5; i++) {
                match_valuea5.push(match_valuea[i]);
              }
              console.log(match_valuea5);
            }
            console.log(match_valuea);
            ////
            if (match_valuep.length >= 5) {
              for (let i = 0; i < 5; i++) {
                match_valuep5.push(match_valuep[i]);
              }
              console.log(match_valuep5);
            }
            console.log(match_valuep);
            ////
            commit("settopres", match_valuet);
            commit("setresult5", match_value5);
            // if (match_value.length > 6) {
            //   commit("setresult", match_value);
            //   console.log(match_value);
            // }
            commit("setresult", match_value);
            commit("setalbumres5", match_valuea5);
            commit("setplaylistres5", match_valuep5);
            commit("set_load", true);
          })
        )
        .catch(errors => {
          const match_value1 = [];
          const match_value2 = [];
          const match_value3 = [];
          const match_value4 = [];
          commit("settopres", match_value1);
          commit("setresult5", match_value2);
          commit("setalbumres5", match_value3);
          commit("setplaylistres5", match_value4);
          // react on errors.
          console.error(errors);
        });
    },
    artistin({ commit }, set) {
      commit("set_in", set);
    },
    searchfocus({ commit }, val) {
      commit("searchfocus", val);
    }
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
    getplaylistsres5(state) {
      return state.playlistres5;
    },
    loadingsearch: state => state.load
  },
  searchfocus: state => state.searchfocus
};
