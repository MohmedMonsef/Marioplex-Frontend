import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import sidebar from "../modules/sidebar";
import ShowWebPlayer from "../modules/ShowWebPlayer";


Vue.use(Vuex, axios);

export default new Vuex.Store({
  
  modules: {
     sidebar,
     ShowWebPlayer
  }
});

