<template>
  <div>
    <h2 v-if="POPalbums1.albums.length">Popular albums</h2>
    <div class="container">
      <div class="row">
        <show-popularalbums
          v-for="POPalbum in POPalbums1.albums"
          :key="POPalbum.id"
          :images="
            $url + '/api/images/' + POPalbum.images[0]._id + '?belongs_to=album'
          "
          :name="POPalbum.name"
          :artistname="POPalbum.artist.name"
          :albumId="POPalbum.id"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-left: 30px;
  display: inline;
}
.container {
  margin-left: 15px;
}
</style>
<script>
import ShowPopularalbums from "@/components/ShowPopularAlbums.vue";
import { mapGetters } from "vuex";
/**
 * @displayName all albums view
 * @example [none]
 */
export default {
  name: "AllAlbums",
  components: {
    ShowPopularalbums
  },
  mounted() {
    this.$store.dispatch("ShowWebPlayer/showPopularAlbums");
  },
  computed: {
    ...mapGetters({
      POPalbums1: "ShowWebPlayer/POPalbums"
    })
  }
};
</script>
