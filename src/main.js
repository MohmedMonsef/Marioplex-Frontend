import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import axios from "axios";

Vue.config.productionTip = true;

axios.defaults.baseURL = "http://100.25.194.8";
Vue.prototype.$url = "http://100.25.194.8";

var vm = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

global.vm = vm;
