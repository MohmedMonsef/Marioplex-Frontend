import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; //uncomment when you start with axios

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    showModal: false,
    Playlists: [
      {
        playlistname: "Amr",
        id: 1
      },
      {
        playlistname: "shreen",
        id: 2
      }
    ]
  },
  getters: {
    showModal: state => {
      return state.showModal;
    }
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },

    CreatePlaylist(state, id, playlists) {
      // state.Playlists.playlistsname=payload;

      state.Playlists.push({
        id: id,
        playlistname: playlists
      });
      console.log("nori");
    },
  /*  DeletePlaylist(state, id) {
      state.Playlists.$remove(Playlists => (id = Playlists.id));
    }*/
    DeletePlaylist(state,id){
     state.Playlists.splice(id,1);
    }
  },
  actions: {
    DeletePlaylist({commit},id){
      axios
      .delete(`/api/playlist/${id}`)    
      .then(response=>{
        //const deletedplaylist=response.data.id;
         //deletedplaylist.Playlists.destroy();
         console.log(response.data);
         console.log("wsl");
       // response.Playlists.find(id).destroy();
      // response.Playlists.splice(id, 1)
      commit("DeletePlaylist",id);
      })
      .catch(error => {
        console.log(error);
      });
    },

    CreatePlaylist({ commit }, payload) {
      axios
        .post("/api/playlists", { data: payload })
        .then(response => {
          const playlists = response.data.payload;
          var id = response.data.id;
          console.log("wsl");
          commit("CreatePlaylist", id, playlists);
        })
        .catch(error => {
          console.log(error);
        });
    },
  /*  DeletePlaylist({ commit }, id) {
      axios.delete(`/api/playlists/${id}`).then(response => {
        var id = response.params.id;  
        response.Playlists.find(id).destroy();
        commit("DeletePlaylist", id);
      });
    }*/
  },
  /* mutations: {
    setplaylists(state, playlists) {
      state.Playlists = playlists;
    },
    newplaylist(state, id, playlists) {
      state.Playlists.push({
        id: id,
        Playlists: playlists.Playlists,
       
      });
    }
  },
  actions: {
    RenderPlaylists({ commit }) {
      axios
        .get("/api/playlists")
        .then(response => {
          let playlists = response.data;
          commit("setplaylists", playlists);
        })
        .catch(error => {
          console.log(error);
        });
    },
    AddPlaylists({ commit }, playlist) {
      axios
        .post("/api/playlists", { data: playlist })
        .then(response => {
          const playlists = response.data.playlist;
          var id = response.data.id;
          commit("newUser", id, playlists);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },*/
  modules: {}
});
0;
