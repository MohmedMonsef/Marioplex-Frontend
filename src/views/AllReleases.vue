<template>
  <div>
    <h2 v-if="POPnewreleases1.albums.length">Popular new releases</h2>
    <div class="container">
      <div class="row">
        <show-popularreleases
          v-for="POPnewrelease in POPnewreleases1.albums"
          :key="POPnewrelease.id"
          :images="
            $url +
              '/api/images/' +
              POPnewrelease.images[0]._id +
              '?belongs_to=album'
          "
          :name="POPnewrelease.name"
          :artistname="POPnewrelease.artist.name"
          :albumId="POPnewrelease.id"
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
import ShowPopularreleases from "@/components/ShowPopularReleases.vue";
import { mapGetters } from "vuex";
/**
 * @displayName all releases view
 * @example [none]
 */
export default {
  name: "AllAlbums",
  components: {
    ShowPopularreleases,
  },
  mounted() {
    this.$store.dispatch("ShowWebPlayer/showPopularNewreleases");
  },
  computed: {
    ...mapGetters({
      POPnewreleases1: "ShowWebPlayer/POPnewreleases",
    }),
  },
};
</script>
