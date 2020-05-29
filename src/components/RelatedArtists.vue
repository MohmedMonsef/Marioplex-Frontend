<template>
  <div class="relatedartists">
    <div class="row">
      <lib-artists
        v-for="artist in relatedartists"
        :key="artist.id"
        :images="
          $url + '/api/images/' + artist.images[0]._id + '?belongs_to=artist'
        "
        :name="artist.Name"
        :artistId="artist._id"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.relatedartists {
  margin-left: 30px;
}
</style>

<script>
import LibArtists from "@/components/LibArtists.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    LibArtists,
  },
  computed: {
    ...mapGetters({
      relatedartists: "ArtistPage/artist_relatedartists",
    }),
  },
  created: function() {
    this.artistid = this.$route.params.artist_id;
    this.$store.dispatch(
      "ArtistPage/artist_relatedartists",
      this.$route.params.artist_id
    );
  },
  mounted() {
    this.artistid = this.$route.params.artist_id;
  },
};
</script>
