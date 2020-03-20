

<template>
  <div class="home_webplayer">
    <side-bar />
    <CreatePlaylist v-if="show" />
     <div id="HomeInWebPlayer">
       <router-view></router-view>
    </div>
    <mediaplayer />
  </div>
</template>
<style scoped>
#HomeInWebPlayer {
  width: 100%;
  height: 100vh;
  margin-left: 235px;
  background-color: #161516;
  position: fixed;
  top: 0%;
  z-index: 0;
}
</style>
<script>
import SideBar from "@/components/SideBar.vue";
import CreatePlaylist from "@/components/CreatePlaylist.vue";
import mediaplayer from "@/components/mediaplayer.vue";
import { mapState } from "vuex";

export default {
  name: "HomeWebPlayer",
  components: {
    SideBar,
    CreatePlaylist,
    mediaplayer
  },
   computed: {
    ...mapState({
      show: state => state.creatplaylist.showModal
    })
  }
};
</script>
