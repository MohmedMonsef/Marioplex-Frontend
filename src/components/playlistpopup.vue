<template>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <div class="child">
          <div class="grandchild">
            <div class="firstcolumn">
              <img class="image" src="../assets/cry.png" alt="image" />
            </div>
            <div class="secondcolumn">
              <h2>Start listening with a free Spotify account</h2>
              <button class="signupbutton" testid="signupbutton">
                SIGN UP FREE
              </button>
              <p>Already have an account? <span class="login">LOG IN</span></p>
            </div>
          </div>

          <p class="close" testid="closepopup" @click="showModal = false">
            Close
          </p>
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

body {
  font-family: "montserrat", sans-serif;
}

div {
  position: relative;
  display: block;
  width: 500%;
  height: 100vh;
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
  z-index: 98;
  background-color: rgba(0, 0, 0, 0);
}

.modal {
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
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
  transition: transform 0.5s;
}

.firstcolumn {
  width: 5%;
}
.secondcolumn {
  width: 5%;
}
.child {
  position: fixed;
  align-items: center;
  align-content: center;
  border-radius: 10px;
  width: 60%;
  height: 60%;
  bottom: 50%;
  top: 15%;
  left: 20%;
  background-image: linear-gradient(0deg, #161516, rgb(66, 64, 64));
  .grandchild {
    position: relative;
    align-items: center;
    width: 100%;
    height: 100%;
    .image {
      width: 350px;
      height: auto;
      position: relative;
      top: 6%;
      left: 50%;
      bottom: 2%;
    }
    h2 {
      position: fixed;
      color: white;
      font-weight: bold;
      font-size: 32px;
    }
    p {
      position: fixed;
      color: white;
      font-size: 13px;
    }
    .login {
      font-size: 15px;
    }
    .login:hover {
      font-size: 17px;
    }
  }
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
}
@media screen and (max-width: 650px) {
  .child {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    align-content: center;
    .image {
      top: 10%;
      left: 6%;
    }
  }
}
</style>
<script>
/**
 * appears when user tries to create playlist with being registered
 * @displayName No User Popup
 * @example [none]
 */
export default {
  name: "CreatePlaylist",
  data: function() {
    return {
      playlistname: "",
      showModal: true
    };
  },

  components: {},
  methods: {
     /**
     * triggers create playlist song
     * @public This is a public method
     */
    changeModalState() {
      this.$store.dispatch("Playlist/toggleModal");
    }
  }
};
</script>
