<template>
  <div v-if="loadingsearch">
    <div v-if="search_value.length !== 0" class="cont last">
      <!--search results-->
      <div class="row">
      <div v-if="match_top.length" class="col-4">
        <div v-if="match_top[0].type === 'Artist'">
          <top
            v-for="match_to in match_top"
            :key="match_to.id"
            :image="match_to.images"
            :name="match_to.name"
            :type="match_to.type"
            :artistId="match_to._id"
          ></top>
        </div>
        <div v-if="match_top[0].type === 'Album'">
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
        <div v-if="match_top[0].type === 'playlist'">
          <top
            v-for="match_to in match_top"
            :key="match_to.id"
            :images="match_to.images"
            :name="match_to.name"
            :ownerName="match_to.ownerName"
            :ownerId="match_to.ownerId"
            :type="match_to.type"
            :playlist_id="match_to._id"
            :ownerType="match_to.ownerType"
          ></top>
        </div>
        <div v-if="match_top[0].type === 'Track'">
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
        <div v-if="match_top[0].type === 'user'">
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
      <div class="col-8" v-if="match_track.length">
        <h2 v-if="match_track.length<3">Tracks</h2>
         <div @click="change">
          <router-link
          v-if="match_track.length>=3"
            class="ard-link link track"
            to="/HomeWebPlayer/search/seealltrack"
            testid="seealltrack"
          >Tracks</router-link>
         </div>
         <div @click="change">
          <router-link
          v-if="match_track.length>=3"
            class="ard-link seelink"
            to="/HomeWebPlayer/search/seealltrack"
            testid="seealltrack"
          >SeeAll</router-link>
         </div>
         <div class='col-12'>
         <trackcomponent 
          v-for="track in match_track"
            :key=" track.id"
            :song_name="track.name"
            :song_artists="track.artistName"
            :artist_id="track.artistId"
            :song_id="track._id"
            :albumId="track.albumId"
            :song_album="track.albumName"
         ></trackcomponent>
         </div>
      </div>
      </div>
      <div v-if="match_artists.length">
        <h2  v-if="match_artists.length < 5">Artist</h2>
        <div @click="change">
          <router-link
            v-if="match_artists.length >= 5"
            class="ard-link link"
            to="/HomeWebPlayer/search/seeallartist"
            testid="seeallartist"
          >Artist</router-link>
        </div>
        <div @click="change">
          <router-link
            v-if="match_artists.length >= 5"
            class="ard-link seelink"
            to="/HomeWebPlayer/search/seeallartist"
            testid="seeallartist"
          >SeeAll</router-link>
        </div>
        <div class="row">
          <LibArtists
            class="col-lg-10% col-md-60% col-xs-6"
            v-for="match_artist in match_artists"
            :key="match_artist.id"
            :images="match_artist.images"
            :name="match_artist.name"
            :artistId="match_artist._id"
            :type="match_artist.type"
          />
        </div>
      </div>
      <div v-if="match_albums.length">
        <h2 v-if="match_albums.length < 5">Album</h2>
        <div @click="change">
          <router-link
            v-if="match_albums.length >= 5"
            class="ard-link link"
            to="/HomeWebPlayer/search/seeallalbum"
            testid="seeallalbum"
          >Album</router-link>
        </div>
        <div @click="change">
          <router-link
            v-if="match_albums.length >= 5"
            class="ard-link seelink"
            to="/HomeWebPlayer/search/seeallalbum"
            testid="seeallalbum"
          >SeeAll</router-link>
        </div>
        <div class="row">
          <LibAlbums
            class="col-lg-10% col-md-60% col-xs-6"
            v-for="match_album in match_albums"
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
        <h2 v-if="match_playlists.length < 5">Playlist</h2>
        <div @click="change">
          <router-link
            v-if="match_playlists.length >= 5"
            class="ard-link link"
            to="/HomeWebPlayer/search/seeallplaylist"
            testid="seeallplaylist"
          >Playlist</router-link>
        </div>
        <div @click="change">
          <router-link
            v-if="match_playlists.length >= 5"
            class="ard-link seelink"
            to="/HomeWebPlayer/search/seeallplaylist"
            testid="seeallplaylist"
          >SeeAll</router-link>
        </div>
        <div class="row">
          <LibPlaylists
            v-for="match_playlist in match_playlists"
            :key="match_playlist.id"
            :images="match_playlist.images"
            :name="match_playlist.name"
            :ownerName="match_playlist.ownerName"
            :ownerId="match_playlist.ownerId"
            :playlist_id="match_playlist._id"
          />
        </div>
      </div>
      <div v-if="match_users.length">
        <h2 v-if="match_users.length < 5">Profile</h2>
         <div @click="change">
          <router-link
            v-if="match_users.length >= 5"
            class="ard-link link"
            to="/HomeWebPlayer/search/seealluser"
            testid="seeallartist"
          >Profile</router-link>
        </div>
        <div @click="change">
          <router-link
            v-if="match_users.length >= 5"
            class="ard-link seelink"
            to="/HomeWebPlayer/search/seealluser"
            testid="seeallartist"
          >SeeAll</router-link>
        </div>
        <div class="row">
          <LibArtists
            class="col-lg-10% col-md-60% col-xs-6"
            v-for="match_user in match_users"
            :key="match_user.id"
            :images="match_user.images"
            :name="match_user.displayName"
            :artistId="match_user._id"
            :type="match_user.user"
          />
        </div>
      </div>
      <!-- <div
        v-if="match_artists.length==0 &&  match_albums.length==0 && match_playlists.length==0 && match_users.length==0 && match_track.length==0"
      >
        <p id="noresult">No Results </p>
        <p>please try using a small key words</p>
      </div> -->
      
    </div>
    <div style="height:1000px"></div>
  </div>
</template>
<style scoped>
.track{
  margin-left: 2%;
}
.link {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  float: left;
}
#noresult{
   font-size: 40px;
   margin-top: 150px;
   font-style: oblique;
}
p{
  color: white;
  font-size: 12px;
   margin-left: 30%;
}
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
.seelink {
  font-size: 15px;
  color: white;
  display: inline;
  margin-left: 70%;
}
.last {
  margin-bottom: 200px;
}
</style>
<script>
import LibArtists from "@/components/lib-artists.vue";
import top from "@/components/topresult_card.vue";
import LibAlbums from "@/components/lib-albums.vue";
import LibPlaylists from "@/components/lib-playlists.vue";
import trackcomponent from "@/components/trackcomponent.vue";
import { mapGetters } from "vuex";
/**
 * Here is the place where results of the search appear
 * @displayName Search Results page
 * @example [none]
 */
export default {
  name: "searchresults",
  components: {
    LibArtists,
    top,
    LibAlbums,
    LibPlaylists,
    trackcomponent
  },
  data() {
    return { shower: true };
  },
  computed: {
    ...mapGetters({
      match_top: "Search/gettopres",
      match_artists: "Search/getresult5",
      match_albums: "Search/getalbumres5",
      match_playlists: "Search/getplaylistsres5",
      loadingsearch: "Search/loadingsearch",
      search_value: "Search/get_value",
      match_users:"Search/getuser5",
      match_track:"Search/gettrack3"
  //    showme:"Search/shower"
    })
  },
  methods: {
    change() {
      this.shower = false;
       // this.$store.dispatch("Search/actshower",false);
      // this.$store.dispatch("Search/searchfocus",false);
    this.$store.dispatch("Search/showresult",'');
    }
  },
  //  mounted() {
  //   window.addEventListener('load', this.setshow);
  // }
 //props:["showme"]
};
</script>
