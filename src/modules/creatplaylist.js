import axios from "axios";
import store from "../store";
export default {
    namespaced: true,
    state: {
        showModalDelete: false,
        showModal: false, 
        todelete:0,      
        Playlists: []
    },
    getters: {
        showModal: state => {
            return state.showModal;    
        },
        todelete:state =>{
            return state.todelete;
        },
        showModalDelete: state => {
           // console.log("in getters")
            return state.showModalDelete;
        },
        playlists: state => state.Playlists
    },
    mutations: {
        toggleModal(state) {
            state.showModal = !state.showModal;
        },
        toggleModalDelete(state,todeleteid) {
            console.log("in mutations")
            state.showModalDelete = !state.showModalDelete;
            state.todelete=todeleteid
        },

        CreatePlaylist(state, playlists) {
            state.Playlists.push(
                playlists
            );
            console.log("nori");
        },
        setUserPlaylist(state, playlists) {
            state.Playlists = playlists;
        },
       // DeletePlaylist(state, id) {
          //  state.Playlists.splice(id, 1);
         // }
    },
    actions: {
        toggleModal({ commit }) {
            commit("toggleModal");
        },
        toggleModalDelete({ commit },todeleteid) {
            console.log("in actions")
            commit("toggleModalDelete",todeleteid);

        },
        CreatePlaylist({ commit }, payload) {
            axios
                .post("/api/playlists", { data: payload })
                .then(response => {
                    const playlists = response.data.Playlists;
                    //var id = response.data.id;
                    console.log("wsl", playlists);
                    // var i = playlists.playlistname;
                    console.log("de i");
                    commit("CreatePlaylist", playlists);
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
        },
        DeletePlaylist({state}) {
            console.log("in module id",state.todelete)
            axios
              .delete("/api/playlist/"+state.todelete)
              .then(response => {
                console.log(response.data);
                console.log("wsl");
                store.dispatch("creatplaylist/showplaylists")
              })
              .catch(error => {
                console.log(error);
              });
          }
        }
    
};
