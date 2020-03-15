<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <mediaplayer />
  </div>
</template>
<script>
import mediaplayer from "@/components/mediaplayer.vue";
export default {
  components: {
    mediaplayer
  }
};
</script>

<style lang="scss"></style>
