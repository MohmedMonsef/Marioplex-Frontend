<template>
  <div class="home_webplayer">
      <side-bar/>
      <div id="HomeInWebPlayer">
          <h2 v-if="POPplaylists1.length">Popular playlists</h2>
          <div class="container">
              <div class="row">
                  <show-popularplaylists v-for="POPplaylist in POPplaylists1"
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
<style scoped>
 #HomeInWebPlayer{
      width: 100%;
      height: 100vh;
      margin-left: 235px;
      background-color:#161516;
      position: relative;

  }
   h2{
      font-size: 28px;
      font-weight: bold;
      color: white;
      margin-bottom: 5px;
      margin-left: 30px;
  }
  .container{
    margin-left:15px;
  }
</style>
<script>
import SideBar from "@/components/SideBar.vue";
import ShowPopularplaylists from "@/components/ShowPopularplaylists.vue";
import {mapGetters} from 'vuex';

export default {
 
  name: "HomeWebPlayer",
  components: {
      SideBar,
      ShowPopularplaylists
  },
   mounted(){
         this.$store.dispatch("showPopularPlaylists")
    },
    computed:{
                ...mapGetters({
               // map `this.playlists1` to `this.$store.getters.playlists`
                POPplaylists1: 'POPplaylists'              // creat new object "playlists1" and map to it
         })
        
    },
    
};
</script>
