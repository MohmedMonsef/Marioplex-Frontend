<template>
  <div>
    <h2 v-if="POPplaylists1.length">Popular playlists</h2>
    <div class="container">
      <div class="row">
        <show-popularplaylists
          v-for="POPplaylist in POPplaylists1"
          :key="POPplaylist.id"
          :image="POPplaylist.image"
          :title="POPplaylist.title"
          :des="POPplaylist.des"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  margin-left: 30px;
}
.container {
  margin-left: 15px;
}
</style>

<script>
import ShowPopularplaylists from "@/components/ShowPopularplaylists.vue";
import { mapGetters } from "vuex";

export default {
  name: "UserHome",
  components: {
    ShowPopularplaylists
  },
  mounted() {
    this.$store.dispatch("ShowWebPlayer/showPopularPlaylists");
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      POPplaylists1: "ShowWebPlayer/POPplaylists" // creat new object "playlists1" and map to it
    })
  }
};
</script>
