<template>
  <div>
    <h2 v-if="POPplaylists1.playlists.length">Popular playlists</h2>
    <div class="container">
      <div class="row">
        <show-popularplaylists
          v-for="POPplaylist in POPplaylists1.playlists"
          :key="POPplaylist.id"
          :images="
           $url+'/api/images/' +
            POPplaylist.images[0]._id +
            '?belongs_to=playlist'
          "
          :name="POPplaylist.name"
          :Description="POPplaylist.Description"
          :playlist_id="POPplaylist.id"
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
import ShowPopularplaylists from "@/components/ShowPopularPlaylists.vue";
import { mapGetters } from "vuex";
export default {
  name: "AllLists",
  components: {
    ShowPopularplaylists,
  },
  mounted() {
    this.$store.dispatch("ShowWebPlayer/showPopularPlaylists");
  },
  computed: {
    ...mapGetters({
      POPplaylists1: "ShowWebPlayer/POPplaylists",
    }),
  },
};
</script>
