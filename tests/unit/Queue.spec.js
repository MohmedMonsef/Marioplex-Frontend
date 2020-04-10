import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Queue from "../../src/views/Queue";

describe("Queue", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Queue: {
          namespaced: true,
          state: {
            Queue:[ {
                fulltrack: {
                  track: {
                    availableMarkets: ['"er,ty,eue,euu"'],
                    _id: "5e85f4281ba5cf17ccca66dc",
                    url: "5e85f4281ba5cf17ccca66da",
                    images: [],
                    duration: 436,
                    trackNumber: 236,
                    name: '"track7"',
                    artistId: "5e833a51a51d971174923f17",
                    albumId: "5e833b412b9d7718a491c850",
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
                    timeSignature: "2020-04-02T14:18:16.464Z",
                    valence: 70,
                    like: 0,
                    __v: 0
                  },
                  isLiked: false,
                  album: {
                    name: "album1",
                    _id: "5e833b412b9d7718a491c850",
                    artist: {
                      name: "ahmedsamir",
                      _id: "5e833a51a51d971174923f17"
                    }
                  }
                },
                isQueue: false,
                isPlaylist: true,
                index: 2
              }],
            NextUp:[],
            loading:1
          },
          getters: {
            Get_Queued: state => state.Queue,
            Get_Nextup: state => state.NextUp,
            loading: state => state.loading
          },
          actions: {
              Queue:jest.fn()
          }
        },
        mediaplayer:{
            namespaced:true,
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
                    images: []
                  },
                  isLiked: true,
                  album: {
                    name: "HELLO KIDS",
                    _id: "5e80cc2b14c8566d6cd9b40f",
                    artist: { name: "nada", _id: "5e80c9b614c8566d6cd9b40e" }
                  },
                  isPlaylist: true,
                  playlistId: "5e891c8edb96e26db4efc790",
                  isPlayable: true
                }
              },
              getters: {
                Get_Currentsong: state => {
                  return state.currentsong;
            }
           },
            actions:{
                get_currentsong:jest.fn()
            }
       
        }
      }
    });
    wrapper = shallowMount(Queue, {
      localVue,
      store
    });
  });
  it("Headers Rendering", () => {

    let main_header = wrapper.find("#main_header")
    let current_header = wrapper.find("#current_header")
    let queued_header =wrapper.find("#queued_header")
    let next_header =wrapper.find("#next_header")

    expect(main_header.exists()).toBe(true);
    expect(current_header.exists()).toBe(true);
    expect(queued_header.exists()).toBe(true);
    expect(next_header.exists()).toBe(false);
  });

});
