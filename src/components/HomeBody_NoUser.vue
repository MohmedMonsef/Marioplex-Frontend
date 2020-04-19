<template>
  <div class="row justify-content-center home px-0 m-0">
    <div class="row justify-content-center home-background px-0 m-0">
      <div class="col-9 headers px-0 m-0">
        <h1>Music for everyone.</h1>
        <h4>Millions of songs. No credit card needed.</h4>
        <div class="row justify-content-center px-0 m-0">
          <router-link
            class="costum-btn"
            id="signup-btn"
            to="/signup"
            tag="button"
            testid="log in link"
          >
            Get Spotify free
          </router-link>
         
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../css/global.css";
.home {
  background-image: linear-gradient(#f48172, #f8cc3f);
  height: calc(100vh);
  color: white;
}
.home-background {
  height: calc(100vh);
  width: calc(100vw);
  background-repeat: no-repeat;
  background-image: url("https://www.scdn.co/i/home/hero-burst.svg");
  background-size: 100%;
  background-position-x: 0%;
  background-position-y: 55%;
}
.headers {
  justify-content: center;
  justify-items: center;
  padding-top: 20%;
  position: absolute;
  z-index: 0;
  margin-top: 80px;
}
h1 {
  font-size: 80px;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 0;
  margin-top: 0;
  text-align: center;
  width: 100%;
}
h4 {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 100%;
}
#signup-btn {
  background-color: #1db954;
  max-width: 320px;
  width: 252px;
  justify-self: center;
}
#signup-btn:hover {
  background-color: #1ed760;
}
@media screen and (max-width: 1000px) {
  .home-background {
 
    background-repeat: no-repeat;
    background-size: 800px;
    width: 878px;
    height: 690px;
    background-image: url("https://www.scdn.co/i/home/hero-burst-mobile.svg");
    z-index: -500px;
    background-position-x: 50%;
    background-position-y: 100%;
  }
  h1 {
    font-size: 55px;
    font-weight: 750;
    letter-spacing: -0.04em;
    line-height: 1.15;
    margin-top: 0;
    text-align: center;
    width: 100%;
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    width: 100%;
  }
}
</style>
<script>
import { mapGetters } from "vuex";
/**
 * Body of home page
 * @displayName HomeBody
 * @example [none]
 */
export default {
  computed: {
    ...mapGetters({
      isLoggedIn: "authorization/GetStatus"
    })
  }
};
</script>
