<template>
  <div class="home">
    <div class="section">
      <h2 v-if="POPplaylists1.playlists.length">Popular playlists</h2>
      <a href="/AllLists" class="seeall" v-if="POPplaylists1.playlists.length">SEE All</a>
      <div class="container">
        <div class="row">
          <show-popularplaylists
            v-for="POPplaylist in POPplaylists1.playlists.slice(0,5)"
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
      <a href="/AllArtists" class="seeall1" v-if="POPartists1.artists.length">SEE All</a>
      <div class="container">
        <div class="row">
          <show-popularartists
            v-for="POPartist in POPartists1.artists.slice(0,5)"
            :key="POPartist.id"
            :images="POPartist.images"
            :name="POPartist.name"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <h2 v-if="POPalbums1.albums.length">Popular albums</h2>
      <a href="/AllAlbums" class="seeall2"  v-if="POPalbums1.albums.length">SEE All</a>
      <div class="container">
        <div class="row">
          <show-popularalbums
            v-for="POPalbum in POPalbums1.albums.slice(0,5)"
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
      <a href="/AllReleases" class="seeall3"  v-if="POPnewreleases1.albums.length">SEE All</a>
      <div class="container">
        <div class="row">
          <show-popularreleases
            v-for="POPnewrelease in POPnewreleases1.albums.slice(0,5)"
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
              v-for="playlist in playlists1.slice(0,5)"
              :key="playlist.id"
              :images="playlist.images"
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
  margin-left: 30px;
  display: inline;
}
.container {
  margin-left: 15px;
}
.seeall{
font-size: 14px;
color: gray;
font-weight: bold;
margin-left: 70%;
cursor: pointer;
}
.seeall:hover, .seeall1:hover, .seeall2:hover, .seeall3:hover{
  color: gray;
  text-decoration:underline;
}
.seeall1{
  font-size: 14px;
color: gray;
font-weight: bold;
margin-left: 73%;
cursor: pointer;
}
.seeall2{
   font-size: 14px;
color: gray;
font-weight: bold;
margin-left: 71%;
cursor: pointer;
}
.seeall3{
   font-size: 14px;
color: gray;
font-weight: bold;
margin-left: 65%;
cursor: pointer;
}

</style>

<script>
import ShowPopularplaylists from "@/components/ShowPopularplaylists.vue";
import ShowPopularartists from "@/components/ShowPopularartists.vue";
import ShowPopularalbums from "@/components/ShowPopularalbums.vue";
import ShowPopularreleases from "@/components/ShowPopularreleases.vue";
import LibPlaylists from "@/components/lib-playlists.vue";
import { mapGetters } from "vuex";

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