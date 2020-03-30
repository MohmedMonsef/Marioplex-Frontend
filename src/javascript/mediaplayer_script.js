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

/////////////////////////////////////
export default {
  data: function() {
    return {
      song_state: false //0=>Not playing 1=>playing
    };
  },
  methods: {
    ////////////////////////////////////
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
    playSong() {
      this.song_state = true;
      this.changeplayicon();
      // this.$store.dispatch("mediaplayer/get_currentsong");
      this.$store.dispatch("mediaplayer/playsong_state");
      this.$store.dispatch("mediaplayer/stateofsong");
      console.log("song state", this.liked);
    },
    pauseSong() {
      this.song_state = false;
      this.changeplayicon();
      console.log("pause song");
      this.$store.dispatch("mediaplayer/pausesong_state");
      this.$store.dispatch("mediaplayer/stateofsong");
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
    },
    queue_alter: function() {
      if (this.$router.currentRoute.path == "/HomeWebPlayer/queue") {
        this.$router.go(-1);
      } else {
        this.$router.push("/HomeWebPlayer/queue");
      }
    }
  },
  computed: {
    ...mapState({
      media_player: state => state.mediaplayer.songs
    }),
    ...mapGetters({
      playicon: "mediaplayer/playicon",
      user: "authorization/GetStatus",
      liked: "mediaplayer/liked",
      currentaudio: "mediaplayer/currentaudio",
      progress: "mediaplayer/progress",
      duration: "mediaplayer/duration",
      volume: "mediaplayer/volume"
    })
  }
};
