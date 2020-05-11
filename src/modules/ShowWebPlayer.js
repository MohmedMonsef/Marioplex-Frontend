import axios from "axios";

export default {
  namespaced: true,
  state: {
    popular_playlists: [],
    popular_artists: [],
    popular_albums: [],
    popular_newreleases: [],
    recently_played: [],
  },
  mutations: {
    setPopularPlaylists(state, POPplaylists) {
      state.popular_playlists = POPplaylists;
    },
    setPopularArtists(state, POPartists) {
      state.popular_artists = POPartists;
    },
    setPopularAlbums(state, POPalbums) {
      state.popular_albums = POPalbums;
    },
    setPopularNewreleases(state, POPnewreleases) {
      state.popular_newreleases = POPnewreleases;
    },
    setRecentlyPlayed(state, recently_played) {
      state.recently_played = recently_played;
    },
  },
  actions: {
    showPopularPlaylists({ commit }) {
      axios
        .get("/api/browse/popular-playlists")
        .then((response) => {
          let POPplaylists = response.data;
          commit("setPopularPlaylists", POPplaylists);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showPopularArtists({ commit }) {
      axios
        .get("/api/browse/popular-artists")
        .then((response) => {
          let POPartists = response.data;
          commit("setPopularArtists", POPartists);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showPopularAlbums({ commit }) {
      axios
        .get("/api/browse/popular-albums")
        .then((response) => {
          let POPalbums = response.data;
          commit("setPopularAlbums", POPalbums);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showPopularNewreleases({ commit }) {
      axios
        .get("/api/browse/new-releases")
        .then((response) => {
          let POPnewreleases = response.data;
          commit("setPopularNewreleases", POPnewreleases);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    RecenlyPlayed({ commit }, limit) {
      axios
        .get("api/me/player/recently-played?limit=" + limit)
        .then((response) => {
          let recently_played = response.data;
          commit("setPopularNewreleases", recently_played);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    POPplaylists: (state) => state.popular_playlists,
    POPartists: (state) => state.popular_artists,
    POPalbums: (state) => state.popular_albums,
    POPnewreleases: (state) => state.popular_newreleases,
    RecenlyPlayed: (state) => state.recently_played,
  },
};
