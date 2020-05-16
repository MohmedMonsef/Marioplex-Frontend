<template>
  <div>
    <transition name="slide" appear>
      <div class="row modal m-0" v-if="premiumPopup">
         <div class="col-8-sm advertisment"
         :class="[
         {
         ad1: premiumAd ==0,
         ad2: premiumAd ==1,
         ad3: premiumAd ==2,
         ad4: premiumAd ==3
         }
         ]"
         >
           <h1>MarioPlex Premium</h1>
           <h2 v-if="premiumAd%2 ==0">49.99 EGP / month after trial</h2>
           <h2 v-if="premiumAd%2 !=0">One year of Spotify Premium, paid once.</h2>
           <p v-if="premiumAd ==0">Listen without the distraction of ads</p>
           <p v-if="premiumAd ==1">Higher quality.</p>
           <p v-if="premiumAd ==2">Skip as many songs as you want</p>
           <p v-if="premiumAd ==3">Play any song.Even on mobile.</p>
           <router-link
            class="costum-btn"
            id="premium-btn"
            to="/GetPremium"
            tag="button"
            :class="[
            {
            btn1: premiumAd ==0 || premiumAd ==1,
            btn2: premiumAd ==2,
            btn3: premiumAd ==3
           }
           ]"
          >
           Get Premium
           </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import "../css/global.css";
* {
  /* margin: 10;
  padding: 10; */
  box-sizing: border-box;
  overflow: hidden;
}

body {
  font-family: "montserrat", sans-serif;
  overflow-y: hidden;
}

div {
  /* relative */
  position: relative;
  display: block;
  height: 100vh;
  overflow: hidden;
}
.modal-overlay {
  /* fixed */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
 
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
}

.modal {
  /* fixed */
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* display: table; */
  transition: opacity 0.3s ease;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  overflow: hidden;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  overflow: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
  overflow: hidden;
}
.advertisment{
  margin: 10% 20% 20% 20%;
  height:60%;
  width:60%;
  color:white;
}
.ad1{
  background-image: linear-gradient(-180deg, #004d4d 0%,#009999 100%);
}
.ad2{
  background-image: linear-gradient(-180deg, #3939ac 15%,#ffccee 85%);
}
.ad3{
  background-image: linear-gradient(-180deg, #26004d 0%,#66004d 100%);
}
.ad4{
  background-image: linear-gradient(-180deg, #5bb8f7 0%, #3794d1 100%);
}
h1{
  text-align: center;
  font-weight: 800;
  font-size: 60px;
}
h2{
  text-align: center;
  font-weight: 800;
  
}
p{
  text-align: center;
  font-weight: 700;

}
#premium-btn {
  padding: 14px 14px 14px 18px;
  margin: 16px 0px;
  display: block;
  transition-duration: 33ms;
  width: 44%;
  margin: 10% 28% 10% 28%;
  height: 12%;
  font-weight: 800;
}
#premium-btn:hover {
   transform: scale(1.04);
}
.btn1{
   background-color: #000000;
}
.btn2{
   background-color: #ffffff;
   color: black;
}
.btn3{
   background-color: #1db954;
}
@media screen and (max-width: 800px) {
  h1{
  font-weight: 500;
  font-size: 20px;
}
h2{
  font-weight: 500;
  font-size: 15px;
}
p{
  font-weight: 400;
  font-size: 10px;
}
#premium-btn {
  padding: 0;
  width: 90%;
  margin: 10% 5% 10% 5%;
  height: 12%;
  font-weight: 400;
}
}
</style>
<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
/**
 * Create Playlist Pop Up to input the new playlist name
 * @displayName Create Playlist Pop Up
 * @example [none]
 */
export default {
  name: "premiumAd",
  computed: {
   ...mapGetters({
      premiumPopup: "Mediaplayer/premiumPopup",
      premiumAd:"Mediaplayer/premiumAd"
    })
  }
};
</script>
