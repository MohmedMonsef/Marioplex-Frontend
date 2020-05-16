<template>
  <div class="home_webplayer" @contextmenu.prevent="handler" @click="closeMenu">
    <side-bar />
    <CreatePlaylist v-if="show" />
    <mediaplayerpopup v-if="showmediaplayerpopup" />
    <DeletePlaylist v-if="showdelete" />
    <PremiumAd v-if="premiumPopup"/>
    <div id="HomeInWebPlayer">
      <router-view class="child"></router-view>
      <navbar-webplayer />
      <!-- <library-navbar/> -->
    </div>
    <mediaplayer />
    <playlistpopup v-if="showuserpopup" />
  </div>
</template>
<style scoped>
/* .home_webplayer{
   width: calc(100vw);
   height: calc(100vh);
   background-color: #161516;
   
} */
#HomeInWebPlayer {
  width: calc(100vw - 235px);
  height: calc(100vh - 90px);
  margin-left: 235px;
  padding-bottom: 90px;
  background-color: #161516;
  position: fixed;
  top: 0%;
  z-index: 0;
  overflow-y: scroll;
}
.child {
  padding-top: 80px;
}
</style>
<script>
import SideBar from "@/components/SideBar.vue";
import CreatePlaylist from "@/components/CreatePlaylist.vue";
import mediaplayerpopup from "@/components/MediaplayerPopup.vue";
import playlistpopup from "@/components/PlaylistPopup.vue";
import mediaplayer from "@/components/Mediaplayer.vue";
import DeletePlaylist from "@/components/DeletePlaylist.vue";
import NavbarWebplayer from "@/components/NavbarWebplayer.vue";
import PremiumAd from "@/components/PremiumAd.vue";
import { mapState ,mapGetters} from "vuex";
//import LibraryNavbar from "@/components/library-navbar.vue";
/**
 * Web player home page where all albums and playlists exist
 * @displayName Web Player Home page
 * @example [none]
 */
export default {
  name: "HomeWebPlayer",
  components: {
    SideBar,
    CreatePlaylist,
    mediaplayer,
    DeletePlaylist,
    mediaplayerpopup,
    playlistpopup,
    PremiumAd,
    // LibraryNavbar
    NavbarWebplayer,

  },
  computed: {
    ...mapState({
      show: (state) => state.Playlist.showModal,
      showmediaplayerpopup: (state) => state.CheckUserPopup.showModal,
      showuserpopup: (state) => state.CheckUserPopup.showpagesModal,
      showdelete: (state) => state.Playlist.showModalDelete,
    })
    ,
    ...mapGetters({
      premiumPopup: "Mediaplayer/premiumPopup",
    })
  },
  methods:{
    handler(){
      
    },
    closeMenu(){
      this.$store.dispatch("UserLibrary/sideMenu", false);
    }
  }
};
</script>
