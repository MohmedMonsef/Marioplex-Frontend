<template>
<div>
  <div class="home">
    <home-navigation-bar />
   
    </div>
   <home-footer/>
   </div>
</template>

<script>
// @ is an alias to /src
import HomeNavigationBar from "@/components/home-navigation-bar.vue";
import HomeFooter from "@/components/home-footer.vue";
export default {
  name: "Home",
  components: {
    HomeNavigationBar,
    HomeFooter
    }
};
</script>

<style lang="scss" scoped>
.home{
  background-image: linear-gradient(to bottom right, red, yellow);
  height: calc(100vh);
 
}
</style>
