import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import mediaplayer from "../modules/mediaplayer";
Vue.use(Vuex, axios);

export default new Vuex.Store({
  modules: {
    mediaplayer
  }
});
