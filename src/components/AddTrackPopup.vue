<template>
  <div>
    <CreatePlaylist v-if="show" />
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModalAdd"
        @click="showModalAdd = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModalAdd">
        <button class="cancel" @click="changeModalStateAdd">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <h1 class="title">Add to playlist</h1>
        <button
          class="cratenewplaylist"
          @click="changeModalState(), changeModalStateAdd(), AddTrack()"
        >
          New playlist
        </button>
        <div class="playlistscards">
          <h2 v-if="playlists.length">Playlists</h2>
          <div class="container">
            <div class="row">
              <lib-playlists
                v-for="playlist in playlists"
                :key="playlist.id"
                :images="playlist.images"
                :name="playlist.name"
                :owner="playlist.owner"
                :playlist_id="playlist._id"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
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
  display: block;
  width: 500%;
  height: 100vh;
}
.cratenewplaylist {
  position: fixed;
  top: 20%;
  left: 40%;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 50px;
  width: 250px;
  padding: 8px 34px;
  background-color: #1ed760;
  border-radius: 26px;
  border-color: transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.modal-overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  width: 100%;
  height: 200%;
  background-color: rgba(0, 0, 0, 0);
}
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
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
.cancel {
  position: absolute;
  left: 48%;
  top: 3%;
  display: inline-block;
  background-color: transparent;
  color: #fff;
  border: none;
}
.title {
  position: absolute;
  top: 8%;
  display: block;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.005em;
  color: #fff;
  text-transform: none;
  text-align: center;
  margin: 16px 0;
  width: 100%;
}
h2 {
  position: fixed;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 14px;
  margin-left: 30px;
  margin-top: 38px;
  top: 30%;
  //z-index:9998;
}
.container {
  margin-left: 15px;
  position: fixed;
  top: 40%;
  //z-index:9998;
}
// .row{
//     z-index:9998;
// }
.playlistscards {
  position: fixed;
  top: 40%;
}
</style>
<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import CreatePlaylist from "../components/CreatePlaylist";
import LibPlaylists from "@/components/lib-playlists.vue";
//import LibPlaylistsDefault from "@/components/lib-playlists-default.vue"
export default {
  name: "AddTrackPopup",
  computed: {
    ...mapState({
      show: state => state.creatplaylist.showModal
    }),
    ...mapGetters({
      showModalAdd: "creatplaylist/showModalAdd",
      playlists: "creatplaylist/playlists",
      trackofplaylist: "creatplaylist/trackofplaylist",
      playlistoftrack: "creatplaylist/playlistoftrack"
    })
  },
  methods: {
    changeModalStateAdd() {
      this.$store.dispatch("creatplaylist/toggleModalAdd");
    },
    AddTrack() {
      console.log(
        "to add track in a playlist the playlistid is",
        this.playlistoftrack
      );
      console.log(
        "to add track in a playlist the track is",
        this.trackofplaylist
      );
      let payload = {
        playlistoftrack: this.playlistoftrack,
        trackofplaylist: this.trackofplaylist
      };
      this.$store.dispatch("playlist/AddTrack", payload);
    },
    changeModalState() {
      this.$store.dispatch("creatplaylist/toggleModal");
    }
    // showplaylists(){
    //     this.$store.dispatch("creatplaylist/showplaylists");
    // },
  },
  components: {
    CreatePlaylist,
    LibPlaylists
    //  LibPlaylistsDefault,
  },
  mounted() {
    this.$store.dispatch("creatplaylist/showplaylists");
  }
};
</script>
