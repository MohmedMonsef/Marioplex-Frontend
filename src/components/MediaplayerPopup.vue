<template>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="changeModalState()"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <div class="child">
          <div class="grandchild">
            <div class="info">
              <h2>Start listening with a free Spotify account</h2>
              <ol class="list">
                <li><i class="fa fa-check"></i>No creditcard,ever</li>
                <li><i class="fa fa-check"></i>Get unlimited podcasts</li>
                <li>
                  <i class="fa fa-check"></i>Play your favourite music, with ads
                </li>
              </ol>

              <button
                class="closebutton"
                testid="closepopup"
                @click="changeModalState()"
              >
                CLOSE
              </button>
            </div>

            <div class="login_or_signup">
              <router-link to="../../SignUp">
                <button class="signupbutton" testid="signupbutton">
                  SIGN UP FREE
                </button>
              </router-link>
              <hr style="color: grey;" />
              <p>Already have an account?</p>
              <router-link to="../../Login">
                <button class="loginbutton" testid="loginbutton">
                  LOG IN
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 10;
  padding: 10;
  box-sizing: border-box;
  overflow: hidden;
}

div {
  position: relative;
  display: block;
  width: 500%;
  height: 100%;
}
.modal-overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 200%;
  z-index: 104;
  width: 100%;
  height: 200%;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
}

.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
  overflow: hidden;
  justify-content: center;
  // animation: UpsellShowAnimation 0.2s 1;
  // animation-fill-mode: both;
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
  // transition: transform 0.5s;
}

// @keyframes fadeIn {
//   from {opacity: 0;}
//   to {opacity:1 ;}
// }

.child {
  position: absolute;
  align-items: center;
  align-content: center;
  border-radius: 10px;
  width: 800px;
  height: 450px;
  bottom: 50%;
  top: 17%;
  left: 22%;
  align-content: center;
  background: url(https://open.scdn.co/cdn/images/improved-modal-bg.23e5dcb1.jpg);
  background-size: 100% 100%;
  justify-content: center;
  .grandchild {
    position: relative;
    justify-content: center;
    align-content: center;
    margin: 35px;
    width: 100%;
    height: 100%;
    h2 {
      position: relative;
      color: #fff;
      margin-bottom: 12px;
      font-size: 48px;
      font-weight: 700;
      line-height: 48px;
    }
    li {
      position: relative;
      color: white;
      font-size: 15px;
      padding: 5px;
      list-style: none;
    }
    p {
      margin: 5px;
    }
    hr {
      width: 250px;
      margin-top: 25px;
      margin-bottom: 25px;
    }
    .fa {
      padding: 5px;
    }
    ol {
      margin-left: -50px;
      margin-top: 30px;
    }
    .signupbutton,
    .loginbutton {
      width: 250px;
      height: 60px;
      padding: 10px;
      background-color: #1ed760;
      border-color: transparent;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 1.76px;
      border-radius: 500px;
      color: #fff;
      cursor: pointer;
      text-align: center;
      transition: all 33ms cubic-bezier(0.3, 0, 0, 1);
      will-change: transform;
      white-space: nowrap;
      margin-top: 20px;
      font-weight: 700;
      font-size: 16px;
    }
    .loginbutton {
      background-color: white;
      border-color: black;
      color: black;
    }
    .signupbutton:hover,
    .loginbutton:hover {
      transform: scale(1.06);
    }
    .login_or_signup {
      width: 40%;
      height: 60%;
      margin: 15px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      float: left;
      align-content: center;
      text-align: center;
    }
    .info {
      width: 50%;
      float: left;
    }
  }
}
button:focus {
  outline: 0 !important;
}
.closebutton {
  position: relative;
  color: white;
  background-color: transparent;
  border-color: transparent;
  margin: 20px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
}
.closebutton:hover {
  text-decoration-line: underline;
}
@media screen and (max-width: 1030px) {
.child{
  left: 10%;
}
}
@media screen and (max-width: 815px) {
.child{
  left: 0;
}
}
@media screen and (max-width: 500px) {
  .child {
    position: relative;
    width: 100%;
    left: 0;
    top: 0;
    height: 100vh;
    align-content: center;
    padding: 20px;
    .grandchild {
      margin: 20px;
      height: 100vh;
      top: 0;
      position: relative;
      li{
       padding: 2px;
      }
      .closebutton{
        margin: 5px;
      }
      .info {
        position: absolute;
        display: block;
        width: 100%;
        height: 320px;
      }
      .login_or_signup {
        position: absolute;
        display: block;
        top: 320px;
        width: 350px;
        height: 300px;
        left: 0;
        right: 0;
        float: right;
      }
    }
  }
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "mediaplayerpopup",
  data: function() {
    return {
      // showModal: true
    };
  },
  computed: {
    ...mapGetters({
      showModal: "CheckUserPopup/showModal"
    })
  },
  methods: {
    changeModalState() {
      this.$store.dispatch("CheckUserPopup/togglePopup");
    }
  }
};
</script>
