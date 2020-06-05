<template>
  <div class="search_contaner" id="search_contaner">
    <i class="fa fa-search hover"></i>
    <input
      testid="search-box"
      id="search-box"
      placeholder="Search for artist or album"
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
      <span aria-hidden="true" style="font-size: 25px;">&times;</span>
    </button>
    <button type="button" id="voicesearchingbutton" @click="detectvoice()">
      <i class="fa fa-microphone" id="microphone"></i>
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
    width: 80%;
  }
  #search_contaner {
    width: 50%;
  }
}
@media screen and (max-width: 300px) {
  #search_contaner {
    width: 30%;
  }
}
@media screen and (max-width: 650px) {
  #search_contaner {
    width: 80%;
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
#voicesearchingbutton {
  background: transparent;
  border: transparent;
}
#microphone {
  font-size: 18px;
}
</style>

<script>
import { default as voice_Recognition } from "../javascript/voiceSearching.js";
import { mapGetters } from "vuex";
/**
 * Search bar where user writes a word to search
 * @displayName Search Bar
 * @example [none]
 */
export default {
  name: "searchcomponent",
  data() {
    return { Value: "", awaitingSearch: false };
  },
  mixins: [voice_Recognition],
  watch: {
    Value: function() {
      if (!this.awaitingSearch) {
        setTimeout(() => {
          this.$store.dispatch("Search/searchaboutartist", this.Value);
          this.awaitingSearch = false;
        }, 2000); // 2 sec delay
      }
      this.awaitingSearch = true;
      this.$store.dispatch("Search/clear");
    },
  },
  methods: {
    check(value) {
      /**
       * triggers search request
       * @displayName Search
       * @public This is a public method
       */
      //console.log(value);
      console.log(value, "in component");
      this.$store.dispatch("Search/search_V", this.Value);
      if (value !== "") {
        //  this.$store.dispatch("Search/searchaboutartist",this.Value);
        this.$store.dispatch("Search/should", "yes");
      } else {
        this.$store.dispatch("Search/should", "no");
        this.$router.currentRoute.path == "/HomeWebPlayer/search";
      }
    },
    /**
     * Exiting this search
     * @public This is a public method
     */
    reset() {
      this.Value = "";
      this.$store.dispatch("Search/search_V", this.Value);
    },
    isinsearch() {
      if (this.insearch) {
        this.Value = "";
      }
    },
    focus() {
      if (this.Value !== "") {
        // this.$store.dispatch("Search/searchaboutartist",this.Value);
      }

      this.$store.dispatch("Search/searchfocus", true);
      if (this.$router.currentRoute.path !== "/HomeWebPlayer/search") {
        this.$store.dispatch("Search/showresult", "h");
        this.$router.go(-1);
        //      this.$store.dispatch("Search/actshower",true);
      }
    },
    leave() {
      if (this.Value !== "") {
        //  this.$store.dispatch("Search/searchaboutartist",this.Value);
      }
      this.$store.dispatch("Search/searchfocus", false);
    },
    // ,
    // /**
    //  * When confirm search reset
    //  * @public This is a public method
    //  */
    // isinsearch() {
    //   if (insearch) {
    //     this.Value = "";
    //   }
    // }
  },
  computed: {
    ...mapGetters({
      insearch: "Search/insearch",
      searchfocus: "Search/searchfocus",
    }),
  },
  props: {
    search_value: {
      type: String,
    },
  },
  mounted() {
    const searchinput = document.getElementById("search-box");
    searchinput.addEventListener("focus", this.focus, true);
    searchinput.addEventListener("blur", this.leave, true);
  },
};
</script>
