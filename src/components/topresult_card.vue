<template>
  <div class="col-Xs-4">
    <h2 style="margin-bottom:15px;">TopResult</h2>
    <div
      class="card rounded col-lg-60%"
      testid="top card"
      @mouseover="hover=true"
      @mouseleave="hover=false"
      style="max-width: 400px;max-height: 250px;"
    >
      <div>
        <img
          v-if="type=='truk'"
          :src="image"
          class="col-md-4 img-card rounded-circle"
          alt="..."
          style="max-width: 40%;max-height: 200px; display:block; margin-left:0; margin-bottom:15px;"
        />
        <img
          v-if="type=='Artist'"
          :src="image"
          class="col-md-4 img-card"
          alt="..."
          style="max-width: 40%;max-height: 100px; display:block; margin-left:0; margin-bottom:15px;"
        />
        <h2 class="card-title">{{name}}</h2>
        <div>
          <div class="typecont">
            <p class="card-text p col-xs-4">{{type}}</p>
          </div>
          <div class="col-xs-4 play">
            <router-link to="/" class="stretched-link" id="carglink" testid="cardlink"></router-link>
            <i v-if="hover" class="fa fa-play-circle" testid="topplay icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.play {
  margin-right:5px;
  margin-bottom: 200px;
}
.card-title {
  margin-left: 10px;
  margin-bottom: 10px;
}
.card-top {
  background-color: #313030;
  padding: 20px;
  height: 250px;
}
.card {
  display: block;
  background: #313030;
  width: 400px;
  height: 270px;
  margin-top: 15px;
  z-index: 0;
  padding: 20px;
  margin-bottom: 9px;
}
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
}
.p {
  margin-left: 15px;
  color: white;
  margin-bottom: 15px;
}
i {
  margin-left: 200px;
  margin-bottom: 150px;
  color: #1db954;
  position: relative;
  font-size: 50px;
}
.typecont {
  background-color: rgb(41, 32, 32);
  border-radius: 15px;
  width: 25%;
}
</style>
<script>
export default {
  name: "top",
  data: function() {
    return {
      hover: false
    };
  },
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


