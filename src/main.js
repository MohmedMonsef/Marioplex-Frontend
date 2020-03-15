import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { Server} from 'miragejs'

new Server({
  seeds(server){
    server.db.loadData({
      user_play_lists:[
        {
          'name':'playlist1',
           
        },
        {
          'name':'playlist2',
          
        },
        {
          'name':'playlist3',
          
        }
  
      ],

    }
    )
  },
  routes(){
    this.get("/api/users", (schema)=>{
      return schema.db.user_play_lists
    })

    this.post("/api/users",(schema,request)=>{
      const user =JSON.parse(request.requestBody).data
      return schema.db.users.insert({
        'username':user.username,
        'email':user.email,
        'password':user.password
      })

    })
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
