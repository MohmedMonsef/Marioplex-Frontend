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
          currentsong: {
            track: {
              name: "You are my sunshine",
              __v: 0,
              artists: ["civil wars", "john", "jasmine"],
              album: "Barton Hallow",
              length: "3:33",
              url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
            },
            _id: "55",
            isLiked: true,
            isPlayable: true
          },
          queue: [
            {
              track: {
                name: "You are my sunshine",
                __v: 0,
                artists: ["civil wars", "john", "jasmine"],
                album: "Barton Hallow",
                length: "3:33"
              },
              __id: "55",
              isLiked: true,
              isPlayable: true
            },
            {
              track: {
                name: "Beleiver",
                __v: 0,
                artists: ["imagine dragons"],
                album: "Barton Hallow",
                length: "4:23"
              },
              __id: "57",
              isLiked: false,
              isPlayable: false,
              isqueue: false
            },
            {
              track: {
                name: "the Girl with the red ballon",
                __v: 0,
                artists: ["civil wars", "jasmine"],
                album: "Barton Hallow2",
                length: "4:23"
              },
              __id: "56",
              isLiked: true,
              isPlayable: false,
              isqueue: false
            },
            {
              track: {
                name: "tip of my tongue",
                __v: 0,
                artists: ["civil wars", "john"],
                album: "Barton Hallow3",
                length: "4:23"
              },
              __id: "58",
              isLiked: true,
              isPlayable: false,
              isqueue: false
            },
            {
              track: {
                name: "what he wrote",
                __v: 0,
                artists: ["Laura Marling"],
                album: "single",
                length: "4:23"
              },
              __id: "59",
              isLiked: true,
              isPlayable: false,
              isqueue: false
            },
            {
              track: {
                name: "terrible love",
                __v: 0,
                artists: ["birdy"],
                album: "single",
                length: "4:23"
              },
              __id: "60",
              isLiked: true,
              isPlayable: false,
              isqueue: false
            },
            {
              track: {
                name: "Next to me",
                __v: 0,
                artists: ["imagine dragons"],
                album: "single",
                length: "4:23"
              },
              __id: "61",
              isLiked: true,
              isPlayable: false,
              isqueue: false
            }
          ],
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
                    name: "playlist name*",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    owner: "Amr",
                    _id:"5e7d93dad82adf07f4121bac"
                },
                {
                    name: "playlist name**",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    owner: "shreen",
                    _id:"5e7d93dad82adf0ksksksksksksksk"
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
          end_time: "3:45",
          liked: false
        },
        {
          song_name: "Second_Song",
          artist_name: ["Bassant", "Marshmello"],
          album_image: "../assets/cry.png",
          song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          start_time: "0:00",
          end_time: "4:40",
          liked: true
        },
        {
          song_name: "Third_Song",
          artist_name: ["Mona", "Nihal"],
          album_image: "../assets/cry.png",
          song:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
          start_time: "0:00",
          end_time: "5:13",
          liked: true
        },
        {
          song_name: "Forth_Song",
          artist_name: ["Dai", "Menna", "Nerdeen"],
          album_image: "../assets/cry.png",
          song:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
          start_time: "0:00",
          end_time: "2:60",
          liked: false
        }
      ],
            category: [
                {
                    name: "pop",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "/",
                    playlist: []
                },
                {
                    name: "roke",
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    href: "",
                    playlist: []
                },
                {
                    name: "rab",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    playlist: []
                },
                {
                    name: "sad",
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    href: "",
                    playlist: []
                },
                {
                    name: "happy",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    playlist: []
                },
                {
                    name: "pop",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    playlist: []
                },
                {
                    name: "roke",
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    href: "",
                    playlist: []
                },
                {
                    name: "rab",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    playlist: []
                },
                {
                    name: "sad",
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    href: "",
                    playlist: []
                },
                {
                    name: "happy",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    playlist: []
                }
            ],
            artist: [
                {
                    name: "akram",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "tamer",
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "eslam",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "ali",
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "amr",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "ahmed",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    type: "artist"
                }
            ],
            user_albums: [
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "album name1",
                    artist: {
                        name: "artist name1"
                    }
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/dddddd/000000",
                    name: "album name2",
                    artist: {
                        name: "artist name2"
                    }
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    name: "album name3",
                    artist: {
                        name: "artist name3"
                    }
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "album name4",
                    artist: {
                        name: "artist name4"
                    }
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "album name5",
                    artist: {
                        name: "artist name5"
                    }
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "album name6",
                    artist: {
                        name: "artist name6"
                    }
                }
            ],
            user_artists: [
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "artist name1"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/dddddd/000000",
                    name: "artist name2"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    name: "artist name3"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "artist name4"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "artist name5"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "artist name6"
                }
            ],
            playlist_info: [
              {
                  "_id": "5e7d93dad82adf07f4121bac",
                  "type": "playlist",
                  "name": "dhjgjdjdjg",
                  "ownerId": "5e7d9045854b0419f4f409b7",
                  "collaborative": false,
                  "isPublic": true,
                  "images": [],
                  "tracks": [
                      {
                          "trackid": "5e7d93dad82adf07f4121bb5",
                          "name": "track2",
                          "artistId": "5e7d93dad82adf07f4121bb2",
                          "artistName": ["artist1"],
                          "albumId": "5e7d93dad82adf07f4121baf",
                          "albumName": "album2"
                      },
                      {
                          "trackid": "5e7d93dad82adf07f4121bb7",
                          "name": "track4",
                          "artistId": "5e7d93dad82adf07f4121bb3",
                          "artistName": ["artist4"],
                          "albumId": "5e7d93dad82adf07f4121bb1",
                          "albumName": "album4"
                      },
                      {
                          "trackid": "5e7d93dad82adf07f4121bb6",
                          "name": "track3",
                          "artistId": "5e7d93dad82adf07f4121bb2",
                          "artistName": ["artist1"],
                          "albumId": "5e7d93dad82adf07f4121bb0",
                          "albumName": "album3"
                      },
                      {
                          "trackid": "5e7d93dad82adf07f4121bb4",
                          "name": "track1",
                          "artistId": "5e7d93dad82adf07f4121bb2",
                          "artistName": ["artist1"],
                          "albumId": "5e7d93dad82adf07f4121bae",
                          "albumName": "album1"
                      }
                  ]
              },
               {
                  "_id": "5e7d93dad82adf0ksksksksksksksk",
                  "type": "playlist",
                  "name": "dhjgjdjdjg",
                  "ownerId": "5e7d9045854b0419f4f409b7",
                  "collaborative": false,
                  "isPublic": true,
                  "images": [],
                  "tracks": [
                      {
                          "trackid": "5e7d93dad82adf07f4121bb5",
                          "name": "track2",
                          "artistId": "5e7d93dad82adf07f4121bb2",
                          "artistName": "artist1",
                          "albumId": "5e7d93dad82adf07f4121baf",
                          "albumName": "album2"
                      },
                      {
                          "trackid": "5e7d93dad82adf07f4121bb7",
                          "name": "track4",
                          "artistId": "5e7d93dad82adf07f4121bb3",
                          "artistName": "artist4",
                          "albumId": "5e7d93dad82adf07f4121bb1",
                          "albumName": "album4"
                      },
                      {
                          "trackid": "5e7d93dad82adf07f4121bb6",
                          "name": "track3",
                          "artistId": "5e7d93dad82adf07f4121bb2",
                          "artistName": "artist1",
                          "albumId": "5e7d93dad82adf07f4121bb0",
                          "albumName": "album3"
                      },
                      {
                          "trackid": "5e7d93dad82adf07f4121bb4",
                          "name": "track1",
                          "artistId": "5e7d93dad82adf07f4121bb2",
                          "artistName": "artist1",
                          "albumId": "5e7d93dad82adf07f4121bae",
                          "albumName": "album1"
                      }
                  ],
                  
              }
          ],
          user_songs: [
            {
              name: "ya sattar",
              artist: {
                name: "Hamaki"
              }
            },
            {
              name: "nour el3en",
              artist: {
                name: "Amr Diab"
              }
            },
            {
              name: "el nas",
              artist: {
                name: "Hamaki"
              }
            },
            {
              name: "el nas",
              artist: {
                name: "Hamaki"
              }
            },
            {
              name: "el nas",
              artist: {
                name: "Hamaki"
              }
            },
            {
              name: "el nas",
              artist: {
                name: "Hamaki"
              }
            },
            {
              name: "el nas",
              artist: {
                name: "Hamaki"
              }
            },
            {
              name: "el nas",
              artist: {
                name: "Hamaki"
              }
            },
            {
              name: "el nas",
              artist: {
                name: "Hamaki"
              }
            }
          ],
          Artist_Songs: [
            {
              URL: "",
              Name: "",
              TrackNumber: "",
              PreviewURL: "",
              AvailableMarket: ""
            }
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
    this.get("/api/artist/:id", schema => {
      return schema.db.artist;
    });
    this.get("/api/category", schema => {
      console.log("in mirage", schema.db.category);
      return schema.db.category;
    });
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
    this.get("/api/playlists", schema => {
      console.log("in get", schema.db.Playlists);
      return schema.db.Playlists;
    }),
      this.delete("/api/playlist/:id", (schema, request) => {
        let id = request.params.id;
        return schema.db.Playlists.remove(id);
      }),
      this.post("/api/playlists", (schema, request) => {
        const cplaylist = JSON.parse(request.requestBody).data;
        console.log(cplaylist.playlistname, "in mirag");
        return new Response(
          200,
          {},
          { Playlists: schema.db.Playlists.insert(cplaylist) }
        );
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
    this.get("/api/me/albums", schema => {
      return schema.db.user_albums;
    });
    this.get("/api/me/following", schema => {
      return schema.db.user_artists;
    });
    this.get("/api/me/tracks", schema => {
      return schema.db.user_songs;
    });
    this.get("/api/me/like", schema => {
      return schema.db.songs;
    });
    this.get("/api/me/unlike", schema => {
      return schema.db.songs;
    });
    this.post("/api/uploadsong", (schema, request) => {
      const uploadedsong = JSON.parse(request.requestBody).data;
      console.log(uploadedsong, "in mirag");
      return schema.db.Artist_Songs.insert({
        URL: uploadedsong.URL,
        Name: uploadedsong.Name,
        TrackNumber: uploadedsong.TrackNumber,
        PreviewURL: uploadedsong.PreviewURL,
        AvailableMarket: uploadedsong.AvailableMarket
      });
    });
    this.put("/api/claimartist", (schema, request) => {
      const claimartist = JSON.parse(request.requestBody).data;
      console.log(claimartist.Name, "in mirage");
      console.log("artist id", claimartist.id);
      /* return  schema.db.users.update(
              { Name:claimartist.Name,
              Genre:claimartist.Genre,
              Description:claimartist.Description}
              
          )*/

      return new Response(
        200,
        {},
        schema.db.users.update({
          Name: claimartist.Name,
          Genre: claimartist.Genre,
          Description: claimartist.Description
        })
      );
      /* schema.db.users.update(
          { Name:claimartist.Name,
          Genre:claimartist.Genre,
          Description:claimartist.Description}
          
      )
        return new Response(200,{ token: "menna"},{user:schema.db.users.where({Name:claimartist.Name})})*/
    });
    this.delete("/api/song/:id", (schema, request) => {
        let id = request.params.id;
        return schema.db.Artist_Songs.remove(id);
     // let headers = {};
     // let data = { errors: ["Server did not respond"] };
     // return new Response(500, headers, data);
    });


         //authentication requests
    this.put("/api/signup", (schema, request) => {
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
    this.get("/api/getuser", (schema) => {
        return new Response(
          201,
          { token: "menna" },
          { user: schema.db.users.findBy({ email: "mm@yahoo.com" }) }
        );
   
      // return new Response(403, { error: "no user with such data" });
    });
      
            //queue requests
    this.get("/api/currentsong", schema => {
      return new Response(200, {}, { currentsong: schema.db.currentsong });
    });
    this.get("/api/queue", schema => {
      return new Response(200, {}, { queue: schema.db.queue });
    });
    this.post("/api/addtoqueue", (schema, request) => {
      const songid = JSON.parse(request.requestBody).data;
      console.log(songid);
      let song = schema.db.queue.findBy({ __id: songid.song_id });
      song.isqueue = true;
      song.id = schema.db.queue.length + 1;
      console.log("adding song to queue in mirage", song);
      schema.db.queue.insert(song);
      console.log("queue in mirage", schema.db.queue);
      return new Response(200, {}, { queue: schema.db.queue });
    });
    ////////////////////////
    this.get("/playlists/:playlist_id", (schema , request) => {
      let id = request.params.playlist_id;
      return schema.db.playlist_info.findBy({_id:id});
  });
    }
    ////////////////////////////////////////////////
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