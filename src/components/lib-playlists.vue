<template>
  <div>
    <div
      class="card rounded col-lg-20%"
      testid="playlist card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img
        class="card-img-top mx-auto d-block"
        :src="images"
        alt="Card image"
        id="cardimg"
        testid="playlist image"
      />
      <div class="card-body" id="cardbody" testid="playlist card body">
        <h4 class="card-title" id="cardtitle" testid="playlist name">
          {{ name |shorten }}
        </h4>
        <p
          v-if="!likedplaylist"
          class="card-text"
          id="carddescribtion"
          testid="playlist owner"
        >
          {{ "By " + Username }}
        </p>
        <p
          v-if="likedplaylist"
          class="card-text"
          id="carddescribtion"
          testid="playlist owner"
        >
          {{ "By " + ownerName }}
        </p>
        <button v-if="hover" class="play-button" testid="play-button">
          <i class="fa fa-play"></i>
          <!-- <i class="fa fa-pause" id="pauseicone"></i> -->
        </button>
        <router-link
          :to="{ path: '/HomeWebPlayer/playlist/' + playlist_id }"
          class="stretched-link"
          id="carglink"
          testid="playlist card link"
        ></router-link>
        <!-- should navigate to playlist page -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  background: #313030;
  width: 200px;
  height: 270px;
  margin-left: 15px;
  margin-top: 15px;
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
p {
  font-size: 14px;
  color: gray;
  position: absolute;
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
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      hover: false
    };
  },
  name: "lib-playlists",
  props: ["name", "images", "ownerId", "playlist_id", "ownerName"],
  //   mounted() {
  //   this.$store.dispatch("creatplaylist/showplaylists");
  // },
  // computed: {
  //   ...mapGetters({
  //     // map `this.playlists1` to `this.$store.getters.playlists`
  //     playlists1: "creatplaylist/playlists" // creat new object "playlists1" and map to it
  //   })
  // }
  computed: {
    ...mapGetters({
      Username: "authorization/Username",
      likedplaylist: "playlist/likeplaylist"
    })
  },
   filters: {
    shorten: function(value) {
      if(value.length  > 17)
        return value.substring(0, 17) + " ...";
      else
        return value;
    }
  }
};
</script>
