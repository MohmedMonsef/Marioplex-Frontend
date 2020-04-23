<template>
  <div class="ArtistProfile">
    <artistcoverphoto/>
  </div>
</template>

<style lang="scss" scoped>
.ArtistProfile{
  min-width: 920px;
}
</style>
<script>
import artistcoverphoto from "@/components/Artistpagecoverphoto.vue";
/**
 * Artist page inside webplayer that shows a collection of his/her playlists, albums and tracks
 * @displayName Artist Page
 * @example [none]
 */
export default {
    data: function() {
    return {
      artistid: ""
    };
  },
  name: "ArtistProfile",
   components: {
    artistcoverphoto,
  },
    created: function() {
    this.artistid = this.$route.params.artist_id;
    this.$store.dispatch("artistpage/artist_page", this.$route.params.artist_id);
    this.$store.dispatch("artistpage/checkisfollowed", this.$route.params.artist_id);
  },
  mounted() {
    this.artistid = this.$route.params.artist_id;
  }
};
</script>
