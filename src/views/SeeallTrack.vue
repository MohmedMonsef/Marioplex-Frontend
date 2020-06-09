<template>
  <div class="cont" v-if="search_value !== '' && !searchfocus">
    <div v-if="match_tracks.length" v-on:load="inartist" class="margin">
      <h3>Show Tracks For"{{ search_value }}"</h3>
      <div class="row">
        <LibAlbums
          class="col-lg-10% col-md-60% col-xs-6"
          v-for="match_track in match_tracks"
          :key="match_track.id"
          :images="
            $url +
              '/api/images/' +
              match_track.albumImages[0]._id +
              '?belongs_to=album'
          "
          :name="match_track.name"
          :albumId="match_track._id"
          :artistname="match_track.artistName"
          :artistId="match_track.artistId"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.margin {
  margin-bottom: 200px;
}
h3 {
  color: white;
}
.cont {
  margin-left: 15px;
  width: 100%;
  height: 100vh;
}
.row {
  margin-bottom: 15px;
  width: 95%;
}
</style>
<script>
import LibAlbums from "@/components/LibAlbums.vue";
import { mapGetters } from "vuex";
export default {
  name: "seealltrack",
  components: {
    LibAlbums,
  },
  methods: {
    inartist() {
      this.$store.dispatch("Search/artistin", true);
    },
  },
  computed: {
    ...mapGetters({
      match_tracks: "Search/gettrack",
      search_value: "Search/get_value",
      searchfocus: "Search/searchfocus",
    }),
  },
};
</script>
