import Vue from "vue";
import Vuex from "vuex";
import ShowWebPlayer from "../modules/ShowWebPlayer";
import creatplaylist from "../modules/creatplaylist";
import deleteplaylist from "../modules/deleteplaylist";
import authorization from "../modules/authorization";
import mediaplayer from "../modules/mediaplayer";
import Queue from "../modules/queue";
import categorys from "../modules/categorys";
import Search from "../modules/Search";
import userlibrary from "../modules/userlibrary";
import uploadsong from "../modules/uploadsong";
import claimartistprofile from "../modules/claimartistprofile"
import playlist from "../modules/playlist";
import artistproperties from "../modules/artistproperties";
import album from "../modules/album";
import likedtracks from "../modules/likedtracks";
import playlistpopup from "../modules/playlistpopup";
//export const  bus = new Vue();
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ShowWebPlayer,
        creatplaylist,
        deleteplaylist,
        authorization,
        mediaplayer,
        Queue,
        categorys,
        Search,
        userlibrary,
        uploadsong,
        claimartistprofile,
        playlist,
        album,
        likedtracks,
        artistproperties,
        playlistpopup,
    }
});
