<template>
  <div class="card rounded col-lg-20%" testid="card">
    <img
      class="card-img-top mx-auto d-block"
      :src="image"
      alt="Card image"
      id="cardimg"
      testid="cardimage"
    />
    <div class="card-body" id="cardbody">
      <h4 class="card-title" id="cardtitle">{{ name }}</h4>
      <p class="card-text" id="carddescribtion">{{ type }}</p>
      <router-link :to="link" class="stretched-link" id="carglink"></router-link>
    </div>
  </div>
</template>

<style scoped>
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
  border-radius: 80px;
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
  name: "artist",
  props: ["image", "name", "link", "type"]
};
</script>
