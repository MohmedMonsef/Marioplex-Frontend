<template>
  <div class="home">
    <div class="section">
      <h2 v-if="POPplaylists1.playlists.length">Popular playlists</h2>
      <router-link to="/AllLists" class="seeall" v-if="POPplaylists1.playlists.length"
        >SEE All</router-link
      >
      <div class="container">
        <div class="row">
          <show-popularplaylists
            v-for="POPplaylist in POPplaylists1.playlists.slice(0, 5)"
            :key="POPplaylist.id"
            :images="
              $url +
                '/api/images/' +
                POPplaylist.images[0]._id +
                '?belongs_to=playlist'
            "
            :name="POPplaylist.name"
            :Description="POPplaylist.Description"
            :playlist_id="POPplaylist.id"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <h2 v-if="POPartists1.artists.length">Popular artists</h2>
      <router-link to="/AllArtists" class="seeall1" v-if="POPartists1.artists.length"
        >SEE All</router-link
      >
      <div class="container">
        <div class="row">
          <show-popularartists
            v-for="POPartist in POPartists1.artists.slice(0, 5)"
            :key="POPartist.id"
            :images="
              $url +
                '/api/images/' +
                POPartist.images[0]._id +
                '?belongs_to=artist'
            "
            :name="POPartist.name"
            :artistId="POPartist.id"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <h2 v-if="POPalbums1.albums.length">Popular albums</h2>
      <router-link to="/AllAlbums" class="seeall2" v-if="POPalbums1.albums.length"
        >SEE All</router-link
      >
      <div class="container">
        <div class="row">
          <show-popularalbums
            v-for="POPalbum in POPalbums1.albums.slice(0, 5)"
            :key="POPalbum.id"
            :images="
              $url +
                '/api/images/' +
                POPalbum.images[0]._id +
                '?belongs_to=album'
            "
            :name="POPalbum.name"
            :artistname="POPalbum.artist.name"
            :albumId="POPalbum.id"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <h2 v-if="POPnewreleases1.albums.length">Popular new releases</h2>
      <router-link
        to="/AllReleases"
        class="seeall3"
        v-if="POPnewreleases1.albums.length"
        >SEE All</router-link
      >
      <div class="container">
        <div class="row">
          <show-popularreleases
            v-for="POPnewrelease in POPnewreleases1.albums.slice(0, 5)"
            :key="POPnewrelease.id"
            :images="
              $url +
                '/api/images/' +
                POPnewrelease.images[0]._id +
                '?belongs_to=album'
            "
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
              v-for="playlist in playlists1.slice(0, 5)"
              :key="playlist.id"
              :images="
                $url +
                  '/api/images/' +
                  playlist.images[0]._id +
                  '?belongs_to=playlist'
              "
              :name="playlist.name"
              :ownerName="playlist.owner"
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
  margin-top: 40px;
}
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  display: inline;
  position: relative;
  left: 30px;
}
.container {
  margin-left: 15px;
}
.seeall {
  font-size: 14px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  left: 73.5%;
  // bottom: 71%;
}
.seeall:hover,
.seeall1:hover,
.seeall2:hover,
.seeall3:hover {
  color: gray;
  text-decoration: underline;
}
.seeall1 {
  font-size: 14px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  left: 76%;
  // bottom: 6%;
}
.seeall2 {
  font-size: 14px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  left: 75%;
}
.seeall3 {
  font-size: 14px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  left: 68%;
}
@media only screen and (max-width: 1260px){
  .seeall,
  .seeall1,
  .seeall2,
  .seeall3{
  left: 93%;
  position: absolute;
  }
}
@media only screen and (max-width: 980px){
  .seeall,
  .seeall1,
  .seeall2,
  .seeall3{
  left: 91%;
  position: absolute;
  }
}
@media only screen and (max-width: 850px){
  .seeall,
  .seeall1,
  .seeall2,
  .seeall3{
  left: 89%;
  position: absolute;
  }
}
@media only screen and (max-width: 700px){
  .seeall,
  .seeall1,
  .seeall2,
  .seeall3{
  visibility: hidden;
  position: absolute;
  }
}
</style>

<script>
import ShowPopularplaylists from "@/components/ShowPopularPlaylists.vue";
import ShowPopularartists from "@/components/ShowPopularArtists.vue";
import ShowPopularalbums from "@/components/ShowPopularAlbums.vue";
import ShowPopularreleases from "@/components/ShowPopularReleases.vue";
import LibPlaylists from "@/components/LibPlaylists.vue";
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
    LibPlaylists,
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
    this.$store.dispatch("Playlist/showplaylists");
  },
  methods: {
    handler: function(e) {
      //do stuff
      e.preventDefault();
    },
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      POPplaylists1: "ShowWebPlayer/POPplaylists", // creat new object "playlists1" and map to it
      POPartists1: "ShowWebPlayer/POPartists",
      POPalbums1: "ShowWebPlayer/POPalbums",
      POPnewreleases1: "ShowWebPlayer/POPnewreleases",
      playlists1: "Playlist/playlists",
      isLoggedIn: "Authorization/GetStatus",
    }),
  },
};
</script>
