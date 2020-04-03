import axios from "axios";
export default {
    namespaced: true,
    state: { 
        topres: [],
        result: [],
        type: "artist",
        albumres: [],
         playlistres: []
    },
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
            /* searchaboutartist({ commit }, search_value) {
             const requestOne = axios.get(
                `/search?type="top&name=${search_value}"`
            );
            const requestTwo = axios.get(
                `/search?type=artist&name=${search_value}`
            );
            const requestThree = axios.get(
                `/search?type=album&name=${search_value}`
            );
            const requestfour = axios.get(
                `/search?type=playlisname&name=${search_value}`
            );
*/
            const requestOne = axios.get("/search/top");
            const requestTwo = axios.get("/search/artist");
            const requestThree = axios.get("/search/album");
            const requestfour = axios.get("/search/playlist");

            axios
                .all([requestOne, requestTwo, requestThree, requestfour])
                .then(
                    axios.spread((...responses) => {
                        const match_valuet = responses[0].data;
                        const match_value = responses[1].data;
                        const match_valuea = responses[2].data;
                        const match_valuep = responses[3].data;

                        // use/access the results
                        console.log(
                            match_valuet,
                            match_value,
                            match_valuea,
                            match_valuep
                        );
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
