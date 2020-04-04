<template>
    <div>
        <lib-artists-default v-if="artists1.length==0"/>
        <h2 v-if="artists1.length">Artists</h2>
        <div class="container">
        <div class="row">
          <lib-artists
            v-for="artist in artists1"
            :key="artist.id"
          :images="artist.images"
          :name="artist.Name"
          :artistId="artist._id"
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
import LibArtistsDefault from "@/components/lib-artists-default.vue"
import LibArtists from "@/components/lib-artists.vue"
import { mapGetters} from "vuex";
export default {
    name: "library-artists",
     components:{
        LibArtistsDefault,
        LibArtists
    },
     mounted() {
    this.$store.dispatch("userlibrary/showUserArtists");
  },
  computed: {
    ...mapGetters({
      // map `this.artists1` to `this.$store.getters.artists`
      artists1: "userlibrary/artists" 
    }),
  }
}
</script>