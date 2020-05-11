import Vue from "vue";
import Vuex from "vuex";
import ShowWebPlayer from "../modules/ShowWebPlayer";
import Authorization from "../modules/Authorization";
import Mediaplayer from "../modules/Mediaplayer";
import Queue from "../modules/Queue";
import Categorys from "../modules/Categorys";
import Search from "../modules/Search";
import UserLibrary from "../modules/UserLibrary";
import Playlist from "../modules/Playlist";
import ArtistProperties from "../modules/ArtistProperties";
import Album from "../modules/Album";
import LikedTracks from "../modules/LikedTracks";
import ArtistPage from "../modules/ArtistPage";
import UserUpdate from "../modules/UserUpdate";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ShowWebPlayer,
    Authorization,
    Mediaplayer,
    Queue,
    Categorys,
    Search,
    UserLibrary,
    Playlist,
    Album,
    LikedTracks,
    ArtistProperties,
    ArtistPage,
    UserUpdate,
  },
});
