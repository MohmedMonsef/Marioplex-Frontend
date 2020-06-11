import axios from "axios";
import store from "../store";
export default {
  namespaced: true,
  state: {
    showModal: false,
    showModalUpload: false,
    showModalClaimArtist: false,
    Artist_Songs: [],
    currentimage: "",
    image_id: "",
    Artist_ID: "",
    showinput: false,
    ArtistName: "",
    ArtistBio: "",
    ArtistGenre: "",
    Album_ID: "",
    showModalCreate: false,
    Albums: {},
  },
  getters: {
    showModal: (state) => {
      return state.showModal;
    },
    showModalUpload: (state) => {
      return state.showModalUpload;
    },
    showModalClaimArtist: (state) => {
      return state.showModalClaimArtist;
    },
    currentimage: (state) => {
      return state.currentimage;
    },
    image_id: (state) => {
      return state.image_id;
    },
    Artist_ID: (state) => {
      return state.Artist_ID;
    },
    showinput: (state) => {
      return state.showinput;
    },
    ArtistName: (state) => {
      return state.ArtistName;
    },
    ArtistBio: (state) => {
      return state.ArtistBio;
    },
    Album_ID: (state) => {
      return state.Album_ID;
    },
    showModalCreate: (state) => {
      return state.showModalCreate;
    },
    Albums: (state) => {
      return state.Albums;
    },
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
        Description: payload.Description,
      });
    },
    OnUpload(state, data) {
      state.Artist_Songs.push({
        Name: data.Name,
        TrackNumber: data.TrackNumber,
        AvailableMarket: data.AvailableMarket,
        selectedfile: data.selectedfile,
        selectedpreview: data.selectedpreview,
      });
    },
    DeleteSong(state, id) {
      state.Artist_Songs.splice(id, 1);
    },
    EditBio() {},
    Editgenre() {},
    EditName() {},
    UploadPhoto(state, id) {
      state.image_id = id;
    },
    Show_Photo() {
    },
    Get_Artist_ID(state, ArtistID) {
      state.Artist_ID = ArtistID;
    },
    Get_Latest_Image_ID(state, imageid) {
      state.image_id = imageid;
    },
    showinputfield(state) {
      state.showinput = !state.showinput;
    },
    Get_Artist_Name(state, ArtistName) {
      state.ArtistName = ArtistName;
    },
    Get_Artist_Bio(state, ArtistBIO) {
      state.ArtistBio = ArtistBIO;
    },
    Get_Artist_Genre(state, ArtistGenre) {
      state.ArtistGenre = ArtistGenre;
    },
    UploadTrack() {},
    Get_Album_ID(state, AlbumID) {
      state.Album_ID = AlbumID;
    },
    toggleModalCreate(state) {
      state.showModalCreate = !state.showModalCreate;
    },
    Create_Album() {},
    Get_Albums(state, albums) {
      state.Albums = albums;
    },
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
      axios
        .post("/api/me/ToArtist", payload)
        .then((response) => {
          const claim = response.status;
          if (claim == 200) {
            commit("logout");
            localStorage.removeItem("x-auth-token");
            delete axios.defaults.headers.common["x-auth-token"];
            commit("ClaimArtistProfile");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    OnUpload({ commit }, payload) {
      const songdata = new FormData();
      songdata.append("URL", payload.selectedfile);
      songdata.get("URL");
      songdata.append("PreviewURL", payload.previewfile);
      songdata.append("Name", payload.Name);
      songdata.append("TrackNumber", payload.TrackNumber);
      songdata.append("AvailableMarket", payload.AvailableMarket);
      axios

        .post("/api/uploadsong", songdata, {
          headers: {
            "Content-Type": "aplication/jason",
          },
        })
        .then(() => {
          const song = this.res.data;
          commit("OnUpload", song);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    DeleteSong({ commit }, id) {
      axios
        .delete(`/api/song/${id}`)
        .then(() => {
          commit("DeleteSong", id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    EditBio({ commit }, payload) {
      axios
        .put("/api/Artist/update", { info: payload.Description })
        .then(() => {
          commit("EditBio");
          store.dispatch("ArtistProperties/Get_Artist_Bio");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    EditGenre({ commit }, payload) {
      axios
        .put("/api/Artist/update", { genre: payload.genre })
        .then(() => {
          commit("EditGenre");
          store.dispatch("ArtistProperties/Get_Artist_Genre");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    EditName({ commit }, payload) {
      axios
        .put("/api/Artist/update", { name: payload.name })
        .then(() => {
          commit("EditName");
          store.dispatch("ArtistProperties/Get_Artist_Name");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    UploadPhoto({ commit }, payload) {
      const photo = new FormData();
      photo.append("image", payload.selphoto);
      axios({
        method: "post",
        url:
          "/api/images/update/" +
          payload.artist_id +
          "?belongs_to=" +
          payload.belongs_to +
          "&height=" +
          payload.height +
          "&width=" +
          payload.width,
        data: photo,
      })
        .then((res) => {
          commit("UploadPhoto");
          const image_id = res.data.imageId;
          commit("Get_Latest_Image_ID", image_id);
          store.dispatch("ArtistProperties/Show_Photo", image_id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Show_Photo({ commit }, image_id) {
      axios
        .get("/api/images/" + image_id + "?belongs_to=artist")
        .response(() => {
          commit("Show_Photo");
        });
    },
    Get_Artist_ID({ commit }) {
      axios
        .get("/api/me/artist")
        .then((res) => {
          const ArtistID = res.data._id;
          commit("Get_Artist_ID", ArtistID);
          store.dispatch("ArtistProperties/Get_Latest_Image_ID", ArtistID);
          store.dispatch("ArtistProperties/Get_Albums", ArtistID);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Get_Latest_Image_ID({ commit }, artist_id) {
      axios
        .get("/api/images/get_id/" + artist_id + "?belongs_to=artist")
        .then((res) => {
          const imageid = res.data.imageId;
          commit("Get_Latest_Image_ID", imageid);
          store.dispatch("ArtistProperties/Show_Photo", imageid);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showinputfield({ commit }) {
      commit("showinputfield");
    },
    Get_Artist_Name({ commit }) {
      axios
        .get("/api/me/artist")
        .then((res) => {
          const ArtistName = res.data.Name;
          commit("Get_Artist_Name", ArtistName);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Get_Artist_Bio({ commit }) {
      axios
        .get("/api/me/artist")
        .then((res) => {
          const ArtistBIO = res.data.info;
          commit("Get_Artist_Bio", ArtistBIO);
        })
        .catch((err) => {
          console.lod(err);
        });
    },
    Get_Artist_Genre({ commit }) {
      axios
        .get("/api/me/artist")
        .then((res) => {
          const ArtistGenre = res.data.genre;
          commit("Get_Artist_Genre", ArtistGenre);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    UploadTrack({ commit }, payload) {
      const high = new FormData();
      high.append("image", payload.highselectedfile);
      const medium = new FormData();
      medium.append("image", payload.mediumselectedfile);
      const low = new FormData();
      low.append("image", payload.lowselectedfile);
      const high_enc = new FormData();
      high_enc.append("image", payload.high_enc_selectedfile);
      const medium_enc = new FormData();
      medium_enc.append("image", payload.medium_enc_selectedfile);
      const low_enc = new FormData();
      low_enc.append("image", payload.low_enc_selectedfile);
      const review = new FormData();
      review.append("image", payload.selectedpreview);
      axios({
        method: "post",
        url:
          "/api/artists/me/albums/" +
          payload.AlbumID +
          "/tracks?name=" +
          payload.Name +
          "&availableMarkets=" +
          payload.AvailableMarket +
          "&trackNumber=" +
          payload.TrackNumber +
          "&duration=21.7&key=a4631a153a443df9eed0593043db7519&keyId=f3c5e0361e6654b28f8049c778b23946&genres=" +
          payload.Genre,
        data: {
          high,
          medium,
          low,
          high_enc,
          medium_enc,
          low_enc,
          review,
        },
      })
        .then(() => {
          commit("UploadTrack");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleModalCreate({ commit }) {
      commit("toggleModalCreate");
    },
    Create_Album({ commit }, payload) {
      axios
        .put("api/Artists/me/Albums", {
          name: payload.Name,
          label: payload.label,
          albumtype: payload.type,
          releaseDate: payload.relasedate,
          availablemarkets: payload.AvailableMarket,
          genre: payload.Genre,
        })
        .then(() => {
          commit("Create_Album");
          store.dispatch("ArtistProperties/Get_Albums");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Get_Albums({ state, commit }) {
      let Artist_ID = state.Artist_ID;
      console.log("artist idddddddd in artist propertis:", Artist_ID);
      axios
        .get("api/Artists/" + Artist_ID + "/Albums")
        .then((res) => {
          const Albums = res.data;
          console.log("albums in artist propertis:", Albums);
          commit("Get_Albums", Albums);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
