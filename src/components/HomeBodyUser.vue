<template>
  <div>
    <div class="row justify-content-center home px-0 m-0">
      <div class="col-9 headers px-0 m-0">
        <h1 v-if="user.product != 'premium'">Go Premium. Be happy.</h1>
        <h1 v-if="user.product == 'premium'">MarioPlex. Infinite Music.</h1>
        <div class="row justify-content-center px-0 m-0">
          <router-link
            class="costum-btn"
            id="premium-btn"
            to="/GetPremium"
            tag="button"
            testid="log in link"
            v-if="isLoggedIn == 'success' && user.product != 'premium'"
          >
            Start Free Trail
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-fluid row m-0" id="recently-played">
      <homeBodyCard
        v-for="(homePlaylist, i) in homePlaylists"
        :key="i"
        :images="homePlaylist.images[0]._id"
        :playlistId="homePlaylist.id"
        :name="homePlaylist.name"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../css/global.css";
.home {
  background-color: #fabd4b;
  background-image: url("../assets/hero-hanging-man.png");
  background-repeat: no-repeat;
  background-size: 400px;
  background-position-x: 80%;
  height: calc(100vh);
  color: white;
}
.headers {
  justify-content: center;
  justify-items: center;
  padding-top: 30%;
  position: absolute;
  z-index: 0;
  margin-top: 80px;
}
h1 {
  font-size: 65px;
  font-weight: 850;
  letter-spacing: -0.04em;
  line-height: 0;
  margin-top: 0;
  text-align: center;
  width: 100%;
}

#premium-btn {
  background-color: #1db954;
  max-width: 320px;
  width: 252px;
  justify-self: center;
}
#premium-btn:hover {
  background-color: #1ed760;
}
#recently-played {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  padding: 50px 5%;
  justify-content: center;
}
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 45px;
    font-weight: 750;
    letter-spacing: -0.04em;
    line-height: 1.15;
    margin-top: 0;
    text-align: center;
    width: 100%;
  }
}
</style>
<script>
import { mapGetters } from "vuex";
import homeBodyCard from "@/components/HomeBodyCards.vue";
/**
 * Body of home page
 * @displayName HomeBody
 * @example [none]
 */
export default {
  components: {
    homeBodyCard,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "Authorization/GetStatus",
      user: "Authorization/user",
      homePlaylists: "ShowWebPlayer/homePlaylists",
    }),
  },
  beforeCreate() {
    this.$store.dispatch("ShowWebPlayer/homePlaylists");
  },
};
</script>
