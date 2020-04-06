import axios from "axios";
export default {
  namespaced: true,
  state: {
    Artist_Songs: []
  },
  getters: {},
  mutations: {
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
  }
};
