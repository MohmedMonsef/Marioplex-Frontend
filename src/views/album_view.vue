<template>
  <div class="album">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <albuminfo testid="albuminformation" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
        <song-component
          testid="songcomponent"
          v-for="p in album_tracks"
          :key="p._id"
          :song_id="p._id"
          :song_artists="artist_name"
          :song_name="p.name"
          :song_length="500"
          :isLiked="true"
          :song_album="album_name"
          :albumId="albumid"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.album {
  // min-width: 768px;
  min-height: 900px;
  background-image: linear-gradient(0deg, #161516, rgb(66, 64, 64));
}
.row {
  margin: 25px;
  margin-top: 0;
  display: flex;
}
</style>

<script>
import SongComponent from "@/components/SongComponent.vue";
import albuminfo from "@/components/album_info.vue";
import { mapGetters } from "vuex";
/**
 * Album page made by Artist and you can like and add it to your liked songs also it contains the artist name which will move you to the artist page where you can find more and more of songs you like
 * @displayName Album Page
 * @example [none]
 */
export default {
  name: "albumview",
  data: function() {
    return {
      albumid: ""
    };
  },
  props: {},
  components: {
    SongComponent,
    albuminfo
  },
  computed: {
    ...mapGetters({
      album_tracks: "album/album_tracks",
      album_length: "album/album_length",
      album_load: "album/album_loaded",
      artist_name: "album/artist_name",
      album_name: "album/album_name"
    })
  },
  /**
   * Called at loading the page to display album tracks and send the id to get that specific album
   * @public This is a public method
   */
  created: function() {
    this.albumid = this.$route.params.album_id;
    
    this.$store.dispatch("album/album_tracks", this.$route.params.album_id);
  },
  mounted() {
    this.albumid = this.$route.params.album_id;
  }
};
</script>

