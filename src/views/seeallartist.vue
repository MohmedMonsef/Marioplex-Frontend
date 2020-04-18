<template>
  <div class="cont" v-if="search_value!==''&&!searchfocus">
    <div v-if="match_artists.length" v-on:load="inartist">
      <h3>Show Artists For"{{ search_value }}"</h3>
      <div class="row">
        <LibArtists
          class="col-lg-10% col-md-60% col-xs-6"
          v-for="match_artist in match_artists"
          :key="match_artist.id"
          :images="match_artist.images"
          :name="match_artist.name"
          :artistId="match_artist._id"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
h3 {
  color: white;
}
.cont {
  margin-left: 15px;
  margin-bottom: 25px;
  width: 100%;
  height: 100vh;
}
.row {
  margin-bottom: 15px;
  width: 95%;
}
</style>
<script>
import LibArtists from "@/components/lib-artists.vue";
import { mapGetters } from "vuex";
export default {
  name: "seeallartist",
  components: {
    LibArtists
  },
  methods: {
    inartist() {
      this.$store.dispatch("Search/artistin", true);
    }
  },
  computed: {
    ...mapGetters({
      match_artists: "Search/getresult",
      search_value: "Search/get_value",
      searchfocus:"Search/searchfocus"
    })
  }
};
</script>
