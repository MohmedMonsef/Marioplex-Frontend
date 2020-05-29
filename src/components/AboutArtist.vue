<template>
  <div class="biography">
    <h2 class="biotitle">Biography</h2>
    <p>
      {{ about }}
    </p>
    <div class="barchart">
      <ArtistChart />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.biography {
  margin: 25px;
}
.biotitle {
  color: white;
}
p {
  color: #b3b3b3;
  margin-top: 20px;
}
.barchart {
  margin: 25px;
}
</style>

<script>
import { mapGetters } from "vuex";
import ArtistChart from "@/components/ArtistChart.vue";
export default {
  name: "aboutartist",
  components: {
    ArtistChart,
  },
  computed: {
    ...mapGetters({
      about: "ArtistPage/artist_bio",
    }),
  },
};
</script>
