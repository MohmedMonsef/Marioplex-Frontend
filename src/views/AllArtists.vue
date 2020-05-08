[11:25 pm, 07/04/2020] -: AllArtists.vue
[11:26 pm, 07/04/2020] -: <template>
<div>
    <h2 v-if="POPartists1.artists.length">Popular artists</h2>
      <div class="container">
        <div class="row">
          <show-popularartists
            v-for="POPartist in POPartists1.artists"
            :key="POPartist.id"
            :images="POPartist.images"
            :name="POPartist.name"
          />
        </div>
      </div>
</div>
</template>
<style scoped>
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-left: 30px;
  display: inline;
}
.container {
  margin-left: 15px;
}
</style>
<script>
import ShowPopularartists from "@/components/ShowPopularartists.vue";
import { mapGetters } from "vuex";
export default {
    name: "AllArtists",
     components: {
  ShowPopularartists,
     },
      mounted() {
    this.$store.dispatch("ShowWebPlayer/showPopularArtists");
      },
      computed: {
    ...mapGetters({
       POPartists1: "ShowWebPlayer/POPartists",
    })
      }
    
}
</script>