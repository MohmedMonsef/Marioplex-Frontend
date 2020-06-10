<template>
    <div class="to_contain">
      <home-navigation-bar class="artist_nav_bar" />
        <div class="info">        
            <h1 class="motiv">Make Spotify Yours.</h1>
            <p class="a_name">Kota The Friend</p>
            <span class="a_listeners">2.06 M Monthly Listeners </span>
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
</template>
<style scoped>
.artist_nav_bar {
  position:absolute;
  width:100%;
}
.to_contain {
  background-color: black;
  color: white;
  position: absolute;
  width: 100%;
  height:100%;
  /* top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0; */
}
.info {
  position: relative;
  top: 20%;
  background-color: black;
  color: white;
}
.motiv {
  /* display: block; */
  font-size: 130px;
  line-height: 110px;
  /* margin: 20px; */
  font-weight: bold;
  position: relative;
  top: 0%;
  left: 0%;
  width: 50%;
  /* height: 100%; */
  background-color: black;
  padding: 5%;
  margin:0;
}
.a_name {
  /* position: relative; */
  /* bottom: 50%; */
  position:absolute;
  top:60%;
  left: 60%;
  width:20%;
 margin:0;
 padding:0;
  /* display: block; */
}
.a_listeners {
  /* position: relative; */
  position:absolute;
  top: 65%;
  left: 60%;
}
.claiming {
  /* position: relative; */
  position:absolute;
  width: 70%;
  height: 9%;
  top:88%;
  /* top: 55%; */
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}
.accessing {
  position:relative;
  font-size: 160%;
  width: 70%;
  margin: 0;
}
.claim_access {
  position: absolute;
  top: 20%;
  left: 85%;
  /* right:0%; */
  border: none;
  cursor: pointer;
  /* margin: 20px; */
  height: 70%;
  width: 20%;
  /* padding: 8px 34px; */
  background-color: #f59b23;
  border-radius: 26px;
  border-color: transparent;
  outline: none;
  color: #fff;
  font-size: 90%;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
</style>
<script>
import HomeNavigationBar from "../components/HomeNavigationBar";
/**
 * This page is to describe how user be an artist
 * @displayName ForArtist Page
 * @example [none]
 */
export default {
  name: "ForArtist",
  components: {
    HomeNavigationBar,
  },
};
</script>
