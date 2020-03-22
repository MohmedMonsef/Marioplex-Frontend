<template>
  <div id="main_queue">
    <h1>
      Play Queue
    </h1>
    <h2>
      Now Playing
    </h2>
     <!-- should be cs.track._id -->
    <song-component
       v-for="cs in currentSong"
      :key="cs._id"
      :song_id="cs._id"
      :song_artists="cs.track.artists"
      :song_name="cs.track.name"
      :song_album="cs.track.album"
      :song_length="cs.track.length"
      :isLiked="cs.isLiked"
      
    />
    
    <h2 v-if="Queued.length">
      Next in Queue
    </h2>
    <!-- should be q.track._id -->
    <song-component
      v-for="q in Queued"
      :key="q._id"
      :song_id="q._id" 
      :song_artists="q.track.artists"
      :song_name="q.track.name"
      :song_album="q.track.album"
      :song_length="q.track.length"
      :isLiked="q.isLiked"
    />

    <h2 v-if="NextUp.length">
      Next Up
    </h2>
    <!-- should be next.track._id -->
    <song-component
      v-for="next in NextUp"
      :key="next._id"
      :song_id="next._id"
      :song_artists="next.track.artists"
      :song_name="next.track.name"
      :song_album="next.track.album"
      :song_length="next.track.length"
      :isLiked="next.isLiked"
    />
  </div>
</template>

<style lang="scss" scoped>
#main_queue {
  max-width: 1955px;
  padding: 0px 32px;
  box-sizing: border-box;
  overflow: auto;
}
h1 {
  font-size: 28px;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: -0.36px;
  color: #fff;
  margin: 16px 0;
}
h2 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.015em;
  font-weight: var(--glue-font-weight-normal);
  color: #fff;
  margin: 16px 0;
}
</style>

<script>
import SongComponent from "@/components/SongComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "Queue",
  mounted(){
      this.$store.dispatch("Queue/Queue");
      this.$store.dispatch("mediaplayer/get_currentsong");
  },
  components: {
    SongComponent
  },
  computed: {
    ...mapGetters({
      currentSong: "mediaplayer/Get_Currentsong",
      NextUp: "Queue/Get_Nextup",
      Queued: "Queue/Get_Queued"
    })
  }
};
</script>
