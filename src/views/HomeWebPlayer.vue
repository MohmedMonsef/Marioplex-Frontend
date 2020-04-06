<template>
  <div class="home_webplayer">
    <side-bar />
    <CreatePlaylist v-if="show" />
    <DeletePlaylist v-if="showdelete"/>
    <div id="HomeInWebPlayer">
      <router-view class="child"></router-view>
       <navbar-webplayer/>
        <!-- <library-navbar/> -->
    </div>
    <mediaplayer />
  </div>
</template>
<style scoped>
#HomeInWebPlayer {
  width: calc(100vw - 235px);
  height: 100vh;
  margin-left: 235px;
  background-color: #161516;
  position: fixed;
  top: 0%;
  z-index: 0;
  overflow-y:scroll;
}
.child{
  padding-top: 80px;
}
</style>
<script>
import SideBar from "@/components/SideBar.vue";
import CreatePlaylist from "@/components/CreatePlaylist.vue";
import mediaplayer from "@/components/mediaplayer.vue";
import DeletePlaylist from "@/components/DeletePlaylist.vue";
import NavbarWebplayer from "@/components/NavbarWebplayer.vue";
import { mapState } from "vuex";
// import LibraryNavbar from "@/components/library-navbar.vue";
export default {
  name: "HomeWebPlayer",
  components: {
    SideBar,
    CreatePlaylist,
    mediaplayer,
    DeletePlaylist,
    // LibraryNavbar
    NavbarWebplayer
  },
  computed: {
    ...mapState({
      show: state => state.creatplaylist.showModal,
      showdelete: state => state.creatplaylist.showModalDelete,
    })
  },
};

</script>
