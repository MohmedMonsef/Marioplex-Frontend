import axios from "axios";

export default {
  namespaced: true,
  state: {
    popular_playlists: [],
    popular_artists: [],
    popular_albums: [],
    popular_newreleases: [],
    recently_played: [],
    homePlaylists:[]
  },
  mutations: {
    setPopularPlaylists(state, POPplaylists) {
      (POPplaylists.playlists).forEach(playlist => {
        if(playlist.images.length == 0)
        playlist.images.push({_id:"5eb52f1863eea332d416b9fa"});
      });
      state.popular_playlists = POPplaylists;
    },
    setPopularArtists(state, POPartists) {
      (POPartists.artists).forEach(artist => {
        if(artist.images.length == 0)
        artist.images.push({_id:"5eb52f1863eea332d416b9fa"});
      });
      state.popular_artists = POPartists;
    },
    setPopularAlbums(state, POPalbums) {
      (POPalbums.albums).forEach(album => {
        if(album.images.length == 0)
        album.images.push({_id:"5eb52f1863eea332d416b9fa"});
      });
      state.popular_albums = POPalbums;
    },
    setPopularNewreleases(state, POPnewreleases) {
     
      (POPnewreleases.albums).forEach(album => {
        if(album.images.length == 0)
        album.images.push({_id:"5eb52f1863eea332d416b9fa"});
      });
      state.popular_newreleases = POPnewreleases;
    },
    setRecentlyPlayed(state, recently_played) {
      recently_played.forEach(playlist => {
          if(playlist.images.length == 0)
          playlist.images.push({_id:"5eb52f1863eea332d416b9fa"});
        });
      state.recently_played = recently_played;
    },
  },
  actions: {
    async showPopularPlaylists({ commit }) {
     await axios
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
    async RecenlyPlayed({ commit }) {
      await 
      axios
        .get("api/me/player/recently-played")
        .then((response) => {
          let recently_played = response.data;
          commit("setRecentlyPlayed", recently_played);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async homePlaylists({state,dispatch}){
     await dispatch("RecenlyPlayed");
     await dispatch("showPopularPlaylists");
      state.homePlaylists=state.recently_played;
      var i =0
        while(state.homePlaylists.length < 6){
          console.log(state.popular_playlists.playlists[i])
          state.homePlaylists.push(state.popular_playlists.playlists[i]);
          i++;
        }
    }
  },
  getters: {
    POPplaylists: (state) => state.popular_playlists,
    POPartists: (state) => state.popular_artists,
    POPalbums: (state) => state.popular_albums,
    POPnewreleases: (state) => state.popular_newreleases,
    RecenlyPlayed: (state) => state.recently_played,
    homePlaylists: (state) => state.homePlaylists
  },
};
