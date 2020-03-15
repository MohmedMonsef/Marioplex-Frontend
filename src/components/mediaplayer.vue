<template>
  <div class="mediaplayer">
    <div class="row">
      <div class="col-sm-3">
        <!-- here i need to link album image with mock server -->
        <div class="album_image">
          <img src="../assets/cry.png" alt="album_image" />
        </div>
        <!-- here i need to link both song name and artist name with mock server they navigate to another pages
          and i need to change <a> to router link -->
        <div class="song_info">
          <a href="#" id="song_name">Song Name</a>
          <!-- this div is for like songs and them to the library of the user -->
          <!-- donot forget that the second icon is still weird -->
          <div class="actionbuttons">
            <button>
              <i class="fa fa-heart-o" id="hearticon"></i>
            </button>
            <button>
              <i class="fa fa-square-o" id="squareicon"></i>
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
          <a href="#" id="artist_name">Artist1 Name</a>
          <a href="#" id="artist_name">Artist2 Name</a>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="play_controllers" id="test_play_controllers">
          <div class="controllers" id="test_controllers">
            <audio id="myAudio">
              <source :src="songs.song" type="audio/ogg" />
              <source :src="songs.song" type="audio/mpeg" />
            </audio>
            <button id="random_button" @click="random_songs()">
              <i class="fa fa-random" id="randomicon"></i>
            </button>
            <button id="prev_button" @click="prev_song()">
              <i class="fa fa-step-backward" id="playbackicon"></i>
            </button>
            <button id="play_button" @click="play_pause_song()">
              <i class="fa fa-pause" id="playicon"></i>
            </button>
            <button id="next_button" @click="next_song()">
              <i class="fa fa-step-forward" id="playforwardicon"></i>
            </button>
            <button id="repeat_button" @click="repeat_song()">
              <i class="fa fa-repeat" id="repeaticon"></i>
            </button>
          </div>
        </div>

        <!-- still doesnot work correctly -->
        <div id="seek_bar" style="display:flex;justify-content: center;">
          <div id="start_time">0:00</div>
          <div id="fill"></div>
          <div id="handle" style="left:0%;"></div>
          <div id="end_time">3:45</div>
        </div>
        <!-- ///////////////// -->
      </div>
      <div class="col-md-3">
        <div class="additional_actions">
          <button id="queue_button" @click="go_to_queue()">
            <i class="fa fa-bars" id="queueicon"></i>
          </button>
          <button id="sound_button" @click="volume_song()">
            <i class="fa fa-volume-up" id="soundicon"></i>
          </button>
          <!-- still doesnot work correctly -->
          <div id="seek_bar" style="transform:translateX(0%);">
            <div id="fill"></div>
            <div id="handle"></div>
          </div>
          <!-- ///////////////// -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mediaplayer {
  margin: 0px;
  padding: 0px;
  background-color: #282828;
  height: 90px;
  width: 100%;
  border-top: 1px solid #000;
  position: relative;
  transform: translateX(0);
  transition: transform 0.25s cubic-bezier(0.3, 0, 0, 1);
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
  margin: 15px;
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
#seek-bar {
  width: 500px;
  height: 5px;
  margin-top: 10px;
  background-color: #b3b3b3;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  border-radius: 50px;
  //cursor: pointer;
}
#fill {
  height: 5px;
  width: 600px;
  background-color: gray;
  border-radius: 20px;
}
#seek-bar:hover {
  #handle {
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
    margin-top: -5px;
  }
}
#start_time,
#end_time {
  font-size: 12px;
  color: #b3b3b3;
  display: flex;
  margin: 5px;
}
//////////////////
.additional_actions {
  display: flex;
  margin: 30px;
  justify-content: flex-end;
  #fill {
    width: 80px;
    margin-top: 10px;
  }
}
</style>

<script>
//import { mapGetters } from "vuex";
import { mapState } from "vuex";
var y = document.getElementById("myAudio");
var x = new Audio(y);
export default {
  data: function() {
    return {};
  },
  methods: {
    play_pause_song: function() {
      //var b = document.getElementById("playicon");

      if (x.paused) {
        this.$store.dispatch("playsong_state");
        setTimeout(() => {
          console.log(this.$store.state.songs.song);
          x.src = this.$store.state.songs.song;

          if (x) {
            x.play();
          }
          //b.find('i').toggleClass('fa fa-play');
        }, 500);
      } else {
        console.log("pause song");
        this.$store.dispatch("pausesong_state");
        setTimeout(() => {
          console.log(this.$store.state.songs.song);
          x.src = this.$store.state.songs.song;
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
      this.$store.dispatch("prevsong_state");
      setTimeout(() => {
        console.log(this.$store.state.songs.song);
        x0.src = this.$store.state.songs.song;

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
      this.$store.dispatch("nextsong_state");
      setTimeout(() => {
        console.log(this.$store.state.songs.song);
        x1.src = this.$store.state.songs.song;

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
      this.$store.dispatch("shufflesong_state");
    },

    repeat_song: function() {
      this.$store.dispatch("repeatsong_state");
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
    ...mapState(["songs"])
  }
};
</script>
