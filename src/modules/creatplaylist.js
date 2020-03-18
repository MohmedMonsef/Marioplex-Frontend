import axios from "axios";
export default(
{
    namespaced:true,
    state: {
        showModal: true,
        Playlists: [
         /* {
            playlistname: "Amr",
            id: 1
          },
          {
            playlistname: "shreen",
            id: 2
          }*/
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
    
        CreatePlaylist(state,{ id, playlists}) {
          // state.Playlists.playlistsname=payload;
    
          state.Playlists.push({
            id: id,
            playlistname: playlists
          });
          console.log("nori");
        },
       
      },
      actions: {
        
        toggleModal({commit}) {
            commit("toggleModal");
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
        }
        
      },
      
     
})
