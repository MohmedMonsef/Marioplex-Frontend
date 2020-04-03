<template>
    <div 
        class="card rounded col-lg-20% " 
        testid="artist card" 
        @mouseover="hover=true" @mouseleave="hover=false"
    >
        <img
            class="card-img-top mx-auto d-block rounded-circle"
            :src="images"
            alt="Card image"
            id="cardimg"
            testid="artist image"
            />
        <div class="card-body" id="cardbody" testid="artist card body">
            <h4 class="card-title" id="cardtitle" testid="artist name">
                {{ name }}
            </h4>
            <p
                class="card-text"
                id="carddescribtion"
            >
                 Artist
            </p>
            <i v-if="hover" class="fa fa-play-circle" testid="artist play icon"></i>
            <router-link
                to="/"
                class="stretched-link"
                id="carglink"
                testid="artist card link"
            ></router-link>
            <!-- should navigate to artist page -->
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
  font-size: 13px;
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
   data: function(){
    return{
     hover: false
    }
  },
    name: "lib-artists",
    props: ["images", "name","artistId"]
}
</script>