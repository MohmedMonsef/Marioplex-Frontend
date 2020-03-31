<template>
    <div>
        <lib-playlists-default v-if="playlists1.length==0"/>
        <h2 v-if="playlists1.length">Playlists</h2>
        <div class="container">
        <div class="row">
          <lib-playlists
            v-for="playlist in playlists1"
            :key="playlist.id"
            :images="playlist.images"
            :name="playlist.name"
            :owner="playlist.owner"
            :playlist_id="playlist._id"
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
import LibPlaylistsDefault from "@/components/lib-playlists-default.vue"
import LibPlaylists from "@/components/lib-playlists.vue"
import { mapGetters} from "vuex";
export default {
    name: "library-playlists",
    components:{
        LibPlaylistsDefault,
        LibPlaylists
    },
     mounted() {
    this.$store.dispatch("creatplaylist/showplaylists");
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      playlists1: "creatplaylist/playlists" // creat new object "playlists1" and map to it
    })
  },
}
</script>