<template>
  <div>
    <home-navigation-bar />
    <router-view class="child"></router-view>
    <home-footer />
  </div>
</template>

<script>

// @ is an alias to /src
import HomeNavigationBar from "@/components/HomeNavigationBar.vue";
import HomeFooter from "@/components/HomeFooter.vue";
/**
 * Spotify home page
 * @displayName Spotify Home Page
 * @example [none]
 */
export default {
  name: "Home",
  components: {
    HomeNavigationBar,
    HomeFooter,
  },
};
</script>

<style lang="scss" scoped></style>
