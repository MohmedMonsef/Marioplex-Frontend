<template>
  <div>
    <div class="loading" v-if="!loading">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="loading" id="main_queue">
      <h1>
        Play Queue
      </h1>
      <h2>
        Now Playing
      </h2>
      <!-- should be cs.track._id -->
      <song-component
        v-if="currentSong"
        :song_id="currentSong.track._id"
        :index="1"
        :song_artists="currentSong.album.artist.name"
        :song_name="currentSong.track.name"
        :song_album="currentSong.album.name"
        :song_length="currentSong.track.duration"
        :isLiked="currentSong.isLiked"
        :albumId="currentSong.album._id"
        :artist_id="currentSong.album.artist._id"
      />

      <h2 v-if="Queued.length">
        Next in Queue
      </h2>
      <!-- should be q.track._id -->
      <song-component
        v-for="(q, i) in Queued"
        :key="i"
        :index="i"
        :song_id="q.fulltrack.track._id"
        :song_artists="q.fulltrack.album.artist.name"
        :song_name="q.fulltrack.track.name"
        :song_album="q.fulltrack.album.name"
        :song_length="q.fulltrack.track.duration"
        :isLiked="q.fulltrack.isLiked"
        :albumId="q.fulltrack.album._id"
        :artist_id="q.fulltrack.album.artist._id"
      />

      <h2 v-if="NextUp.length">
        Next Up
      </h2>
      <!-- should be next.track._id -->
      <song-component
        v-for="(next, i) in NextUp"
        :key="i"
        :index="i"
        :song_id="next.fulltrack.track._id"
        :song_artists="next.fulltrack.album.artist.name"
        :song_name="next.fulltrack.track.name"
        :song_album="next.fulltrack.album.name"
        :song_length="next.fulltrack.track.duration"
        :isLiked="next.fulltrack.isLiked"
        :albumId="next.fulltrack.album._id"
        :artist_id="next.fulltrack.album.artist._id"
      />
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
#main_queue {
  max-width: 1955px;
  padding: 0px 32px;
  overflow: auto;
  height: calc(100vh - 140px);
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
      loading: "Queue/loading",
      currentSong: "mediaplayer/Get_Currentsong",
      NextUp: "Queue/Get_Nextup",
      Queued: "Queue/Get_Queued"
    })
  }
};
</script>
