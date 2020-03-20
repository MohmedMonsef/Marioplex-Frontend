<template>
  <div class="card rounded col-lg-20% " testid="popularplaylist card">
    <img
      class="card-img-top mx-auto d-block"
      :src="image"
      alt="Card image"
      id="cardimg"
      testid="popularplaylist card image"
    />
    <div class="card-body" id="cardbody" testid="popularplaylist card body">
      <h4 class="card-title" id="cardtitle" testid="popularplaylist card title">
        {{ title }}
      </h4>
      <p
        class="card-text"
        id="carddescribtion"
        testid="popularplaylist card describtion"
      >
        {{ des }}
      </p>
      <router-link
        to="/"
        class="stretched-link"
        id="carglink"
        testid="popularplaylist card link"
      ></router-link>
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
/* #describtion{
     font-size: 16px;
     color: gray;
     margin-left: 30px; 
  } */
</style>

<script>
export default {
  name: "ShowPopularplaylists",
  props: ["image", "title", "des"]
};
</script>
