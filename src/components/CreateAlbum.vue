<template>
  <div class="to_contain">
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModalCreate"
        @click="showModalCreate = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModalCreate">
        <button class="cancel" @click="changeModalStateCreate">
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
            />
          </svg>
        </button>      
          <div class="album_info">
            <h4>Album Name</h4>
            <input type="text" name="file" v-model="Name" />
            <h4>Album Label</h4>
            <input type="text" name="file" v-model="label" />
            <h4>Album Type</h4>
            <input type="text" name="file" v-model="type" />
            <h4>Relase Date</h4>
            <input type="text" name="file" v-model="relasedate" />
            <h4>Available Market</h4>
            <input type="text" name="file" v-model="AvailableMarket" />
            <h4>Genre</h4>
            <input type="text" name="file" v-model="Genre" />
          </div>
          <button class="cancel_button" @click="changeModalStateCreate">
            cancle
          </button>

          <button
            class="creat_button"
            testid="confirm_create"
            @click.prevent="Create_Album()"
            @click="changeModalStateCreate"
          >
            create
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
.creat_button {
  position: fixed;
  top: 80%;
  left: 50%;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 6%;
  width: 10%;
  background: linear-gradient(to right, #f27914, #9c28d0);
  border-radius: 26px;
  border-color: transparent;

  color: #fff;
  font-size: 85%;
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
  // height: 50px;
  // width: 180px;
  height: 6%;
  width: 10%;
  // padding: 8px 34px;
  background-color: transparent;
  border-radius: 26px;
  border-color: #fff;

  color: #fff;
  font-size: 85%;
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
  position: relative;
  left: 40%;
  top: 5%;
  display: inline-block;
  background-color: transparent;
  color: #fff;
  margin: 5%;
  border: none;
}
h4 {
  color: white;
  background-color: transparent;
  margin: 0;
  height:5%;
}
.file_inputs {
  position: relative;
  top: 20%;
}
input {
  width: 100%;
  height: 5%;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border-color: transparent;
  padding: 22px 0px;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
  text-transform: none;
  outline: none;
  font-weight: bold;
}
.to_contain {
  width: 100%;
  height: 100%;
}
.files {
  position: absolute;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  height: 7%;
  width: 3%;
  background: linear-gradient(to right, #f27914, #9c28d0);
  border-radius: 26px;
  border-color: transparent;
  color: #fff;
  font-size: 90%;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.album_info {
  position: absolute;
  top: 17%;
}
</style>

<script>
import { mapGetters } from "vuex";
/**
 * Artist view to add song
 * @displayName Upload Song
 * @example [none]
 */
export default {
  name: "CreateAlbum",
  data() {
    return { 
      Name: "",
      label:"",
      type:"",
      relasedate:"",
      AvailableMarket: "",
      Genre: "",
    };
  },
  computed: {
    ...mapGetters({
      showModalCreate: "ArtistProperties/showModalCreate",
    }),
  },
  methods: {
    /**
     * opens pop up to add song
     * @public This is a public method
     */
    changeModalStateCreate() {
      this.$store.dispatch("ArtistProperties/toggleModalCreate");
    },
    Create_Album() {
      let payload = {
        Name: this.Name,
        label: this.label,
        type:this.type,
        relasedate:this.relasedate,
        AvailableMarket: this.AvailableMarket,
        Genre: this.Genre,
      };
      this.$store.dispatch("ArtistProperties/Create_Album", payload);
    },
  },
};
</script>
