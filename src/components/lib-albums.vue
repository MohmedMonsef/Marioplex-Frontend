<template>
    <div class="card rounded col-lg-20% " testid="album card">
        <img
            class="card-img-top mx-auto d-block"
            :src="image"
            alt="Card image"
            id="cardimg"
            testid="album image"
            />
        <div class="card-body" id="cardbody" testid="album card body">
            <h4 class="card-title" id="cardtitle" testid="album name">
                {{ albumname }}
            </h4>
            <p
                class="card-text"
                id="carddescribtion"
                testid="artist name"
            >
                 {{ artistname }}
            </p>
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
    name: "lib-albums",
    props: ["image", "albumname", "artistname"]
}
</script>