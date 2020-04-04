<template>
  <div class="home_webplayer">
    <side-bar />
    <CreatePlaylist v-if="show" />
    <DeletePlaylist v-if="showdelete"/>
    <div id="HomeInWebPlayer">
      <router-view></router-view>
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
  overflow-y: scroll;
}
</style>
<script>
import SideBar from "@/components/SideBar.vue";
import CreatePlaylist from "@/components/CreatePlaylist.vue";
import mediaplayer from "@/components/mediaplayer.vue";
import DeletePlaylist from "@/components/DeletePlaylist.vue";
import { mapState } from "vuex";

export default {
  name: "HomeWebPlayer",
  components: {
    SideBar,
    CreatePlaylist,
    mediaplayer,
    DeletePlaylist
  },
  computed: {
    ...mapState({
      show: state => state.creatplaylist.showModal,
      showdelete: state => state.creatplaylist.showModalDelete,
    })
  }
};
/*
<svg viewBox="0 0 24 24" class="_6be6d9f3103325b95e6d4c0f6b10b783-scss"><path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path></svg>
    <svg viewBox="0 0 24 24" class="_6be6d9f3103325b95e6d4c0f6b10b783-scss"><path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path></svg>
*/
</script>
