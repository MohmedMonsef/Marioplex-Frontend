<template>
  <div>
    <div class="music" testid="music div">
      <div class="row">
        <div class="col-sm-50%">
          <h1 id="header">
            Music without limits
          </h1>
          <p id="paragraph">
            Premium lets you play any song, anytime. You can even listen when
            you’re offline. No restrictions. No ads.
          </p>
          <router-link to="/GetPremium">
            <button class="premium" testid="premium button">
              GET PREMIUM
            </button>
          </router-link>
        </div>
        <div class="col-sm-50%">
          <img
            src="../assets/music.png"
            alt="music"
            class="music_img"
            testid="music_image"
          />
        </div>
      </div>
    </div>
    <div class="row" id="row2">
      <div class="col-sm-30% side_bar">
        <account-sidebar />
      </div>
      <div class="col-sm-70%" id="white_div">
        <h1>Account overview</h1>
        <h2>Profile</h2>
        <ul>
          <li>
            <span class="p1">Username</span>
            <span class="p2">{{ Username }}</span>
          </li>
          <li>
            <span class="p1">Email</span>
            <span class="p3">{{ user.email }}</span>
          </li>
          <li>
            <span class="p1">Date of birth</span>
            <span class="p4">{{
              user.birthDate.slice(8, 10) +
                "/" +
                user.birthDate.slice(5, 7) +
                "/" +
                user.birthDate.slice(0, 4)
            }}</span>
          </li>
          <li>
            <span class="p1">Country</span>
            <span class="p5">{{ user.country }}</span>
          </li>
        </ul>
        <router-link to="/UserAccount/Account-edit">
          <button class="trans_button">
            EDIT PROFILE
          </button>
        </router-link>
        <h2>Your plan</h2>
        <div class="border">
          <div class="plan">Spotify Free</div>
          <p class="your_plan">Play music in shuffle mode only, with ads.</p>
          <div class="your_plan_border"></div>
          <h2>Free</h2>
        </div>
        <router-link to="/GetPremium">
          <button class="trans_button">
            JOIN PREMIUM
          </button>
        </router-link>
        <button class="trans_button" testid="removeme" id="removeme" @click="remove">
            Cancel my account
        </button>
        <div class="row" v-if="!deleted_Acount">
        <p  class="col-8 offset-4">YOU ARE A ARTIST ,SO YOU CAN'T</p>
        </div>
        <h2>For Artist :</h2>
        <router-link to="/ArtistPersonalPage">
          <button type="button" class="trans_button">
            TO ARTIST
          </button>
        </router-link>
        <router-link to="/ForArtist">
          <button class="trans_button">
            CLAIM ARTIST
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.music {
  background: linear-gradient(to bottom, #121e3d 0%, #000 100%);
  width: 86%;
  height: 450px;
  margin-left: 7%;
  position: relative;
}
@media only screen and (max-width:880px){
  .music{
  width: 100%;
  margin-left: 0%;
  margin-right: 0%;
  }
}
#header {
  color: white;
  font-weight: bold;
  font-size: 70px;
  font-family: Helvetica, Arial, sans-serif !important;
  margin-bottom: 5px;
  position: absolute;
  left: 1%;
  right: 40%;
  top:5%;
  bottom: 60%;
}
@media only screen and (max-width: 988px){
  #header{
    position: absolute;
    top: 1%;
    font-size: 66px;
  }
}
#paragraph {
  color: white;
  margin-bottom: 0px;
  position: absolute;
  left:6.5%;
  top:60%;
  right:43%;
  bottom: 40%;
}
.premium {
  border: none;
  border-radius: 25px;
  outline: none;
  background-color: #1db954;
  color: white;
  width: 17.5%;
  height: 10%;
  margin-left: 12%;
  margin-top: 4%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  position: absolute;
  top: 70%;
  bottom: 2%;
}
@media only screen and (max-width: 714px){
  .premium{
    position: absolute;
    margin-top: 6%;
  }
}
@media only screen and (max-width: 560px){
  .premium{
    position: absolute;
    margin-top: 10%;
  }
}
@media only screen and (max-width: 542px){
  .premium{
    position: absolute;
    margin-top: 12%;
  }
}
.premium:hover {
  background-color: #27ca60;
  width: 18%;
  height: 11%;
}
.music_img {
  width: 30%;
  height: 350px;
  margin-left: 10%;
  margin-top: 9%;
  position: absolute;
  right: 10%;
  bottom: 0%;
}
/*  */
#row2 {
  margin-left: 7%;
}
@media only screen and (max-width:880px){
  #row2{
  width: 100%;
  margin-left: 0%;
  margin-right: 0%;
  position: relative;
  }
}
#white_div {
  background-color: white;
  width: 68.5%;
  height: 100%;
  padding-right: 5%;
  padding-bottom: 5%;
  position:relative;
}
@media only screen and (max-width: 880px){
  #white_div{
  background-color: white;
  width: 77%;
  height: 100%;
  padding-right: 5%;
  padding-bottom: 5%;
  position:relative;
  margin-right: 0%;
  }
}
@media only screen and (max-width: 800px){
  #white_div{
  background-color: white;
  width: 100%;
  height: 100%;
  padding-right: 5%;
  padding-bottom: 5%;
  position:relative;
  }
}
h1 {
  color: black;
  font-size: 45px;
  font-weight: 800;
  font-family: Helvetica, Arial, sans-serif;
  margin-left: 5%;
  margin-top: 5%;
}
h2 {
  color: black;
  font-size: 22px;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  margin-left: 5%;
  margin-bottom: 4%;
}
ul {
  list-style: none;
}
ul li {
  margin-top: 2%;
  margin-bottom: 3%;
  border-bottom: 1px solid rgb(214, 214, 214);
}
.p1 {
  color: rgb(153, 153, 153);
  font-size: 16px;
}
.p2 {
  color: black;
  font-size: 16px;
  margin-left: 45.5%;
}
.p3 {
  color: black;
  font-size: 16px;
  margin-left: 50%;
}
.p4 {
  color: black;
  font-size: 16px;
  margin-left: 43%;
}
.p5 {
  color: black;
  font-size: 16px;
  margin-left: 47.5%;
}
.trans_button {
  outline: none;
  height: 50px;
  width: 185px;
  background: transparent;
  border-radius: 26px;
  border-color: gray;
  color: gray;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5%;
  margin-top: 1%;
  margin-bottom: 10%;
}
.trans_button:hover {
  height: 52px;
  width: 190px;
  border-color: black;
  color: black;
}
.border {
  height: 430px;
  width: 97%;
  margin-left: 5%;
  margin-bottom: 2%;
}
.plan {
  background: linear-gradient(
    -180deg,
    rgb(182, 43, 190) 0%,
    rgb(150, 34, 185) 100%
  );
  width: 100%;
  height: 230px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  padding-left: 3%;
  padding-top: 11%;
}
.your_plan {
  color: black;
  font-size: 16px;
  margin-left: 5%;
  margin-top: 3%;
  margin-bottom: 4%;
}
.your_plan_border {
  border-bottom: 1px solid rgb(230, 230, 230);
  width: 90%;
  margin-left: 5%;
  margin-bottom: 4%;
}
.side_bar{
  position: relative;
  width: 23%;
}
@media only screen and (max-width: 800px){
  .side_bar{
    visibility: hidden;
    position: absolute;
  }
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
import { mapGetters } from "vuex";
export default {
  name: "Account-overview",
  components: {
    AccountSidebar,
  },
  computed: {
    ...mapGetters({
      user: "Authorization/user",
      Username: "Authorization/Username",
      deleted_Acount:"Authorization/deleted_Acountt"
    }),
  },
  methods:{
    remove(){
       this.$store.dispatch("Authorization/removeuser");
    }
  }
};
</script>
