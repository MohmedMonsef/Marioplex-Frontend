import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "normalize.css";
import { Server, Response } from "miragejs";

new Server({
  seeds(server) {
    server.db.loadData({
      popular_playlists: [
        {
          image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          title: "playlist name1",
          des: "be happy"
        },
        {
          image: "http://dummyimage.com/250x400.jpg/dddddd/000000",
          title: "playlist name2",
          des: "be happy1"
        },
        {
          image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
          title: "playlist name3",
          des: "be happy2"
        },
        {
          image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          title: "playlist name4",
          des: "be happy3"
        },
        {
          image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          title: "Mood playlist name5",
          des: "be happy4"
        }
      ],
      Playlists: [
        {
          name: "playlist name1" ,
          images:"http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          owner:"Amr"
        },
        {
          name:"playlist name2" ,
          images:"http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          owner:"shreen"
        }
      ],
      users: [
        {
          username: "Menna",
          email: "gmail.com",
          password: "123",
          country: "Egypt",
          gender: "m",
          birthday: "3/12/1999"
        },
        {
          username: "Habiba",
          email: "mm@yahoo.com",
          password: "555",
          country: "Egypt",
          gender: "m",
          birthday: "3/12/1998"
        }
      ],
      songs: [
        {
          song_name: "First_Song",
          artist_name: "Nora",
          album_image: "../assets/cry.png",
          song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          start_time: "0:00",
          end_time: "3:45"
        },
        {
          song_name: "Second_Song",
          artist_name: ["Bassant", "Marshmello"],
          album_image: "../assets/cry.png",
          song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          start_time: "0:00",
          end_time: "4:40"
        },
        {
          song_name: "Third_Song",
          artist_name: ["Mona", "Nihal"],
          album_image: "../assets/cry.png",
          song:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
          start_time: "0:00",
          end_time: "5:13"
        },
        {
          song_name: "Forth_Song",
          artist_name: ["Dai", "Menna", "Nerdeen"],
          album_image: "../assets/cry.png",
          song:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
          start_time: "0:00",
          end_time: "2:60"
        }
      ],
      user_albums: [
        {
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          name: "album name1",
          artistname: "artist name1"
        },
        {
          images: "http://dummyimage.com/250x400.jpg/dddddd/000000",
          name: "album name2",
          artistname: "artist name2"
        },
        {
          images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
          name: "album name3",
          artistname: "artist name3"
        },
        {
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          name: "album name4",
          artistname: "artist name4"
        },
        {
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          name: "album name5",
          artistname: "artist name5"
        },
        {
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          name: "album name6",
          artistname: "artist name6"
        },
      ],
      user_artists: [
        {
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          name: "artist name1",
        },
        {
          images: "http://dummyimage.com/250x400.jpg/dddddd/000000",
          name: "artist name2",
        },
        {
          images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
          name: "artist name3",
        },
        {
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          name: "artist name4",
        },
        {
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          name: "artist name5",
        },
        {
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          name: "artist name6",
        },
      ]
    });
  },
  routes() {
    // this.get("/api/users", (schema, request)=>{
    //   const user =JSON.parse(request.requestBody).data;
    //   return new Response(
    //     201,
    //     {token:'dai'},
    //     {user: schema.db.user_play_lists.findBy({name: user.name})}
    //   )

    // }
    // );

    // this.get("/api/users", (schema)=>{
    //   return schema.db.user_play_lists
    // });
    this.get("/api/player/currently-playing", schema => {
      return schema.db.songs;
    });
    this.get("/api/player/play", schema => {
      return schema.db.songs;
    });
    this.get("/api/player/pause", schema => {
      return schema.db.songs;
    });
    this.get("/api/player/next", schema => {
      return schema.db.songs;
    });
    this.get("/api/player/previous", schema => {
      return schema.db.songs;
    });
    this.get("/api/player/repeat", schema => {
      return schema.db.songs;
    });
    this.get("/api/player/shuffle", schema => {
      return schema.db.songs;
    });
    this.get("/api/user", schema => {
      return schema.db.popular_playlists;
    });
    this.get("/api/useralbums", schema => {
      return schema.db.user_albums;
    });
    this.get("/api/userartists", schema => {
      return schema.db.user_artists;
    });

    this.get("/api/playlists", schema => {
      console.log("in get", schema.db.Playlists);
      return schema.db.Playlists;
    }),
      this.delete("/api/playlist/:id", () => {
        let headers = {};
        let data = { errors: ["Server did not respond"] };

        return new Response(500, headers, data);
      }),
      this.post("/api/playlists", (schema, request) => {
        const cplaylist = JSON.parse(request.requestBody).data;
        console.log(cplaylist.playlistname, "in mirag");
        return schema.db.Playlists.insert({
          playlistname: cplaylist.playlistname
        });
      });

    this.post("/api/signup", (schema, request) => {
      const user = JSON.parse(request.requestBody).data;
      if (schema.db.users.findBy({ email: user.email }) == null) {
        return new Response(
          201,
          {
            token: "menna"
          },
          schema.db.users.insert({
            username: user.username,
            email: user.email,
            password: user.password
          })
        );
      } else {
        return new Response(403, { error: "email not unique" });
      }
    });
    this.post("/api/login", (schema, request) => {
      const user = JSON.parse(request.requestBody).data;
      if (
        schema.db.users.findBy({ email: user.email }) != null &&
        schema.db.users.findBy({ password: user.password }) != null
      ) {
        console.log("in main", schema.db.users.findBy({ email: user.email }));
        return new Response(
          201,
          { token: "menna" },
          { user: schema.db.users.findBy({ email: user.email }) }
        );
      } else {
        return new Response(403, { error: "no user with such data" });
      }
    });
    this.post("/api/reset", () => {
      return new Response(200);
    });
    this.post("/api/logout", () => {
      return new Response(200);
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
});

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
//we can do this.$http and it will be like calling axios directly
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["x-auth-token"] = token;
}
//setting the Authorization on axios header to our token, so requests can be processed if a token is required.
// This way, we do not have to set token anytime we want to make a request.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
