<template>
  <div class="to_contain">
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
            @change="OnHeighFileSelected"
          />
          <button
            class="files"
            id="uploadheighfile"
            @click="$refs.heighinputfile.click()"
          >
            High Quality Track
          </button>
          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="mediuminputfile"
            id="medfile"
            @change="OnMediumFileSelected"
          />
          <button
            class="files"
            id="uploadmediumfile"
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
            id="lowfile"
            @change="OnLowFileSelected"
          />
          <button
            class="files"
            id="uploadlowfile"
            @click="$refs.lowinputfile.click()"
          >
            Low Quality Track
          </button>
          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="heighencinputfile"
            id="highenc"
            @change="OnHeigh_EncFileSelected"
          />
          <button
            class="files"
            id="uploadheighencfile"
            @click="$refs.heighencinputfile.click()"
          >
            High_Enc Track
          </button>

          <input
            type="file"
            name="file"
            accept="audio/*"
            style="display:none"
            ref="mediumencinputfile"
            id="medenc"
            @change="OnMedium_EncFileSelected"
          />
          <button
            class="files"
            id="uploadmediumencfile"
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
            id="lowenc"
            @change="OnLow_EncFileSelected"
          />
          <button
            class="files"
            id="uploadlowencfile"
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
            id="prefile"
            @change="OnFilePreviewSelected"
          />
          <button
            class="files"
            id="uploadpreviewfile"
            @click="$refs.previewinputfile.click()"
          >
            Preview Track
          </button>
          <div class="track_info">
            <h4>Song Name</h4>
            <input type="text" name="file" v-model="Name" />
            <h4>Track Number</h4>
            <input type="text" name="file" v-model="TrackNumber" />

            <h4>Available Market</h4>
            <select
              v-model="AvailableMarket"
              class="AvailableMarket_select"
              testid="country input"
            >
              <option
                v-for="AvailableMarket in AvailableMarkets"
                :key="AvailableMarket.value"
                :value="AvailableMarket.value"
                :disabled="AvailableMarket.disabled"
                >{{ AvailableMarket.text }}
              </option>
            </select>
            <!-- <input type="text" name="file" v-model="AvailableMarket" /> -->
            <h4>Genre</h4>
            <input type="text" name="file" v-model="Genre" />
             <h4>Album</h4>
            <select
              v-model="id"
              class="album_select"
              testid="album input"
            >
              <option
                v-for="(album,id) in albums"
                :key="id"
                :value="album._id"
                >{{ album.name }}
              </option>
            </select>
          </div>
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
  top: 90%;
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
  top: 90%;
  left: 35%;
  appearance: none;
  outline: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 6%;
  width: 10%;
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
  top: 10%;
  display: inline-block;
  background-color: transparent;
  color: #fff;
  margin: 5%;
  border: none;
}
h4 {
  color: white;
  background-color: black;
  margin: 0;
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
#uploadheighfile {
  top: 0%;
  left: 0%;
}
#uploadmediumfile {
  top: 0%;
  left: 5%;
}
#uploadlowfile {
  top: 0%;
  left: 10%;
}
#uploadpreviewfile {
  top: 0%;
  left: 15%;
}
#uploadheighencfile {
  top: 12%;
  left: 2.5%;
}

#uploadmediumencfile {
  top: 12%;
  left: 7.5%;
}
#uploadlowencfile {
  top: 12%;
  left: 12.5%;
}
.track_info {
  position: relative;
  top: 20%;
}
h4 {
  background-color: transparent;
}
.album_select {
  width: 100%;
  background: black;
  border: transparent;
}
.AvailableMarket_select{
  width: 100%;
  background: black;
  border: transparent;
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
      id:"",
      AvailableMarkets: [
        { text: "Choose a country", value: "0", disabled: true },
        { text: "Egypt", value: "eg", disabled: false },
        { text: "France", value: "fr", disabled: false },
        { text: "USA", value: "us", disabled: false },
        { text: "Britain", value: "uk", disabled: false },
        { text: "Canada", value: "ca", disabled: false },
        { text: "Australia", value: "au", disabled: false },
        { text: "Saudi Arabia", value: "sa", disabled: false },
        { text: "China", value: "cn", disabled: false },
        { text: "Japan", value: "jp", disabled: false },
        { text: "Korea", value: "kp", disabled: false },
        { text: "Mexico", value: "mx", disabled: false },
        { text: "Brazil", value: "br", disabled: false },
      ],
    };
  },
  state: {
    Artist_Songs: [],
  },
  computed: {
    ...mapGetters({
      showModalUpload: "ArtistProperties/showModalUpload",
      albums:"ArtistProperties/Albums"
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
    OnHeighFileSelected(event) {
      this.Heighselectedfile = event.target.files[0];

    },
    OnMediumFileSelected(event) {
      this.Mediumselectedfile = event.target.files[0];
    },
    OnLowFileSelected(event) {
      this.Lowselectedfile = event.target.files[0];
    },
    OnHeigh_EncFileSelected(event) {
      this.Heigh_Encselectedfile = event.target.files[0];
    },
    OnMedium_EncFileSelected(event) {
      this.Medium_Encselectedfile = event.target.files[0];

    },
    OnLow_EncFileSelected(event) {
      this.Low_Encselectedfile = event.target.files[0];
    },
    /**
     * check track file before upload
     * @public This is a public method
     */
    OnFilePreviewSelected(event) {
      this.selectedpreview = event.target.files[0];
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
        AlbumID:this.id,
      };
      this.$store.dispatch("ArtistProperties/UploadTrack", payload);
    },
  },
};
</script>
