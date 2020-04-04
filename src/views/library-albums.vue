<template>
    <div>
       <lib-albums-default v-if="albums1.length ==0"/>
       <h2 v-if="albums1.length">Albums</h2>
       <div class="container">
        <div class="row">
          <lib-albums
            v-for="album in albums1"
            :key="album.id"
          :albumId="album._id"
          :images="album.images"
          :name="album.name"
          :artistname="album.artistName"
          :artistId="album.artistId"
          />
        </div>
      </div>
    </div>
</template>

<style scoped>
h2{
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 14px;
  margin-left: 30px;
  margin-top: 80px;
}
.container {
  margin-left: 15px;
}
</style>

<script>
import LibAlbumsDefault from "@/components/lib-albums-default.vue"
import LibAlbums from "@/components/lib-albums.vue"
import { mapGetters} from "vuex";
export default {
    name: "library-albums",
    components:{
        LibAlbumsDefault,
        LibAlbums
    },
     mounted() {
    this.$store.dispatch("userlibrary/showUserAlbums");
  },
  computed: {
    ...mapGetters({
      // map `this.albums1` to `this.$store.getters.albums`
      albums1: "userlibrary/albums"
    }),
  }
}
</script>