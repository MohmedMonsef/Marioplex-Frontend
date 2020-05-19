import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import axios from "axios";
import { mockServer } from "../mockServer/mock";

Vue.config.productionTip = false;

// Vue.use(VueRx);
if (process.env.NODE_ENV === "production") {
  //if in development call the mockServer
  mockServer();
}

axios.defaults.baseURL = "http://52.87.106.56";
Vue.prototype.$user= "http://52.87.106.56"

var vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

global.vm = vm;