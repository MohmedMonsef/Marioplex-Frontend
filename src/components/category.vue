<template>
  <div class="card rounded col-lg-20%">
    <img
      class="card-img-top mx-auto d-block"
      src="http://dummyimage.com/250x400.jpg/dddddd/000000"
      alt="Card image"
      id="cardimg"
    />
    <div class="card-img-overlay">
      <h4 class="card-title" id="categoryname">{{ name }}</h4>
      <div @click="setcategoryname">
        <router-link
          :to="{ path: '/HomeWebPlayer/category/' + categoryId + '/' + name }"
          class="stretched-link"
          id="carglink"
          testid="cardlink"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.round {
  border-radius: 10px;
  background-color: rgb(110, 106, 106);
}
.card {
  background: #31303009;
  width: 180px;
  height: 200px;
  margin-left: 15px;
  margin-right: 20px;
  margin-top: 18px;
  border-radius: 100px;
}
#cardimg {
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
}
h4 {
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
}
</style>

<script>
/**
 * Category Card
 * @displayName Category
 * @example [none]
 */
export default {
  name: "category",
  props: {
    image: {
      type: String
    },
    name: {
      type: String
    },
    categoryId: {
      type: String
    }
  },
  methods: {
    setcategoryname() {
      console.log(document.getElementById("categoryname"));
      this.$store.dispatch(
        "Categorys/categoryname",
        document.getElementById("categoryname").innerHTML
      );
    }
  }
};
</script>
