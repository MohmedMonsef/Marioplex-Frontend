<template>
  <div class="cont" v-if="search_value !== '' && !searchfocus">
    <div v-if="match_albums.length" v-on:load="inartist" class="margin">
      <h3>Show LibAlbums For"{{ search_value }}"</h3>
      <div class="row">
        <LibAlbums
          class="col-lg-10% col-md-60% col-xs-6"
          v-for="match_album in match_albums"
          :key="match_album.id"
          :images="$url+
            '/api/images/' +
            match_album.images[0]._id +
            '?belongs_to=artist'
          "
          :name="match_album.name"
          :albumId="match_album._id"
          :artistname="match_album.artistName"
          :artistId="match_album.artistId"
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
  name: "seeallalbum",
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
      match_albums: "Search/getalbumres",
      search_value: "Search/get_value",
      searchfocus: "Search/searchfocus",
    }),
  },
};
</script>
