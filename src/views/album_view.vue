<template>
  <div class="album">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <albuminfo />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
        <song-component
          v-for="p in album_tracks"
          :key="p._id"
          :song_id="p._id"
          :song_artists="artist_name"
          :song_name="p.name"
          :song_album="p.albumName"
          :song_length="500"
          :isLiked="true"
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
export default {
  name: "albumview",
  props: {
    isLiked: {
      type: Boolean
    }
  },
  components: {
    SongComponent,
    albuminfo
  },
  computed: {
    ...mapGetters({
      album_tracks: "album/album_tracks",
      album_length: "album/album_length",
      album_load: "album/album_loaded",
      artist_name: "album/artist_name"
    })
  },
  created: function() {
    this.$store.dispatch("album/album_tracks", this.$route.params.album_id);
  }
};
</script>
>
