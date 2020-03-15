<template>
  <div class="home">
    <home-navigation-bar />
    <br/>
    <br/>
    <ul>
   <li v-for="use in User" :key="use.id" >{{use.email}}</li>
   </ul>
   <p>{{token}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNavigationBar from "@/components/home-navigation-bar.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HomeNavigationBar
  },
  computed:{
    ...mapState(["User","token"])
  }
};
</script>

<style lang="scss" scoped></style>
