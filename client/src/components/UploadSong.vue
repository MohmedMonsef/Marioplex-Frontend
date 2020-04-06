<template>
  <span>
    <div>
      <h4>Choose Song</h4>
      <input type="file" name="file" ref="file" @change="OnFileSelected()" />
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

      <button @click="OnUpload()">Upload</button>
    </div>
  </span>
</template>
<style scoped></style>
<script>
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
  methods: {
    OnFileSelected() {
      this.selectedfile = event.target.files[0];

      console.log(this.selectedfile, "nori");
    },
    OnFilePreviewSelected() {
      this.selectedpreview = event.target.files[0];
      console.log(this.selectedpreview, "nori");
    },
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
