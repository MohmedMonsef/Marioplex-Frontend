import { mapGetters } from "vuex";
import { mapState } from "vuex";
var y = document.getElementById("myAudio");
var x = new Audio(y);
///////////////////////////////////////////////////////////////
//creating toast object with function show
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
//var playbutton = document.getElementById("play_button");
//var audio = document.querySelector(".audio");

/////////////////////////////////////
export default {
  data: function() {
    return {};
  },
  methods: {
    seekupdate: function() {
      var seekbar = document.getElementById("progressbar");
      var seekto = x.duration * (seekbar.value / 100);
      x.currentTime = seekto;
      //this.moving_song_bar();
    },
    seektimeupdate: function() {
      var seekbar = document.getElementById("progressbar");
      var n = x.currentTime * (100 / x.duration);
      seekbar.value = n;
    },
    ///////////////////////////this function is working
    moving_song_bar: function() {
      var SongSlider = document.getElementById("progressbar");
      if (x) {
        x.addEventListener("timeupdate", function() {
          var sliderposition = x.currentTime / x.duration;
          SongSlider.style.width = sliderposition * 100 + "%";
        });
        //this.seektimeupdate();
      }
    },
    ////////////////////////////////////////////////
    // updateSongSlider: function(){
    //   setInterval(() => {
    //   var c = Math.round(x.currenttime);
    //   SongSlider.value = c;
    //   currenttime.textContent = c;
    //   }, 100);
    // },
    // changetime: function(secs) {
    //   var min =parseInt((secs % 3600) / 60);
    //   var sec =parseInt(secs % 60);
    //   min = min < 10 ? "0" + min : min;
    //   sec = sec < 10 ? "0" + sec : sec;
    //   return min + ":" + sec;
    // },
    // useraccount : function(){
    // if (this.user != "success")
    // {
    //  var nouser_songinfo = document.getElementById("song_info_col");
    //  //var nouser_buttons = document.querySelectorAll("buttons");
    //  //var nouser_sliders = document.querySelectorAll("input");
    //  nouser_songinfo.style.visibility = "hidden";
    // }
    // },
    ////////////////////////////////////
    playsong_by_icon: function() {
      if (x.paused) this.$store.dispatch("mediaplayer/playicon_state", true);
    },
    play_pause_song: function() {
      if (x.paused) {
        this.$store.dispatch("mediaplayer/playsong_state");
        this.$store.dispatch("mediaplayer/stateofsong");
        console.log("song state", this.liked);
        setTimeout(() => {
          console.log(this.media_player.song);
          x.src = this.media_player.song;
          if (x) {
            x.play();
          }
          ////////////////////
          // console.log("time" , this.changetime(x.duration));
          // document.getElementById("endtime").textContent = this.changetime(x.duration.toString()) ;

          // var progress = document.getElementById("progressbar");
          // progress.addEventListener("change" , this.seekupdate , false);
          // progress.addEventListener("timeupdate" , this.seektimeupdate , false);
          //this.seektimeupdate();
          this.moving_song_bar();
          ////////////////////
        }, 500);
      } else {
        console.log("pause song");
        this.$store.dispatch("mediaplayer/pausesong_state");
        this.$store.dispatch("mediaplayer/stateofsong");
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
      this.$store.dispatch("mediaplayer/stateofsong");
      setTimeout(() => {
        console.log(this.media_player.song);
        x0.src = this.media_player.song;
        this.playsong_by_icon();
        if (!x.paused) {
          x.pause();
          x0.play();
          x = x0;
        } else {
          x0.play();
          x = x0;
        }
        this.moving_song_bar();
      }, 500);
    },

    next_song: function() {
      var y1 = document.getElementById("myAudio");
      var x1 = new Audio(y1);
      this.$store.dispatch("mediaplayer/nextsong_state");
      this.$store.dispatch("mediaplayer/stateofsong");
      setTimeout(() => {
        console.log(this.media_player.song);
        x1.src = this.media_player.song;
        this.playsong_by_icon();
        if (!x.paused) {
          console.log("inside next song", x.paused);
          x.pause();
          x1.play();
          x = x1;
        } else {
          x1.play();
          x = x1;
        }
        this.moving_song_bar();
      }, 500);
    },

    random_songs: function() {
      this.$store.dispatch("mediaplayer/shufflesong_state");
    },

    repeat_song: function() {
      this.$store.dispatch("mediaplayer/repeatsong_state");
      ///// take care i should add condition here if the user isnot premiuim
      var repeat = document.getElementById("repeaticon");
      repeat.style.color = "green";
      x.loop = true;
      x.load();
    },
    changeplayicon: function() {
      this.$store.dispatch("mediaplayer/toggleicon");
    },
    likecurrentsong: function() {
      if (!this.liked) {
        this.$store.dispatch("mediaplayer/likesong");
        toast.show("Added to your Liked Songs");
      } else {
        this.$store.dispatch("mediaplayer/unlikesong");
        toast.show("Removed from your Liked Songs");
      }
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
    }),
    ...mapGetters({
      playicon: "mediaplayer/playicon",
      user: "authorization/GetStatus",
      liked: "mediaplayer/liked"
    })
  }
};
