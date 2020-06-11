<template>
  <div class="cont" v-if="search_value !== '' && !searchfocus">
    <div v-if="match_artists.length" v-on:load="inartist" class="margin">
      <h3>Show Artists For"{{ search_value }}"</h3>
      <div class="row">
        <LibArtists
          class="col-lg-10% col-md-60% col-xs-6"
          v-for="match_artist in match_artists"
          :key="match_artist.id"
          :images="
            $url +
              '/api/images/' +
              match_artist.images[0]._id +
              '?belongs_to=artist'
          "
          :name="match_artist.name"
          :artistId="match_artist._id"
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
import LibArtists from "@/components/LibArtists.vue";
import { mapGetters } from "vuex";
/**
 * Part of the Search page where results of search for artists appear but also part of them till press seeall button
 * @displayName Seeall Artists
 * @example [none]
 */
export default {
  name: "seeallartist",
  components: {
    LibArtists
  },
  methods: {
    /**
     * check if not in searchpage
     * @public This is a public method
     */
    inartist() {
      this.$store.dispatch("Search/artistin", true);
    }
  },
  computed: {
    ...mapGetters({
      match_artists: "Search/getresult",
      search_value: "Search/get_value",
      searchfocus: "Search/searchfocus"
    })
  }
};
</script>
