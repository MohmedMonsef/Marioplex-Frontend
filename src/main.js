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
      popular_playlists:[
        {
          'image':"http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          'title':'playlist name1',
          'des':'be happy',
        },
        {
          'image':'http://dummyimage.com/250x400.jpg/dddddd/000000',
          'title':'playlist name2',
          'des':'be happy1',
        },
        {
          'image':'http://dummyimage.com/250x400.jpg/cc0000/ffffff',
          'title':'playlist name3',
          'des':'be happy2',
        },
        {
          'image':'http://dummyimage.com/250x400.jpg/ff4444/ffffff',
          'title':'playlist name4',
          'des':'be happy3',
        },
        {
          'image':'http://dummyimage.com/250x400.jpg/ff4444/ffffff',
          'title':'Mood playlist name5',
          'des':'be happy4',
        },
        
      ],
      Playlists: [
        {
          playlistname: "Amr",
          id: 1
        },
        {
          playlistname: "shreen",
          id: 2
        }
      ]

    }
    )
  },
  routes(){
    // this.get("/api/users", (schema, request)=>{
    //   const user =JSON.parse(request.requestBody).data;
    //   return new Response(
    //     201,
    //     {token:'dai'},
    //     {user: schema.db.user_play_lists.findBy({name: user.name})}
    //   )
     
    // }
    // );
    
    this.get("/api/users", (schema)=>{
      return schema.db.user_play_lists
    });
     
    this.get("/api/user", (schema)=>{
      return schema.db.popular_playlists
    });
    this.get("/api/playlists", schema => {
      return schema.db.Playlists;
    }),
      this.delete("/api/playlist/:id", () => {
        let headers = {};
        let data = { errors: ["Server did not respond"] };

        return new Response(500, headers, data);
      }),
      this.post("/api/playlists", (schema, request) => {
        const cplaylist = JSON.parse(request.requestBody).data;
        return schema.db.Playlists.insert({
          playlistname: cplaylist.playlistname
          //'playlistid':cplaylist.playlistid
        });
      });



    // this.post("/api/users",(schema,request)=>{
    //   const user =JSON.parse(request.requestBody).data
    //   return schema.db.users.insert({
    //     'username':user.username,
    //     'email':user.email,
    //     'password':user.password
    //   })

    // })
  }
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
