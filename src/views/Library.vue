<template>
  <div class="library">
    <!-- <library-navbar/> -->
    <div>
      <router-view class="child"></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.child {
  min-height: 1000px;
}
</style>

<script>
// import LibraryNavbar from "@/components/library-navbar.vue";
/**
 * User's Library where his liked albums , playlists and even followed artists exist
 * @displayName Library page
 * @example [none]
 */
export default {
  // components:{
  //     LibraryNavbar,
  // }
};
</script>
