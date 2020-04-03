<template>
  <div>
    <h2 style="margin-bottom:15px;">TopResult</h2>
    <div class="card mb-4 card-top" style="max-width: 400px;max-height: 250px; ">
      <div class="row no-gutters">
        <div>
          <img
            :src="image"
            class="col-md-4 img-card"
            alt="..."
            style="max-width: 50%;max-height: 80px; margin-bottom:15px;"
          />
          <h2 class="card-title">{{name}}</h2>
          <p class="card-text p">{{type}}</p>
        </div>
      </div>
      <router-link to="/" class="stretched-link" id="carglink" testid="cardlink"></router-link>
    </div>
  </div>
</template>
<style scoped>
.card-top {
  background-color: #313030;
  padding: 20px;
  height: 250px;
}
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 1px;
}
.p {
  color: white;
}
</style>
<script>
export default {
  name: "top",
  props: [
    "image",
    "name",
    "type",
    "artistId",
    "artistName",
    "albumId",
    "playlist_id",
    "track_id",
    "ownerId",
    "ownerName",
    "Id"
  ]
};
</script> 


