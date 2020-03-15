<template>
  <div>
    <button class="button" @click="changeModalState">
      create playlist
    </button>
    <h1>select element</h1>
    <select id="playlists">
  <option v-for="playlist in Playlists" :key="playlist.id" value=" playlist.playlistname ">{{ playlist.playlistname }}</option>
</select>
   <!--<button class="button" @click.prevent="DeletePlaylist()">delete playlist</button>-->
    <div>
            <ul>
              <li v-for="(playlist,id) in Playlists" :key="playlist.id">{{playlist.playlistname}}
                <span class="Deleteplaylist" @click="DeletePlaylist(id)">x</span>
              </li>
            </ul>
          </div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <div>
          <h4>Playlist Name</h4>
          <input type="text" placeholder="Playlist" v-model="Playlists.playlistname" />
        </div>
        <div>
          <button
            class="button"
            @click.prevent="CreatePlaylist()"
            @click="changeModalState"
          >
            create
          </button>
          <button class="button" @click="changeModalState">
            cancle
          </button>
         <!-- <div>
            <ul>
              <li v-for="playlist in Playlists" :key="playlist.id">
                <span class="playlistname">{{ playlist.playlistname }}</span>
              </li>
            </ul>
          </div>-->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CreatePlaylist",
  //showModal:false,
  components: {},
  computed: {
    Playlists() {
      return this.$store.state.Playlists;
      
    },
    showModal() {
      return this.$store.getters.showModal;
      
    }
  },
  methods: {
    changeModalState() {
      this.$store.commit("toggleModal");
    },

    CreatePlaylist(){
      let payload={
      playlistname:this.Playlists.playlistname,
      };
     console.log("nerd")
     this.$store.dispatch('CreatePlaylist',payload);
    },
    DeletePlaylist(id){
      console.log(id);
      //this.Playlists.splice(id,1);
      //console.log("removed");
     // this.$store.commit('DeletePlaylist',id);
     
     this.$store.dispatch("DeletePlaylist",id);
      console.log("removed");
     // let id=this.Playlists.id;
     // this.$store.dispatch('DeltePlaylist',id);
    }
  },


  /* methods: {
    createplaylist() {
      let payload = {
        playlist: this.playlist,
        
      };
      this.$store.dispatch("createplaylist", payload);
    }
  },*/

  // When the user clicks on <div>, open the popup
  
};
</script>
<style scoped>
* {
  margin: 10;
  padding: 10;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

div {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  height: 100vh;
  overflow-x: hidden;
}

.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
  margin: 20px;
  display:inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #1ed760, #1ed760);
  border-radius: 26px;
  border-color: transparent;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
  top: 50%;
  bottom: 30%;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  height: 20%;
  background-color: #282828;
  border-radius: 0px;
  padding: 25px;
}
input {
  width: 100%;
  height: 10%;
  margin: 10px 10px 10px 10px;
  align-items: center;
  background-color: transparent;
  color:#fff;
   border-color: transparent;

}
ul{
  color:red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
