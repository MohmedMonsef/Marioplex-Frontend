import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import authorization from "../modules/authorization";

export default new Vuex.Store({
  modules: {
    authorization
  }
});
