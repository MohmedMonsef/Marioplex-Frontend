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
            <h2>Start listening with a free Spotify account</h2>
            <router-link to="../../SignUp">
              <button class="signupbutton" testid="signupbutton">
                SIGN UP FREE
              </button>
            </router-link>
            <p>
              Already have an account?
              <router-link to="../../Login">
                <button class="login">LOG IN</button>
              </router-link>
            </p>
          </div>
          <button class="close" testid="closepopup" @click="changeModalState()">
            Close
          </button>
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
  animation: UpsellShowAnimation 0.2s 1;
  animation-fill-mode: both;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateZ(-50%) translateX(100vw);
  // transition: transform 0.5s;
}

// @keyframes fadeIn {
//   from {opacity: 0;}
//   to {opacity:1 ;}
// }

.child {
  position: fixed;
  align-items: center;
  align-content: center;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  bottom: 50%;
  top: 20%;
  left: 23%;
  background-image: linear-gradient(0deg, #161516, rgb(66, 64, 64));
  .grandchild {
    top: 10%;
    position: relative;
    // align-items: center;
    text-align: center;
    align-content: center;
    width: 100%;
    height: 100%;
    h2 {
      position: relative;
      color: white;
      font-weight: bold;
      font-size: 32px;
      padding: 15px;
    }
    p {
      position: relative;
      color: white;
      font-size: 13px;
      padding: 15px;
    }
    .signupbutton {
      width: 300px;
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
    }
    .login {
      background-color: transparent;
      color: white;
      border-color: transparent;
    }
    .signupbutton:hover {
      transform: scale(1.06);
    }
    .login:hover {
      transform: scale(1.06);
    }
  }
}
button:focus {
  outline: 0 !important;
}
.close {
  position: relative;
  right: 45%;
  color: white;
  font-size: 15px;
  font-weight: normal;
  margin: 20px;
}
.close:hover {
  font-size: 16px;
  color: grey;
}
@media screen and (max-width: 950px) {
  .child {
    top: 10%;
    left: 18%;
    height: 70%;
    align-content: center;
  }
  .close {
    bottom: 3%;
  }
}
@media screen and (max-width: 650px) {
  .child {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    align-content: center;
  }
  .close {
    bottom: 40%;
  }
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "playlistpopup",
  computed: {
    ...mapGetters({
      showModal: "CheckUserPopup/showpagesModal"
    })
  },
  methods: {
    /**
     * triggers create playlist song
     * @public This is a public method
     */
    changeModalState() {
      this.$store.dispatch("CheckUserPopup/togglepagespopup");
    }
  }
};
</script>
