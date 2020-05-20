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
      console.log("nori", this.users);
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
      // state.currentimage=image
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
      console.log("in mutations artistname", state.ArtistName);
    },
    Get_Artist_Bio(state, ArtistBIO) {
      state.ArtistBio = ArtistBIO;
    },
    Get_Artist_Genre(state, ArtistGenre) {
      state.ArtistGenre = ArtistGenre;
    },
    UploadTrack() {},
    Get_Album_ID(state, AlbumID) {
      state.AlbumID = AlbumID;
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
      console.log("wslllllll", payload);
      axios
        .post("/api/me/ToArtist", payload)
        .then((response) => {
          const claim = response.status;
          if (claim == 200) {
            commit("logout");
            localStorage.removeItem("x-auth-token");
            delete axios.defaults.headers.common["x-auth-token"];
            //console.log("wsl", claim);
            commit("ClaimArtistProfile");
          }
        })
        .catch((error) => {
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
            "Content-Type": "aplication/jason",
            // 'Content-Type': 'multipart/form-data'
          },
        })
        .then((res) => {
          console.log(res);
          console.log("SUCCESS!!");
          const song = this.res.data;
          commit("OnUpload", song);
        })
        .catch((error) => {
          console.log("FAILURE!!");
          console.log(error);
        });
    },
    DeleteSong({ commit }, id) {
      axios
        .delete(`/api/song/${id}`)
        .then((response) => {
          console.log(response.data);
          console.log("wsl");
          commit("DeleteSong", id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /* EditBio({commit},payload){

    },*/
    EditBio({ commit }, payload) {
      console.log("in artist properties module", payload.Description);
      axios
        .put("/api/Artist/update", { info: payload.Description })
        .then((response) => {
          console.log(response);
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
        .then((response) => {
          console.log(response);
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
        .then((response) => {
          console.log(response);
          commit("EditName");
          store.dispatch("ArtistProperties/Get_Artist_Name");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    UploadPhoto({ commit }, payload) {
      console.log("in artist properties module artist id", payload.artist_id);
      console.log(
        "in artist properties module belongs to ",
        payload.belongs_to
      );
      console.log("in artist properties module height", payload.height);
      console.log("in artist properties module width", payload.width);
      console.log("in artist properties module formdata", payload.selphoto);
      const photo = new FormData();
      photo.append("image", payload.selphoto);
      for (var key of photo.entries()) {
        console.log("in artist properties module formdata", key[0], key[1]);
      }
      // const config = {
      //   headers: {
      //       'content-type': 'multipart/form-data'
      //   }
      //}
      //console.log
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
          console.log(res);
          commit("UploadPhoto");

          const image_id = res.data.imageId;
          commit("Get_Latest_Image_ID", image_id);
          // let payload={
          //   image_id:res.imageId,
          //   belongs_to:"artist",
          // }
          store.dispatch("ArtistProperties/Show_Photo", image_id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Show_Photo({ commit }, image_id) {
      console.log("image id in artist properties module", image_id);
      axios
        .get("/api/images/" + image_id + "?belongs_to=artist")
        .response((res) => {
          console.log(res);
          // const image=res
          commit("Show_Photo");
        });
    },
    Get_Artist_ID({ commit }) {
      console.log("should call in module get the artist id here");
      axios
        .get("/api/me/artist")
        .then((res) => {
          console.log("should get the artist id here", res);
          const ArtistID = res.data._id;
          // const ArtistName=res.data.Name;
          // commit("Get_Artist_Name",ArtistName);
          console.log(
            " should in module artistproperties artist id from get artist id function",
            ArtistID
          );
          commit("Get_Artist_ID", ArtistID);
          store.dispatch("ArtistProperties/Get_Latest_Image_ID", ArtistID);
          store.dispatch("ArtistProperties/Get_Album_ID", ArtistID);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Get_Latest_Image_ID({ commit }, artist_id) {
      console.log("i'm gitting image id in module");
      console.log("i'm gitting image id in module the artist id is", artist_id);
      axios
        .get("/api/images/get_id/" + artist_id + "?belongs_to=artist")
        .then((res) => {
          console.log("i'm gitting image id in module res", res);
          const imageid = res.data.imageId;
          console.log("the image id from db in module", imageid);
          commit("Get_Latest_Image_ID", imageid);
          store.dispatch("ArtistProperties/Show_Photo", imageid);

          // dispatch("")
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showinputfield({ commit }) {
      commit("showinputfield");
    },
    Get_Artist_Name({ commit }) {
      console.log("should call in module get the artist id here");
      axios
        //.get("http://localhost:3000/api/me/artist")
        .get("/api/me/artist")
        .then((res) => {
          console.log("should get the artist id here", res);
          const ArtistName = res.data.Name;
          console.log(
            "in module artistproperties artist id from get artist id function",
            ArtistName
          );
          commit("Get_Artist_Name", ArtistName);
        })
        .catch((err) => {
          console.lod(err);
        });
    },
    Get_Artist_Bio({ commit }) {
      console.log("should call in module get the artist id here");
      axios
        .get("/api/me/artist")
        .then((res) => {
          console.log("should get the artist id here", res);
          const ArtistBIO = res.data.info;
          console.log(
            "in module artistproperties artist id from get artist id function",
            ArtistBIO
          );
          commit("Get_Artist_Bio", ArtistBIO);
        })
        .catch((err) => {
          console.lod(err);
        });
    },
    Get_Artist_Genre({ commit }) {
      console.log("should call in module get the artist id here");
      axios
        .get("/api/me/artist")
        .then((res) => {
          console.log("should get the artist id here", res);
          const ArtistGenre = res.data.genre;
          console.log(
            "in module artistproperties artist id from get artist id function",
            ArtistGenre
          );
          commit("Get_Artist_Genre", ArtistGenre);
        })
        .catch((err) => {
          console.lod(err);
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
          "/api/artists/me/albums/5eb0a7efec0c444e9c48985f/tracks?name=" +
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
        .then((res) => {
          console.log(res);
          commit("UploadTrack");
        })
        .catch((error) => {
          console.log(error);
        });
      //post("/api/artists/me/albums/"+5eb0a8b4ec0c444e9c48986e+"/tracks?")
    },
    Get_Album_ID(state, { commit }) {
      let Artist_ID = state.Artist_ID;
      axios
        .get("api/Artists/" + Artist_ID + "/Albums")
        .then((res) => {
          const AlbumID = res.data._id;
          commit("Get_Album_ID", AlbumID);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
