import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

//import "normalize.css";
import { Server} from 'miragejs'//uncomment you mirage code goes here

new Server({
  seeds(server){
    server.db.loadData({
      users:[
        {
          'username':'Menna',
          'email':'gmail.com',
          'password':'123'
        },
        {
          'username':'Habiba',
          'email':'yahoo.com',
          'password':'555'
        }
  
      ]
    }
    )
  },
  routes(){
    this.get("/api/users", (schema)=>{
      return schema.db.users
    })

    this.post("/api/signup",(schema,request)=>{
      const user =JSON.parse(request.requestBody).data
      return schema.db.users.insert({
        'username':user.username,
        'email':user.email,
        'password':user.password,
        'token':"menna"
      })

    })
  }
})
Vue.config.productionTip = false;


Vue.prototype.$http = axios;
//we can do this.$http and it will be like calling axios directly
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
//setting the Authorization on axios header to our token, so requests can be processed if a token is required.
// This way, we do not have to set token anytime we want to make a request.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");