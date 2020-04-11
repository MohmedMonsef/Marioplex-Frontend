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
        <button class="cancel" @click="changeModalState">
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
          <!-- <i class="fa fa-times"  id="myicon" ></i>-->
        </button>

        <h1 class="title">Update Info</h1>

        <div class="child">
          <div class="grandchild">
            <h4 class="artist_name">Name</h4>
            <input
              class="name_input"
              type="text"
              placeholder="Name"
              v-model="Name"
            />
            <h4 class="artist_Genre">Genre</h4>
            <input
              class="name_input"
              type="text"
              placeholder="Genre"
              v-model="Genre"
            />
            <h4 class="artist_description">Description</h4>
            <input
              class="name_input"
              type="text"
              placeholder="Description"
              v-model="Description"
            />
          </div>
        </div>

        <button class="cancel_button" @click="changeModalState">
          cancle
        </button>
        <button
          class="edit_button"
          testid="confirm_editing"
          @click.prevent="EditBio()"
          @click="changeModalState"
        >
          Edit
        </button>
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

.edit_button {
  position: fixed;
  top: 80%;
  left: 50%;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 50px;
  width: 180px;
  padding: 8px 34px;
  background-color: #1ed760;
  border-radius: 26px;
  border-color: transparent;

  color: #fff;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.cancel_button {
  position: fixed;
  top: 80%;
  left: 35%;
  appearance: none;
  outline: none;

  background: none;
  cursor: pointer;
  margin: 20px;
  height: 50px;
  width: 180px;
  padding: 8px 34px;
  background-color: transparent;
  border-radius: 26px;
  border-color: #fff;

  color: #fff;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  transition: 0.4s ease-out;
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
}
input {
  width: 100%;
  height: 10%;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border-color: transparent;
  padding: 32px 0px;
  font-size: 48px;
  line-height: 50px;
  color: #fff;
  text-transform: none;
  outline: none;
  font-weight: bold;
}
ul {
  color: red;
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
.cancel {
  position: absolute;
  left: 50%;
  top: 10%;
  display: inline-block;
  background-color: transparent;
  color: #fff;

  border: none;
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
.grandchild {
  position: fixed;
  align-items: center;
  width: 70%;
  height: 30%;
  left: 15%;
  padding: 32px 0px;
  background-color: transparent;
}
.child {
  position: fixed;
  height: 30%;
  top: 30%;
  bottom: 50%;
  background-color: transparent;
}
.playlist_name {
  color: #fff;
}
</style>
<script>
import { mapGetters } from "vuex";
/**
 * @displayName Edit Artist Bio
 * @example [none]
 */
export default {
  name: "EditBio",
  data: function() {
    return {
      Name: "",
      Genre: "",
      Description: ""
    };
  },
  //showModal:false,
  components: {},
  computed: {
    ...mapGetters({
      showModal: "artistproperties/showModal"
    })
  },
  methods: {
     /**
     * Opens popup to add updates to artist data
     * @public This is a public method
     */
    changeModalState() {
      this.$store.dispatch("artistproperties/toggleModal");
    },
      /**
     * triggers the edit request
     * @public This is a public method
     */
    EditBio() {
      let payload = {
        Name: this.Name,
        Genre: this.Genre,
        Description: this.Description
      };
      console.log("nerd");
      this.$store.dispatch("artistproperties/EditBio", payload);
    }
  }
};
</script>
