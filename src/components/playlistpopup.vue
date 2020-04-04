<template>
    <div class="playlist_popup">
    <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="slide" appear>
    <div class="modal" v-if="showModal">
        <!-- write here the content of popup -->
        <div class="child">
        <div class="playlistimage">
            <img src="../assets/cry.png" alt="playlist_image" testid="playlist_image">
        </div>  
        <div class="popup_info">
            <h2 class="popuptitle" testid="popuptitle">Start listening with a free Spotify account</h2>
            <button class="signupfree" testid="signupfree">SIGN UP FREE</button>
            <p class="have_account" testid="have_account">Already have an account?<span class="login" testid="login"> LOG IN</span></p>   
        </div>
    </div>
    </div>
    <button class="closebutton" testid="closebutton" @click="showModal = false">close</button>
    </transition>
    </div>
</template>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
.modal-overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 98;
    background-color: rgba(0 , 0 , 0 , 0.3);
}
.fade-enter-active , .fade-leave-active{
// these seconds in opacity determine the speed of appearance of popup
transition: opacity 2s;
}
//if we click out side it will close
.fade-enter , .fade-leave-to{
    opacity: 0;
}
.slide-enter-active , .slide-leave-active{
// these seconds in opacity determine the speed of appearance of popup
transition: transform .5s;
}
//if we click out side it will close
.slide-enter , .slide-leave-to{
    //direction of appearance of animated popup
    transform: translateY(-50%) translateX(100vm);
}
.modal{
    position: fixed;
    top: 50%;
    left: 50%;
    //transform translate -50% to get the popup at the center
    transform: translate(-50% , -50%);
    z-index: 99;

    width: 100%;
    max-width: 400px;
    // background-image: linear-gradient(0deg, #161516, rgb(66, 64, 64));
    background-color: white;
    border-radius: 16px; 
    padding: 25px;
//add here any nested style of elements inside the popup
.playlistimage{
    width: 100%;
}
.popuptitle{
    font-size: 32px;
    color: white;
    font-weight: bold;
    margin: 8px 0 24px;
}
.have_account{
font-size: 12px;
text-align: center;
margin: 32px 0 0;
line-height: 24px;
}
.login{
    font-size: 20px;
}
.login:hover{
    font-size: 25px;
}
}
button{
  background-color: transparent;
  border: none;
  padding: 10px;
}
.signupfree{
    background-color: #1ed760;
    border-radius: 500px;
    width: 100%;
    height: 35px;
    padding: 8px 34px;
    display: inline-block;
    color: white;
    margin: 25px 25px 0px 25px;
    align-content: center;
    font-size: 12px;
   line-height: 18px;
   font-weight: 700;
   letter-spacing: 1.76px;
}
.signupfree:hover{
    transform: scale(1.2);
}
button:focus {
  outline: 0 !important;
}
.closebutton{
    background-color: transparent;
    width: 100%;
    background: none;
    color:white;
    display: block;
    font-size: 12px; 
}
.closebutton:hover{
    transform: scale(1.06);
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
    data:function(){
        return{
            showmodal:true
        };
    },
    name:"playlist_popup",
       methods: {
    changeModalState() {
      this.$store.dispatch("creatplaylist/toggleModal");
    },
    },
    computed: {
    ...mapGetters({
      showModal: "playlistpopup/showModal"
    })
  }
}
</script>