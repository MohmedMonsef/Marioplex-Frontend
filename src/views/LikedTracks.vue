<template>
  <div>
    <div class="loading" v-if="!likedtracks_load">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="likedtracks_load" class="likedtracks">
      <div class="row" v-if="this.likedtracks_length != 0">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <LikedTracks testid="liketracks" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <song-component
            testid="songcomponent"
            v-for="p in likedtracks_tracks"
            :key="p._id"
            :song_id="p._id"
            :song_artists="p.artistName"
            :song_name="p.name"
            :song_album="p.albumName"
            :song_length="500"
            :playlistId="playlist_id"
            :isLiked="true"
            :isPlaylist="true"
          />
        </div>
      </div>
      <div class="row" v-else>
        <emptylikedtracks testid="emptylikedtracks" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  i {
    font-size: 70px;
    margin-top: 100px;
    color: white;
  }
}
.likedtracks {
  // min-width: 768px;
  min-height: 300px;
  background-image: linear-gradient(0deg, #161516, rgb(20, 1, 59));
}
.row {
  margin: 25px;
  margin-top: 0;
  display: flex;
}
</style>

<script>
import SongComponent from "@/components/SongComponent.vue";
import LikedTracks from "@/components/likedtracks_info.vue";
import emptylikedtracks from "@/components/emptylikedtracks.vue";
import { mapGetters } from "vuex";
/**
 * User's liked tracks page here is the place of all tracks liked by the user
 * @displayName User's Liked Tracks
 * @example [none]
 */
export default {
  name: "likedtracksview",
  props: {},
  components: {
    SongComponent,
    LikedTracks,
    emptylikedtracks
  },
  computed: {
    ...mapGetters({
      likedtracks_tracks: "likedtracks/likedtracks_tracks",
      likedtracks_length: "likedtracks/likedtracks_length",
      likedtracks_load: "likedtracks/likedtracks_loaded",
      playlist_id:"likedtracks/playlist_id"
    })
  },
  beforeCreate: function() {
    this.$store.dispatch("likedtracks/likedtracks_tracks");
  }
};
</script>
