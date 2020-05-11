<template>
  <div class="card rounded col-lg-20%" id="albumcard" testid="album card">
    <div class="hoveralbumimage">
      <router-link
        :to="{ path: '../album/' + albumId }"
        id="cardlink"
        testid="album card link"
      >
        <!-- <img
      donot forget to change the image while connecting with back
        :src="images"
      /> -->
        <img
          class="card-img-top mx-auto d-block"
          :src="images"
          alt="Card image"
          id="cardimg"
          testid="album image"
        />
      </router-link>
      <!-- <i
        v-if="!this.play"
        class="fa fa-play"
        id="imageplayicon"
        testid="imageplayicon"
        @click="iSplaying()"
      >
      </i>
      <i
        v-if="this.play"
        class="fa fa-pause"
        id="imagepauseicon"
        testid="imagepauseicon"
        @click="Stopplaying()"
      >
      </i> -->
    </div>
    <div class="card-body" id="cardbody" testid="album card body">
      <h4 class="card-title" id="cardtitle" testid="album name">
        {{ name }}
      </h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: #161516;
  border: transparent;
  width: 190px;
  height: 275px;
  margin-right: 15px;
  margin-top: 15px;
  z-index: 0;
}
i {
  color: white;
  font-size: 14px;
  position: absolute;
}
#cardimg {
  width: 190px;
  height: 190px;
  margin-top: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#cardimg:active {
  transform: scale(1.06);
}
.hoveralbumimage {
  position: relative;
  text-align: center;
  align-content: center;
  display: flex;
  justify-content: center;
  #imageplayicon,
  #imagepauseicon {
    opacity: 1;
    position: absolute;
    font-size: 30px;
    font-weight: 2px;
    top: 45%;
    text-align: center;
    color: white;
  }
}
#cardimg:hover {
  opacity: 0.3;
}
#imageplayicon:hover,
#imagepauseicon:hover {
  transform: scale(1.12);
}
h4 {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
}
#cardlink {
  display: block;
  outline: none;
  text-decoration: none;
}
#cardbody {
  align-content: center;
  text-align: center;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  data: function () {
    return {
      play: false,
    };
  },
  name: "Artisthomecards",
  props: {
    name: {
      type: String,
    },
    albumId: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  methods: {
    //  iSplaying() {
    //   this.play = true;
    //   if (!this.playicon) {
    //     var albumimage = document.getElementById("cardimg");
    //     var pausebutton = document.getElementById("imageplayicon");
    //     albumimage.style.opacity = "0.3";
    //     pausebutton.style.opacity = "1";
    //   }
    // },
    // Stopplaying() {
    //   this.play = false;
    // },
    //  onhoverImage: function() {
    //   var albumimage = document.getElementById("cardimg");
    //   albumimage.style.opacity = "0.3";
    //   if (!this.play) {
    //     var playbutton = document.getElementById("imageplayicon");
    //     playbutton.style.opacity = "1";
    //   } else {
    //     var pausebutton = document.getElementById("imagepauseicon");
    //     pausebutton.style.opacity = "1";
    //   }
    // },
    // onleaveImage: function() {
    //   var albumimage = document.getElementById("cardimg");
    //   albumimage.style.opacity = "1";
    //   if (!this.play) {
    //     var playbutton = document.getElementById("imageplayicon");
    //     playbutton.style.opacity = "0";
    //   } else {
    //     albumimage.style.opacity = "0.3";
    //     var pausebutton = document.getElementById("imagepauseicon");
    //     pausebutton.style.opacity = "1";
    //   }
    // },
  },
  computed: {
    ...mapGetters({
      playicon: "Mediaplayer/playicon",
    }),
  },
};
</script>
