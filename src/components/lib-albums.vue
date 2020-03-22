<template>
    <div class="card rounded col-lg-20% " testid="album card">
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
            <!-- <p
                class="card-text"
                id="carddescribtion"
                testid="artist name"
            > -->
            <!-- <p> -->
            <div>
            <router-link  class="artistlink" to="/HomeWebPlayer" testid="artist page link"> {{ artistname }}  </router-link>
            </div>
            <!-- </p> -->
            <router-link
                to="/"
                class="stretched-link"
                id="carglink"
                testid="album card link"
            ></router-link>
            <!-- should navigate to album page -->
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
/* p {
  font-size: 14px;
  color: gray;
} */
.artistlink{
  font-size: 14px;
  color: gray;
  
}
#carglink{
display: block;
/* position:fixed; */
}
</style>

<script>
export default {
    name: "lib-albums",
    props: ["images", "name", "artistname"]
}
</script>