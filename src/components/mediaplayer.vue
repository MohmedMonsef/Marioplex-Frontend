<template>
  <div class="mediaplayer">
    <div class="row">
      <div class="col-sm-3">
        <!-- here i need to link album image with mock server -->
        <div class="album_image">
          <img src="../assets/cry.png" alt="album_image" testid="album_image" />
        </div>
        <!-- here i need to link both song name and artist name with mock server they navigate to another pages
          and i need to change <a> to router link -->
        <div class="song_info">
          <a href="#" id="song_name" testid="song_name">Song Name</a>
          <!-- this div is for like songs and them to the library of the user -->
          <!-- donot forget that the second icon is still weird -->
          <div class="actionbuttons">
            <button>
              <i class="fa fa-heart-o" id="hearticon" testid="hearticon"></i>
            </button>
          </div>
          <br />
          <!-- <a
            href="#"
            id="artist_name"
            v-for="artist in artist_name"
            v-bind:key="artist.id"
            >{{ artist.songs.artist_name }}</a
          > -->
          <a href="#" id="artist_name" testid="artist_name">Artist1Name</a>
        </div>
      </div>
      <div class="col-sm-6">
        <div
          class="play_controllers"
          id="test_play_controllers"
          testid="play_controllers"
        >
          <div class="controllers" id="test_controllers" testid="controllers">
            <audio id="myAudio">
              <!-- <source :src="songs.song" type="audio/ogg" /> -->
              <source
                :src="media_player.song"
                type="audio/mpeg"
                testid="audio"
              />
            </audio>
            <button
              id="random_button"
              testid="shufflebutton"
              @click="random_songs()"
            >
              <i class="fa fa-random" id="randomicon" testid="shuffleicon"></i>
            </button>
            <button id="prev_button" testid="prevbutton" @click="prev_song()">
              <i
                class="fa fa-step-backward"
                id="playbackicon"
                testid="previcon"
              ></i>
            </button>
            <button
              id="play_button"
              testid="playbutton"
              @click="play_pause_song()"
            >
              <i class="fa fa-pause" id="playicon" testid="playicon"></i>
            </button>
            <button id="next_button" testid="nextbutton" @click="next_song()">
              <i
                class="fa fa-step-forward"
                id="playforwardicon"
                testid="nexticon"
              ></i>
            </button>
            <button
              id="repeat_button"
              testid="repeatbutton"
              @click="repeat_song()"
            >
              <i class="fa fa-repeat" id="repeaticon" testid="repeaticon"></i>
            </button>
          </div>
        </div>

        <!-- still doesnot work correctly -->
        <div
          id="seek_bar"
          testid="seek_bar"
          style="display:flex;justify-content: center;"
        >
          <!-- <div id="current_time">0:00</div>
          <div id="fill"></div>
          <div id="handle" style="left:0%;"></div>
          <div id="duration">3:45</div> -->

          <div>
            <div id="current_time" testid="currenttime" class="current_time">
              00:00
            </div>
            <!-- here you must add onchange="seeksong()" to control the time of song -->
            <input
              id="songslider"
              testid="songslider"
              class="songslider"
              type="range"
              min="0"
              step="1"
            />
            <div id="duration" testid="songduration" class="duration">3:45</div>
          </div>
        </div>
        <!-- ///////////////// -->
      </div>
      <div class="col-md-3">
        <div class="additional_actions">
          <button id="queue_button" testid="queuebutton" @click="go_to_queue()">
            <i class="fa fa-bars" id="queueicon" testid="queueicon"></i>
          </button>
          <button id="sound_button" testid="soundbutton" @click="volume_song()">
            <i class="fa fa-volume-up" id="soundicon" testid="soundicon"></i>
          </button>
          <!-- still doesnot work correctly -->
          <!-- <div id="seek_bar" style="transform:translateX(0%);">
            <div id="fill"></div>
            <div id="handle"></div>
          </div> -->
          <!-- ///////////////// -->
          <div class="volume" id="volume" testid="volume">
            <!-- here you must add onchange="adjustvolume()" to control the volume -->
            <input
              id="volume_slider"
              testid="volumeslider"
              class="volume_slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
        </div>
      </div>
    </div>
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
}
.row {
  height: 90px;
}
.col-md-3 {
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
  text-decoration: none;
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
//////////////////////////still doesnot work correctly
// #seek-bar {
//   width: 500px;
//   height: 3px;
//   margin-top: 5px;
//   background-color: #b3b3b3;
//   display: flex;
//   flex-direction: row;
//   position: relative;
//   justify-content: center;
//   border-radius: 50px;
//   //cursor: pointer;
// }
// #fill {
//   height: 5px;
//   width: 600px;
//   background-color: gray;
//   border-radius: 20px;
// }
// #seek-bar:hover {
//   #handle {
//     width: 8px;
//     height: 8px;
//     background-color: white;
//     border-radius: 50%;
//     margin-top: -5px;
//   }
// }
input:focus {
  outline: 0 !important;
}
.songslider {
  width: 500px;
  height: 5px;
  border-radius: 10px;
  margin: 5px;
  padding: 0px;
  // to override default css styles
  -webkit-appearance: none;
  appearance: none;
  background: #424040;
  border-color: #424040;
}
// The song slider handle -webkit- for (Chrome, Opera, Safari, Edge) and -moz- for (Firefox) to override default look)
.songslider::-webkit-slider-thumb,
.volume_slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 13px;
  height: 13px;
  border-radius: 15px;
  background: white;
  cursor: pointer;
}

.songslider::-moz-range-thumb,
.volume_slider::-moz-range-thumb {
  width: 13px;
  height: 13px;
  border-radius: 15px;
  background: white;
  cursor: pointer;
}
#current_time,
#duration {
  font-size: 10px;
  color: #b3b3b3;
  display: flex;
  margin: 7px;
}
#current_time {
  float: left;
}
#duration {
  float: right;
}
//////////////////
.additional_actions {
  display: flex;
  margin: 30px;
  justify-content: flex-end;
  // #fill {
  //   width: 80px;
  //   margin-top: 10px;
  // }
}
.volume {
  bottom: 0px;
  .volume_slider {
    margin-top: 5px;
    height: 4px;
    width: 80px;
    padding: 0px;
    margin: 0px;
    -webkit-appearance: none;
    appearance: none;
    background: #b3b3b3;
    border-color: #b3b3b3;
    border-radius: 50px;
  }
}
</style>

<script>
//import { mapGetters } from "vuex";
import { mapState } from "vuex";
var y = document.getElementById("myAudio");
var x = new Audio(y);
///////////////////////////////////////////////////////////////
// var SongSlider = document.getElementById("songslider");
// var currenttime = document.getElementById("current_time");
//var playbutton = document.getElementById("play_button");
/////////////////////////////////////
export default {
  data: function() {
    return {};
  },
  methods: {
    ////////////////////////////////////////////////
    // updateSongSlider: function(){
    //   setInterval(() => {
    //   var c = Math.round(x.currenttime);
    //   SongSlider.value = c;
    //   currenttime.textContent = c;
    //   }, 100);
    // },
    // changetime: function(secs){
    // var min = Math.floor(secs/60);
    // var sec = secs % 60;
    // min = (min < 10) ? "0" + min : min;
    // sec = (sec < 10) ? "0" + sec : sec;
    // return (min + ":" + sec);
    // },
    ////////////////////////////////////
    play_pause_song: function() {
      //var b = document.getElementById("playicon");
      if (x.paused) {
        this.$store.dispatch("mediaplayer/playsong_state");
        setTimeout(() => {
          console.log(this.media_player.song);
          x.src = this.media_player.song;
          if (x) {
            x.play();
          }
          //b.find('i').toggleClass('fa fa-play');
        }, 500);
      } else {
        console.log("pause song");
        this.$store.dispatch("mediaplayer/pausesong_state");
        setTimeout(() => {
          console.log(this.media_player.song);
          x.src = this.media_player.song;
          if (x) {
            x.pause();
          }
        }, 500);
      }

      console.log(x);
    },

    prev_song: function() {
      var y0 = document.getElementById("myAudio");
      var x0 = new Audio(y0);
      this.$store.dispatch("mediaplayer/prevsong_state");
      setTimeout(() => {
        console.log(this.media_player.song);
        x0.src = this.media_player.song;

        if (!x.paused) {
          x.pause();
          x0.play();
          x = x0;
        } else {
          x0.play();
          x = x0;
        }
        //b.find('i').toggleClass('fa fa-play');
      }, 500);
    },

    next_song: function() {
      var y1 = document.getElementById("myAudio");
      var x1 = new Audio(y1);
      this.$store.dispatch("mediaplayer/nextsong_state");
      setTimeout(() => {
        console.log(this.media_player.song);
        x1.src = this.media_player.song;

        if (!x.paused) {
          console.log("inside next song", x.paused);
          x.pause();
          x1.play();
          x = x1;
        } else {
          x1.play();
          x = x1;
        }

        //b.find('i').toggleClass('fa fa-play');
      }, 500);
    },

    random_songs: function() {
      this.$store.dispatch("mediaplayer/shufflesong_state");
    },

    repeat_song: function() {
      this.$store.dispatch("mediaplayer/repeatsong_state");
    }
  },
  computed: {
    // ...mapGetters({
    //   album_image: "albumimage",
    //   song_name: "songname",
    //   artist_name: "artistsname",
    //   start_time: "starttime",
    //   end_time: "endtime",
    //   play_song: "playsong"
    // })
    ...mapState({
      media_player: state => state.mediaplayer.songs
      //newstore: state => state.mediaplayer.store.songs
    })
  }
};
</script>
