<template>
  <div class="cont" v-if="search_value !== '' && !searchfocus">
    <div v-if="match_playlists.length" v-on:load="inartist" class="margin">
      <h3>Show Playlist For"{{ search_value }}"</h3>
      <div class="row">
        <LibPlaylists
          v-for="match_playlist in match_playlists"
          :key="match_playlist.id"
          :images="
            $url +
              '/api/images/' +
              match_playlist.images[0]._id +
              '?belongs_to=playlist'
          "
          :name="match_playlist.name"
          :ownerName="match_playlist.ownerName"
          :ownerId="match_playlist.ownerId"
          :playlist_id="match_playlist._id"
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
import LibPlaylists from "@/components/LibPlaylists.vue";
import { mapGetters } from "vuex";
/**
 * Part of the Search page where results of search for playlist appear but also part of them till press seeall button
 * @displayName seeallplaylist
 * @example [none]
 */
export default {
  name: "seeallplaylist",
  components: {
    LibPlaylists,
  },
  methods: {
    /**
     * check if not in searchpage
     * @public This is a public method
     */
    inartist() {
      this.$store.dispatch("Search/artistin", true);
    },
  },
  computed: {
    ...mapGetters({
      match_playlists: "Search/getplaylistsres",
      search_value: "Search/get_value",
      searchfocus: "Search/searchfocus",
    }),
  },
};
</script>
