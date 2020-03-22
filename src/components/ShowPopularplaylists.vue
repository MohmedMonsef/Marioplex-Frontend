<template>
  <div class="card rounded col-lg-20% " testid="popularplaylist card" @mouseover="hover=true" @mouseleave="hover=false">
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
      <i v-if="hover" class="fa fa-play-circle"></i>
      <router-link
        to="/"
        class="stretched-link"
        id="carglink"
        testid="popularplaylist card link"
      ></router-link>                         
      <!-- should navigate to playlist page -->
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
  position:absolute;
}
i{
  margin-left: 130px;
  margin-bottom: 20px;
  color: #1db954;
  position: relative;
  font-size: 40px;
}
</style>

<script>
export default {
  name: "ShowPopularplaylists",
  props: ["image", "title", "des"]
};
</script>
