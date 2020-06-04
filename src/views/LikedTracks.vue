<template>
  <div>
    <div class="loading" v-if="!likedtracks_load">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="likedtracks_load" class="likedtracks">
      <div v-if="this.likedtracks_length != 0">
        <div>
          <LikedTracks class="left" testid="liketracks" />
        </div>
        <div class="right">
          <div class="right">
            <song-component
              testid="songcomponent"
              v-for="(p, i) in likedtracks_tracks"
              :key="p._id"
              :index="i"
              :song_id="p._id"
              :song_artists="p.artistName"
              :song_name="p.name"
              :song_album="p.albumName"
              :albumId="p.albumId"
              :song_length="500"
              :playlistId="playlist_id"
              :isLiked="true"
              :isPlaylist="true"
            />
          </div>
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
  min-height: 300px;
  background-image: linear-gradient(0deg, #161516, rgb(20, 1, 59));
  margin-top: -80px;
  padding-top: 80px;
}
.left {
  display: inline;
  position: absolute;
  width: 40%;
  left: 0;
}

.right {
  display: inline;
  position: absolute;
  width: 75%;
  right: 10px;
}
@media screen and (max-width: 1000px) {
  .left {
    display: block;
    width: 100%;
    position: relative;
  }

  .right {
    display: block;
    width: 100%;
    position: relative;
    right: 0;
  }
}
</style>

<script>
import SongComponent from "@/components/SongComponent.vue";
import LikedTracks from "@/components/LikedTracksInfo.vue";
import emptylikedtracks from "@/components/EmptyLikedTracks.vue";
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
    emptylikedtracks,
  },
  computed: {
    ...mapGetters({
      likedtracks_tracks: "LikedTracks/likedtracks_tracks",
      likedtracks_length: "LikedTracks/likedtracks_length",
      likedtracks_load: "LikedTracks/likedtracks_loaded",
      playlist_id: "LikedTracks/playlist_id",
    }),
  },
  beforeCreate: function() {
    this.$store.dispatch("LikedTracks/likedtracks_tracks");
  },
};
</script>
