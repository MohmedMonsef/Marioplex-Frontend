<template>
  <div class="playlist">
    <div class="loading" v-if="!playlist_load">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="playlist_load" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <playlist v-if="this.playlist_length == 0" />
        <playlistinfo v-else />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
        <!-- to make it apper when no tracks on playlist as draggable make it not appear-->
        <emptytracks v-if="this.playlist_length == 0" />
        <draggable
          ghost-class="ghost"
          class="reordertracks"
          @end="ReorderTracks"
          v-else
        >
          <transition-group type="transition" name="flip-list">
            <!-- <emptytracks v-if="this.playlist_length == 0"/> -->
            <song-component
              testid="songcomponent"
              class="sortable"
              v-for="(p, i) in playlist_tracks"
              :key="p.trackid"
              :index="i"
              :song_id="p.trackid"
              :song_artists="p.artistName"
              :artist_id="p.artistId"
              :song_name="p.name"
              :song_album="p.albumName"
              :albumId="p.albumId"
              :song_length="500"
              :isLiked="p.isLiked"
              :playlistId="$route.params.playlist_id"
              :isPlaylist="true"
              :isPlayable="p.playable"
            />
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .playlist {
//   // min-width: 768px;
//   // min-height: 900px;
// }
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
.sortable-drag {
  opacity: 0;
}
.ghost {
  border-bottom: 1px solid #1ed760;
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
import emptytracks from "@/components/EmptyTracks.vue";
import playlist from "@/components/Playlist.vue";
import playlistinfo from "@/components/PlaylistInfo.vue";
//  import playlistpopup from "@/components/playlistpopup.vue";
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
import { mapState } from "vuex";
import ColorThief from "colorthief";
/**
 * Playlist page which contains some information like its name and the name of user made by and of course some tracks and some information about them here you can like the whole playlist and add it to your liked playlists
 * @displayName Playlist page
 * @example [none]
 */
export default {
  name: "playlistview",
  props: {
    // isLiked: {
    //   type: Boolean
    // }
  },
  data: function() {
    return {
      show: false,
      oldIndex: "",
      newIndex: "",
      playlist_id: ""
    };
  },
  components: {
    SongComponent,
    draggable,
    playlist,
    emptytracks,
    playlistinfo
    // playlistpopup
  },
  methods: {
    toggleShow() {
      var x = this.show;
      window.Element.show = false;
      this.show = !x;
    },
    /**
     * Reorder tracks function used to reorder the tracks inside user's playlist in the library with the order he want (not completed yet)
     * @public This is a public method
     * @param {Number} oldIndex old postion of the song
     * @param {Number} newIndex new postion of the song
     * @param {String} playlist_id playlist id
     */
    ReorderTracks(event) {
      // console.log("inplaylist_view",event)
      let playlist_Id = this.$route.params.playlist_id;
      this.playlist_id = playlist_Id;
      this.oldIndex = event.oldIndex;
      this.newIndex = event.newIndex;
      let payload = {
        start: this.oldIndex,
        before: this.newIndex,
        playlist_id: this.playlist_id
      };
      console.log("in playlist_view ", this.playlist_id);
      this.$store.dispatch("Playlist/ReorderTracks", payload);
    }
  },
  computed: {
    ...mapState({
      showpopup: state => state.playlistpopup.showModal
    }),
    ...mapGetters({
      playlist_tracks: "Playlist/playlist_tracks",
      playlist_length: "Playlist/playlist_length",
      playlist_load: "Playlist/playlist_loaded",
      playlist_image: "Playlist/playlist_image",
    })
  },
  created: function() {
    this.$store.dispatch(
      "Playlist/playlist_tracks",
      this.$route.params.playlist_id
    ),
      console.log("Playlist_id", this.$route.params.playlist_id);
    console.log("nihal here is the length", this.playlist_length);
    var img = new Image();
    img.setAttribute("crossOrigin", "");
    img.src = this.$url+"/api/images/" + this.playlist_image +"?belongs_to=playlist";
    img.addEventListener("load", () => {
      const colorThief = new ColorThief();
      var c = colorThief.getColor(img);
      console.log("the theif color", c);
      var element = document.querySelector(".playlist");
      element.style.background ="linear-gradient(-180deg," + "rgb" + "(" + c + ")," + "#161516" + " )";
      element.style.backgroundSize = " 600% 600% 300% 300% ";
      element.style.height = '200px';
    });
  }
};
</script>
