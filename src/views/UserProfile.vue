<template>
  <div id="user">
      <div class="loading" v-if="!loading">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="loading" class="notloading">
      <div class="row justify-content-center img-user m-0">
        <img  :src="'http://52.205.254.29/api/images/'+ id + '?belongs_to=artist'"/>
        <h1>{{user.displayName}}</h1>
      </div>
        <div class="row m-0">
            <div 
             v-for="playlist in playlists"
              :key="playlist.id"
            >
          <lib-playlists
            v-if="playlist.isPublic"
            :images="'http://52.205.254.29/api/images/'+ id + '?belongs_to=artist'"
            :name="playlist.name"
            :ownerName="playlist.owner"
            :playlist_id="playlist.id"
          />
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  i {
    color: #fff;
    font-size: 70px;
    margin-top: 100px;
  }
}
#user{
    height: 100vh;
     background-image: linear-gradient(#333232 2%, #161516 98%);
     background-size: 100% 40%;
     background-repeat: no-repeat;
     padding: 1%;
}
img{
    width: 200px;
    height: 200px;
    border-radius: 200px;
}
h1{
font-size: 36px;
line-height: 44px;
letter-spacing: -.005em;
font-weight: 600;
color: #fff;
text-transform: none;
margin-top: 32px;
text-align: center;
width: 100%;
}
</style>

<script>
import LibPlaylists from "@/components/lib-playlists.vue";
import { mapGetters } from "vuex";
/**
 * Album page made by Artist and you can like and add it to your liked songs also it contains the artist name which will move you to the artist page where you can find more and more of songs you like
 * @displayName Album Page
 * @example [none]
 */
export default {
  name: "albumview",
  data: function() {
    return {
      userid: "",
      id:"5e9c9790fc69ad92e0a7eda5"
    };
  },
  props: {},
   components: {
    LibPlaylists,
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      user:"user/user",
      playlists: "user/playlists", // creat new object "playlists1" and map to it
      loading: "user/loading"
    })
  },
  /**
   * Called at loading the page to display album tracks and send the id to get that specific album
   * @public This is a public method
   */
  beforeCreate:function(){
       this.userid = this.$route.params.user_id;
       this.$store.dispatch("user/user_playlists",this.userid);
       this.$store.dispatch("user/user_info",this.userid);
  },
  mounted() {
   
  }
};
</script>

