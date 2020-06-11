<template>
  <div class="mediaplayer">
    <div class="row" id="mediaplayerrow">
      <div class="col-lg-3 col-md-20% col-sm-20% col-20%" id="song_info_col">
        <!-- here i need to link album image with mock server -->
        <div class="album_image" v-if="user == 'success'">
          <img
            :src="
              $url +
                '/api/images/' +
                Get_Currentsong.track.images[0]._id +
                '?belongs_to=album'
            "
            alt="album_image"
            testid="album_image"
          />
        </div>
        <!-- here i need to link both song name and artist name with mock server they navigate to another pages
          and i need to change <a> to router link -->
        <div class="song_info" v-if="user == 'success'">
          <router-link
            id="song_name"
            testid="song_name"
            :to="{ path: '/HomeWebPlayer/album/' + Get_Currentsong.album._id }"
          >
            {{ Get_Currentsong.track.name }}
          </router-link>
          <!-- this div is for like songs and them to the library of the user -->
          <!-- donot forget that the second icon is still weird -->
          <div class="actionbuttons">
            <button
              class="heartbutton"
              v-if="!liked"
              @click="likecurrentsong()"
            >
              <span data-toggle="tooltip" title="Save to your Liked Songs">
                <i
                  class="fa fa-heart-o"
                  id="emptyhearticon"
                  testid="emptyhearticon"
                ></i>
              </span>
            </button>

            <!-- ////////////////////////////////////// -->
            <button class="heartbutton" v-if="liked" @click="likecurrentsong()">
              <span data-toggle="tooltip" title="Remove from your Liked Songs">
                <i
                  class="fa fa-heart"
                  id="filledhearticon"
                  testid="filledhearticon"
                  style="color: green;"
                ></i>
              </span>
            </button>

            <!-- /////////////////////////////////// -->
          </div>
          <br />
          <router-link
            id="artist_name"
            testid="artist_name"
            :to="{
              path:
                '/HomeWebPlayer/ArtistProfile/' +
                Get_Currentsong.album.artist._id,
            }"
          >
            {{ Get_Currentsong.album.artist.name }}
          </router-link>
        </div>
      </div>
      <div class="col-lg-6 col-md-40% col-sm-7 col-9" id="mediaplayercontrollers">
        <div
          class="play_controllers"
          id="test_play_controllers"
          testid="play_controllers"
        >
          <div class="controllers" id="test_controllers" testid="controllers">
            <button class="random_button" testid="shufflebutton">
              <span data-toggle="tooltip" title="Enable shuffle">
                <i
                  class="fa fa-random"
                  id="randomicon"
                  testid="shuffleicon"
                  :class="{ coloring: isShuffle }"
                  @click="shuffle()"
                ></i>
              </span>
            </button>
            <button id="prev_button" testid="prevbutton" @click="prev_song()">
              <span data-toggle="tooltip" title="Previous">
                <i
                  class="fa fa-step-backward"
                  :class="{ disabledicon: Index == 0 }"
                  id="playbackicon"
                  testid="previcon"
                ></i>
              </span>
            </button>
            <!-- /////////////////////////////////////////////// -->
            <button
              id="play_button"
              testid="playbutton"
              v-if="playicon && !isNaN(duration)"
            >
              <span data-toggle="tooltip" title="Pause">
                <i
                  class="fa fa-pause"
                  id="playicon"
                  testid="playicon"
                  @click="pauseSong()"
                >
                </i>
              </span>
            </button>
            <div
              class="spinner-border spinner-border-md text-light"
              style="margin=-5px;"
              v-if="isNaN(duration)"
            ></div>
            <!-- //////////////////////////////// -->
            <!-- ///////////////////////////////// -->
            <button
              id="pause_button"
              testid="pausebutton"
              v-if="!playicon && !isNaN(duration)"
            >
              <!-- //\\ -->
              <span data-toggle="tooltip" title="Play">
                <i
                  class="fa fa-play"
                  id="pauseicon"
                  testid="pauseicon"
                  @click="playSong()"
                ></i>
              </span>
            </button>
            <!-- //////////////////////////////// -->
            <button id="next_button" testid="nextbutton" @click="next_song()">
              <span data-toggle="tooltip" title="Next">
                <i
                  class="fa fa-step-forward"
                  id="playforwardicon"
                  testid="nexticon"
                ></i>
              </span>
            </button>
            <button id="repeat_button" testid="repeatbutton">
              <div
                data-toggle="tooltip"
                title="Enable repeat"
                style="
                  box-sizing: border-box;
                  overflow: none;
                  min-width: 21px;
                  min-height: 16px;
                "
              >
                <i
                  class="fa fa-repeat"
                  :class="{ coloring: isRepeat != 0 }"
                  id="repeaticon"
                  @click="repeat_song()"
                  testid="repeaticon"
                >
                  <span
                    :class="{ hidecoloring: isRepeat != 2 }"
                    style="font-size: 26px; max-height: 16px;"
                    >.</span
                  >
                </i>
              </div>
            </button>
          </div>
        </div>
        <!-- here the song bar moves correctly -->
        <div class="topcontrols">
          <span class="starttime" id="starttime" testid="starttime">{{
            changeTime
          }}</span>
          <div
            class="seekbar"
            id="seekbar"
            testid="seekbar"
            @mousedown="startDrag()"
          >
            <div
              class="progressbar"
              id="progressbar"
              testid="progressbar"
            ></div>
          </div>
          <span class="endtime" id="endtime" testid="endtime">{{
            totalDuration
          }}</span>
        </div>
        <!-- the end of the new code  -->
      </div>
      <!-- <div class="col-md-3 hidden-sm"> -->
      <div class="col-lg-3 col-md-30%" id="volumecontrollers">
        <div class="additional_actions" v-if="user == 'success'">
          <button id="queue_button" testid="queuebutton" @click="queue_alter()">
            <i class="fa fa-bars" id="queueicon" testid="queueicon"></i>
          </button>

          <button id="sound_button" testid="soundbutton" style="width: 37px;">
            <i
              class="fa fa-volume-off"
              id="soundicon"
              testid="soundicon"
              @click="volume_song()"
            ></i>
          </button>
          <div class="volumecontrols">
            <div
              class="volumeseekbar"
              id="volumeseekbar"
              testid="volumeseekbar"
              @mousedown="volumestartDrag()"
            >
              <div
                class="volumeprogressbar"
                id="volumeprogressbar"
                testid="volumeprogressbar"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toast" id="liketoast" testid="liketoast"></div>
  </div>
</template>

<style lang="scss" scoped>
.mediaplayer {
  margin: 0px;
  padding: 0px;
  background-color: #282828;
  height: 90px;
  width: 100%;
  border-top: 1px solid #000;
  transform: translateX(0);
  transition: transform 0.25s cubic-bezier(0.3, 0, 0, 1);
  position: fixed;
  bottom: 0%;
  //min-width: 800px;
}
.row {
  height: 90px;
}
.album_image {
  float: left;
  margin: 17px 10px 17px 17px;
  width: 56px;
  height: 56px;
}
img {
  border-style: none;
  height: 56px;
  width: 56px;
}
.song_info {
  margin: 20px 20px 20px 5px;
}
#song_name {
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
}
#song_name:hover {
  text-decoration: underline;
}
#artist_name {
  color: #b3b3b3;
  //text-decoration: none;
  font-size: 12px;
}
#artist_name:hover {
  color: white;
}
.actionbuttons {
  float: right;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  // margin: top right bottom left
  margin: 8px;
}
button {
  background-color: transparent;
  border: none;
  padding-right: 10px;
  padding-left: 10px;
}
//this style (focus) for hidding the blue borders when click on the buttons
button:focus {
  outline: 0 !important;
}
.fa {
  color: #b3b3b3;
}
.fa:hover {
  color: white;
}
.play_controllers {
  display: flex;
  margin: 20px;
  margin-bottom: 10px;
  justify-content: center;
}
.controllers {
  display: flex;
  margin: 0px;
  justify-items: center;

  button {
    padding-left: 25px;
    padding-right: 25px;
  }
}
input:focus {
  outline: 0 !important;
}
.topcontrols {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .starttime,
  .endtime {
    flex-basis: 10%;
    flex-shrink: 1;
    display: inline-flex;
    justify-content: center;
    color: #b3b3b3;
    font-size: 10px;
    margin: 0px;
  }
  .seekbar {
    height: 5px;
    border-radius: 10px;
    flex-basis: 80%;
    background-color: #424040;
    display: flex;
    .progressbar {
      height: 100%;
      width: 0px;
      left: 0px;
      -webkit-appearance: none;
      background-color: #b3b3b3;
      border-color: #b3b3b3;
      border-radius: 10px;
      position: relative;
      display: inline-flex;
      padding: 0px;
      margin: 0px;
      //to get the user feedback
      &::after {
        content: "";
        position: absolute;
        height: 4px;
        width: 4px;
        top: 0;
        bottom: 0;
        margin: auto;
        right: -4px;
        border-radius: 500px;
      }
    }
    &:hover,
    &:active {
      cursor: pointer;
      .progressbar {
        background-color: green;
        border-color: green;
        &::after {
          height: 12px;
          width: 12px;
          background-color: white;
        }
      }
    }
  }
}

.additional_actions {
  display: flex;
  margin: 30px;
  justify-content: flex-end;
}
////style for volume bar
.volumecontrols {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .volumeseekbar {
    height: 5px;
    border-radius: 10px;
    width: 100px;
    background-color: #424040;
    display: flex;
    .volumeprogressbar {
      height: 100%;
      width: 0px;
      left: 0px;
      -webkit-appearance: none;
      background-color: #b3b3b3;
      border-color: #b3b3b3;
      border-radius: 10px;
      position: relative;
      display: inline-flex;
      padding: 0px;
      margin: 0px;
      //to get the user feedback
      &::after {
        content: "";
        position: absolute;
        height: 4px;
        width: 4px;
        top: 0;
        bottom: 0;
        margin: auto;
        right: -4px;
        border-radius: 500px;
      }
    }
    &:hover,
    &:active {
      cursor: pointer;
      .volumeprogressbar {
        background-color: green;
        border-color: green;
        &::after {
          height: 12px;
          width: 12px;
          background-color: white;
        }
      }
    }
  }
}
//queue icon
.coloring {
  color: #1db954;
}
.coloring:hover {
  color: #1ed760;
}

.hidecoloring {
  color: #282828;
}
.hidecoloring:hover {
  color: #282828;
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
.disabledicon {
  color: #424040;
}
.disabledicon:hover {
  color: #424040;
}
.disabledicon:active {
  color: #b3b3b3;
}

@media screen and (max-width: 992px) {
  .additional_actions {
    margin: 30px 15px 30px 30px;
  }
  .album_image{
    display: none;
  }
  #song_info_col{
    margin-left: 10px;
    width:20%;
  }
  .song_info{
    margin: 20px 0px 20px 5px;
  }
}
@media screen and (max-width: 768px) {
  .additional_actions {
    margin: 30px 15px 30px 30px;
  }
  .volumecontrollers {
    display: none;
  }
    .album_image{
    display: none;
  }
  #song_info_col{
    margin-left: 10px;
  }
  .song_info{
    margin: 20px 0px 20px 5px;
  }
  .mediaplayercontrollers{
    width: 70%;
  }
}
@media screen and (max-width: 340px) {
  .additional_actions {
    margin: 30px 15px 30px 30px;
  }
  .volumecontrollers {
    display: none;
  }
    .album_image{
    display: none;
  }
  #song_info_col{
    margin-left: 10px;
  }
  .song_info{
    margin: 20px 0px 20px 5px;
  }
  .mediaplayercontrollers{
    width: 70%;
  }
  #repeat_button{
 display: none;
}
.random_button{
 display: none;

}
}

// @media screen and (max-width: 585px) {
// .topcontrols{
//   display: none;
// }

// .mediaplayer{
// height: 100px;
//   }
//   #song_info_col{
//     height: 30px;
//     width: 50%;
//     margin: 12px;
//     margin-top:0;
//   }
//   .album_image{
//     display: none;
//   }
//   //heart
//   .actionbuttons{
//     right:500px;
//   }
//   .song_info{
//     display: inline-block;
//     margin: 4px;
//   }
//   .controllers{
//     right: 20px;
//   }
//   .topcontrols{
//   .seekbar,.progressbar{
//     display: none;
//   }

//   .endtime{
//     right: 300px;
//   }
//   }
//   #randomicon,#playbackicon,#playforwardicon,#repeat_button{
//     display: none;
//   }
//   #volumecontrollers{
//     right: 20px;
//   }
// .row{
//   display: flex;
//    flex-flow:column-reverse;
// }
// }
</style>

<script type="module">
import { default as song_functions } from "../javascript/mediaplayer_script.js";
/**

     * @displayName Media Player
     */
export default {
  data: function() {
    return {
      isRepeat: 0, //0=>no repeat 1=>repeat the song 2=>repeat playlist,album
      isShuffle: false,
      volumedrag: false,
      drag: false,
      currentPos: 0,
      volumepos: 0,
      sound: 0,
    };
  },
  mixins: [song_functions],
  mounted: function() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.moving_song_bar();
      }, 300);
    });
    setTimeout(() => {
      if (this.userinfo.player.is_repeat) {
        this.isRepeat = 2;
      } else {
        this.isRepeat = 0;
      }
      this.isShuffle = this.userinfo.player.is_shuffled;

      if(localStorage.getItem("set-volume")){
      
      var volumeSlider = document.getElementById("volumeprogressbar");
      var curVol = localStorage.getItem("set-volume") * 100;
      this.volumepos = curVol.toString() + "%";
      volumeSlider.style.width = this.volumepos;

      var changevolumeicon = document.getElementById("soundicon");
      if (curVol == 0) changevolumeicon.className = "fa fa-volume-off";
      else if (curVol > 0 && curVol <= 50)
        changevolumeicon.className = "fa fa-volume-down";
      else changevolumeicon.className = "fa fa-volume-up";
      }
      
      this.$store.dispatch("Mediaplayer/update_volume", curVol/100);
    }, 1000);
    // if (this.user != "success") {
    //    var mediaplayerbar = document.getElementById("mediaplayerrow");
    //    mediaplayerbar.style.justifyContent = "center";
    //    mediaplayerbar.style.alignContent = "center";
    // }
  },
  created: function() {
    window.addEventListener("mouseup", () => {
      this.stopDrag();
      this.volumestopDrag();
    }),
      window.addEventListener("mousemove", () => {
        this.isDrag();
        this.volumeisDrag();
      });
  },
  destroyed: function() {
    window.addEventListener("mouseup", () => {
      this.stopDrag();
      this.volumestopDrag();
    }),
      window.addEventListener("mousemove", () => {
        this.isDrag();
        this.volumeisDrag();
      });
  },
  methods: {
    ///////////////////////////this function is working
    /**
     * changed song bar style when it is playing
     * @public This is a public method
     */
    moving_song_bar: function() {
      this.$store.dispatch("Mediaplayer/advance_progress");
      if (!this.drag) {
        var SongSlider = document.getElementById("progressbar");
        if (SongSlider != null) {
          var ct = this.progress;
          this.currentPos = ct;
          var d = this.duration;
          var sp = ct / d;
          SongSlider.style.width = sp * 100 + "%";
        }
      }
    },
    /**
     * changed song bar style while draging
     * @public This is a public method
     */
    isDrag: function() {
      if (this.drag) {
        var bar = document.getElementById("seekbar");
        var l = bar.getBoundingClientRect().left;
        var w = bar.getBoundingClientRect().width;
        l = event.clientX - l;
        var pos = (l / w) * 100;
        if (l > 0 && l / w <= 1) this.currentPos = (l / w) * this.duration;
        else if (l < 0) this.currentPos = 0;
        else this.currentPos = this.duration;
        var SongSlider = document.getElementById("progressbar");
        var str = pos.toString() + "%";
        SongSlider.style.width = str;
      }
    },
    /**
     * signals that the user is dragging song bar
     * @public This is a public method
     */
    startDrag: function() {
      this.drag = true;
      console.log("in start drag", this.drag);
    },
    /**
     * sets song current time on stop dragging
     * @public This is a public method
     */
    stopDrag: function() {
      if (this.drag) {
        var bar = document.getElementById("seekbar");
        var l = bar.getBoundingClientRect().left;
        var w = bar.getBoundingClientRect().width;
        l = event.clientX - l;
        var pos = (l / w) * this.duration;
        this.$store.dispatch("Mediaplayer/update_progress", pos);
        console.log("stop draging", this.drag);
        this.drag = false;
      }
    },
    /**
     * signals that the user is dragging volume bar
     * @public This is a public method
     */
    volumestartDrag: function() {
      this.volumedrag = true;
      console.log("in start volume drag", this.volumedrag);
    },
    /**
     * changed volume bar style while draging
     * @public This is a public method
     */
    volumeisDrag: function() {
      if (this.volumedrag) {
        var bar = document.getElementById("volumeseekbar");
        var l = bar.getBoundingClientRect().left;
        var w = bar.getBoundingClientRect().width;
        l = event.clientX - l;
        var pos;
        if (l > 0 && l / w <= 1) pos = (l / w) * 100;
        else if (l < 0) pos = 0;
        else pos = 100;
        var volumeSlider = document.getElementById("volumeprogressbar");
        this.volumepos = pos.toString() + "%";
        volumeSlider.style.width = this.volumepos;
        localStorage.setItem("set-volume",pos/100);
      }
    },
    /**
     * sets currently playing track audio volume when we stop dragging it
     * @public This is a public method
     */
    volumestopDrag: function() {
      if (this.volumedrag) {
        var bar = document.getElementById("volumeseekbar");
        var l = bar.getBoundingClientRect().left;
        var w = bar.getBoundingClientRect().width;
        l = event.clientX - l;
        if (l > 0 && l / w <= 1) this.sound = l / w;
        else if (l < 0) this.sound = 0;
        else this.sound = 1;
        this.$store.dispatch("Mediaplayer/update_volume", this.sound);
        console.log("stop draging", this.volumedrag);
        this.sound = this.sound * 100;
        var volumeSlider = document.getElementById("volumeprogressbar");
        this.volumepos = this.sound.toString() + "%";
        volumeSlider.style.width = this.volumepos;
        var changevolumeicon = document.getElementById("soundicon");
        if (this.sound == 0) changevolumeicon.className = "fa fa-volume-off";
        else if (this.sound > 0 && this.sound <= 50)
          changevolumeicon.className = "fa fa-volume-down";
        else changevolumeicon.className = "fa fa-volume-up";
        this.volumedrag = false;

        localStorage.setItem("set-volume",this.sound/100);
      }
    },
    /**
     * changes currently playing track audio volume
     * @public This is a public method
     */
    volume_song: function() {
      var volumeSlider = document.getElementById("volumeprogressbar");
      var changevolumeicon = document.getElementById("soundicon");
      if (
        changevolumeicon.className == "fa fa-volume-up" ||
        changevolumeicon.className == "fa fa-volume-down"
      ) {
        changevolumeicon.className = "fa fa-volume-off";
        volumeSlider.style.width = 0 + "%";
        this.$store.dispatch("Mediaplayer/update_volume", 0);
      } else if (changevolumeicon.className == "fa fa-volume-off") {
        volumeSlider.style.width = this.volumepos;
        if (this.sound > 0 && this.sound <= 50) {
          changevolumeicon.className = "fa fa-volume-down";
          this.$store.dispatch("Mediaplayer/update_volume", this.sound / 100);
        } else {
          changevolumeicon.className = "fa fa-volume-up";
          this.$store.dispatch("Mediaplayer/update_volume", this.sound / 100);
        }
      }
    },
    /**
     * Alters shuffle mode for list of tracks
     * @public This is a public method
     */
    shuffle: function() {
      if (this.user != "success") {
        this.$store.dispatch("CheckUserPopup/togglePopup");
      } else {
        this.isShuffle = !this.isShuffle;
        this.$store.dispatch("Mediaplayer/shufflesong_state", this.isShuffle);
      }
    },
    /**
     * Alters Repeat mode for tracks
     * @public This is a public method
     */
    repeat_song: function() {
      if (this.user != "success") {
        this.$store.dispatch("CheckUserPopup/togglePopup");
      } else {
        this.isRepeat = (this.isRepeat + 1) % 3;
        this.$store.dispatch("Mediaplayer/repeatsong_state", this.isRepeat);
      }
    },
  },
  computed: {
    changeTime: function() {
      if (!isNaN(this.currentPos)) {
        var min = Math.floor((this.currentPos % 3600) / 60);
        var sec = Math.floor(this.currentPos % 60);
        if (sec < 10) sec = "0" + sec;
        return min + ":" + sec;
      }
      return "0:00";
    },
    totalDuration: function() {
      if (!isNaN(this.duration)) {
        var min = Math.floor((this.duration % 3600) / 60);
        var sec = Math.floor(this.duration % 60);
        if (sec < 10) sec = "0" + sec;
        return min + ":" + sec;
      }
      return "0:00";
    },
  },
};
</script>
