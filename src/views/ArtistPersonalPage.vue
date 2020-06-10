<template>
  <body>
    <div class="to_contain" id="app">
      <span class="black_body">
        <ArtistHeader></ArtistHeader>
        <div class="black_body">
          <div class="coverphoto">
            <img
              class="c_photo"
              :src="
                $url + '/api/images/' + this.image_id + '?belongs_to=artist'
              "
            />
            <input
              type="file"
              @change="OnPhotoUpload"
              style="display:none"
              ref="inputfile"
              accept="image/*"
            />
            <button
              class="uploadfile"
              @click="$refs.inputfile.click()"
              v-if="choosebutton == false"
            >
              change cover photo
            </button>
            <!-- v-if="choosebutton" -->
            <button class="uploadbutton" @click="UploadPhoto()">
              Upload
            </button>
          </div>
          <div class="page_content">
            <EditBio v-if="show" />
            <UploadSong v-if="showupload"></UploadSong>
            <CreateAlbum v-if="showCreate"></CreateAlbum>
            <div class="bio">
              <div class="A_Image"></div>
              <div>
                <h2 class="bioheader">Bio</h2>
              </div>
              <button class="svg-container" @click="changeModalState()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="50px"
                  height="50px"
                  fill="white"
                  viewBox="0 0 24 30"
                  version="1.1"
                  x="0px"
                  y="0px"
                >
                  <title>write</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M17,13.5000015 C17,12.9477168 17.4477152,12.5000015 18,12.5000015 C18.5522847,12.5000015 19,12.9477168 19,13.5000015 L19,19.1250041 C19,20.7128208 17.7128189,22 16.1250013,22 L4.87499867,22 C3.28718109,22 2,20.7128208 2,19.1250039 L2.00000232,7.87499354 C2.00000232,6.28717812 3.28718237,5 4.87499951,5 C8.90694118,5.00000316 8.90694118,5.00000316 10.968755,5.00000379 C11.5210397,5.00000379 11.968755,5.44771904 11.968755,6.00000379 C11.968755,6.55228854 11.5210397,7.00000379 10.968755,7.00000379 C8.9069398,7.00000316 8.9069398,7.00000316 4.87499867,7 C4.39175119,7 4.00000232,7.39174829 4.00000232,7.87499374 L4,19.1250041 C4,19.6082507 4.39174991,20 4.87499867,20 L16.1250013,20 C16.6082501,20 17,19.6082507 17,19.1250041 L17,13.5000015 Z"
                      fill="white"
                      fill-rule="nonzero"
                    />
                    <path
                      d="M13.2508555,3.27604735 L13.2698899,13.8706393 L14.2704338,15.3714551 L15.2698896,13.8722713 L15.2508523,3.27604735 L13.2508555,3.27604735 Z M12.2490573,1.27604735 L16.2490573,1.27604735 C16.8006405,1.27604735 17.2480647,1.72266837 17.2490557,2.27425074 L17.2704321,14.1724341 C17.2707879,14.3704708 17.2123352,14.5641541 17.102484,14.7289309 L15.102484,17.7289309 C14.706662,18.322664 13.8342055,18.322664 13.4383835,17.7289309 L11.4383835,14.7289309 C11.3292112,14.5651726 11.270789,14.37284 11.2704354,14.1760273 L11.2490589,2.27784397 C11.2480654,1.72485836 11.6960708,1.27604735 12.2490573,1.27604735 Z"
                      fill="white"
                      fill-rule="nonzero"
                      transform="translate(14.259745, 9.725139) rotate(45.000000) translate(-14.259745, -9.725139) "
                    />
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="14.7928932 6.20710678 16.2071068 4.79289322 19.2071068 7.79289322 17.7928932 9.20710678"
                    />
                  </g>
                  <text
                    x="0"
                    y="39"
                    fill="white"
                    font-size="5px"
                    font-weight="bold"
                    font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                  >
                    Created by Twentyfour Line Studio
                  </text>
                  <text
                    x="0"
                    y="44"
                    fill="white"
                    font-size="5px"
                    font-weight="bold"
                    font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                  >
                    from the Noun Project
                  </text>
                </svg>
              </button>
              <p class="artistbio">
                {{ this.ArtistBio }}
              </p>
              <div class="row">
                <div class="col-2-sm">
                  <button class="c_track" @click="changeModalStateUpload()">
                    Create Track
                  </button>
                </div>
                <div class="col-2-sm">
                  <button class="c_album" @click="changeModalStateCreate()">
                    Create Album
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--<DeleteSong></DeleteSong>-->
        </div>
      </span>
    </div>
  </body>
</template>
<style lang="scss" scoped>
.black_body {
  background-color: black;
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  background-color: black;
}
div {
  background-color: black;
}
svg {
  font-size: 5px;
  position: absolute;
  top: 10%;
  left: 70%;
  background-color: black;
}
.bioheader {
  position: absolute;
  top: 10%;

  color: #fff;
  background-color: black;
  width: 100%;
}
.artistbio {
  width: 70%;
  max-height: 70%;
  position: absolute;
  top: 20%;
  overflow-y: scroll;
  background-color: black;
  color: #fff;
  font-size: 28px;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.c_track {
  position: absolute;
  top: 40%;
  // left: 80%;
  right: 0;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  // height: 50px;
  // width: 220px;
  height: 8%;
  width: 17%;
  // padding: 8px 34px;
  background: linear-gradient(to right, #f27914, #9c28d0);
  border-radius: 26px;
  border-color: transparent;

  color: #fff;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.c_album {
  position: absolute;
  top: 30%;
  // left: 80%;
  right: 0;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  // height: 50px;
  // width: 220px;
  height: 8%;
  width: 17%;
  // padding: 8px 34px;
  background: linear-gradient(to right, #f27914, #9c28d0);
  border-radius: 26px;
  border-color: transparent;

  color: #fff;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.coverphoto {
  position: absolute;
  top: 0%;
  /* The image used */
  background-image: url("../assets/black_ground.png");

  /* Full height */
  height: 50%;
  width: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.c_photo {
  position: relative;
  top: 0%;
  height: 100%;
  width: 100%;
}
.uploadfile {
  position: absolute;
  top: 70%;
  right: 0;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 15%;
  width: 17%;
  background: linear-gradient(to right, #f27914, #9c28d0);
  border-radius: 26px;
  border-color: transparent;
  color: #fff;
  font-size: 90%;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  z-index: 10;
}
.uploadbutton {
  position: absolute;
  top: 70%;
  right: 0;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 15%;
  width: 17%;
  background: linear-gradient(to right, #f27914, #9c28d0);
  border-radius: 26px;
  border-color: transparent;
  color: #fff;
  font-size: 90%;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  z-index: 0;
}
.to_contain {
  width: 100%;
  height: 100%;
  background-color: black;
}
.row {
  margin-left: 10%;
  margin-right: 10%;
}
.page_content {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
<script>
//import { mapGetters } from "vuex";
import { mapState, mapGetters } from "vuex";
import UploadSong from "../components/UploadSong";
//import DeleteSong from "../components/DeleteSong";
import ArtistHeader from "../components/ArtistHeader";
import EditBio from "../components/EditBio";
import CreateAlbum from "../components/CreateAlbum";
/**
 * Artist personal page to upload or delete songs or even edit artist bio and photo
 * @displayName Artist Personal Page
 * @example [none]
 */
export default {
  name: "ArtistPersonalPage",
  data: function() {
    return {
      selectedphoto: null,
      image: {
        size: "",
        height: "",
        width: "",
      },
      choosebutton: false,
      //imageLoaded:false
    };
  },
  components: {
    UploadSong,
    // DeleteSong,
    ArtistHeader,
    EditBio,
    CreateAlbum,
  },
  computed: {
    ...mapState({
      show: (state) => state.ArtistProperties.showModal,
      showupload: (state) => state.ArtistProperties.showModalUpload,
      showCreate: (state) => state.ArtistProperties.showModalCreate,
      // currentimage:state=>state.artistproperties.currentimage
    }),
    ...mapGetters({
      userid: "Authorization/userid",
      image_id: "ArtistProperties/image_id",
      // currentimage:"artistproperties/currentimage"
      Artist_ID: "ArtistProperties/Artist_ID",
      ArtistBio: "ArtistProperties/ArtistBio",
    }),
  },
  methods: {
    /**
     * toggle appearance of modal popup
     * @public This is a public method
     */
    changeModalState() {
      this.$store.dispatch("ArtistProperties/toggleModal");
    },
    /**
     * toggle upload state of song
     * @public This is a public method
     */
    changeModalStateUpload() {
      this.$store.dispatch("ArtistProperties/toggleModalUpload");
    },
    OnPhotoUpload(event) {
      this.choosebutton = true;
      this.selectedphoto = event.target.files[0];
      if (
        !this.selectedphoto ||
        this.selectedphoto.type.indexOf("image/") !== 0
      )
        return;

      this.image.size = this.selectedphoto.size;

      let reader = new FileReader();

      reader.readAsDataURL(this.selectedphoto);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          this.image.width = img.width;
          this.image.height = img.height;
        };
        img.src = evt.target.result;
      };
      this.persist(this.selectedphoto);
    },
    persist(image) {
      const data = new FormData();
      data.append("image", image);
      // Send the image to the API (e.g., with a Vuex action)
    },

    UploadPhoto() {
      this.choosebutton = false;
      let payload = {
        selphoto: this.selectedphoto,
        width: this.image.width,
        height: this.image.height,
        belongs_to: "artist",
        artist_id: this.Artist_ID,
      };
      this.$store.dispatch("ArtistProperties/UploadPhoto", payload);
    },
    changeModalStateCreate() {
      this.$store.dispatch("ArtistProperties/toggleModalCreate");
    },
  },
  created: function() {
    this.$store.dispatch("ArtistProperties/Get_Artist_ID");
    this.$store.dispatch("ArtistProperties/Get_Artist_Bio");
    this.$store.dispatch("ArtistProperties/Get_Album_ID");
  },
};
</script>
