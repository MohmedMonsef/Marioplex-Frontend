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
          <input
            type="file"
            name="file"
            id="fileUp"
            accept="audio/*"
            style="display:none"
            ref="heighinputfile"
            @change="OnHeighFileSelected()"
          />
          <button class="uploadheighfile" @click="$refs.heighinputfile.click()">
            Heigh Quality Track
          </button>
          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="mediuminputfile"
            @change="OnMediumFileSelected()"
          />
          <button
            class="uploadmediumfile"
            @click="$refs.mediuminputfile.click()"
          >
            Medium Quality Track
          </button>

          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="lowinputfile"
            @change="OnLowFileSelected()"
          />
          <button class="uploadlowfile" @click="$refs.lowinputfile.click()">
            Low Quality Track
          </button>
          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="heighencinputfile"
            @change="OnHeigh_EncFileSelected()"
          />
          <button
            class="uploadheighencfile"
            @click="$refs.heighencinputfile.click()"
          >
            Heigh_Enc Track
          </button>

          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="mediumencinputfile"
            @change="OnMedium_EncFileSelected()"
          />
          <button
            class="uploadmediumencfile"
            @click="$refs.mediumencinputfile.click()"
          >
            Medium_Enc Track
          </button>
          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="lowencinputfile"
            @change="OnLow_EncFileSelected()"
          />
          <button
            class="uploadlowencfile"
            @click="$refs.lowencinputfile.click()"
          >
            Low_Enc Track
          </button>
          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="previewinputfile"
            @change="OnFilePreviewSelected()"
          />
          <button
            class="uploadpreviewfile"
            @click="$refs.previewinputfile.click()"
          >
            Preview Track
          </button>
          <h4>Song Name</h4>
          <input type="text" name="file" v-model="Name" />
          <h4>Track Number</h4>
          <input type="text" name="file" v-model="TrackNumber" />

          <h4>Available Market</h4>
          <input type="text" name="file" v-model="AvailableMarket" />
          <h4>Genre</h4>
          <input type="text" name="file" v-model="Genre" />
          <button class="cancel_button" @click="changeModalStateUpload">
            cancle
          </button>

          <button
            class="creat_button"
            testid="confirm_create"
            @click.prevent="UploadTrack()"
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
      Heighselectedfile: "",
      Mediumselectedfile: "",
      Lowselectedfile: "",
      Heigh_Encselectedfile: "",
      Medium_Encselectedfile: "",
      Low_Encselectedfile: "",
      Name: "",
      TrackNumber: "",
      selectedpreview: "",
      AvailableMarket: "",
      Genre: "",
      audio: {
        myduration: 0,
      },
      myaudio: [],
    };
  },
  state: {
    Artist_Songs: [],
  },
  computed: {
    ...mapGetters({
      showModalUpload: "ArtistProperties/showModalUpload",
    }),
  },
  methods: {
    /**
     * opens pop up to add song
     * @public This is a public method
     */
    changeModalStateUpload() {
      this.$store.dispatch("ArtistProperties/toggleModalUpload");
    },
    /**
     * check track selected to upload(not implemnted yet)
     * @public This is a public method
     */
    OnHeighFileSelected() {
      this.Heighselectedfile = event.target.files[0];
      console.log(this.Heighelectedfile, "noriHigh");

      //        window.URL = window.URL || window.webkitURL;

      //        this.myaudio.push(this.Heighselectedfile);
      //         console.log("please tell me my audio ",this.myaudio)
      //        let audioo = document.createElement('audioo');
      //        audioo.preload = 'metadata';
      //        audioo.src = URL.createObjectURL(this.Heighselectedfile);;
      //        audioo.onloadedmetadata =()=>  {
      //        window.URL.revokeObjectURL(audioo.src);
      //        let duration = audioo.duration;
      //        this.myaudio[this.myaudio.length - 1].duration = duration;
      //        console.log("please tell me the duration ",duration)

      //  }

      // var myVideos = [];

      // document.getElementById("fileUp").onchange = OnHeighFileSelected;
      /////////////////////////////////////////////////////////////////////////////////////////////////
      // console.log(this.Heighselectedfile, "noriHeigh");
      // let reader = new FileReader();
      // reader.readAsDataURL(this.Heighselectedfile);
      // //this.audio.duration = reader.duration;
      // console.log("noriHeighDuration", this.audio.duration);
      // reader.onload = (evt) => {
      //   let audiofile = new Audio();
      //   //  let audiofile= new HTMLAudioElement;
      //   //  this.audio.duration = audiofile.duration;
      //    console.log("noriHeighaudiofile",audiofile);

      //   // console.log( "noriHeighDuration",audiofile.duration );
      //   audiofile.onload = () => {
      //   //  console.log("noriHeighDuration");
      //     // this.audio.duration = audiofile.duration;

      //    // console.log("noriHeighDuration.......", audiofile.duration);
      //   };

      //   audiofile.src = evt.target.result;
      //   console.log("in uploadsong popup the audio", audiofile);
      //   // console.log("in uploadsong popup the audio src", audiofile.src);
      // };
      /////////////////////////////////////////////////////////////////////////////////////
    },
    OnMediumFileSelected() {
      this.Mediumselectedfile = event.target.files[0];

      console.log(this.Mediumselectedfile, "noriMedium");
    },
    OnLowFileSelected() {
      this.Lowselectedfile = event.target.files[0];

      console.log(this.Lowselectedfile, "noriLow");
    },
    OnHeigh_EncFileSelected() {
      this.Heigh_Encselectedfile = event.target.files[0];

      console.log(this.Heigh_Encselectedfile, "noriHeigh_Enc");
    },
    OnMedium_EncFileSelected() {
      this.Medium_Encselectedfile = event.target.files[0];

      console.log(this.Medium_Encselectedfile, "noriMedium_Enc");
    },
    OnLow_EncFileSelected() {
      this.Low_Encselectedfile = event.target.files[0];

      console.log(this.Low_Encselectedfile, "noriLow_Enc");
    },
    /**
     * check track file before upload
     * @public This is a public method
     */
    OnFilePreviewSelected() {
      this.selectedpreview = event.target.files[0];
      console.log(this.selectedpreview, "noriPreview");
    },
    /**
     * Upload Song(not integerated yet)
     * @public This is a public method
     */
    UploadTrack() {
      let payload = {
        Name: this.Name,
        TrackNumber: this.TrackNumber,
        AvailableMarket: this.AvailableMarket,
        Genre: this.Genre,
        highselectedfile: this.Highselectedfile,
        mediumselectedfile: this.Mediumselectedfile,
        lowselectedfile: this.Lowselectedfile,
        high_enc_selectedfile: this.High_Encselectedfile,
        medium_enc_selectedfile: this.Medium_Encselectedfile,
        low_enc_selectedfile: this.Low_Encselectedfile,
        selectedpreview: this.selectedpreview,
      };
      this.$store.dispatch("ArtistProperties/UploadTrack", payload);
    },
  },
};
</script>
