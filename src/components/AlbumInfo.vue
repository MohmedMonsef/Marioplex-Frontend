<template>
  <div class="album_info">
    <div
      class="image"
      testid="image"
      @mouseover="onhoverimage()"
      @mouseleave="onleaveimage()"
    >
      <img
        :src="$url + '/api/images/' + album_image + '?belongs_to=album'"
        alt="album_image"
        class="album_image"
        id="album_image"
        testid="album_image"
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
      <span data-toggle="tooltip" :title="album_name">
        <h2 class="albumname" testid="album_name">{{ this.album_name }}</h2>
      </span>

      <router-link to="/HomeWebPlayer" id="artist_name" testid="artist_name">{{
        artist_name
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
    <div class="add-library">
      <button
        class="emptyheartbutton"
        testid="emptyheartbutton"
        v-if="!this.liked"
        @click="likecurrentalbum()"
      >
        <span data-toggle="tooltip" title="Save to Your Library">
          <i
            class="fa fa-heart-o"
            id="emptyhearticon"
            testid="emptyhearticon"
          ></i>
        </span>
      </button>

      <button
        class="filledheartbutton"
        testid="filledheartbutton"
        v-if="this.liked"
        @click="likecurrentalbum()"
      >
        <span data-toggle="tooltip" title="Remove from Your Library">
          <i
            class="fa fa-heart"
            id="filledhearticon"
            testid="filledhearticon"
            style="color: green;"
          ></i>
        </span>
      </button>
      <p testid="albumlength" id="albumlength">{{ album_length }} SONGS</p>
      <div class="toast" id="albumliketoast" testid="albumliketoast"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.album_info {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
}
.album_image {
  height: 350px;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.albumname {
  color: white;
  margin: 25px;
  margin-bottom: 5px;
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
.heartbutton {
  background-color: transparent;
  margin: 10px;
}
button:focus {
  outline: 0 !important;
}
.fa {
  color: white;
  font-size: 25px;
}
.add_library {
  display: flex;
  justify-content: space-between;
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
.db {
  position: absolute;
  background-color: #282828;
  width: 203px;
  z-index: 1;
  border-radius: 0.25rem;
  right: 20px;
  p {
    color: #b3b3b3;
    margin: 0%;
    padding: 10px 20px;
    font-size: 12px;
    height: 38px;
  }
  p:hover {
    background-color: #313030;
    color: #fff;
    cursor: pointer;
  }
}
#artist_name {
  color: #b3b3b3;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.015em;
}
#artist_name:hover {
  color: white;
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
@media screen and (max-width: 1000px) {
  .album_image {
    height: 250px;
    width: 250px;
  }
  .playbutton {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .pausebutton {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .albumname {
    margin-top: 15px;
  }
  .image {
    #imageplayicon,
    #imagepauseicon {
      top: 90px;
    }
  }
}
</style>

<script>
import { default as song_functions } from "../javascript/mediaplayer_script.js";
import { mapGetters } from "vuex";
const toast = {
  show(message) {
    var mytoast = document.getElementById("albumliketoast");
    //cleartimeout used to reset the 3 seconds every time so not to override time when open another one while the first one is still shown
    clearTimeout(mytoast.hideTimeout);
    mytoast.textContent = message;
    mytoast.className = "toast toast--visible";
    mytoast.hideTimeout = setTimeout(() => {
      mytoast.classList.remove("toast--visible");
    }, 2000);
    console.log("message", message);
  },
};
/**
 * Displays Album information
 * @displayName Album information
 * @example [none]
 */
export default {
  data: function() {
    return {
      play: false,
    };
  },
  mixins: [song_functions],
  name: "album_info",
  methods: {
    /**
     * checks if song in currently playing
     * @public This is a public method
     */
    isplaying() {
      if (this.user == "success") {
        this.play = true;
        if (this.playicon) {
          var albumimage = document.getElementById("album_image");
          var pausebutton = document.getElementById("imageplayicon");
          albumimage.style.opacity = "0.3";
          pausebutton.style.opacity = "1";
        }
      }
    },
    /**
     * pause current playing song
     * @public This is a public method
     */
    stopplayingbutton() {
      this.play = false;
      var albumimage = document.getElementById("album_image");
      albumimage.style.opacity = "1";
      var playbutton = document.getElementById("imagepauseicon");
      playbutton.style.opacity = "0";
    },
    /**
     * pause current playing song
     * @public This is a public method
     */
    stopplaying() {
      this.play = false;
    },
    /**
     * changes image appearance on hover
     * @public This is a public method
     */
    onhoverimage: function() {
      var albumimage = document.getElementById("album_image");
      albumimage.style.opacity = "0.3";
      if (!this.play) {
        var playbutton = document.getElementById("imageplayicon");
        playbutton.style.opacity = "1";
        return {
          img: albumimage.style.opacity,
          btn: playbutton.style.opacity,
        };
      } else {
        var pausebutton = document.getElementById("imagepauseicon");
        pausebutton.style.opacity = "1";
        return {
          btn: pausebutton.style.opacity,
        };
      }
    },
    /**
     * Returns image apperance to normal
     * @public This is a public method
     */
    onleaveimage: function() {
      var albumimage = document.getElementById("album_image");
      albumimage.style.opacity = "1";

      if (!this.play) {
        var playbutton = document.getElementById("imageplayicon");
        playbutton.style.opacity = "0";
        return {
          img: albumimage.style.opacity,
          btn: playbutton.style.opacity,
        };
      } else {
        albumimage.style.opacity = "0.3";
        var pausebutton = document.getElementById("imagepauseicon");
        pausebutton.style.opacity = "1";
        return {
          img: albumimage.style.opacity,
          btn: pausebutton.style.opacity,
        };
      }
    },
    /**
     * triggers request to like current album
     * @public This is a public method
     */
    likecurrentalbum: function() {
      if (this.user != "success") {
        this.$store.dispatch("CheckUserPopup/togglepagespopup");
      } else {
        if (!this.liked) {
          toast.show("Saved to Your Library");
          this.$store.dispatch("Album/like_album", this.$route.params.album_id);
        } else {
          toast.show("Removed from Your Library");
          this.$store.dispatch(
            "Album/unlike_album",
            this.$route.params.album_id
          );
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      album_length: "Album/album_length",
      album_name: "Album/album_name",
      playicon: "Mediaplayer/playicon",
      artist_name: "Album/artist_name",
      album_image: "Album/album_image",
      liked: "Album/likealbum",
      user: "Authorization/GetStatus",
    }),
  },
};
</script>
