<template>
  <div>
    <div class="loading" v-if="!loadingalbums">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="loadingalbums">
      <lib-albums-default id="defaultscreen" v-if="albums1.length == 0" />
      <h2 v-if="albums1.length">Albums</h2>
      <div class="container">
        <div class="row">
          <lib-albums
            v-for="album in albums1"
            :key="album._id"
            :albumId="album._id"
            :images="$url+
              '/api/images/' +
              album.images[0]._id +
              '?belongs_to=album'
            "
            :name="album.name"
            :artistname="album.artistName"
            :artistId="album.artistId"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  i {
    color: #fff;
    font-size: 70px;
    margin-top: 100px;
  }
}
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 14px;
  margin-left: 30px;
  margin-top: 38px;
}
.container {
  margin-left: 15px;
}
</style>

<script>
import LibAlbumsDefault from "@/components/LibAlbumsDefault.vue";
import LibAlbums from "@/components/LibAlbums.vue";
import { mapGetters } from "vuex";
/**
 * albums saved by the user and stored inside his library
 * @displayName Library Album page
 * @example [none]
 */
export default {
  name: "library-albums",
  components: {
    LibAlbumsDefault,
    LibAlbums,
  },
  mounted() {
    this.$store.dispatch("UserLibrary/showUserAlbums");
  },
  computed: {
    ...mapGetters({
      // map `this.albums1` to `this.$store.getters.albums`
      albums1: "UserLibrary/albums",
      loadingalbums: "UserLibrary/loadingalbums",
    }),
  },
};
</script>
