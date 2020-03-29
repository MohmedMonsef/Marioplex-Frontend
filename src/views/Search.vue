<template>
  <div class="cont">
    <div class="search_contaner">
      <i class="fa fa-search hover"></i>
      <input
        testid="search-box"
        id="search-box"
        placeholder="Search for artist"
        v-model="Value"
        autocomplete="off"
        @keydown.esc="reset"
        v-on:input="changeininput"
      />
      <button type="button" class="close" aria-label="Close" v-if="Value.length!==0" @click="reset">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="contaner" v-if="Value.length==0">
      <div class="all scroll">
        <h2 v-if="categorys.length">Browse All</h2>
        <div class="row">
          <category
            class="col-lg-10% col-md-60% col-xs-6"
            v-for="category in categorys"
            :key="category.id"
            :image="category.image"
            :name="category.name"
            :link="category.href"
            :playlists="category.playlist"
          />
        </div>
      </div>
    </div>
    <div v-if="Value.length!==0">
      <h2>TopResult</h2>
      <div class="card mb-4 card-top" style="max-width: 400px;">
        <div class="row no-gutters">
          <div>
            <img src="../assets/cry.png" class="col-md-4 img-card" alt="..." />
            <h2 class="card-title">Card title</h2>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted"></small>
            </p>
          </div>
        </div>
        <router-link to="/" class="stretched-link" id="carglink" testid="cardlink"></router-link>
      </div>
      <div class="all scroll">
        <h2>Artist</h2>
        <div class="row">
          <artist
            class="col-lg-10% col-md-60% col-xs-6"
            v-for="match_artist in match_artists"
            :key="match_artist.id"
            :image="match_artist.image"
            :name="match_artist.name"
            :link="match_artist.href"
            :type="match_artist.type"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  margin-left: 15px;
  width: 100%;
  height: 100vh;
}
.scroll {
  width: 2000px;
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
  margin-left: 30px;
}
.container {
  margin-left: 15px;
  height: 100vh;
  width: 100%;
}
#search-box {
  width: 80%;
  height: 100%;
  border: rgba(0, 0, 0, 0.041);
  cursor: text;
  border-radius: 17px;
  font-family: sans-serif;
  font-size: large;
  color: black;
  font-weight: 500;
}
@media screen and (max-width: 600px) {
  #search-box {
    width: 70%;
  }
}

.search_contaner {
  padding-left: 15px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 30%;
  height: 40px;
  margin-left: 10%;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 17px;
  background-color: white;
  color: rgb(26, 24, 9);
}
</style>

<script>
import category from "@/components/category.vue";
import artist from "@/components/artist.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Search",
  components: {
    category,
    artist
  },
  data() {
    return { Value: "" };
  },
  methods: {
    check(value) {
      if (value !== "") {
        console.log(value);
      }
    },
    reset() {
      this.Value = "";
    },
    changeininput() {
      this.$store.dispatch("Search/searchaboutartist", this.Value);
    }
  },
  mounted() {
    this.$store.dispatch("categorys/showcategory");
  },
  computed: {
    ...mapGetters({
      categorys: "categorys/getcategory",
      match_artists: "Search/getresult"
    }),
    ...mapState({
      show: state => state.creatplaylist.showModal
    })
  }
};
</script>
