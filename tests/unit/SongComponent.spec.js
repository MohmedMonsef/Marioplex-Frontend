import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import SongComponent from "../../src/components/SongComponent";

describe("SongComponent", () => {
  let wrapper;
  let ifliked;
  let ifnotliked;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Mediaplayer: {
          namespaced: true,
          state: {
            currentsong: {
              track: {
                availableMarkets: ["EG,US"],
                _id: "5e80ceb853e67b1e284a0f15",
                trackNumber: 1,
                name: "HAVANA",
                artistId: "5e80c9b614c8566d6cd9b40e",
                albumId: "5e80cc2b14c8566d6cd9b40f",
                discNumber: 1,
                explicit: false,
                type: "Track",
                acousticness: 10,
                danceability: 23,
                energy: 100,
                instrumentalness: 4,
                key: 90,
                liveness: 25,
                loudness: 70,
                mode: 56,
                speechiness: 67,
                tempo: 76,
                timeSignature: "2020-03-29T16:37:12.554Z",
                valence: 70,
                __v: 0,
                images: [],
              },
              isLiked: true,
              album: {
                name: "HELLO KIDS",
                _id: "5e80cc2b14c8566d6cd9b40f",
                artist: { name: "nada", _id: "5e80c9b614c8566d6cd9b40e" },
              },
              isPlaylist: true,
              playlistId: "5e891c8edb96e26db4efc790",
              isPlayable: true,
            },
            playicon: "false",
          },
          getters: {
            Get_Currentsong: (state) => {
              return state.currentsong;
            },
            playicon: (state) => {
              return state.playicon;
            },
          },
        },
        Playlist:{
          namespaced:true,
          state:{
            showModalAdd:false
          }
        }
      },
    });
    wrapper = shallowMount(SongComponent, {
      localVue,
      store,
      propsData: {
        song_name: "my song",
        song_album: "burtonhollow",
        song_artists: "civil wars",
        song_length: 500,
      },
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("if component is clicked ", async () => {
    wrapper.vm.playSong();
  });
});
