<template>
  <div class="to_contain">
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
        <button class="cancel" @click="changeModalStateAdd()">
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
        <button class="cratenewplaylist" @click="changeModalState()">
          New playlist
        </button>
        <div class="row">
          <PlaylistsToTracks
            class="userplaylists"
            v-for="playlist in playlists"
            :key="playlist.id"
            :name="playlist.name"
            :playlist_id="playlist.id"
          />
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
  // overflow: hidden;
}
body {
  font-family: "montserrat", sans-serif;
  // overflow-y: hidden;
}

// div {    //DONKEY!!!!!!!!!!!!!!
//   position: rel;
//   display: block;
//   width: 500%;
//   height: 100vh;
// }
.to_contain {
  position: relative;
  // display: block;
  width: 100%;
  height: 100%;
  // height: 100%;
  // height:auto;
  // overflow-y: auto;
}
.cratenewplaylist {
  position: absolute;
  top: 25%;
  left: 40%;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 7%;
  width: 17%;
  // padding: 8px 34px;
  background-color: #1ed760;
  border-radius: 26px;
  border-color: transparent;
  color: #fff;
  font-size: 90%;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.modal-overlay {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
}

.modal {
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: table;
  transition: opacity 0.3s ease;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  overflow: hidden;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  overflow: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
  overflow: hidden;
}
.cancel {
  position: absolute;
  left: 48%;
  top: 20%;
  display: inline-block;
  background-color: transparent;
  color: #fff;
  border: none;
  overflow: hidden;
  z-index: 4;
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
  overflow: hidden;
  z-index: 6;
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
  z-index: 6;
  //z-index:9998;
}
.row {
  position: absolute;
  top: 37%;
  overflow-y: scroll;
  width: 100%;
  height: 63%;
}
.userplaylists {
  z-index: 8;
  margin: 2%;
}
</style>
<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import CreatePlaylist from "../components/CreatePlaylist";
import PlaylistsToTracks from "@/components/PlaylistsToTracks.vue";

//import LibPlaylistsDefault from "@/components/lib-playlists-default.vue"
/**
 * Appears on trying to add new track to playlist(not implemented yet)
 * @displayName Add track popup
 * @example [none]
 */

export default {
  name: "AddTrackPopup",
  computed: {
    ...mapState({
      show: (state) => state.Playlist.showModal,
    }),
    ...mapGetters({
      showModalAdd: "Playlist/showModalAdd",
      playlists: "Playlist/playlists",
      trackid: "Playlist/trackid",
      playlistoftrack: "Playlist/playlistoftrack",
    }),
  },
  methods: {
    changeModalStateAdd() {
      this.$store.dispatch("Playlist/toggleModalAdd");
    },
    // AddTrackToNewPlayList() {
    //   console.log(
    //     "to add track in a playlist the playlistid is",
    //     this.trackid
    //   );
    //   // console.log(
    //   //   "to add track in a playlist the track is",
    //   //   this.trackofplaylist
    //   // );
    //   let payload = {
    //    // playlistoftrack: this.playlistoftrack,
    //     trackid: this.trackid
    //   };
    //   this.$store.dispatch("playlist/AddTrackToNewPlayList", payload);
    // },
    changeModalState() {
      this.withtrack = true;
      console.log("in add track pop up the bool", this.withtrack);
      this.$store.dispatch("Playlist/toggleModal", this.withtrack);
    },
  },
  components: {
    CreatePlaylist,
    PlaylistsToTracks,
  },
  mounted() {
    this.$store.dispatch("Playlist/showplaylists");
  },
  data: function() {
    return {
      withtrack: true,
    };
  },
};
</script>
