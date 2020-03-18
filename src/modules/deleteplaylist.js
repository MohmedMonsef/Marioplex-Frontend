import axios from "axios";
export default(
{
    namespaced:true,
    state: {
        
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
        
      },
      mutations: {
        
        DeletePlaylist(state, id) {
          state.Playlists.splice(id, 1);
        }
      },
      actions: {
        DeletePlaylist({ commit }, id) {
          axios
            .delete(`/api/playlist/${id}`)
            .then(response => {
              //const deletedplaylist=response.data.id;
              //deletedplaylist.Playlists.destroy();
              console.log(response.data);
              console.log("wsl");
              // response.Playlists.find(id).destroy();
              // response.Playlists.splice(id, 1)
              commit("DeletePlaylist", id);
            })
            .catch(error => {
              console.log(error);
            });
        },
    
       
        
      },
      
     
})
