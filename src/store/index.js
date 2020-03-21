import Vue from "vue";
import Vuex from "vuex";
import ShowWebPlayer from "../modules/ShowWebPlayer";
import creatplaylist from "../modules/creatplaylist";
import deleteplaylist from "../modules/deleteplaylist";
import authorization from "../modules/authorization";
import mediaplayer from "../modules/mediaplayer";
import Queue from "../modules/queue";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ShowWebPlayer,
    creatplaylist,
    deleteplaylist,
    authorization,
    mediaplayer,
    Queue
  }
});
