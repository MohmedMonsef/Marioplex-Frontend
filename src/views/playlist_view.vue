<template>
  <div class="playlist">
    <div class="loading" v-if="!playlist_load">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <!-- <playlistpopup v-if="show" /> -->
    <div v-if="playlist_load" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <playlist v-if="this.playlist_length == 0" />
        <playlistinfo v-else />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
        <!-- to make it apper when no tracks on playlist as draggable make it not appear-->
        <emptytracks v-if="this.playlist_length == 0" />
        <draggable @end="ReorderTracks">
          <transition-group type="transition" name="flip-list">
            <emptytracks v-if="this.playlist_length == 0" />
            <song-component
              v-else
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
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.playlist {
  // min-width: 768px;
  min-height: 900px;
  background-image: linear-gradient(0deg, #161516, rgb(66, 64, 64));
}
.loading {
  display: flex;
  justify-content: center;
  i {
    font-size: 70px;
    margin-top: 100px;
    color: white;
  }
}
.row {
  margin: 25px;
  margin-top: 0;
  display: flex;
}
// @media screen and (max-width: 1196px) {
//  .row{
// flex-direction: column;
//  }
// .col{
//   flex: 50%;
// }
// }
</style>

<script>
import SongComponent from "@/components/SongComponent.vue";
import emptytracks from "@/components/emptytracks.vue";
import playlist from "@/components/playlist.vue";
import playlistinfo from "@/components/playlist_info.vue";
//import playlistpopup from "@/components/playlistpopup.vue";
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
// import { mapState } from "vuex";
export default {
  name: "playlistview",
  props: {
    isLiked: {
      type: Boolean
    }
  },
  data: function() {
    return {
      show: false,
      oldIndex: "",
      newIndex: ""
    };
  },
  components: {
    SongComponent,
    draggable,
    playlist,
    emptytracks,
    playlistinfo
    //  playlistpopup
  },
  methods: {
    toggleShow() {
      var x = this.show;
      window.Element.show = false;
      this.show = !x;
    },
    ReorderTracks(event) {
      console.log("inplaylist_view", event);

      this.oldIndex = event.oldIndex;
      this.newIndex = event.newIndex;
      let payload = {
        oldIndex: this.oldIndex,
        newIndex: this.newIndex
      };
      this.$store.dispatch("playlist/ReorderTracks", payload);
    }
  },
  computed: {
    // ...mapState({
    //   show: state => state.playlistpopup.showModal
    // }),
    ...mapGetters({
      playlist_tracks: "playlist/playlist_tracks",
      playlist_length: "playlist/playlist_length",
      playlist_load: "playlist/playlist_loaded"
    })
  },
  created: function() {
    this.$store.dispatch(
      "playlist/playlist_tracks",
      this.$route.params.playlist_id
    ),
      console.log("Playlist_id", this.$route.params.playlist_id);
    console.log("nihal here is the length", this.playlist_length);
  }
};
</script>
>
