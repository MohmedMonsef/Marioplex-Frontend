<template>
  <body>
    <span class="black_body">
      <div class="black_body">
        <ArtistHeader></ArtistHeader>
        <div class="coverphoto">
          <img class="c_photo" src="../assets/black_ground.png" />
        </div>
        <EditBio v-if="show" />
        <UploadSong v-if="showupload"></UploadSong>
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
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
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
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side hello from the other side
            hello from the other side hello from the other side hello from the
            other side hello from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side from the other side hello from the other side hello
            from the other side hello from the other side hello from the other
            side hello from the other side hello from the other side hello from
            the other side hello from the other side
          </p>
          <button class="c_track" @click="changeModalStateUpload()">
            Create Track
          </button>
          <button class="c_album">Create Album</button>
        </div>

        <!--<DeleteSong></DeleteSong>-->
      </div>
    </span>
  </body>
</template>
<style scoped>
.black_body {
  background-color: black;
}

body {
  height: 1100px;
  /* width:1560px; */
  background-color: black;
}
div {
  background-color: black;
}
svg {
  font-size: 5px;
  position: absolute;
  top: 60%;
  left: 70%;
  background-color: black;
}
.bioheader {
  position: absolute;
  top: 50%;
  color: #fff;
  background-color: black;
  width: 100%;
}
.artistbio {
  min-width: 70%;
  max-width: 70%;
  max-height: 500px;
  position: absolute;
  top: 70%;
  overflow-y: scroll;
  background-color: black;
  color: #fff;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.c_track {
  position: absolute;
  top: 70%;
  left: 80%;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 50px;
  width: 220px;
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
.c_album {
  position: absolute;
  top: 60%;
  left: 80%;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  height: 50px;
  width: 220px;
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
.coverphoto {
  position: absolute;
  top: 0%;
  /* The image used */
  background-image: url("../assets/black_ground.png");

  /* Full height */
  height: 50%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.c_photo {
  height: 50%;
  width: 100%;
}
/* .svg-container{
 
  position:absolute;
   top:65%;
    left:75%;
    background-color: black;
} */
</style>
<script>
//import { mapGetters } from "vuex";
import { mapState } from "vuex";
import UploadSong from "../components/UploadSong";
//import DeleteSong from "../components/DeleteSong";
import ArtistHeader from "../components/ArtistHeader";
import EditBio from "../components/EditBio";
/**
 * Artist personal page to upload or delete songs or even edit artist bio and photo
 * @displayName Artist Personal Page
 * @example [none]
 */
export default {
  name: "ArtistPersonalPage",
  data: function() {
    return {};
  },
  components: {
    UploadSong,
    // DeleteSong,
    ArtistHeader,
    EditBio
  },
  computed: {
    ...mapState({
      show: state => state.artistproperties.showModal,
      showupload: state => state.artistproperties.showModalUpload
    })
  },
  methods: {
    /**
     * toggle appearance of modal popup
     * @public This is a public method
     */
    changeModalState() {
      this.$store.dispatch("artistproperties/toggleModal");
    },
    /**
     * toggle upload state of song
     * @public This is a public method
     */
    changeModalStateUpload() {
      this.$store.dispatch("artistproperties/toggleModalUpload");
    }
  }
};
</script>
