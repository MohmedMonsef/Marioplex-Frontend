<template>
    <div class="home">
      <div class="section">
        <h2 v-if="POPplaylists1.length">Popular playlists</h2>
        <div class="container">
          <div class="row">
            <show-popularplaylists
              v-for="POPplaylist in POPplaylists1"
              :key="POPplaylist.id"
              :images="POPplaylist.images"
              :name="POPplaylist.name"
              :Description="POPplaylist.Description"
            />
          </div>
        </div>
      </div>
      <div class="section">
        <h2 v-if="POPartists1.length">Popular artists</h2>
        <div class="container">
          <div class="row">
            <show-popularartists
              v-for="POPartist in POPartists1"
              :key="POPartist.id"
              :images="POPartist.images"
              :name="POPartist.name"
            />
          </div>
        </div>
      </div>
      <div class="section">
        <h2 v-if="POPalbums1.length">Popular albums</h2>
        <div class="container">
          <div class="row">
            <show-popularalbums
              v-for="POPalbum in POPalbums1"
              :key="POPalbum.id"
              :images="POPalbum.images"
              :name="POPalbum.name"
              :artistname="POPalbum.artist.name"
            />
          </div>
        </div>
      </div>
      <div class="section">
        <h2 v-if="POPnewreleases1.length">Popular new releases</h2>
        <div class="container">
          <div class="row">
            <show-popularreleases
              v-for="POPnewrelease in POPnewreleases1"
              :key="POPnewrelease.id"
              :images="POPnewrelease.images"
              :name="POPnewrelease.name"
              :artistname="POPnewrelease.artist.name"
            />
          </div>
        </div>
      </div>
       <div class="section">
        <h2 v-if="POPnewreleases1.length">Your playlists</h2>
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
    </div>
</template>

<style lang="scss" scoped>
.home{
   min-height: 2000px;
}
.section{
  margin-top: 10px;
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
import ShowPopularartists from "@/components/ShowPopularartists.vue";
import ShowPopularalbums from "@/components/ShowPopularalbums.vue";
import ShowPopularreleases from "@/components/ShowPopularreleases.vue";
import LibPlaylists from "@/components/lib-playlists.vue"
import { mapGetters} from "vuex";

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
  mounted() {
    this.$store.dispatch("ShowWebPlayer/showPopularPlaylists");
    this.$store.dispatch("ShowWebPlayer/showPopularArtists");
    this.$store.dispatch("ShowWebPlayer/showPopularAlbums");
    this.$store.dispatch("ShowWebPlayer/showPopularNewreleases");
     this.$store.dispatch("creatplaylist/showplaylists");
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      POPplaylists1: "ShowWebPlayer/POPplaylists", // creat new object "playlists1" and map to it
      POPartists1: "ShowWebPlayer/POPartists",
      POPalbums1: "ShowWebPlayer/POPalbums",
      POPnewreleases1: "ShowWebPlayer/POPnewreleases",
        playlists1: "creatplaylist/playlists" ,
    })
  }
};
</script>
