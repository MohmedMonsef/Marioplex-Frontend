<template>
  <div @contextmenu="handler($event)">
    <!-- <navbar-webplayer /> -->
    <div class="section">
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
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin-top: 80px;
}
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
//  import NavbarWebplayer from "@/components/NavbarWebplayer.vue";
import { mapGetters } from "vuex";

export default {
  name: "UserHome",
  components: {
    ShowPopularplaylists
    //  NavbarWebplayer
  },
  created: function() {
    window.addEventListener(
      "contextmenu",
      function(e) {
        // do something here...
        e.preventDefault();
      },
      false
    );
  },

  mounted() {
    this.$store.dispatch("ShowWebPlayer/showPopularPlaylists");
  },
  methods: {
    handler: function(e) {
      //do stuff
      e.preventDefault();
    }
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      POPplaylists1: "ShowWebPlayer/POPplaylists" // creat new object "playlists1" and map to it
    })
  }
};
</script>
