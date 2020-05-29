<template>
  <div class="Artistnavbar">
    <ul class="nav">
      <li class="nav-item active">
        <div class="divOnFocus">
          <button
            testid="overview"
            id="overview"
            @click="
              (overview = true), (relatedartists = false), (about = false)
            "
          >
            Overview
          </button>
        </div>
      </li>
      <li class="nav-item">
        <div class="divOnFocus">
          <button
            testid="RelatedArtists"
            id="RelatedArtists"
            @click="
              (overview = false), (about = false), (relatedartists = true)
            "
          >
            RelatedArtists
          </button>
        </div>
      </li>
      <li class="nav-item">
        <div class="divOnFocus">
          <button
            testid="About"
            id="About"
            @click="
              (overview = false), (about = true), (relatedartists = false)
            "
          >
            About
          </button>
        </div>
      </li>
    </ul>
    <ArtistOverview v-if="overview" />
    <RelatedArtists v-if="relatedartists && !overview && !about" />
    <About v-if="about && !relatedartists && !overview" />
  </div>
</template>

<style lang="scss" scoped>
.Artistnavbar ul button {
  font-size: 14px;
  color: white;
  font-weight: bold;
  align-content: center;
  line-height: 13px;
  height: 100%;
  width: 100%;
  padding: 10px;
  position: relative;
  margin: 15px;
  background-color: transparent;
  border-color: transparent;
}
.home-navbar {
  width: 100%;
  //   height: 60px;
  top: 0%;
  z-index: 1;
  background: transparent;
}
.divOnFocus {
  border-radius: 3px;
  background: transparent;
  // margin-top: 15px;
  // margin: 7px;
}
.divOnFocus :focus {
  background: #333;
  display: block;
  border-radius: 4px;
}
button:focus {
  outline: 0 !important;
}
</style>

<script>
import ArtistOverview from "@/components/ArtistOverview.vue";
import RelatedArtists from "@/components/RelatedArtists.vue";
import About from "@/components/AboutArtist.vue";
export default {
  data: function() {
    return {
      overview: true,
      relatedartists: false,
      about: false,
    };
  },
  name: "Artistnavbar",
  components: {
    ArtistOverview,
    RelatedArtists,
    About,
  },
};
</script>
