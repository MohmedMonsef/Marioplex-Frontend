<template>
  <div class="likedtracks_info">
    <div class="image" @mouseover="onhoverimage()" @mouseleave="onleaveimage()">
      <img
        src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        alt="likedtracks_image"
        class="likedtracks_image"
        id="likedtracks_image"
      />
      <i
        v-if="!play"
        class="fa fa-play"
        id="imageplayicon"
        testid="imageplayicon"
        @click="playSong(), isplaying()"
      >
      </i>
      <i
        v-if="play"
        class="fa fa-pause"
        id="imagepauseicon"
        testid="imagepauseicon"
        @click="pauseSong(), stopplaying()"
      >
      </i>
    </div>
    <div>
      <span data-toggle="tooltip" title="Liked Songs">
        <h2 class="likedtracksname" testid="likedtracksname">Liked Songs</h2>
      </span>

      <router-link to="/" id="owner_name" testid="ownername">{{
        owner_name
      }}</router-link>
    </div>
    <button
      v-if="!play"
      class="playbutton"
      testid="playbutton"
      @click="playSong(), isplaying()"
    >
      PLAY
    </button>
    <button
      v-if="play"
      class="pausebutton"
      testid="pausebutton"
      @click="pauseSong(), stopplayingbutton()"
    >
      PAUSE
    </button>
    <p class="length" testid="likedtrackslength">
      {{ likedtracks_length }} SONGS
    </p>
  </div>
</template>

<style lang="scss" scoped>
.likedtracks_info {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
}
.likedtracks_image {
  height: 350px;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.likedtracksname {
  font-weight: bold;
  color: white;
  margin: 25px;
  margin-bottom: 10px;
}
button {
  background-color: transparent;
  border: none;
  padding: 10px;
}
.playbutton,
.pausebutton {
  background-color: #1ed760;
  border-radius: 500px;
  width: 120px;
  height: 35px;
  padding: 8px 34px;
  display: inline-block;
  color: white;
  margin: 25px 25px 0px 25px;
  align-content: center;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
}
.playbutton:hover,
.pausebutton:hover {
  transform: scale(1.06);
}
button:focus {
  outline: 0 !important;
}
.image {
  position: relative;
  text-align: center;
  align-content: center;
  display: flex;
  justify-content: center;
  #imageplayicon,
  #imagepauseicon {
    opacity: 0;
    position: absolute;
    font-size: 70px;
    font-weight: 1px;
    top: 130px;
    text-align: center;
    color: white;
  }
}
#imageplayicon:hover,
#imagepauseicon:hover {
  transform: scale(1.12);
}
p {
  color: #b3b3b3;
  font-size: 12px;
  letter-spacing: 1.76px;
  font-weight: bold;
  font-size: 12px;
}
#owner_name {
  color: #b3b3b3;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.015em;
}
#owner_name:hover {
  color: white;
}
.length {
  margin: 10px;
}
</style>

<script>
import { default as song_functions } from "../javascript/mediaplayer_script.js";
import { mapGetters } from "vuex";
/**
 * apperars when there is tracks in playlist
 * @displayName Liked view
 * @example [none]
 */
export default {
  data: function() {
    return {
      play: false
    };
  },
  mixins: [song_functions],
  name: "likedtracks_info",
  methods: {
    /**
     * Playlist list options(not implemnted yet)
     * @public This is a public method
     */
    isplaying() {
      this.play = true;
      if (this.playicon) {
        var likedtracksimage = document.getElementById("likedtracks_image");
        var pausebutton = document.getElementById("imageplayicon");
        likedtracksimage.style.opacity = "0.3";
        pausebutton.style.opacity = "1";
      }
    },
    /**
     * Pauses current song and changes style
     * @public This is a public method
     */
    stopplayingbutton() {
      this.play = false;
      var likedtracksimage = document.getElementById("likedtracks_image");
      likedtracksimage.style.opacity = "1";
      var playbutton = document.getElementById("imagepauseicon");
      playbutton.style.opacity = "0";
    },
    stopplaying() {
      this.play = false;
    },
    /**
     * changes image style on hover
     * @public This is a public method
     */
    onhoverimage: function() {
      var likedtracksimage = document.getElementById("likedtracks_image");
      likedtracksimage.style.opacity = "0.3";
      if (!this.play) {
        var playbutton = document.getElementById("imageplayicon");
        playbutton.style.opacity = "1";
      } else {
        var pausebutton = document.getElementById("imagepauseicon");
        pausebutton.style.opacity = "1";
      }
    },

    /**
     * returns style to normal(before hover)
     * @public This is a public method
     */
    onleaveimage: function() {
      var likedtracksimage = document.getElementById("likedtracks_image");
      likedtracksimage.style.opacity = "1";

      if (!this.play) {
        var playbutton = document.getElementById("imageplayicon");
        playbutton.style.opacity = "0";
      } else {
        likedtracksimage.style.opacity = "0.3";
        var pausebutton = document.getElementById("imagepauseicon");
        pausebutton.style.opacity = "1";
      }
    }
  },
  computed: {
    ...mapGetters({
      likedtracks_length: "LikedTracks/likedtracks_length",
      playicon: "Mediaplayer/playicon",
      owner_name: "LikedTracks/owner_name"
    })
  }
};
</script>
>
