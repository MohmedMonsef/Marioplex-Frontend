import axios from "axios";
//import store from "../store";
export default {
  namespaced: true,
  state: {
    showModal: false,
    showModalUpload: false,
    showModalClaimArtist: false,
    Artist_Songs: []
  },
  getters: {
    showModal: state => {
      return state.showModal;
    },
    showModalUpload: state => {
      return state.showModalUpload;
    },
    showModalClaimArtist: state => {
      return state.showModalClaimArtist;
    }
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    toggleModalUpload(state) {
      state.showModalUpload = !state.showModalUpload;
    },
    toggleModalClaim(state) {
      state.showModalClaimArtist = !state.showModalClaimArtist;
    },
    ClaimArtistProfile(state, payload) {
      state.user.push({
        id: payload.id,
        Name: payload.name,
        Genre: payload.Genre,
        Description: payload.Description
      });
      console.log("nori", this.users);
    },
    OnUpload(state, data) {
      state.Artist_Songs.push({
        Name: data.Name,
        TrackNumber: data.TrackNumber,
        AvailableMarket: data.AvailableMarket,
        selectedfile: data.selectedfile,
        selectedpreview: data.selectedpreview
      });
    },
    DeleteSong(state, id) {
      state.Artist_Songs.splice(id, 1);
    }
  },
  actions: {
    toggleModalUpload({ commit }) {
      commit("toggleModalUpload");
    },
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    toggleModalClaim({ commit }) {
      commit("toggleModalClaim");
    },
    ClaimArtistProfile({ commit }, payload) {
      console.log("wslllllll", payload);
      axios
        .post("/api/me/ToArtist", payload)
        .then(response => {
          const claim = response.status;
          if (claim == 200) {
            commit("logout");
            localStorage.removeItem("x-auth-token");
            delete axios.defaults.headers.common["x-auth-token"];
            //console.log("wsl", claim);
            commit("ClaimArtistProfile");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    OnUpload({ commit }, payload) {
      console.log(payload, "in OnUpload js");
      const songdata = new FormData();
      console.log(songdata, "in OnUpload js");
      songdata.append("URL", payload.selectedfile);
      songdata.get("URL");
      songdata.append("PreviewURL", payload.previewfile);
      songdata.append("Name", payload.Name);
      console.log(payload.Name, "in OnUpload js");
      songdata.append("TrackNumber", payload.TrackNumber);
      songdata.append("AvailableMarket", payload.AvailableMarket);
      // console.log(songdata.getAll());

      axios

        .post("/api/uploadsong", songdata, {
          headers: {
            "Content-Type": "aplication/jason"
            // 'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log(res);
          console.log("SUCCESS!!");
          const song = this.res.data;
          commit("OnUpload", song);
        })
        .catch(error => {
          console.log("FAILURE!!");
          console.log(error);
        });
    },
    DeleteSong({ commit }, id) {
      axios
        .delete(`/api/song/${id}`)
        .then(response => {
          console.log(response.data);
          console.log("wsl");
          commit("DeleteSong", id);
        })
        .catch(error => {
          console.log(error);
        });
    }
    /* EditBio({commit},payload){

    }*/
  }
};
