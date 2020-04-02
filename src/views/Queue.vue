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
      v-if="currentSong"
      :song_id="currentSong._id"
      :index="1"
      :song_artists="currentSong.track.artists"
      :song_name="currentSong.track.name"
      :song_album="currentSong.albumName"
      :song_length="currentSong.track.length"
      :isLiked="currentSong.isLiked"
      :albumId="currentSong.track.albumId"
    />

    <h2 v-if="Queued.length">
      Next in Queue
    </h2>
    <!-- should be q.track._id -->
    <song-component
      v-for="(q, i) in Queued"
      :key="q._id"
      :index="i"
      :song_id="q._id"
      :song_artists="q.track.artists"
      :song_name="q.track.name"
      :song_album="q.albumName"
      :song_length="q.track.length"
      :isLiked="q.isLiked"
      :albumId="q.track.albumId"
    />

    <h2 v-if="NextUp.length">
      Next Up
    </h2>
    <!-- should be next.track._id -->
    <song-component
      v-for="(next, i) in NextUp"
      :key="next._id"
      :index="i"
      :song_id="next._id"
      :song_artists="next.track.artists"
      :song_name="next.track.name"
      :song_album="next.albumName"
      :song_length="next.track.length"
      :isLiked="next.isLiked"
      :albumId="next.track.albumId"
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

  beforeCreate() {
    this.$store.dispatch("mediaplayer/get_currentsong");
    this.$store.dispatch("Queue/Queue");
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
