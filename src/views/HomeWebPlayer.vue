<template>
  <div class="home_webplayer">
      <side-bar/>
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
</style>
<script>
import SideBar from "@/components/SideBar.vue";

export default {
 
  name: "HomeWebPlayer",
  components: {
      SideBar,
  },
    
};
</script>
