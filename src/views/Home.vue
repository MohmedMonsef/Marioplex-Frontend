<template>
  <div>
    <home-navigation-bar />
    <router-view></router-view>
    <home-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNavigationBar from "@/components/home-navigation-bar.vue";
import HomeFooter from "@/components/home-footer.vue";
/**
 * Spotify home page
 * @displayName Spotify Home Page
 * @example [none]
 */
export default {
  name: "Home",
  components: {
    HomeNavigationBar,
    HomeFooter
  }
};
</script>

<style lang="scss" scoped></style>
