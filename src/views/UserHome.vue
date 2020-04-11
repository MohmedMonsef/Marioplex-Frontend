<template>
  <div class="home">
    <div class="section">
      <h2 v-if="POPplaylists1.playlists.length">Popular playlists</h2>
      <div class="container has_popular_playlists ">
        <div class="row">
          <show-popularplaylists
            v-for="POPplaylist in POPplaylists1.playlists"
            :key="POPplaylist.id"
            :images="POPplaylist.images"
            :name="POPplaylist.name"
            :Description="POPplaylist.Description"
            :playlist_id="POPplaylist.id"
          />
        </div>
      </div>
    </div>
    <div class="section">
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
    <div class="section">
      <h2 v-if="POPalbums1.albums.length">Popular albums</h2>
      <div class="container">
        <div class="row">
          <show-popularalbums
            v-for="POPalbum in POPalbums1.albums"
            :key="POPalbum.id"
            :images="POPalbum.images"
            :name="POPalbum.name"
            :artistname="POPalbum.artist.name"
            :albumId="POPalbum.id"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <h2 v-if="POPnewreleases1.albums.length">Popular new releases</h2>
      <div class="container">
        <div class="row">
          <show-popularreleases
            v-for="POPnewrelease in POPnewreleases1.albums"
            :key="POPnewrelease.id"
            :images="POPnewrelease.images"
            :name="POPnewrelease.name"
            :artistname="POPnewrelease.artist.name"
            :albumId="POPnewrelease.id"
          />
        </div>
      </div>
    </div>
    <div class="login" v-if="isLoggedIn == 'success'">
      <div class="section">
        <h2 v-if="playlists1.length">Your playlists</h2>
        <div class="container">
          <div class="row">
            <lib-playlists
              v-for="playlist in playlists1"
              :key="playlist.id"
              :images="playlist.images"
              :name="playlist.name"
              :owner="playlist.owner"
              :playlist_id="playlist.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-height: 2000px;
}
.section {
  margin-top: 10px;
}
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  margin-left: 30px;
  margin-top: 40px;
}
.container {
  margin-left: 15px;
}
</style>

<script>
import ShowPopularplaylists from "@/components/ShowPopularplaylists.vue";
import ShowPopularartists from "@/components/ShowPopularartists.vue";
import ShowPopularalbums from "@/components/ShowPopularalbums.vue";
import ShowPopularreleases from "@/components/ShowPopularreleases.vue";
import LibPlaylists from "@/components/lib-playlists.vue";
import { mapGetters } from "vuex";
/**
 * This page show popular playlists,albums,releases and artists also shows at the end of the page user's liked playists
 * @displayName UserHome Page
 * @example [none]
 */
export default {
  name: "UserHome",
  components: {
    ShowPopularplaylists,
    ShowPopularartists,
    ShowPopularalbums,
    ShowPopularreleases,
    LibPlaylists
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
    this.$store.dispatch("ShowWebPlayer/showPopularArtists");
    this.$store.dispatch("ShowWebPlayer/showPopularAlbums");
    this.$store.dispatch("ShowWebPlayer/showPopularNewreleases");
    this.$store.dispatch("creatplaylist/showplaylists");
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
      POPplaylists1: "ShowWebPlayer/POPplaylists", // creat new object "playlists1" and map to it
      POPartists1: "ShowWebPlayer/POPartists",
      POPalbums1: "ShowWebPlayer/POPalbums",
      POPnewreleases1: "ShowWebPlayer/POPnewreleases",
      playlists1: "creatplaylist/playlists",
      isLoggedIn: "authorization/GetStatus"
    })
  }
};
</script>
