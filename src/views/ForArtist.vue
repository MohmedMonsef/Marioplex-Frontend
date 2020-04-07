<template>
  <span class="full_screen">
    <div class="container">
      <home-navigation-bar class="artist_nav_bar" />
      <div class="For_Artist">
        <div class="info">
          <div class="p_s_container">
            <h1 class="motiv">Make Spotify Yours.</h1>
            <p class="a_name">Kota The Friend</p>
            <span class="a_listeners">2.06 M Montholy Listeners </span>
          </div>
        </div>
        <div class="claiming">
          <p class="accessing">
            250+ million fans are wating for you.Claim your profile to access
            Spotify for Artists.
          </p>
          <router-link to="AccessArtist">
            <button class="claim_access">CLAIM YOUR PROFILE</button>
          </router-link>
        </div>
      </div>
    </div>
  </span>
</template>
<style scoped>
.artist_nav_bar {
  position: fixed;
}
.container {
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
}
.info {
  position: relative;
  background-color: black;
  color: white;
}
.motiv {
  display: block;
  font-size: 130px;
  line-height: 110px;
  margin: 20px;
  font-weight: bold;
  position: fixed;
  top: 10%;
  left: 10%;
  width: 40px;
  background-color: black;
  padding: 10px;
}
.a_name {
  position: fixed;
  top: 65%;
  left: 60%;
  display: block;
}
.a_listeners {
  position: fixed;
  top: 70%;
  left: 60%;
}
.full_screen {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: black;
  overflow: scroll;
}
.claiming {
  padding: 10px;
  position: fixed;
  top: 75%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}
.accessing {
  font-size: 30px;
  width: 70%;
}
.claim_access {
  position: fixed;
  top: 80%;
  left: 60%;
  border: none;
  cursor: pointer;
  margin: 20px;
  height: 50px;
  width: 280px;
  padding: 8px 34px;
  background-color: #f59b23;
  border-radius: 26px;
  border-color: transparent;
  outline: none;
  color: #fff;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
</style>
<script>
import HomeNavigationBar from "../components/home-navigation-bar";

export default {
  name: "ForArtist",
  components: {
    HomeNavigationBar
  }
};
</script>
