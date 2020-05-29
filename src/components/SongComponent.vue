<template>
  <div
    class="song"
    id="songComp"
    @click="clicked"
    :class="[{ clicked: isclicked, unPlayable: !canPlay }]"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @dblclick="playOnDblCLk()"
    @click.right="toggleShow"
    testid="singComponent body"
  >
    <div id="icon">
      <i
        v-if="!canPlay || (!hover && !isclicked && !(playicon && isCurrent))"
        class="fa fa-music music_icon"
        testid="music icon"
        :class="[
          {
            unPlayableIcon: !canPlay,
            currently: this.isCurrent && this.canPlay,
          },
        ]"
      ></i>
      <i
        v-if="canPlay && (isclicked || hover) && !(playicon && isCurrent)"
        :class="isCurrentClass"
        @click="playSong()"
        class="fa fa-play"
        testid="play button"
        id="playicon-component"
      >
      </i>
      <i
        v-if="canPlay && playicon && isCurrent && (isclicked || hover)"
        @click="pauseSong()"
        class="fa fa-pause"
        :class="isCurrentClass"
        testid="pause button"
      >
      </i>
      <i
        v-if="canPlay && playicon && isCurrent && !isclicked && !hover"
        class="fa fa-volume-up"
        :class="isCurrentClass"
        testid="volume icon"
      >
      </i>
    </div>
    <div id="song_body">
      <div
        class="song_name"
        testid="song name"
        :class="[
          {
            currently: this.isCurrent && this.canPlay,
            unPlayableIcon: !canPlay,
          },
        ]"
      >
        {{ song_name }}
      </div>
      <div
        class="song_info"
        :class="[
          {
            songUnPlayable: !canPlay,
          },
        ]"
      >
        <div class="s">
          <router-link
            tag="p"
            :to="{ path: '/HomeWebPlayer/ArtistProfile/' + artist_id }"
            class="song_artist"
            testid="artist name"
          >
            {{ song_artists }}
          </router-link>
          <span>
            .
          </span>
        </div>
        <router-link
          tag="p"
          class="song_album"
          testid="album name"
          :to="{ path: '/HomeWebPlayer/album/' + albumId }"
        >
          {{ song_album }}
        </router-link>
      </div>
    </div>
    <div testid="song length" class="song_length" :class="isCurrentClass">
      {{ length }}
    </div>
    <div id="song_options" class="dropdownlist">
      <div id="icondiv" @click="this.toggleShow">
        <i
          id="list_icon"
          v-show="hover"
          class="fa fa-ellipsis-h dots_icon"
          :class="{
            unPlayableIcon: !canPlay,
          }"
        ></i>
      </div>
      <div id="mydropdown" class="db" v-if="show">
        <!-- <p>Start Radio</p> -->
        <p @click="likecurrentsong()" id="ifnotliked" v-if="!isLiked">
          Add to Liked Songs
        </p>
        <p @click="likecurrentsong()" id="ifliked" v-if="isLiked">
          Remove from Liked Songs
        </p>
        <p @click="addToQueue()">Add to Queue</p>
        <p @click="changeModalStateAdd()">Add to Playlist</p>
        <p @click="RemoveFromThisPlaylist()">Remove from this Playlist</p>
      </div>
      <AddTrackPopup v-if="showAdd"></AddTrackPopup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.song {
  min-width: 350px;
  height: 64px;
  margin: 0%;
  padding: 0%;
  display: block;
  line-height: 20px;
  background-color: transparent;
  clear: both;
  overflow: visibility;
  transition-property: background-color;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
}

.clicked {
  background-color: #313030;
}

.db {
  position: absolute;
  background-color: #282828;
  width: 203px;
  padding: 5px 0;
  z-index: 1;
  border-radius: 0.25rem;
  right: 20px;
  p {
    color: darkgray;
    margin: 0%;
    margin-top: 2px;
    padding: 10px 20px;
    font-size: 14px;
    height: 38px;
  }
  p:hover {
    background-color: #313030;

    color: #fff;
    cursor: pointer;
  }
}
.song:hover {
  background-color: #313030;
}
.unPlayable:hover {
  background-color: transparent;
}

#icon {
  width: 43px;
  float: left;
  height: inherit;
  padding-right: 14px;
  padding-top: 10px;
  padding-left: 10px;
}
#song_body {
  float: left;
  margin-top: 10px;
}
#song_options {
  padding-top: 20px;
  float: right;
  width: 65px;
  #icondiv {
    height: 18px;
    width: 15px;
  }
}
#mydropdown {
  position: fixed;
}
.song_info {
  .s {
    display: inline;
    p {
      transition: color 0.2s linear, border 0.2s linear;
      cursor: pointer;
    }
    p:hover {
      color: white;
      border-bottom: white solid 1px;
      cursor: pointer;
    }
    span {
      padding-right: 4px;
    }
  }
  .song_album {
    display: inline;
    color: darkgray;
    cursor: pointer;
    transition: color 0.2s linear, border 0.2s linear;
  }
  .song_album:hover {
    color: white;
    cursor: pointer;
    border-bottom: white solid 1px;
  }
}
.songUnPlayable {
  .s {
    display: inline;
    p {
      color: rgb(102, 95, 95);
      cursor: pointer;
    }
    p:hover {
      color: rgb(139, 133, 133);
      border-bottom: rgb(139, 133, 133) solid 1px;
      cursor: pointer;
    }
    span {
      padding-right: 4px;
    }
  }
  .song_album {
    display: inline;
    color: rgb(102, 95, 95);
  }
  .song_album:hover {
    color: rgb(139, 133, 133);
    border-bottom: rgb(139, 133, 133) solid 1px;
  }
}
.song_length {
  float: right;
  text-align: right;
  padding-right: 14px;
  padding-top: 12px;
  width: 55px;
  height: inherit;
  color: darkgray;
}
.song_name {
  display: inline-block;
  height: 20px;
  color: #fff;
}
.song_artist {
  display: inline-block;
  height: 20px;
  color: darkgray;
}
.dots_icon {
  text-align: center;
  font-size: 18px;
  color: white;
  cursor: pointer;
}
.music_icon {
  color: darkgray;
}
.currently {
  color: #1db954;
}
.unPlayableIcon {
  color: rgb(150, 141, 141);
}
</style>

<script type="module">
import { default as song_functions } from "../javascript/mediaplayer_script.js";
import AddTrackPopup from "../components/AddTrackPopup";
import { mapGetters, mapState } from "vuex";
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
 * Song component appearing in views(playlists,albums..etc)
 * @displayName Song Component
 * @example [none]
 */
export default {
  data: function() {
    return {
      hover: false,
      show: false,
      isclicked: false,
    };
  },
  mixins: [song_functions],
  props: {
    song_name: {
      type: String,
    },
    song_album: {
      type: String,
    },
    song_artists: {
      type: String,
    },
    artist_id: {
      type: String,
    },
    song_length: {
      type: Number,
    },
    isLiked: {
      type: Boolean,
    },
    song_id: {
      type: String,
    },
    index: {
      type: Number,
    },
    albumId: {
      type: String,
      default: "0",
    },
    playlistId: {
      type: String,
      default: "0",
    },
    isPlaylist: {
      type: Boolean,
      default: false,
    },
    isPlayable: {
      type: Boolean,
      default: true,
    },
    isQueue: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * add the component chosen to the queue
     * @public This is a public method
     */
    addToQueue() {
      this.$store.dispatch("Queue/AddToQueue", {
        trackId: this.song_id,
        playlistId: this.playlistId,
        isPlaylist: this.isPlaylist,
        albumId: this.albumId,
      });
    },
    /**
     * toggles the state of the dropdown list (show/hide)
     * @public This is a public method
     */
    toggleShow(event) {
      if (this.canPlay) {
        var x = this.show;
        window.Element.show = false;
        this.show = !x;
        if (!x) {
          this.$nextTick(function() {
            var div = document.getElementById("mydropdown");
            var left = event.screenX - 203 + "px";
            var top = event.screenY - 70 + "px";
            if (div) {
              div.style.left = left;
              div.style.top = top;
            }
          });
        }
      }
    },
    /**
     * closes all the lists on click on screen
     * @public This is a public method
     */
    hideshow(event) {
      var targetId = event.target.id;
      if (!this.$el.contains(event.target) || targetId != "list_icon") {
        this.show = false;
        this.isclicked = false;
      }
    },
    /**
     * marks the state of component as clicked altering its appearance
     * @public This is a public method
     */
    clicked() {
      if (this.canPlay) this.isclicked = true;
    },
    /**
     * triggers the like request for the component
     * @public This is a public method
     */
    likecurrentsong: function() {
      if (!this.isLiked) {
        this.$store.dispatch("Mediaplayer/Like", this.song_id);
        toast.show("Added to your Liked Songs");
        this.isLiked = true;
      } else {
        this.$store.dispatch("Mediaplayer/UnLike", this.song_id);
        toast.show("Removed from your Liked Songs");
        this.isLiked = false;
      }
    },
    /**
     * plays song on double click
     * @public This is a public method
     */
    playOnDblCLk: function() {
      if (this.isCurrent) {
        if (this.playicon) {
          this.pauseSong();
        } else {
          this.playSong();
        }
      } else {
        this.playSong();
      }
    },
    changeModalStateAdd() {
      this.$store.dispatch("Playlist/toggleModalAdd", this.song_id);
    },
    RemoveFromThisPlaylist() {
      let payload = {
        playlist_id: this.playlistId,
        song_id: this.song_id,
      };
      this.$store.dispatch("Playlist/RemoveFromThisPlaylist", payload);
    },
  },
  computed: {
    isCurrentClass: function() {
      return {
        currently: this.isCurrent && this.canPlay,
      };
    },
    isCurrent: function() {
      return (
        this.song_id == this.Get_Currentsong.track._id &&
        (this.albumId == this.Get_Currentsong.album._id ||
          this.playlistId == this.Get_Currentsong.playlistId)
      );
    },
    length: function() {
      var min = Math.floor((this.song_length % 3600) / 60);
      var sec = Math.floor(this.song_length % 60);
      if (sec < 10) sec = "0" + sec;
      return min + ":" + sec;
    },
    ...mapGetters({
      Get_Currentsong: "Mediaplayer/Get_Currentsong",
    }),
    ...mapState({
      showAdd: (state) => state.Playlist.showModalAdd,
    }),
    canPlay: function() {
      return (
        (this.isPlayable || this.userinfo.product == "premium") && !this.isQueue
      );
    },
  },

  created: function() {
    window.addEventListener("click", this.hideshow);
  },
  destroyed: function() {
    window.removeEventListener("click", this.hideshow);
  },
  components: {
    AddTrackPopup,
  },
};
</script>
