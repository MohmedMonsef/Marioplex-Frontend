<template>
  <span>
    <div>
      <transition name="fade" appear>
        <div
          class="modal-overlay"
          v-if="showModalDelete"
          @click="showModalDelete = false"
        ></div>
      </transition>

      <transition name="slide" appear>
        <div class="modal" v-if="showModalDelete">
          <button class="cancel" @click="changeModalStateDelete()">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close</title>
              <path
                d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"
                fill="#fff"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>

          <h1 class="title">Are you sure,you want to delete this Playlist!!</h1>

          <div class="myrow">
            <div class="buttonWrapper">
              <button
                class="customButton cancel_button"
                @click="changeModalStateDelete()"
                @keyup.enter="DeletePlaylist()"
              >
                cancel
              </button>
            </div>
            <div class="buttonWrapper">
              <button
                class="customButton delete_button"
                testid="confirm_create"
                @click.prevent="DeletePlaylist()"
                @click="changeModalStateDelete()"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="toast"
      id="deleteplaylisttoast"
      testid="deleteplaylisttoast"
    ></div>
  </span>
</template>
<style scoped>
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
  width: 100vw;
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
  z-index: 98;
  width: 100%;
  height: 100vh;
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
  transform: translateY(-50%) translateX(100vw);
}
.myrow {
  display: block;
  width: 100vw;
  height: 200px;
  position: fixed;
  top: 50%;
}
.customButton {
  position: absolute;
  appearance: none;
  outline: none;
  cursor: pointer;
  height: 10%;
  width: 30%;
  border-radius: 500px;
  border-color: transparent;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  overflow-y: hidden;
  overflow-x: hidden;
  line-height: 18px;
  letter-spacing: 1.76px;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  display: inline-block;
  text-align: center;
  z-index: 4;
  background: none;
}
.delete_button {
  border: none;
  background-color: #1ed760;
  transition: 0.4s ease-out;
  border: 2px solid transparent;
}
.cancel_button {
  border-color: #fff;
  transition: all 33ms cubic-bezier(0.3, 0, 0, 1);
  border: 2px solid;
  margin-left: 30%;
}
.buttonWrapper {
  width: 50%;
  height: 500px;
  display: inline-block;
  padding: 3% 10% 3% 10%;
}

.title {
  position: absolute;
  top: 15%;
  display: block;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.005em;
  color: #fff;
  text-transform: none;
  text-align: center;
  margin: 16px 0;
  width: 100%;
}
.cancel {
  position: absolute;
  left: 50%;
  top: 10%;
  display: inline-block;
  background-color: transparent;
  color: #fff;

  border: none;
}
.toast {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  left: 50%;
  top: -55px;
  margin: auto;
  min-width: 300px;
  background-color: rgb(8, 118, 243);
  padding: 10px;
  color: white;
  text-align: center;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 0 10 rgb(9, 76, 131);
  transition: opacity 0.2s, visibility 0.2s;
  font-size: 15px;
}
.toast--visible {
  visibility: visible;
  opacity: 1;
}
@media screen and (max-width: 700px) {
  .customButton {
    height: 10%;
    width: 43%;
    border-radius: 500px;
    font-size: 10px;
  }
  .cancel_button {
    margin-left: 43%;
  }
  .buttonWrapper {
    width: 50%;
    height: 500px;
    display: inline-block;
    padding: 3% 5% 3% 5%;
  }
  .title {
    font-size: 44px;
    line-height: 50px;
  }
  .myrow {
    top: 60%;
  }
}
</style>
<script>
import { mapGetters } from "vuex";
import { default as song_functions } from "../javascript/mediaplayer_script.js";
/**
 * Delete Playlist Pop Up to confirm delete action
 * @displayName Delete Playlist Pop Up
 * @example [none]
 */
const toast = {
  show(message) {
    var mytoast = document.getElementById("liketoast");
    //cleartimeout used to reset the 3 seconds every time so not to override time when open another one while the first one is still shown
    clearTimeout(mytoast.hideTimeout);
    mytoast.textContent = message;
    mytoast.className = "toast toast--visible";
    mytoast.hideTimeout = setTimeout(() => {
      mytoast.classList.remove("toast--visible");
    }, 2000);
  }
};
export default {
  computed: {
    ...mapGetters({
      showModalDelete: "Playlist/showModalDelete",
      todelete: "Playlist/todelete"
    })
  },
  methods: {
    /**
     * triggers the closing of popup
     * @public This is a public method
     */

    changeModalStateDelete() {
      this.$store.dispatch("Playlist/toggleModalDelete");
    },
    /**
     * triggers the delete playlist request
     * @public This is a public method
     */
    DeletePlaylist() {
      this.$store.dispatch("Playlist/DeletePlaylist", this.todelete);
      toast.show("Removed from your library");
    }
  },
  mixins: [song_functions]
};
</script>
