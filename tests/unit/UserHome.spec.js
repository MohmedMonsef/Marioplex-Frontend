import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import UserHome from "../../src/views/UserHome";

describe("UserHome", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        ShowWebPlayer: {
          namespaced: true,
          state: {
            POPplaylists: {
                playlists: []
            },
            POPartists: 
              {
                artists: []
              }
            ,
            POPalbums: 
              {
                albums: []
              }
            ,
            POPnewreleases: 
              {
                albums: []
              }
            
          },
          getters: {
            POPplaylists: state => state.POPplaylists,
            POPartists: state => state.POPartists,
            POPalbums: state => state.POPalbums,
            POPnewreleases: state => state.POPnewreleases
          },
          actions: {
            showPopularPlaylists: jest.fn(),
            showPopularArtists: jest.fn(),
            showPopularAlbums: jest.fn(),
            showPopularNewreleases: jest.fn()
          }
        },
        creatplaylist: {
          namespaced: true,
          state: {
            playlists: [],
            loadingplaylists: 1
          },
          getters: {
            playlists: state => state.playlists,
            loadingplaylists: state => state.loadingplaylists
          },
          actions: {
            showplaylists: jest.fn()
          }
        },
        authorization: {
          namespaced: true,
          state: {
            status: "success"
          },
          getters: {
            GetStatus: state => state.status
          }
        }
      }
    });
    wrapper = shallowMount(UserHome, {
      localVue,
      store
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("popular playlists Rendering", async () => {
    let has_popular_playlists = wrapper.find(".has_popular_playlists");

    expect(has_popular_playlists.exists()).toBe(true);
  });
});
