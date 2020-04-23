//import axios from "axios";

import axios from "axios";

//import store from "../store";
export default {
  namespaced: true,
  state: {
    showModal: false,
    showModalUpload: false
  },
  getters: {
    showModal: state => {
      return state.showModal;
    },
    showModalUpload: state => {
      return state.showModalUpload;
    }
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    toggleModalUpload(state) {
      state.showModalUpload = !state.showModalUpload;
    },
    EditBio() {},
    Editgenre() {},
    EditName() {},
    UploadPhoto() {}
  },
  actions: {
    toggleModalUpload({ commit }) {
      commit("toggleModalUpload");
    },
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    EditBio({ commit }, payload) {
      console.log("in artist properties module", payload.Description);
      axios.put("/api/Artist/update", { info: payload.Description })
        .then(response => {
          console.log(response);
          commit("EditBio");
        })
        .catch(error => {
          console.log(error);
        });
    },
    EditGenre({ commit }, payload) {
      axios.put("/api/Artist/update", { genre: payload.genre })
        .then(response => {
          console.log(response);
          commit("EditGenre");
        })
        .catch(error => {
          console.log(error);
        });
    },
    EditName({ commit }, payload) {
      axios.put("/api/Artist/update", { name: payload.name })
        .then(response => {
          console.log(response);
          commit("EditName");
        })
        .catch(error => {
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
      const photo=new FormData();
      photo.append("image",payload.selphoto); 
     for (var key of photo.entries()) {
			console.log("in artist properties module formdata",key[0] , key[1])
    }
    // const config = {
    //   headers: {
    //       'content-type': 'multipart/form-data'
    //   }
  //}
        //console.log
      axios
      ({
        method:"post",
        url:"http://localhost:3000/api/images/upload/5e8cb7037f37604d583f8d22"+"?belongs_to="+ payload.belongs_to+"&height="+payload.height+"&width="+ payload.width,
        data:photo,
      })
      .then(res => {
          console.log(res);
          commit("UploadPhoto");
          //store.dispatch("artistproperties/GetPhoto",)
        })
        .catch(error => {
          console.log(error);
        });
        // .post("http://localhost:3000/api/images/upload/5e8cb7037f37604d583f8d22"+"?belongs_to="+ payload.belongs_to+"&height="+payload.height+"&width="+ payload.width,
        //     {photo}
        //   // ,{
        //   //   headers: {
        //   //       'Content-Type': 'multipart/form-data'
        //   //   }
        //   // }
        // )
        // .then(res => {
        //   console.log(res);
        //   commit("UploadPhoto");
        //   //store.dispatch("artistproperties/GetPhoto",)
        // })
        // .catch(error => {
        //   console.log(error);
        // });
//     var myHeaders = new Headers();
// myHeaders.append("x-auth-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NDc2ODgyLCJleHAiOjQ3MzM5NjMyODJ9.SQ8WnmuZAID3dMHW-iWC8F9AZ8_-sVeCoJHhoD_gBco");
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: photo,
//   redirect: 'follow'
// };
// fetch("http://localhost:3000/api/images/upload/5e8cb7037f37604d583f8d22"+"?belongs_to="+ payload.belongs_to+"&height="+payload.height+"&width="+ payload.width, requestOptions)
//   .then(response => {response.text();
//     commit("UploadPhoto")})
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//     }
    // GetPhoto({commit},){

   }
  }
};
