<template>
  <div>
    <div
      class="card rounded col-lg-25%"
      testid="playlist card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="AddTrackToExsistPlaylist(), changeModalStateAdd()"
    >
      <img
        class="card-img-top mx-auto d-block"
        src="../assets/defaultplaylist.png"
        alt="Card image"
        id="cardimg"
        testid="playlist image"
      />
      <div class="card-body" id="cardbody" testid="playlist card body">
        <h4 class="card-title" id="cardtitle" testid="playlist name">
          {{ name }}
        </h4>
        <div class="stretched-link" id="carglink" testid="playlistcard "></div>
      </div>
    </div>
    <div class="toast" id="addtracktoast" testid="addtracktoast"></div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  background: transparent;
  width: 100%;
  height: 100%;
  margin-left: 15px;
  margin-top: 15px;
}
#cardimg {
  width: 100%;
  height: 80%;
}
h4 {
  position: relative;
  top: 0%;
  font-size: 14px;
  font-weight: bold;
  color: white;
  // margin-bottom: 4px;
}
.toast {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  left: 50%;
  top: -55px;
  margin: auto;
  min-width: 300px;
  background-color: rgb(8, 118, 243);
  padding: 10px;
  color: white;
  text-align: center;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 0 10 rgb(9, 76, 131);
  transition: opacity 0.2s, visibility 0.2s;
  font-size: 15px;
}
.toast--visible {
  visibility: visible;
  opacity: 1;
}
</style>
<script>
import { mapGetters } from "vuex";
import { default as song_functions } from "../javascript/mediaplayer_script.js";
const toast = {
  show(message) {
    var mytoast = document.getElementById("liketoast");
    //cleartimeout used to reset the 3 seconds every time so not to override time when open another one while the first one is still shown
    clearTimeout(mytoast.hideTimeout);
    mytoast.textContent = message;
    mytoast.className = "toast toast--visible";
    mytoast.hideTimeout = setTimeout(() => {
      mytoast.classList.remove("toast--visible");
    }, 2000);
  },
};
/**
 * @displayName Playlist To add Track
 * @example [none]
 */
export default {
  data: function() {
    return {
      hover: false,
    };
  },
  name: "PlaylistsToTracks",
  props: ["name", "playlist_id", "tracksnum"],
  mixins: [song_functions],
  computed: {
    ...mapGetters({
      trackid: "Playlist/trackid",
    }),
  },
  methods: {
    /**
     * Add track to existing playlist
     * @public This is a public method
     */
    AddTrackToExsistPlaylist() {
      let payload = {
        trackid: this.trackid,
        playlistid: this.playlist_id,
      };
      console.log("in card track", this.trackid);
      console.log("in card playlist", payload.playlistid);
      this.$store.dispatch("Playlist/AddTrackToExsistPlaylist", payload);
    },
    /**
     * Closes popup of adding track
     * @public This is a public method
     */
    changeModalStateAdd() {
      this.$store.dispatch("Playlist/toggleModalAdd");
      toast.show("Added to your library");
    },
  },
};
</script>
