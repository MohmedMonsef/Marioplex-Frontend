<template>
  <div class="playlist">
    <div class="loading" v-if="!playlist_load">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="playlist_load" class="row">
      <div class="col-4">
        <div class="playlist_image">
          <img src="../assets/cry.png" alt="playlist_image" />
          <span data-toggle="tooltip" title="the playlist name">
            <h2 class="playlistname">The Playlist name</h2>
          </span>
          <button class="playbutton">PLAY</button>
          <div class="add-library">
            <button class="heartbutton">
              <!-- here there is condition of like and call of method inside the button and donot forget to add the second heart -->
              <span data-toggle="tooltip" title="Save to your Liked Songs">
                <i
                  class="fa fa-heart-o"
                  id="emptyhearticon"
                  testid="emptyhearticon"
                ></i>
              </span>
            </button>
            <span data-toggle="tooltip" title="More">
              <i
                id="list_icon"
                class="fa fa-ellipsis-h dots_icon"
                @click="this.toggleShow"
              ></i>
            </span>
            <div id="mydropdown" class="db" v-show="show">
              <!-- <p v-if="!isLiked">Add to Liked Songs</p>
        <p v-if="isLiked">Remove from Liked Songs</p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <song-component
          v-for="(p, i) in playlist_tracks"
          :key="p.trackid"
          :index="i"
          :song_id="p.trackid"
          :song_artists="p.artistName"
          :song_name="p.name"
          :song_album="p.albumName"
          :albumId="p.albumId"
          :song_length="500"
          :isLiked="p.isLiked"
          :playlistId="$route.params.playlist_id"
          :isPlaylist="true"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  i {
    font-size: 70px;
    margin-top: 100px;
  }
}
.body {
  min-width: 768px;
  min-height: 600px;
  // display: flex;
  height: 100%;
  overflow: auto;
}
.row {
  margin: 15px;
}
.playlist_image {
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
}
.playlistname {
  color: white;
  margin: 25px;
}
button {
  background-color: transparent;
  border: none;
  padding: 10px;
}
.playbutton {
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
.playbutton:hover {
  transform: scale(1.06);
}
.heartbutton {
  background-color: #161516;
  margin: 15px;
  display: inline;
}
button:focus {
  outline: 0 !important;
}
.fa {
  color: white;
  font-size: 25px;
  display: inline;
}
.add_library {
  // display: flex;
  justify-content: space-between;
}
</style>

<script>
import SongComponent from "@/components/SongComponent.vue";
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      show: false
    };
  },
  name: "playlist",
  components: {
    SongComponent
  },
  methods: {
    toggleShow() {
      var x = this.show;
      window.Element.show = false;
      this.show = !x;
    }
  },
  computed: {
    ...mapGetters({
      playlist_tracks: "playlist/playlist_tracks",
      playlist_load: "playlist/playlist_loaded"
    })
  },
  created: function() {
    this.$store.dispatch(
      "playlist/playlist_tracks",
      this.$route.params.playlist_id
    );
    console.log("Playlist_id", this.$route.params.playlist_id);
  }
};
</script>
