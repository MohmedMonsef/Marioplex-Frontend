<template>
  <div class="row justify-content-center homecard px-0"
   :style="{ backgroundImage: `url(${ getImg })`}"
   @click="navigate">
    <div class="layer px-0 m-0">
      <h2>{{ name }}</h2>
      <p>PLAY NOW</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.homecard {
  display: inline-block;
  float: none;
  position: relative;
  width: 375px;
  height: 375px;
  background-size: 375px 375px;
  background-repeat: no-repeat;
  overflow: hidden;
  background-clip: border-box;
  margin: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.layer {
  transition: all 0.2s ease-in-out;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  overflow: hidden;
  padding: 40%;
  cursor: pointer;

  p {
    text-align: center;
    color: white;
  }
  h2 {
    color: #1db954;
    text-align: center;
  }
}
.layer:hover {
  opacity: 1;
}
@media screen and (max-width: 1200px) {
  .homecard {
    width: 307px;
    height: 307px;
    background-size: 307px 307px;
    overflow: hidden;
  }
}
@media screen and (max-width: 950px) {
  .homecard {
    width: 235px;
    height: 235px;
    overflow: hidden;
    background-size: 235px 235px;
  }
}
@media screen and (max-width: 675px) {
  .homecard {
    width: 375px;
    height: 375px;
    background-size: 375px 375px;
    overflow: hidden;
  }
}
</style>
<script>
/**
 *  home card for recently played playlists
 * @displayName HomeBody Cards
 * @example [none]
 */
export default {
  data: function() {
    return {
      hover: false
    };
  },
  props: {
    name: {
      type: String
    },
    images: {
      type: String
    },
    playlistId: {
      type: String
    }
  },
  computed: {
    getImg () {
      let img = this.$user +"/api/images/" +
        this.images +
        "?belongs_to=playlist";

      return  img;
    }
  },
  methods: {
  navigate(){
    this.$router.push("/HomeWebPlayer/playlist/"+this.playlistId)
  }
  },
};
</script>
