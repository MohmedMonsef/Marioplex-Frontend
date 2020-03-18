import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import ShowWebPlayer from "../modules/ShowWebPlayer";
import creatplaylist from "../modules/creatplaylist";
import deleteplaylist from "../modules/deleteplaylist";

//export const  bus = new Vue();
Vue.use(Vuex, axios);

export default new Vuex.Store({
  
  modules: {
     ShowWebPlayer,
     creatplaylist,
    deleteplaylist
  }
});
