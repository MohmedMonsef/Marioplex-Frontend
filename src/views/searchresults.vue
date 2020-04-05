<template>
<div>
    <div class="loading" v-if="!loadingsearch&&search_value!==''">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="loadingsearch">
      <div v-if="search_value.length!==0" class="cont last">
        <!--search results-->
        <div v-if="match_top.length">
          <div v-if="match_top[0].type==='Artist'">
            <top
              v-for="match_to in match_top"
              :key="match_to.id"
              :image="match_to.images"
              :name="match_to.name"
              :type="match_to.type"
              :artistId="match_to._id"
            ></top>
          </div>
          <div v-if="match_top[0].type==='album'">
            <top
              v-for="match_to in match_top"
              :key="match_to.id"
              :image="match_to.images"
              :name="match_to.name"
              :artistId="match_to.artistId"
              :artistName="match_to.artistName"
              :albumId="match_to._id"
              :type="match_to.type"
            ></top>
          </div>
          <div v-if="match_top[0].type==='playlist'">
            <top
              v-for="match_to in match_top"
              :key="match_to.id"
              :images="match_to.images"
              :name="match_to.name"
              :ownerName="match_to.ownerName"
              :ownerId="match_to.ownerId"
              :type="match_to.type"
              :playlist_id="match_to._id"
            ></top>
          </div>
          <div v-if="match_top[0].type==='track'">
            <top
              v-for="match_to in match_top"
              :key="match_to.id"
              :images="match_to.images"
              :name="match_to.name"
              :type="match_to.type"
              :artistName="match_to.artistName"
              :artistId="match_to.artistId"
              :track_id="match_to._id"
            ></top>
          </div>
          <div v-if="match_top[0].type==='user'">
            <top
              v-for="match_to in match_top"
              :key="match_to.id"
              :images="match_to.images"
              :name="match_to.displayName"
              :type="match_to.type"
              :Id="match_to._id"
            ></top>
          </div>
        </div>
        <div v-if="match_artists.length">
          <h2>Artist</h2>
          <router-link
            v-if="match_artists.length>=5"
            class="ard-link seelink"
            to="/HomeWebPlayer/search/seeallartist"
            testid="seeallartist"
          >SeeAll</router-link>
          <div class="row">
            <LibArtists
              class="col-lg-10% col-md-60% col-xs-6"
              v-for="match_artist in match_artists"
              :key="match_artist.id"
              :images="match_artist.images"
              :name="match_artist.name"
              :artistId="match_artist._id"
            />
          </div>
        </div>
        <div v-if="match_albums.length">
          <h2>Album</h2>
          <router-link
            v-if="match_albums.length>=5"
            class="ard-link seelink"
            to="/"
            testid="seeallplaylist"
          >SeeAll</router-link>
          <div class="row">
            <LibAlbums
              class="col-lg-10% col-md-60% col-xs-6"
              v-for=" match_album in  match_albums"
              :key="match_album.id"
              :images="match_album.images"
              :name="match_album.name"
              :albumId="match_album._id"
              :artistname="match_album.artistName"
              :artistId="match_album.artistId"
            />
          </div>
        </div>
        <div v-if="match_playlists.length">
          <h2>playlist</h2>
          <router-link
            v-if="match_playlists.length>=5"
            class="ard-link seelink"
            to="/"
            testid="seeallplaylist"
          >SeeAll</router-link>
          <div class="row">
            <LibPlaylists
              v-for="match_playlist in match_playlists"
              :key="match_playlist.id"
              :images="match_playlist.images"
              :name="match_playlist.name"
              :owner="match_playlist.ownerName"
              :ownerId="match_playlist.ownerId"
              :playlist_id="match_playlist._id"
            />
          </div>
        </div>
      </div>
    </div>
    <div style="height:1000px"></div>
</div>
</template>
<style scoped>
.row {
  margin-bottom: 15px;
  width: 95%;
}
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  float: left;
}

</style>
<script>
import LibArtists from "@/components/lib-artists.vue";
import top from "@/components/topresult_card.vue";
import LibAlbums from "@/components/lib-albums.vue";
import LibPlaylists from "@/components/lib-playlists.vue";
import { mapGetters } from "vuex";
export default {
  name: searchresult,
  components: {
    LibArtists,
    top,
    LibAlbums,
    LibPlaylists
  },
  computed: {
    ...mapGetters({
      match_top: "Search/gettopres",
      match_artists: "Search/getresult5",
      match_albums: "Search/getalbumres5",
      match_playlists: "Search/getplaylistsres5",
      loadingsearch: "Search/loadingsearch",
      search_value: "Search/get_value"
    })
  }
};
</script>