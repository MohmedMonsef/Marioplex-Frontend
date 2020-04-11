<template>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModalUpload"
        @click="showModalUpload = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModalUpload">
        <button class="cancel" @click="changeModalStateUpload">
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
        <div class="file_inputs">
          <h4>Choose Song</h4>
          <input
            type="file"
            name="file"
            ref="file"
            @change="OnFileSelected()"
          />
          <h4>Song Name</h4>
          <input type="text" name="file" v-model="Name" />
          <h4>Track Number</h4>
          <input type="text" name="file" v-model="TrackNumber" />
          <h4>Preview Song</h4>
          <input
            type="file"
            name="file"
            ref="file"
            @change="OnFilePreviewSelected()"
          />
          <h4>Available Market</h4>
          <input type="text" name="file" v-model="AvailableMarket" />

          <button class="cancel_button" @click="changeModalStateUpload">
            cancle
          </button>

          <button
            class="creat_button"
            testid="confirm_create"
            @click.prevent="OnUpload()"
            @click="changeModalStateUpload"
          >
            create
          </button>
        </div>
      </div>
    </transition>
  </div>
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
  margin: 0;
  border: none;
}
h4 {
  color: white;
  background-color: black;
  margin: 0;
}
.file_inputs {
  position: absolute;
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
</style>

<script>
import { mapGetters } from "vuex";
/**
 * Artist view to add song
 * @displayName Upload Song
 * @example [none]
 */
export default {
  name: "UploadSong",
  data() {
    return {
      selectedfile: "",
      Name: "",
      TrackNumber: "",
      selectedpreview: "",
      AvailableMarket: ""
    };
  },
  state: {
    Artist_Songs: []
  },
  computed: {
    ...mapGetters({
      showModalUpload: "artistproperties/showModalUpload"
    })
  },
  methods: {
    /**
     * opens pop up to add song
     * @public This is a public method
     */
    changeModalStateUpload() {
      this.$store.dispatch("artistproperties/toggleModalUpload");
    },
    /**
     * check track selected to upload(not implemnted yet)
     * @public This is a public method
     */
    OnFileSelected() {
      this.selectedfile = event.target.files[0];

      console.log(this.selectedfile, "nori");
    },
    /**
     * check track file before upload
     * @public This is a public method
     */
    OnFilePreviewSelected() {
      this.selectedpreview = event.target.files[0];
      console.log(this.selectedpreview, "nori");
    },
    /**
     * Upload Song(not integerated yet)
     * @public This is a public method
     */
    OnUpload() {
      /*let payload = {
        Name: this.Name,
        TrackNumber: this.TrackNumber,
        AvailableMarket: this.AvailableMarket,
        selectedfile:this.selectedfile,
        selectedpreview:this.selectedpreview
      };*/
      /* console.log(payload.Name, "in artist component");
      console.log(payload.TrackNumber, "in artist component");
      console.log(payload.AvailableMarket, "in artist component");
      console.log(payload.selectedfile, "in artist component");
      console.log(payload.selectedpreview, "in artist component");*/
      /* this.$store.dispatch(
        "uploadsong/OnUpload",
        this.selectedfile,
        this.selectedpreview,
        {
          Name: this.Name,
          TrackNumber: this.TrackNumber,
          AvailableMarket: this.AvailableMarket
        }
      );*/
      //  this.$store.dispatch("uploadsong/OnUpload",payload)
      this.$store.dispatch("uploadsong/OnUpload", {
        Name: this.Name,
        TrackNumber: this.TrackNumber,
        AvailableMarket: this.AvailableMarket,
        selectedfile: this.selectedfile,
        selectedpreview: this.selectedpreview
      });
    }
  }
};
</script>
