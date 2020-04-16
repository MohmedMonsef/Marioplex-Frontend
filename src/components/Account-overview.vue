<template>
    <div>
        <div class="music" testid="music div">
            <div class="row">
                <div class="col-lg-50%">
                    <h1 id="header">
                        Music without limits
                    </h1>
                    <p id="paragraph">
                        Premium lets you play any song, anytime. You can even listen when you’re offline.
                    </p>
                    <p id="paragraph">
                        No restrictions. No ads.
                    </p>
                    <button class="premium" testid="premium button">
                        GET PREMIUM
                    </button>
                </div>
                <div class="col-lg-50%">
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
            <div class="col-lg-30%">
                <account-sidebar/>
            </div>
            <div class="col-lg-70%" id="white_div">
                <h1>Account overview</h1>
                <h2>Profile</h2>
                <ul>
                    <li>
                        <p class="p1">Username</p>
                    </li>
                    <li>
                        <p class="p1">Email</p>
                    </li>
                    <li>
                        <p class="p1">Date of birth</p>
                    </li>
                    <li>
                        <p class="p1">Country</p>
                    </li>
                </ul>
                <button class="edit">
                    EDIT PROFILE
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.music{
   background:  linear-gradient(to bottom, #121e3d 0%, #000 100%);
  width: 86%;
  height: 450px;
  margin-left: 7%;
  padding-top: 70px;
}
#header{
    color: white;
    font-weight: bold;
    font-size: 70px;
    font-family:Helvetica, Arial, sans-serif !important;
    margin-bottom: 5px;
    margin-left: 12%;
}
#paragraph{
    color: white;
    margin-bottom: 0px;
    margin-left: 12%;
}
.premium{
  border: none;
  border-radius: 25px;
  outline: none;
  background-color: #1db954;
  color: white;
  width: 28%;
  height: 12%;
  margin-left: 12%;
  margin-top: 4%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.premium:hover{
     background-color: #27ca60;
     width: 29%;
     height: 13%;
}
.music_img{
    width: 320px;
    height: 350px;
    margin-left: 10%;
    margin-top: 9%;
}
/*  */
#row2{
    margin-left: 7%;
}
#white_div{
 background-color: white;
 width: 68.5%;
 height: 500px;
 padding-right: 5%;
}
h1{
    color: black;
    font-size: 45px;
    font-weight:800;
    font-family: Helvetica, Arial, sans-serif;
    margin-left: 5%;
    margin-top: 5%;
}
h2{
     color: black;
    font-size: 22px;
    font-weight:bold;
    font-family: Helvetica, Arial, sans-serif;
    margin-left: 5%;
    margin-bottom: 4%;
}
ul{
    list-style: none;
}
ul li{
    border-bottom: 1px solid rgb(214, 214, 214);
}
.p1{
    color: rgb(153, 153, 153);
    font-size: 16px;
    margin-top: 2%;
    margin-bottom:2%;
}
.edit{
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
}
.edit:hover{
    height: 52px;
    width: 190px;
    border-color: black;
    color: black;
}

</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
export default {
    name:"Account-overview",
    components:{
        AccountSidebar
    }
}
</script>