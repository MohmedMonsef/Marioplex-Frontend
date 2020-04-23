import axios from "axios";
import store from "../store";
export default {
  namespaced: true,
  state: {
    showModalDelete: false,
    showModal: false,
    todelete: 0,
    Playlists: [],
    loadingplaylists: 0,
    showModalAdd:false,
    trackid:0,
    withtrack:false,
    showinput:false
    //renamepl:0
  },
  getters: {
    showModal: state => {
      return state.showModal;
    },
    todelete: state => {
      return state.todelete;
    },
    showModalDelete: state => {
      // console.log("in getters")
      return state.showModalDelete;
    },
    playlists: state => state.Playlists,
    loadingplaylists: state => state.loadingplaylists,
    showModalAdd: state => {
      // console.log("in getters")
      return state.showModalAdd;
    },
    trackid:state=>{
      return state.trackid;
    },
    withtrack:state=>{
      return state.withtrack;
    },
    showinput:state=>{
      return state.showinput;
    }
  },
  mutations: {
    toggleModal(state,withtrack) {
      console.log("while toggeling in mutations in createplaylist module the bool",withtrack)
      state.showModal = !state.showModal;
       state.withtrack=withtrack;
    },
    toggleModalDelete(state, todeleteid) {
      console.log("in mutations");
      state.showModalDelete = !state.showModalDelete;
      state.todelete = todeleteid;
    },

    CreatePlaylist(state, playlists) {
      state.Playlists.push(
        //id: id,
        // playlistname: i
        playlists
      );
      console.log("nori");
    },
    setUserPlaylist(state, playlists) {
      state.Playlists = playlists;
    },
    ChangePlaylistName(state,payload) {
        state.playlists.update({
          name:payload
        })
    },
    PubPriChange(state,payload){
      state.playlists.push({
        public:payload
      })

    },
    toggleModalAdd(state,trackid){
       state.showModalAdd = !state.showModalAdd;
       state.trackid = trackid;
     },
     showinputfield(state){
       state.showinput=!state.showinput;
     }
  },
  actions: {
    toggleModalAdd({ commit }, trackid) {
      console.log(" id of track in creatplaylist moudle", trackid);
      commit("toggleModalAdd", trackid);
    },
    toggleModal({ commit },withtrack) {
      console.log("while toggeling in actions in createplaylist module the bool",withtrack)
      commit("toggleModal",withtrack);
    },
    toggleModalDelete({ commit }, todeleteid) {
      console.log("in actions");
      commit("toggleModalDelete", todeleteid);
    },
  //  async 
    CreatePlaylist({ commit,state }, payload) {
      console.log("my payload", payload);
      axios
        .post("/api/users/playlists", { name: payload.name })
        .then(response => {
          
          const playlists = response.data;
          let x=response.data._id
          //var id = response.data.id;
          console.log("wsl",x);
          // var i = playlists.playlistname;
          console.log("de i");
          commit("CreatePlaylist", playlists);
          console.log("in createplaylist module the bool ",state.withtrack)
          if(state.withtrack==true){
            let d={
              trackid:state.trackid,
              playlist_id:x
            }
            store.dispatch("playlist/AddTrackToNewPlayList",d)
          }
          // if(this.trackid!=0){
          //   let payload={
          //     playlist_id:playlists.id,
          //     trackid:this.trackid
          //   }
          // await store.dispatch("playlist/AddTrackToExsistPlaylist",payload)
          // }
        })
        .catch(error => {
          console.log(error);
        });
    },
    showplaylists({ commit, state }) {
      axios
        .get("/api/me/playlists")
        .then(response => {
          let playlists = response.data;
          console.log("test function", playlists);
          commit("setUserPlaylist", playlists);
          if (state.loadingplaylists == 0) {
            state.loadingplaylists = 1;
          }
        })
        .catch(error => {
          if (state.loadingplaylists == 0) {
            state.loadingplaylists = 1;
          }
          console.log(error);
        });
    },
    DeletePlaylist({ state }) {
      var to_del;
      if (typeof state.todelete._id == "undefined") to_del = state.todelete.id;
      else to_del = state.todelete._id;
      axios
        .delete("/api/me/delete/playlists/" + to_del)
        .then(response => {
          console.log(response.data);
          console.log("wsl");
          store.dispatch("creatplaylist/showplaylists");
        })
        .catch(error => {
          console.log(error);
        });
    },
    ChangePlaylistName({commit},payload) {
      console.log("in store name", payload.name);
      console.log("in store id", payload.playlist_id);
      axios
        .put("/api/playlists/" + payload.playlist_id, { name: payload.name })
        .then(response => {
          console.log("the response", response);
          commit("ChangePlaylistName",payload.name);
          store.dispatch("creatplaylist/showplaylists");
         
        })
        .catch(error => {
          console.log(error);
        });
    },
   PubPriChange({commit},payload) {
      console.log("in store pubpri", payload.public);
      console.log("in store id", payload.playlist_id);
      axios
        .put("/api/playlists/" + payload.playlist_id, { public: payload.public})
        .then(response => {
          console.log("the response", response);
          commit("PubPriChange",payload.public);
          store.dispatch("creatplaylist/showplaylists");
         
        })
        .catch(error => {
          console.log(error);
        });
    },
    showinputfield({commit}){
      commit("showinputfield")
    }
  },
  
};
