<template>
  <div id="main_queue">
    <h1>
      Play Queue
    </h1>
    <h2>
      Now Playing
    </h2>

    <song-component />

    <h2>
      Next in Queue
    </h2>
    <song-component />

    <h2>
      Next Up
    </h2>

    <song-component />
  </div>
</template>

<style lang="scss" scoped>
#main_queue {
  max-width: 1955px;
  padding: 0px 32px;
  box-sizing: border-box;
  overflow: auto;
}
h1 {
  font-size: 28px;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: -0.36px;
  color: #fff;
  margin: 16px 0;
}
h2 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.015em;
  font-weight: var(--glue-font-weight-normal);
  color: #fff;
  margin: 16px 0;
}
</style>

<script>
import SongComponent from "@/components/SongComponent.vue";
export default {
  name: "Queue",
  components: {
    SongComponent
  }
};
</script>
