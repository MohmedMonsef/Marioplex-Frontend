<template>
  <div class="search_contaner">
    <i class="fa fa-search hover"></i>
    <input
      testid="search-box"
      id="search-box"
      placeholder="Search for artist"
      v-model="Value"
      autocomplete="off"
      @keydown.esc="reset"
      v-on:input="check(Value), isinsearch"
    />
    <button
      type="button"
      class="close"
      aria-label="Close"
      v-if="Value.length !== 0"
      @click="reset"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
<style scoped>
*:focus {
  outline: none;
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
@media screen and (max-width: 900px) {
  #search-box {
    width: 50%;
  }
}
@media screen and (max-width: 300px) {
  #search-box {
    width: 25%;
  }
}
@media screen and (max-width: 100px) {
  #search-box {
    width: 10%;
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
import { mapGetters } from "vuex";
//let insearch = insearch;
export default {
  name: "searchcomponent",
  data() {
    return { Value: "" };
  },
  methods: {
    check(value) {
      console.log(value);
      this.$store.dispatch("Search/search_V", this.Value);
      if (value !== "") {
        this.$store.dispatch("Search/searchaboutartist", this.Value);
      }
    },
    reset() {
      this.Value = "";
      this.$store.dispatch("Search/search_V", this.Value);
    },
    isinsearch() {
      if (insearch) {
        this.Value = "";
      }
    }
  },
  computed: {
    ...mapGetters({
      insearch: "Search/insearch",
      searchfocus: "Search/searchfocus"
    })
  },
  props: ["search_value"]
};
</script>
