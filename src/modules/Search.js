import axios from "axios";
export default {
    namespaced: true,
    state: { topres: [], result: [], albumres: [], playlistres: [] },
    mutations: {
        settopres(state, match_valuet) {
            state.topres = match_valuet;
        },
        setresult(state, match_value) {
            state.result = match_value;
        },
        setalbumres(state, match_valuea) {
            state.albumres = match_valuea;
        },
        setplaylistres(state, match_valuep) {
            state.playlistres = match_valuep;
        }
    },
    actions: {
        searchaboutartist({ commit }) {
        /* when integrate with back
            searchaboutartist({ commit }, search_value) {
             const requestOne = axios.get(
                "/api/search?name=" + search_value + "&type=top"
            );
            const requestTwo = axios.get(
                "/api/search?name=" + search_value + "&type=artist"
            );
            const requestThree = axios.get(
                "/api/search?name=" + search_value + "&type=album"
            );
            const requestfour = axios.get(
                "/api/search?name=" + search_value + "&type=playlist"
            );
*/

            const requestOne = axios.get("/api/search/top");
            const requestTwo = axios.get("/api/search/artist");
            const requestThree = axios.get("/api/search/album");
            const requestfour = axios.get("/api/search/playlist");
            axios
                .all([requestTwo, requestThree, requestfour, requestOne])
                .then(
                    axios.spread((...responses) => {
                        const match_value = responses[0].data;
                        const match_valuea = responses[1].data;
                        const match_valuep = responses[2].data;
                        const match_valuet = responses[3].data;

                        // use/access the results
                        console.log(match_valuet);
                        ///

                        commit("settopres", match_valuet);
                        commit("setresult", match_value);
                        commit("setalbumres", match_valuea);
                        commit("setplaylistres", match_valuep);
                    })
                )
                .catch(errors => {
                    // react on errors.
                    console.error(errors);
                });
        }
    },
    getters: {
        gettopres(state) {
            return state.topres;
        },
        getresult(state) {
            return state.result;
        },
        getalbumres(state) {
            return state.albumres;
        },
        getplaylistsres(state) {
            return state.playlistres;
        }
    }
};
