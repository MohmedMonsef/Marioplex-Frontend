<template>
  <div class="card rounded col-lg-20%" id="albumcard" testid="album card">
    <div class="hoveralbumimage">
      <router-link
        :to="{ path: '../album/' + albumId }"
        id="cardlink"
        testid="album card link"
      >
        <img
          class="card-img-top mx-auto d-block"
          :src="images"
          alt="Card image"
          id="cardimg"
          testid="album image"
        />
      </router-link>
    </div>
    <div class="card-body" id="cardbody" testid="album card body">
      <h4 class="card-title" id="cardtitle" testid="album name">
        {{ name }}
      </h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: #161516;
  border: transparent;
  width: 190px;
  height: 275px;
  margin-right: 15px;
  margin-top: 15px;
  z-index: 0;
}
i {
  color: white;
  font-size: 14px;
  position: absolute;
}
#cardimg {
  width: 190px;
  height: 190px;
  margin-top: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#cardimg:active {
  transform: scale(1.06);
}
.hoveralbumimage {
  position: relative;
  text-align: center;
  align-content: center;
  display: flex;
  justify-content: center;
}
#cardimg:hover {
  opacity: 0.3;
}
h4 {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
}
#cardlink {
  display: block;
  outline: none;
  text-decoration: none;
}
#cardbody {
  align-content: center;
  text-align: center;
}
</style>

<script>
/**
 * Displays Albums of certain artist
 * @displayName Artist Albums
 * @example [none]
 */
export default {
  name: "Artisthomecards",
  props: {
    name: {
      type: String
    },
    albumId: {
      type: String
    },
    images: {
      type: String
    }
  }
};
</script>