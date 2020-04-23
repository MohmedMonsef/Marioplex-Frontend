<template>
  <router-link
    :to="{ path: this.routing + albumId }"
    id="carglink"
    testid="album card link"
  >
    <!-- should navigate to album page -->
    <div
      class="card rounded col-lg-20%"
      testid="album card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img
        class="card-img-top mx-auto d-block"
        :src="images"
        alt="Card image"
        id="cardimg"
        testid="album image"
      />
      <div class="card-body" id="cardbody" testid="album card body">
        <h4 class="card-title" id="cardtitle" testid="album name">
          {{ name }}
        </h4>
        <router-link
          class="ard-link artistlink"
          to="/ArtistProfile"
          testid="artist page link"
        >
          {{ artistname }}
        </router-link>
        <button v-if="hover" class="play-button" testid="play-button">
          <i class="fa fa-play"></i>
          <!-- <i class="fa fa-pause" id="pauseicone"></i> -->
        </button>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  background: #313030;
  width: 200px;
  height: 270px;
  margin-left: 15px;
  margin-top: 15px;
  z-index: 0;
}
#cardimg {
  width: 158px;
  height: 160px;
  margin-top: 20px;
}
h4 {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
}
.artistlink {
  font-size: 14px;
  color: gray;
  display: inline;
  position: absolute;
}
#carglink {
  display: block;
  outline: none;
  text-decoration: none;
}
i {
  color: white;
  font-size: 14px;
  position: absolute;
}
#pauseicone {
  color: white;
  font-size: 12px;
  position: absolute;
  margin-top: 1px;
}
.play-button {
  margin-left: 127px;
  margin-bottom: 20px;
  background-color: #1db954;
  position: relative;
  font-size: 40px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  padding-bottom: 15px;
  padding-right: 15px;
}
</style>

<script>
/**
 * @displayName Library albums
 * @example [none]
 */
export default {
  data: function() {
    return {
      hover: false,
      routing:""
    };
  },
  name: "lib-albums",
  props: {
    images: {
      type: String
    },
    name: {
      type: String
    },
    artistname: {
      type: String
    },
    albumId: {
      type: String
    },
    artistId: {
      type: String
    }
  },
  mounted(){

    if(this.$route.path =="/HomeWebPlayer/search")
      this.routing='album/';
    else
      this.routing="../album/";
        
  }
};
</script>
