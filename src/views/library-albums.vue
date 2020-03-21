<template>
    <div>
       <lib-albums-default v-if="albums1.length ==0"/>
       <h2 v-if="albums1.length">Albums</h2>
       <div class="container">
        <div class="row">
          <lib-albums
            v-for="album in albums1"
            :key="album.id"
            :image="album.image"
            :albumname="album.albumname"
            :artistname="album.artistname"
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
  margin-top: 38px;
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
    this.$store.dispatch("useralbums/showUserAlbums");
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      albums1: "useralbums/albums" // creat new object "playlists1" and map to it
    }),
  }
}
</script>