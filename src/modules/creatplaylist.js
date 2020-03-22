import axios from "axios";
export default {
    namespaced: true,
    state: {
        showModal: false,
        Playlists: []
    },
    getters: {
        showModal: state => {
            return state.showModal;
        },
        playlists: state => state.Playlists
    },
    mutations: {
        toggleModal(state) {
            state.showModal = !state.showModal;
        },

        CreatePlaylist(state, { id, i }) {
            state.Playlists.push({
                id: id,
                playlistname: i
            });
            console.log("nori");
        },
        setUserPlaylist(state, playlists) {
            state.Playlists = playlists;
        }
    },
    actions: {
        toggleModal({ commit }) {
            commit("toggleModal");
        },
        CreatePlaylist({ commit }, payload) {
            axios
                .post("/api/playlists", { data: payload })
                .then(response => {
                    const playlists = response.data;
                    var id = response.data.id;
                    console.log("wsl", playlists);
                    var i = playlists.playlistname;
                    console.log(i, "de i");
                    commit("CreatePlaylist", { id, i });
                })
                .catch(error => {
                    console.log(error);
                });
        },

        showplaylists({ commit }) {
            axios
                .get("/api/playlists")
                .then(response => {
                    let playlists = response.data;
                    console.log("test function", playlists);
                    commit("setUserPlaylist", playlists);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
