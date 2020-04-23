<template>
    <div class="relatedartists">
        <div class="row">
           <lib-artists
            v-for="artist in relatedartists"
            :key="artist.id"
            :images="artist.images"
            :name="artist.Name"
            :artistId="artist._id"
          />
          </div>
    </div>
</template>

<style lang="scss" scoped>
.relatedartists{
    margin-left: 30px;
}
</style>

<script>
import LibArtists from "@/components/lib-artists.vue";
import { mapGetters } from "vuex";
export default {
     components: {
   LibArtists
  },
    computed: {
    ...mapGetters({
     relatedartists: "artistpage/artist_relatedartists",
    })
  },
   created: function() {
    this.artistid = this.$route.params.artist_id;
    this.$store.dispatch("artistpage/artist_relatedartists", this.$route.params.artist_id);
  },
  mounted() {
    this.artistid = this.$route.params.artist_id;
  }
}
</script>