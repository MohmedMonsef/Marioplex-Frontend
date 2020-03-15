import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { Server} from 'miragejs'//uncomment you mirage code goes here

new Server({
  seeds(Server){
     Server.db.loadData({
       Playlists:[
        {
          'playlistname':'Amr',
          id:1,
        },
        {
          'playlistname':'shreen',
          id:2,
         
        },
       ]
     })
  },



  routes(){
    this.get("/api/playlists",(schema)=>{
      return schema.db.Playlists
}),
/*this.delete("/api/playlist/:id", (schema, request) => {
  let id = request.params.id
  console.log('7mada');
  return schema.db.Playlists.find(id).destroy()
  
}),*/
this.delete("/api/playlist/:id", () => {
  let headers = {}
  let data = { errors: ["Server did not respond"] }

  return new Response(500, headers, data)
}),
    this.post("/api/playlists",(schema,request)=>{
      const cplaylist =JSON.parse(request.requestBody).data
      return schema.db.Playlists.insert({
        'playlistname':cplaylist.playlistname,
         //'playlistid':cplaylist.playlistid
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
