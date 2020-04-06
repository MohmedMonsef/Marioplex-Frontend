<template>
  <span>
    <div>
      <UploadSong></UploadSong>
      <DeleteSong></DeleteSong>
    </div>
  </span>
</template>
<style scoped></style>
<script>
import UploadSong from "../components/UploadSong";
import DeleteSong from "../components/DeleteSong";
export default {
  name: "ArtistPersonalPage",
  components: {
    UploadSong,
    DeleteSong
  }
};
</script>
