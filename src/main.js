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
          albumId: "5e7d93dad82adf07f4121bb0",
          artistId: "5e7d93dad82adf07f4121bb2",
          artists: ["civil wars", "john", "jasmine"],
          length: "3:33",
          url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
        },
        _id: "5e7d93dad82adf07f4121bb6",
        albumName: "Barton Hallow",
        isLiked: true,
        isPlayable: true
      },
      queue: [
        {
          track: {
            name: "You are my sunshine",
            __v: 0,
            albumId: "5e7d93dad82adf07f4121bae",
            artistId: "5e7d93dad82adf07f4121bb2",
            artists: ["civil wars", "john", "jasmine"],
            length: "3:33"
          },
          _id: "5e7d93dad82adf07f4121bb4",
          albumName: "Barton Hallow",
          isLiked: true,
          isPlayable: true,
          isQueue: false,
          index: 2
        },
        {
          track: {
            name: "Beleiver",
            __v: 0,
            albumId: "5e7d93dad82adf07f4121baf",
            artistId: "5e7d93dad82adf07f4121bb2",
            artists: ["imagine dragons"],
            length: "4:23"
          },
          _id: "5e7d93dad82adf07f4121bb5",
          albumName: "Barton Hallow",
          isLiked: false,
          isPlayable: false,
          isQueue: false,
          index: 3
        },
        {
          track: {
            name: "the Girl with the red ballon",
            __v: 0,
            albumId: "5e7d93dad82adf07f4121baf",
            artistId: "5e7d93dad82adf07f4121b55",
            artists: ["civil wars", "jasmine"],
            length: "4:23"
          },
          _id: "5e7d93dad82adf07f4121555",
          albumName: "Barton Hallow2",
          isLiked: true,
          isPlayable: false,
          isQueue: false,
          index: 4
        },
        {
          track: {
            name: "tip of my tongue",
            __v: 0,
            artists: ["civil wars", "john"],
            albumId: "5e7d93dad82adf07f4121baf",
            artistId: "5e7d93dad82adf07f4121055",
            length: "4:23"
          },
          _id: "58",
          albumName: "Barton Hallow3",
          isLiked: true,
          isPlayable: false,
          isQueue: false,
          index: 5
        },
        {
          track: {
            name: "terrible love",
            __v: 0,
            artists: ["birdy"],
            albumId: "5e7d93dad82adftt4121baf",
            artistId: "5e7d93dad82adf0oo4121055",
            length: "4:23"
          },
          _id: "60",
          albumName: "Single",
          isLiked: true,
          isPlayable: false,
          isQueue: false,
          index: 6
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
          _id: "5e7d93dad82adf07f4121bac"
        },
        {
          name: "playlist name**",
          images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
          owner: "shreen",
          _id: "5e7d93dad82adf0ksksksksksksksk"
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
          _id: "5e7d93dad82adf07f4121bac",
          type: "playlist",
          name: "dhjgjdjdjg",
          ownerId: "5e7d9045854b0419f4f409b7",
          collaborative: false,
          isPublic: true,
          images: [],
          tracks: [
            {
              trackid: "5e7d93dad82adf07f4121bb5",
              name: "track2",
              artistId: "5e7d93dad82adf07f4121bb2",
              artistName: ["artist1"],
              albumId: "5e7d93dad82adf07f4121baf",
              albumName: "album2"
            },
            {
              trackid: "5e7d93dad82adf07f4121bb7",
              name: "track4",
              artistId: "5e7d93dad82adf07f4121bb3",
              artistName: ["artist4"],
              albumId: "5e7d93dad82adf07f4121bb1",
              albumName: "album4"
            },
            {
              trackid: "5e7d93dad82adf07f4121bb6",
              name: "track3",
              artistId: "5e7d93dad82adf07f4121bb2",
              artistName: ["artist1"],
              albumId: "5e7d93dad82adf07f4121bb0",
              albumName: "album3"
            },
            {
              trackid: "5e7d93dad82adf07f4121bb4",
              name: "track1",
              artistId: "5e7d93dad82adf07f4121bb2",
              artistName: ["artist1"],
              albumId: "5e7d93dad82adf07f4121bae",
              albumName: "album1"
            }
          ]
        },
        {
          _id: "5e7d93dad82adf0ksksksksksksksk",
          type: "playlist",
          name: "dhjgjdjdjg",
          ownerId: "5e7d9045854b0419f4f409b7",
          collaborative: false,
          isPublic: true,
          images: [],
          tracks: [
            {
              trackid: "5e7d93dad82adf07f4121bb5",
              name: "track2",
              artistId: "5e7d93dad82adf07f4121bb2",
              artistName: ["artist1"],
              albumId: "5e7d93dad82adf07f4121baf",
              albumName: "album2"
            },
            {
              trackid: "5e7d93dad82adf07f4121bb7",
              name: "track4",
              artistId: "5e7d93dad82adf07f4121bb3",
              artistName: ["artist4"],
              albumId: "5e7d93dad82adf07f4121bb1",
              albumName: "album4"
            },
            {
              trackid: "5e7d93dad82adf07f4121bb6",
              name: "track3",
              artistId: "5e7d93dad82adf07f4121bb2",
              artistName: ["artist1"],
              albumId: "5e7d93dad82adf07f4121bb0",
              albumName: "album3"
            },
            {
              trackid: "5e7d93dad82adf07f4121bb4",
              name: "track1",
              artistId: "5e7d93dad82adf07f4121bb2",
              artistName: ["artist1"],
              albumId: "5e7d93dad82adf07f4121bae",
              albumName: "album1"
            }
          ]
        }
      ],
      nextsong: {
        track: {
          name: "You are my x",
          __v: 0,
          albumId: "5e7d93dad82adf07f4121bb1",
          artistId: "5e7d93dad82adf07f4121bb2",
          artists: ["civil wars", "john", "jasmine"],
          length: "3:33",
          url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        _id: "5e7d93dad82adf07f4121bb7",
        albumName: "Barton Hallow",
        isLiked: true,
        isPlayable: true
      },
      prevsong: {
        track: {
          name: "You are my y",
          __v: 0,
          albumId: "5e7d93dad82adf07f4121baf",
          artistId: "5e7d93dad82adf07f4121bb2",
          artists: ["civil wars", "john", "jasmine"],
          length: "3:33",
          url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        _id: "5e7d93dad82adf07f4121bb5",
        albumName: "Barton Hallow",
        isLiked: true,
        isPlayable: true
      },
    });
  },
  routes() {
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
    this.get("/player/next", schema => {
      return new Response(200, {}, { nextsong: schema.db.nextsong });
    });
    this.get("/player/previous", schema => {
      return new Response(200, {}, { prevsong: schema.db.prevsong });
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
      this.delete("/api/playlist/:id", () => {
        let headers = {};
        let data = { errors: ["Server did not respond"] };

        return new Response(500, headers, data);
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

    //authentication requests
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
    this.get("/api/getuser", schema => {
      return new Response(
        201,
        { token: "menna" },
        { user: schema.db.users.findBy({ email: "mm@yahoo.com" }) }
      );

      // return new Response(403, { error: "no user with such data" });
    });

    this.post("/api/reset", () => {
      return new Response(200);
    });
    this.post("/api/logout", () => {
      return new Response(200);
    });
    //albums
    this.get("/api/me/albums", schema => {
      return schema.db.user_albums;
    });
    this.get("/api/me/following", schema => {
      console.log("in main dai");
      return schema.db.user_artists;
    });
    // this.get("/api/users", (schema)=>{
    //   return schema.db.user_play_lists
    // });
    //albums
    this.get("/api/me/like", schema => {
      return schema.db.songs;
    });
    this.get("/api/me/unlike", schema => {
      return schema.db.songs;
    });
    ///////////////////////////////////////////////////queue requests
    this.get("/api/currentsong", schema => {
      return new Response(200, {}, { currentsong: schema.db.currentsong });
    });
    this.get("/api/queue", schema => {
      return new Response(200, {}, { queue: schema.db.queue });
    });
    this.post("/api/addtoqueue", (schema, request) => {
      const songid = JSON.parse(request.requestBody).data;
      console.log(songid);
      let song = schema.db.queue.findBy({ _id: songid.song_id });
      song.isqueue = true;
      song.id = schema.db.queue.length + 1;
      console.log("adding song to queue in mirage", song);
      schema.db.queue.insert(song);
      console.log("queue in mirage", schema.db.queue);
      return new Response(200, {}, { queue: schema.db.queue });
    });
    //////////////////////////////////////////////////Playlists
    this.get("/playlists/:playlist_id", (schema, request) => {
      let id = request.params.playlist_id;
      return new Response(
        200,
        {},
        { Playlist: schema.db.playlist_info.findBy({ _id: id }) }
      );
    });
    ////////////////////////////////////////////////CreateQueue
    this.post("/createQueue/:playlist_id/:trackId,null", () => {
      return new Response(200, {}, { mes: "created with success" });
    });
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
