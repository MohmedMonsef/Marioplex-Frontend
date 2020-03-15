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
          song_name: "Anta_Maghroor",
          artist_name: "Amr_Diab",
          album_image: "../assets/cry.png",
          song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          start_time: "0:00",
          end_time: "3:45"
        },
        {
          song_name: "Baen_Habit",
          artist_name: ["Amr_Diab", "Marshmello"],
          album_image: "../assets/cry.png",
          song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          start_time: "0:00",
          end_time: "4:40"
        },
        {
          song_name: "Yatelmo",
          artist_name: ["Amr_Diab", "Nihal"],
          album_image: "../assets/cry.png",
          song:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
          start_time: "0:00",
          end_time: "5:13"
        },
        {
          song_name: "kont fe bally",
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
