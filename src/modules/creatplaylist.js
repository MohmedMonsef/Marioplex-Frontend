import axios from "axios";
import store from "../store";
export default {
    namespaced: true,
    state: {
        showModalDelete: false,
        showModal: false, 
        showModalAdd:false,
        todelete:0,
        playlistoftrack:0,
        trackofplaylist:0,      
        Playlists: [],
        loadingplaylists:0
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
        showModalAdd: state => {
            return state.showModalAdd;    
        },
        playlists: state => state.Playlists,
        playlistoftrack:state=>{
            return state.playlistoftrack;
        },
        trackofplaylist:state=> {
            return state.trackofplaylist;
        },
        loadingplaylists: state => state.loadingplaylists,
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
        toggleModalAdd(state,trackid) {
            state.showModalAdd = !state.showModalAdd;
            state.trackofplaylist=trackid;
        },

        CreatePlaylist(state, playlists) {
            state.Playlists.push(
                playlists
            );
            state.playlistoftrack=playlists.id;
            console.log("nori");
        },
        setUserPlaylist(state, playlists) {
            state.Playlists = playlists;
        },
    },
  actions: {
    toggleModalAdd({ commit },trackid) {
      console.log(" id of track in creatplaylist moudle",trackid)
      commit("toggleModalAdd",trackid);
  },
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    toggleModalDelete({ commit }, todeleteid) {
      console.log("in actions");
      commit("toggleModalDelete", todeleteid);
    },
    CreatePlaylist({ commit }, payload) {
      console.log("my payload", payload);
      axios
        .post("/users/playlists", { name: payload.name })
        .then(response => {
          const playlists = response.data;
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
  showplaylists({ commit ,state}) {
      commit("set_loading_playlists", false);
      axios
        .get("/me/playlists")
        .then(response => {
          let playlists = response.data;
          console.log("test function", playlists);
          commit("setUserPlaylist", playlists);
          if(state.loadingplaylists == 0){
            state.loadingplaylists =1;
          }
        })
        .catch(error => {
          if(state.loadingplaylists == 0){
            state.loadingplaylists = 1;
          }
          console.log(error);
        });
    },
    DeletePlaylist({ state }) {
      var to_del;
      if (typeof state.todelete._id == "undefined")
           to_del = state.todelete.id;
      else to_del = state.todelete._id;
      axios
        .delete("/me/delete/playlists/" + to_del)
        .then(response => {
          console.log(response.data);
          console.log("wsl");
          store.dispatch("creatplaylist/showplaylists");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
