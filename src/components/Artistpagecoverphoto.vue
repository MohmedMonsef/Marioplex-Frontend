<template>
  <div class="ArtistProfile">
    <div class="image"></div>
      <div class="coverphotoinfo">
      <h1 class="Artistname" id="artistname">{{artist_name}}</h1>
      <button
        v-if="!play"
        class="playbutton"
        id="playbutton"
        @click="playSong(), isplaying()">
        PLAY
      </button>
      <button
        v-if="play"
        class="pausebutton"
        id="pausebutton"
        @click="pauseSong(), stopplaying()">
        PAUSE
      </button>
      <button
        v-if="!followed"
        class="followartistbutton"
        id="followartistbutton"
        @click="followartist()">
        FOLLOW
      </button>
      <button
        v-if="followed"
        class="unfollowartistbutton"
        id="unfollowartistbutton"
        @click="followartist()">
        UNFOLLOW
      </button>
      <artistnavbar/>
    </div>
    <div class="toast" id="artistliketoast" testid="artistliketoast"></div>
  </div>
</template>

<style lang="scss" scoped>
.ArtistProfile{
    height: 350px;
    margin: 0px;
    padding: 0px;
    top: 0%;
    position: relative;
}
.image{
   width: 100%;
   height: 100%;
   background: linear-gradient(to top,#161516 , #161510 8% , transparent), url("../assets/island.png") no-repeat center; 
   background-size: cover; 
}
.coverphotoinfo{
    top: 34%;
    position: absolute;
}
.Artistname {
  margin: 20px;
  margin-bottom: 18px;
  font-size: 72px;
  line-height: 82px;
  letter-spacing: -0.005em;
  font-weight: bold;
  color: #fff;
  text-transform: none;
  position: relative;
}
button {
  background-color: transparent;
  border: none;
  padding: 10px;
  position: relative;
}
.playbutton,
.pausebutton {
  background-color: #1ed760;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
  border-radius: 500px;
  color: #fff;
  transition: all 33ms cubic-bezier(0.3, 0, 0, 1);
  will-change: transform;
  white-space: nowrap;
  padding: 8px 34px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin-right: 15px;
  margin-left: 20px;
}
.followartistbutton,
.unfollowartistbutton {
  margin-right: 15px;
  background-color: transparent;
  border: 1px solid #535353;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
  border-radius: 500px;
  color: #fff;
  transition: all 33ms cubic-bezier(0.3, 0, 0, 1);
  will-change: transform;
  white-space: nowrap;
  padding: 8px 34px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}
.playbutton:hover,
.pausebutton:hover {
  transform: scale(1.06);
}
.followartistbutton:active,.unfollowartistbutton:active,.playbutton:active,.pausebutton:active{
transform: scale(1.06);
}
.unfollowartistbutton {
  color: #1db954;
}
button:focus {
  outline: 0 !important;
}
.toast {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  left: 50%;
  bottom: 100px;
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
import { default as song_functions } from "../javascript/mediaplayer_script.js";
import { mapGetters } from "vuex";
import artistnavbar from "@/components/Artistnavbar.vue";
const toast = {
  show(message) {
    var mytoast = document.getElementById("artistliketoast");
    //cleartimeout used to reset the 3 seconds every time so not to override time when open another one while the first one is still shown
    clearTimeout(mytoast.hideTimeout);
    mytoast.textContent = message;
    mytoast.className = "toast toast--visible";
    mytoast.hideTimeout = setTimeout(() => {
      mytoast.classList.remove("toast--visible");
    }, 2000);
    console.log("message", message);
  }
};
export default {
  data: function() {
    return {
      play: false
    };
  },
   components: {
    artistnavbar
  },
  mixins: [song_functions],
  name: "artist_coverimage",
  methods: {
    isplaying: function() {
      this.play = true;
    },
    stopplaying: function() {
      this.play = false;
    },
    followartist: function() {
      if (!this.followed) {
        toast.show("Saved to Your Library");
        this.$store.dispatch("artistpage/follow_artist",this.$route.params.artist_id);
      } 
      else {
        toast.show("Removed from Your Library");
        this.$store.dispatch("artistpage/unfollow_artist",this.$route.params.artist_id);
      }
    }
  },
  computed: {
    ...mapGetters({
      playicon: "mediaplayer/playicon",
      artist_name: "artistpage/artist_name",
      album_image: "artistpage/artistcover_image",
      followed: "artistpage/followartist"
    })
  }
};
</script>
