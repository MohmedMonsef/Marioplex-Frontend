<template>
  <div class="contaner">
    <div class="card-img-top mx-auto d-block col-lg-30%">
      <h4 class="card-title" id="cardtitle" testid="card title">{{name}}</h4>
      <img :src="image" alt="Card image" id="cardimg" testid="popularplaylist image" />
      <div class="card-body" id="cardbody" testid="popularplaylist card body">
        <router-link
          to="link"
          class="stretched-link"
          id="carglink"
          testid="popularplaylist card link"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contaner {
  height: 100vh;
}

.card {
  background: #313030;
  width: 200px;
  height: 270px;
  margin-left: 15px;
  margin-top: 15px;
}
#cardimg {
  width: 158px;
  height: 160px;
  margin-top: 20px;
}
h4 {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
}
p {
  font-size: 14px;
  color: gray;
}
</style>

<script>
export default {
  name: "category",
  props: ["image", "name", "link", "playlists"]
};
</script>