import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; //uncomment when you start with axios
import creatplaylist from "../modules/creatplaylist";
import deleteplaylist from "../modules/deleteplaylist";
Vue.use(Vuex, axios);

export default new Vuex.Store({
  modules: {
    creatplaylist,
    deleteplaylist

  }
});
0;
