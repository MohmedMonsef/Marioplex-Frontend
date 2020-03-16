import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { Server } from "miragejs";

new Server({
  seeds(server) {
    server.db.loadData({
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
      ]
    });
  },
  routes() {
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
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
