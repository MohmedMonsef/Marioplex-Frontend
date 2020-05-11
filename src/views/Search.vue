<template>
  <div class="cont">
    <searchcomponent></searchcomponent>
    <div>
      <router-view></router-view>
    </div>
    <div class="loading" v-if="!loadingcategory && search_value === ''">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="loadingcategory">
      <div class="contaner" v-if="search_value === ''">
        <div class="all scroll">
          <h2 v-if="categorys.length">Browse All</h2>
          <div class="row">
            <category
              class="col-lg-10% col-md-60% col-xs-6"
              v-for="category in categorys"
              :key="category.id"
              :name="category.name"
              :categoryId="category._id"
            />
            <!-- <category
              class="col-lg-10% col-md-60% col-xs-6"
              v-for="category in categorys"
              :key="category.id"
              :image="category.images"
              :name="category.name"
              :categoryId="category._id"
              />-->
          </div>
        </div>
      </div>
    </div>

    <div class="loading" v-if="!loadingsearch && search_value !== ''">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="showresl == 'h' && search_value !== ''">
      <searchresults />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.last {
  margin-bottom: 200px;
}
.img-card {
  width: 100%;
  height: 80px;
}
.card-top {
  background-color: #313030;
  padding: 20px;
  height: 250px;
}
*:focus {
  outline: none;
}
.cont {
  margin-left: 30px;
  margin-bottom: 25px;
  width: 100%;
  height: 100vh;
}
.scroll {
  width: 2000;
  height: 100%;
  overflow-x: visible;
  overflow-y: scroll;
}
.all {
  width: 100%;
}
::-webkit-scrollbar {
  width: 40px;
  background-color: rgba(0, 0, 0, 0.76);
}
::-webkit-scrollbar-button:vertical:increment {
  height: 40px;
  background-image: url(/Images/Scrollbar/decrement.png);
  background-size: 39px 30px;
  background-repeat: no-repeat;
}
::-webkit-scrollbar-button:vertical:decrement {
  height: 40px;
  background-image: url(/Images/Scrollbar/increment.png);
  background-size: 39px 30px;
  background-repeat: no-repeat;
}
.margin {
  margin: 20px;
}
.row {
  margin-bottom: 15px;
  width: 95%;
}
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  float: left;
}
.container {
  margin-left: 15px;
  // height: 100vh;
  width: 100%;
}
.loading {
  display: flex;
  justify-content: center;
  i {
    color: #fff;
    font-size: 70px;
    margin-top: 100px;
  }
}
</style>

<script>
import category from "@/components/Category.vue";
import searchcomponent from "@/components/SearchComponent.vue";
import searchresults from "@/views/SearchResults";
import { mapGetters, mapState } from "vuex";
/**
 * Search Page is the place where you can search for certain playlist , album , artist or even certain category
 * @displayName Search Page
 * @example [none]
 */
export default {
  name: "Search",
  components: {
    category,
    searchcomponent,
    searchresults,
  },
  mounted() {
    this.$store.dispatch("Categorys/showcategory");
  },
  methods: {
    /**
     * This function is for seeall as part of search results will be hidden unless seeall button is pressed
     * @public This is a public method
     */
    // change() {
    //   this.showr = false;
    // }
  },
  computed: {
    ...mapGetters({
      categorys: "Categorys/getcategory",
      loadingcategory: "Categorys/loading",
      loadingsearch: "Search/loadingsearch",
      search_value: "Search/get_value",
      showresl: "Search/showeres",
    }),
    ...mapState({
      show: (state) => state.Playlist.showModal,
      inartist: (state) => state.Search.in,
    }),
  },
};
</script>
