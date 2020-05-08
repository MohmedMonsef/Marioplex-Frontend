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

if (process.env.NODE_ENV === "production") {
  //if in development call the mockServer
  mockServer();
}

axios.defaults.baseURL = "http://52.205.254.29";
// axios.defaults.baseURL = "http://127.0.0.1:3000";
//setting the Authorization on axios header to our token, so requests can be processed if a token is required.
// This way, we do not have to set token anytime we want to make a request.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
