import axios from "axios";
export default {
    namespaced: true,
    state: { 
        result: [],
        type: "artist"
    },
    mutations: {
        setresult(state, match_value) {
            state.result = match_value;
        }
    },
    actions: {
        searchaboutartist({ commit }, search_value) {
            axios.get(`/api/artist/:${search_value}`).then(response => {
                let ressearch = response.data;
                console.log(ressearch);
                /*  for (let i = 0; i < ressearch.length; i++) {
                    if (ressearch[i].name === search_value) {
                        match_value.push(ressearch[i]);
                    }
                }*/
                let match_value = ressearch;
                console.log(match_value);
                console.log(search_value);
                commit("setresult", match_value);
            });
        }
    },
    getters: {
        getresult(state) {
            return state.result;
        }
    }
};
