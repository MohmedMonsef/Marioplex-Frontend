<template>
  <div class="card rounded col-lg-20%">
    <img class="card-img-top mx-auto d-block" :src="image" alt="Card image" id="cardimg" />
    <div class="card-img-overlay">
      <h4 class="card-title">{{name}}</h4>
      <router-link :to="link" class="stretched-link" id="carglink" testid="cardlink"></router-link>
    </div>
  </div>
</template>

<style scoped>
.round {
  border-radius: 10px;
  background-color: rgb(110, 106, 106);
}
.card {
  background: #31303009;
  width: 180px;
  height: 200px;
  margin-left: 15px;
  margin-right: 20px;
  margin-top: 18px;
  border-radius: 100px;
}
#cardimg {
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
}
h4 {
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
}
</style>

<script>
export default {
  name: "category",
  props: ["image", "name", "link", "playlists"]
};
</script>
