<template>
  <div
    class="card rounded col-lg-20% "
    testid="popularreleases card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <img
      class="card-img-top mx-auto d-block"
      :src="images"
      alt="Card image"
      id="cardimg"
      testid="popularreleases card image"
    />
    <div class="card-body" id="cardbody" testid="popularreleases card body">
      <h4 class="card-title" id="cardtitle" testid="popularreleases card title">
        {{ name }}
      </h4>
      <p
        class="card-text"
        id="carddescribtion"
        testid="popularreleases card describtion"
      >
       {{ artistname}}
      </p>
       <button v-if="hover" class="play-button" testid="play-button">
            <i class="fa fa-play"></i>
            <!-- <i class="fa fa-pause" id="pauseicone"></i> -->
        </button>
      <router-link
        :to="{path:'/HomeWebPlayer/album/'+ albumId}"
        class="stretched-link"
        id="carglink"
        testid="popularreleases card link"
      ></router-link>
      <!-- should navigate to releases  page -->
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
  position: absolute;
}
i {
  color: white;
  font-size: 14px;
 position: absolute;
}
#pauseicone{
  color: white;
  font-size: 12px;
 position: absolute;
 margin-top: 1px;
}
.play-button{
   margin-left: 127px;
  margin-bottom: 20px;
  background-color: #1db954;
  position: relative;
  font-size: 40px;
   border-radius: 50%;
    width: 40px;
    height: 40px;
    border: none;
    padding-bottom: 15px;
    padding-right: 15px;
}
</style>

<script>
export default {
  data: function() {
    return {
      hover: false
    };
  },
  name: "ShowPopularalbums",
  props: ["images", "name","artistname","albumId"]
};
</script>