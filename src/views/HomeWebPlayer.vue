<template>
  <div class="home_webplayer">
    <side-bar />
    <CreatePlaylist v-if="show" />
    <div id="HomeInWebPlayer" v-if="false">
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
    <div id="HomeInWebPlayer">
      <div class="search_contaner">
        <i class="fa fa-search hover"></i>
        <input testid="search-box" id="search-box" placeholder="Search for artist" />
      </div>
      <h2 v-if="categorys.length">Browse All</h2>
      <div class="container">
        <div class="row">
          <category
            v-for="category in categorys"
            :key="category.id"
            :image="category.image"
            :name="category.name"
            :link="category. href"
            :playlists="category. playlist"
          />
        </div>
      </div>
    </div>
    <mediaplayer />
  </div>
</template>
<style scoped>
#HomeInWebPlayer {
  width: 100%;
  height: auto;
  margin-left: 235px;
  background-color: #161516;
  position: fixed;
  top: 0%;
  z-index: 0;
  color: white;
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
#search-box {
  width: 95%;
  height: 100%;
  border: rgba(0, 0, 0, 0.041);
  cursor: none;
  border-radius: 17px;
  font-family: sans-serif;
  font-size: large;
  color: black;
  font-weight: 500;
}

.search_contaner {
  padding-left: 15px;
  width: 30%;
  height: 40px;
  margin-left: 10%;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 17px;
  background-color: white;
  color: rgb(26, 24, 9);
}
</style>
<script>
import SideBar from "@/components/SideBar.vue";
import ShowPopularplaylists from "@/components/ShowPopularplaylists.vue";
import CreatePlaylist from "@/components/CreatePlaylist.vue";
import mediaplayer from "@/components/mediaplayer.vue";
import category from "@/components/category.vue";
import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "HomeWebPlayer",
  components: {
    SideBar,
    ShowPopularplaylists,
    CreatePlaylist,
    mediaplayer,
    category
  },
  mounted() {
    this.$store.dispatch("ShowWebPlayer/showPopularPlaylists");
    this.$store.dispatch("categorys/showcategory");
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      POPplaylists1: "ShowWebPlayer/POPplaylists", // creat new object "playlists1" and map to it
      categorys: "categorys/getcategory"
    }),
    ...mapState({
      show: state => state.creatplaylist.showModal
    })
  }
};
</script>
