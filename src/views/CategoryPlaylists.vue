<template>
  <div class="cont">
    <div style="height: 300px;">
      <h1>{{ this.$route.params.name }}</h1>
    </div>
    <div v-if="playlists.length">
      <div class="row">
        <div class="col-lg-4">
          <h2 v-if="playlists.length < 5">Popular playlists</h2>
          <router-link
            v-if="playlists.length >= 5"
            class="ard-link playlistlink"
            to="/HomeWebPlayer/category/:categoryId/:name/seeallcategoryplaylists"
            testid="seeallplaylist"
            >Popular playlists</router-link
          >
        </div>
        <div class="col-lg-8">
          <router-link
            v-if="playlists.length >= 5"
            class="ard-link seelink"
            to="/HomeWebPlayer/category/:categoryId/:name/seeallcategoryplaylists"
            testid="seeallplaylist"
            >SeeAll</router-link
          >
        </div>
      </div>
      <div class="row" id="playlistcont">
        <LibPlaylists
          v-for="playlist in playlists"
          :key="playlist.id"
          :images="$url+
            '/api/images/' +
            playlist.images[0]._id +
            '?belongs_to=playlist'
          "
          :name="playlist.name"
          :ownerName="playlist.ownerName"
          :ownerId="playlist.ownerId"
          :playlist_id="playlist._id"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
h2 {
  color: white;
}
h1 {
  color: white;
  font-size: 150px;
  margin-left: 6%;
}
.cont {
  background-image: linear-gradient(0deg, #161516, rgb(20, 1, 59));
  width: 100%;
  height: 100vh;
}
.row {
  margin-left: 5%;
  width: 95%;
}
#playlistcont {
  margin-bottom: 100px;
}
.seelink {
  font-size: 30px;
  color: white;
  display: inline;
  margin-left: 70%;
}
.playlistlink {
  font-size: 30px;
  color: white;
  display: inline;
}
</style>
<script>
import LibPlaylists from "@/components/LibPlaylists.vue";
import { mapGetters } from "vuex";
export default {
  name: "category",
  components: {
    LibPlaylists,
  },
  computed: {
    ...mapGetters({
      playlists: "Categorys/getcategoryplaylists5",
      category_name: "Categorys/getcategory_name",
    }),
  },
  created: function () {
    this.$store.dispatch(
      "Categorys/categoryplaylists",
      this.$route.params.categoryId
    );
  },
};
</script>
