<template>
  <div class="cont">
    <searchcomponent></searchcomponent>
    <div>
      <router-view></router-view>
    </div>
    <div class="loading" v-if="!loadingcategory && search_value === ''">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-if="loadingcategory">
      <div class="contaner" v-if="search_value === ''">
        <div class="all scroll">
          <h2 v-if="categorys.length">Browse All</h2>
          <div class="row">
            <category
              class="col-lg-10% col-md-60% col-xs-6"
              v-for="category in categorys"
              :key="category.id"
              :name="category.name"
              :categoryId="category._id"
            />
            <!-- <category
              class="col-lg-10% col-md-60% col-xs-6"
              v-for="category in categorys"
              :key="category.id"
              :image="category.images"
              :name="category.name"
              :categoryId="category._id"
            /> -->
          </div>
        </div>
      </div>
    </div>
    <div v-if="showr">
      <div class="loading" v-if="!loadingsearch && search_value !== ''">
        <i class="fa fa-spinner fa-spin"></i>
      </div>
      <div v-if="loadingsearch">
        <div v-if="search_value.length !== 0" class="cont last">
          <!--search results-->
          <div v-if="match_top.length">
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
            <div v-if="match_top[0].type === 'album'">
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
              ></top>
            </div>
            <div v-if="match_top[0].type === 'track'">
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
          <div v-if="match_artists.length">
            <h2>Artist</h2>
            <div @click="change">
              <router-link
                v-if="match_artists.length >= 5"
                class="ard-link seelink"
                to="/HomeWebPlayer/search/seeallartist"
                testid="seeallartist"
                @click="change"
                >SeeAll</router-link
              >
            </div>
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
              v-if="match_albums.length >= 5"
              class="ard-link seelink"
              to="/"
              testid="seeallplaylist"
              >SeeAll</router-link
            >
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
            <h2>playlist</h2>
            <router-link
              v-if="match_playlists.length >= 5"
              class="ard-link seelink"
              to="/"
              testid="seeallplaylist"
              >SeeAll</router-link
            >
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
        </div>
        <div style="height:1000px"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.last {
  margin-bottom: 200px;
}
.img-card {
  width: 100%;
  height: 80px;
}
.card-top {
  background-color: #313030;
  padding: 20px;
  height: 250px;
}
*:focus {
  outline: none;
}
.cont {
  margin-left: 30px;
  margin-bottom: 25px;
  width: 100%;
  height: 100vh;
}
.scroll {
  width: 2000;
  height: 100%;
  overflow-x: visible;
  overflow-y: scroll;
}
.all {
  width: 100%;
}
::-webkit-scrollbar {
  width: 40px;
  background-color: rgba(0, 0, 0, 0.76);
}
::-webkit-scrollbar-button:vertical:increment {
  height: 40px;
  background-image: url(/Images/Scrollbar/decrement.png);
  background-size: 39px 30px;
  background-repeat: no-repeat;
}
::-webkit-scrollbar-button:vertical:decrement {
  height: 40px;
  background-image: url(/Images/Scrollbar/increment.png);
  background-size: 39px 30px;
  background-repeat: no-repeat;
}
.margin {
  margin: 20px;
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
.container {
  margin-left: 15px;
  // height: 100vh;
  width: 100%;
}
.seelink {
  font-size: 15px;
  color: white;
  display: inline;
  margin-left: 70%;
}

.loading {
  display: flex;
  justify-content: center;
  i {
    color: #fff;
    font-size: 70px;
    margin-top: 100px;
  }
}
</style>

<script>
import category from "@/components/category.vue";
import LibArtists from "@/components/lib-artists.vue";
import top from "@/components/topresult_card.vue";
import LibAlbums from "@/components/lib-albums.vue";
import LibPlaylists from "@/components/lib-playlists.vue";
import searchcomponent from "@/components/searchcomponent.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return { showr: true };
  },
  components: {
    category,
    LibArtists,
    top,
    LibAlbums,
    LibPlaylists,
    searchcomponent
  },
  mounted() {
    this.$store.dispatch("categorys/showcategory");
  },
  methods: {
    change() {
      this.showr = false;
    }
  },
  computed: {
    ...mapGetters({
      categorys: "categorys/getcategory",
      match_top: "Search/gettopres",
      match_artists: "Search/getresult5",
      match_albums: "Search/getalbumres5",
      match_playlists: "Search/getplaylistsres5",
      loadingcategory: "categorys/loading",
      loadingsearch: "Search/loadingsearch",
      search_value: "Search/get_value"
    }),
    ...mapState({
      show: state => state.creatplaylist.showModal,
      inartist: state => state.Search.in
    })
  }
};
</script>
