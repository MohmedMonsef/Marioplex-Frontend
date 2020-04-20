<template>
  <div class="cont">
    <div style="height:300px;">
        <h1>{{playlists[0].category_name}}</h1>
    </div>
    <div v-if="playlists.length">
      <div class="row">
        <div class="col-lg-4">
          <h3 v-if="playlists.length < 5">Popular playlists</h3>
          <router-link
            v-if="playlists.length >= 5"
            class="ard-link playlistlink"
            to="/HomeWebPlayer/category/:categoryId/seeallcategoryplaylists"
            testid="seeallplaylist"
          >Popular playlists</router-link>
        </div>
        <div class="col-lg-8">
          <router-link
            v-if="playlists.length >= 5"
            class="ard-link seelink"
            to="/HomeWebPlayer/category/:categoryId/seeallcategoryplaylists"
            testid="seeallplaylist"
          >SeeAll</router-link>
        </div>
      </div>
      <div style="z-index: 1; width:100%; background-color:#161516;height:400px; " >
      <div class="row">
        <LibPlaylists
          v-for="playlist in playlists"
          :key="playlist.id"
          :images="playlist.images"
          :name="playlist.name"
          :ownerName="playlist.ownerName"
          :ownerId="playlist.ownerId"
          :playlist_id="playlist._id"
        />
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h2{
  color:white;
}
h1 {
    color: white;
    font-size: 150px;
    margin-left: 6%;
}
.cont {
  background-image: linear-gradient(
    to bottom left,
     rgb(49, 49, 87),
    #161516   
  );
  width: 100%;
  height: 100vh;
  z-index: 0;
}
.row {
  margin-left: 5%;
  margin-bottom: 15px;
  width: 95%;
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
import LibPlaylists from "@/components/lib-playlists.vue";
import { mapGetters } from "vuex";
export default {
  name: "category",
  components: {
    LibPlaylists
  },
  computed: {
    ...mapGetters({
      playlists: "categorys/getcategoryplaylists5"
    })
  }
  //     created: function() {
  //     this.$store.dispatch(
  //       "categorys/categoryplaylists",
  //       this.$route.params.categoryId
  //     )
  //   }
};
</script>