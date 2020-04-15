<template>
  <div>
    <home-navigation-bar />
    <router-view class="child"></router-view>
    <home-footer />
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

</style>