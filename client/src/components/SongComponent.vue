<template>
  <div
    class="song"
    @click="clicked"
    :class="{ clicked: isclicked }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div id="icon">
      <i
        v-if="!hover && !isclicked && !(playicon && isCurrent)"
        :class="isCurrentClass"
        class="fa fa-music music_icon"
      ></i>
      <i
        v-if="(isclicked || hover) && !(playicon && isCurrent)"
        id="playicon-component"
        @click="playSong()"
        class="fa fa-play"
        :class="isCurrentClass"
      >
      </i>
      <i
        v-if="playicon && isCurrent && (isclicked || hover)"
        @click="pauseSong()"
        class="fa fa-pause"
        :class="isCurrentClass"
      >
      </i>
      <i
        v-if="playicon && isCurrent && !isclicked && !hover"
        class="fa fa-volume-up"
        :class="isCurrentClass"
      >
      </i>
    </div>
    <div id="song_body">
      <div class="song_name" :class="isCurrentClass">
        {{ song_name }}
      </div>
      <div id="song_info">
        <div id="s">
          <router-link tag="p" to="library" id="song_artist">
            {{ song_artists }}
          </router-link>
          <!-- <span>
            .
          </span> -->
        </div>
        <router-link tag="p" id="song_album" to="library">
          {{ song_album }}
        </router-link>
      </div>
    </div>
    <!-- <p>{{index}}</p> -->
    <div class="song_length" :class="isCurrentClass">
      {{ length }}
    </div>
    <div id="song_options" class="dropdownlist">
      <div id="icondiv" @click="this.toggleShow">
        <i id="list_icon" v-show="hover" class="fa fa-ellipsis-h dots_icon"></i>
      </div>
      <div id="mydropdown" class="db" v-show="show">
        <p>Start Radio</p>
        <p @click="likecurrentsong()" v-if="!isLiked">Add to Liked Songs</p>
        <p @click="likecurrentsong()" v-if="isLiked">Remove from Liked Songs</p>
        <p @click="addToQueue()">Add to Queue</p>
        <p @click="changeModalStateAdd(),showplaylists()">Add to Playlist</p>
      </div>
      <AddTrackPopup v-if="showAdd" ></AddTrackPopup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.song {
  min-width: 426px;
  height: 64px;
  margin: 0%;
  padding: 0%;
  display: block;
  // box-sizing: border-box;
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
  // background-color: #b3b3b3;
}
.song:hover {
  background-color: #313030;
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
    // margin-right: 50px;
  }
}
#song_info {
  #s {
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
  #song_album {
    display: inline;
    color: darkgray;
    cursor: pointer;
    transition: color 0.2s linear, border 0.2s linear;
  }
  #song_album:hover {
    color: white;
    cursor: pointer;
    border-bottom: white solid 1px;
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
#song_artist {
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
    console.log("message", message);
  }
};
export default {

  data: function() {
    return {
      hover: false,
      show: false,
      isclicked: false
    };
  },
  mixins: [song_functions],
  props: {
    song_name: {
      type: String
    },
    song_album: {
      type: String
    },
    song_artists: {
      type: String
    },
    artist_id: {
      type: String
    },
    song_length: {
      type: Number
    },
    isLiked: {
      type: Boolean
    },
    song_id: {
      type: String
    },
    index: {
      type: Number
    },
    albumId: {
      type: String,
      default: "0"
    },
    playlistId: {
      type: String,
      default: "0"
    },
    isPlaylist: {
      type: Boolean,
      default: false
    }
  }, //must add isplayable also
  methods: {
    addToQueue() {
      this.$store.dispatch("Queue/AddToQueue", { song_id: this.song_id });
    },
    toggleShow(event) {
      console.log(event.screenX);
      console.log(event.screenY);
      var x = this.show;
      window.Element.show = false;
      this.show = !x;
      // if(this.show){

      //   var element =document.getElementById("mydropdown");
      //   // var pos=event.clientX ;
      //   element.css({
      //   top : 400,
      //   right:100
      //   });
      // }
    },
    hideshow(event) {
      // var targetId = event.target.id;
      if (!this.$el.contains(event.target)) {
        this.show = false;
        this.isclicked = false;
      }
    },
    clicked() {
      this.isclicked = true;
    },
    likecurrentsong: function() {
      if (!this.isLiked) {
        this.$store.dispatch("mediaplayer/Like",this.song_id);
        toast.show("Added to your Liked Songs");
        this.isLiked=true;
      } else {
        this.$store.dispatch("mediaplayer/UnLike", this.song_id);
        toast.show("Removed from your Liked Songs");
         this.isLiked=false;
      }
    },
    changeModalStateAdd(){
      console.log("in songcomponent",this.song_id);
        this.$store.dispatch("creatplaylist/toggleModalAdd",this.song_id);
      },
      showplaylists(){
        this.$store.dispatch("creatplaylist/showplaylists");
    },
  },
  computed: {
    isCurrentClass: function() {
      return {
        currently: this.isCurrent
      };
    },
    isCurrent: function() {
      return (
        this.song_id == this.currentsong_info.song_id &&
        this.albumId == this.currentsong_info.album_id &&
        this.index == this.currentsong_info.index &&
        this.playlistId == this.currentsong_info.playlist_id
      );
    },
    length:function(){
        var min = Math.floor((this.song_length % 3600) / 60);
        var sec = Math.floor(this.song_length% 60);
        if (sec < 10) sec = "0" + sec;
        console.log(" minute sec", min, ":", sec);
        return min + ":" + sec;
    },
    ...mapGetters({
      currentSong: "mediaplayer/Get_Currentsong",
      trackid:"mediaplayer/toadd",

    }),
    ...mapState({
    showAdd:state => state.creatplaylist.showModalAdd,

  })
  },
  created: function() {
    window.addEventListener("click", this.hideshow);
  },
  destroyed: function() {
    window.removeEventListener("click", this.hideshow);
  },
  components:{
    AddTrackPopup,
  }
};
</script>