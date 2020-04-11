[07:11, 07/04/2020] Dai:
<template>
  <div
    class="card rounded col-lg-40%"
    id="likedsongs"
    testid="likedsongs card"
    v-if="songs1.length"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="inline-div" v-bind:id="rawId | shorten">
      <span v-for="song in songs1" :key="song.id">
        <span testid="artist name" id="artist_name"
          >{{ song.artistName + " " }}
        </span>
        <span testid="song name" class="songname"> {{ song.name + " " }} </span>
        <span class="dot">. </span>
      </span>
    </div>
    <h3 class="card-title">Liked Songs</h3>
    <p class="card-text">{{ songs1.length + " liked songs" }}</p>
    <button v-if="hover" class="play-button" testid="play-button">
      <i class="fa fa-play"></i>
      <!-- <i class="fa fa-pause" id="pauseicone"></i> -->
    </button>
    <router-link
      to="/HomeWebPlayer/liked-tracks"
      class="stretched-link"
      id="carglink"
      testid="likedsongs card link"
    ></router-link>
    <!-- should navigate to liked songs page -->
  </div>
</template>
<style scoped>
#likedsongs {
  background-image: linear-gradient(
    to bottom right,
    rgb(48, 48, 253),
    rgb(185, 172, 230)
  );
  width: 415px;
  height: 270px;
  margin-left: 15px;
  margin-top: 15px;
  border: none;
  padding-top: 40px;
  padding-right: 10px;
}
h3 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-top: 30px;
  margin-left: 20px;
}
p {
  color: white;
  margin-left: 20px;
  font-size: 16px;
  position: relative;
}
span {
  color: white;
  font-size: 16px;
}
.songname {
  color: rgb(221, 216, 216);
}
.dot {
  color: rgb(221, 216, 216);
  font-weight: bold;
}
.inline-div {
  display: inline;
  margin-left: 20px;
}
i {
  color: white;
  font-size: 16px;
  position: absolute;
}
#pauseicone {
  color: white;
  font-size: 14px;
  position: absolute;
  margin-top: 1px;
}
.play-button {
  margin-left: 325px;
  margin-top: 140px;
  background-color: #1db954;
  position: absolute;
  font-size: 40px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  padding-bottom: 15px;
  padding-right: 15px;
}
</style>
<script>
import { mapGetters } from "vuex";
/**
 * @displayName Saved Tracks
 * @example [none]
 */
export default {
  data: function() {
    return {
      hover: false,
      rawId: "rawid"
    };
  },
  name: "lib-likedsongs",
  mounted() {
    this.$store.dispatch("userlibrary/showUserSongs");
  },
  computed: {
    ...mapGetters({
      songs1: "userlibrary/songs"
    })
  },
  filters: {
    shorten: function(value) {
      return value.substring(0, 20) + " ...";
    }
  }
};
</script>
