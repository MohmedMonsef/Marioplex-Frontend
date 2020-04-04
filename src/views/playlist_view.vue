<template>
    <div class="playlist"> 
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <playlist v-if="this.playlist_length == 0"/>
          <playlistinfo v-else/>
         </div> 
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
      <emptytracks v-if="this.playlist_length == 0"/>
     <song-component v-else
      v-for="p in playlist_tracks"
      :key="p.trackid"
      :song_id="p.trackid"
      :song_artists="p.artistName"
      :song_name="p.name"
      :song_album="p.albumName"
      :song_length="'3:45'"
      :isLiked="true"
    />
        </div>
</div>
</div>
</template>

<style lang="scss" scoped>
.playlist{
    // min-width: 768px;
    min-height: 600px;
    background-image: linear-gradient(0deg, #161516, rgb(66, 64, 64));
}
.row{
    margin: 25px;
    margin-top: 0; 
    display: flex;
    
}
// @media screen and (max-width: 1196px) {
//  .row{
// flex-direction: column;
//  }
// .col{
//   flex: 50%;
// }
// }
</style>

<script>
import SongComponent from "@/components/SongComponent.vue";
import emptytracks from "@/components/emptytracks.vue";
import playlist from "@/components/playlist.vue";
import playlistinfo from "@/components/playlist_info.vue";
import { mapGetters } from "vuex";
export default {
name: "playlistview",
    props: {
    isLiked: {
      type: Boolean
    },
    },
    components: {
    SongComponent,
    playlist,
    emptytracks,
    playlistinfo
  },
    computed: {
    ...mapGetters({
      playlist_tracks: "playlist/playlist_tracks",
      playlist_length: "playlist/playlist_length",
      playlist_load: "playlist/playlist_loaded",
    })
  },
  created: function() {   
   this.$store.dispatch("playlist/playlist_tracks" , this.$route.params.playlist_id),
   console.log("Playlist_id" , this.$route.params.playlist_id)
   console.log("nihal here is the length" , this.playlist_length)
     }
  }
</script>>