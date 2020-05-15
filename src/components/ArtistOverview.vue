<template>
  <div class="ArtistOverview">
    <div class="col col-lg-12">
      <h1 class="title">Popular</h1>
      <song-component
        testid="songcomponent"
        v-for="(p, i) in artist_tracks"
        :key="p._id"
        :index="i"
        :song_id="p._id"
        :song_name="p.name"
        :song_length="p.duration"
        :albumId="p.albumId"
      />
    </div>
    <br />
    <div class="col col-lg-12">
      <h1 class="title" id="albumtitle">Albums</h1>
      <div class="row">
        <homecards
          v-for="album in artist_albums"
          :key="album._id"
          :albumId="album._id"
          :images="
            'http://52.205.254.29/api/images/' +
              album.images[0]._id +
              '?belongs_to=album'
          "
          :name="album.name"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ArtistOverview {
  min-width: 920px;
}
.title {
  font-size: 28px;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: -0.36px;
  color: #fff;
  margin: 7px;
  margin-top: 5px;
}
.row {
  margin: 7px;
}
</style>
<script>
import SongComponent from "@/components/SongComponent.vue";
import homecards from "@/components/ArtistHomeCards.vue";
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      artistid: ""
    };
  },
  name: "ArtistProfile",
  components: {
    SongComponent,
    homecards
  },
  computed: {
    ...mapGetters({
      artist_tracks: "ArtistPage/artist_tracks",
      artist_albums: "ArtistPage/artist_albums",
      tracks_length: "ArtistPage/tracks_length"
    })
  },
  created: function() {
    this.artistid = this.$route.params.artist_id;
    this.$store.dispatch(
      "ArtistPage/artist_tracks",
      this.$route.params.artist_id
    );
    this.$store.dispatch(
      "ArtistPage/artist_albums",
      this.$route.params.artist_id
    );
  },
  mounted() {
    this.artistid = this.$route.params.artist_id;
  }
};
</script>