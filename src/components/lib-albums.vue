<template>
<router-link  :to="{path:'../album/'+ album_id}" id="carglink"  testid="album card link">   <!-- should navigate to album page -->
    <div class="card rounded col-lg-20% " testid="album card" @mouseover="hover=true" @mouseleave="hover=false">
        <img
            class="card-img-top mx-auto d-block"
            :src="images"
            alt="Card image"
            id="cardimg"
            testid="album image"
            />
        <div class="card-body" id="cardbody" testid="album card body">
            <h4 class="card-title" id="cardtitle" testid="album name">
                {{ name }}
            </h4>
            <router-link  class="ard-link artistlink" to="/HomeWebPlayer" testid="artist page link"> {{ artistname }}  </router-link>
            <i v-if="hover" class="fa fa-play-circle"></i>
        </div>
    </div>
</router-link>
</template>

<style scoped>
.card {
  background: #313030;
  width: 200px;
  height: 270px;
  margin-left: 15px;
  margin-top: 15px;
   z-index: 0;
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
.artistlink{
  font-size: 14px;
  color: gray;
  display: inline;
  position:absolute;
}
#carglink{
display: block;
outline: none;
text-decoration: none;
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
  data: function(){
    return{
     hover: false
    }
  },
    name: "lib-albums",
    props: ["images", "name", "artistname","album_id"]
}
</script>