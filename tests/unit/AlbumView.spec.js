import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import AlbumView from "../../src/views/AlbumView";

describe("AlbumView", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      id: "",
    },
  };
  localVue.prototype.$route = $route;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Album: {
          namespaced: true,
          store: {
            album_tracks: [],
            album_length: "",
            album_name: "",
            album_loaded: false,
            artist_name: "",
            album_image: "",
            artist_id: "",
          },
          getters: {
            album_tracks: (state) => {
              return state.album_tracks;
            },
            album_length: (state) => {
              return state.album_length;
            },
            album_loaded: (state) => {
              return state.album_loaded;
            },
            artist_name: (state) => {
              return state.artist_name;
            },
            album_name: (state) => {
              return state.album_name;
            },
            artist_id: (state) => {
              return state.artist_id;
            },
            album_image: (state) => {
              return state.album_image;
            },
          },
          actions: {
            album_tracks: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(AlbumView, {
      store,
      localVue,
      propsData: {
        id: "",
      },
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Album View", () => {
    window.dispatchEvent(new Event("load"));
    expect("album_tracks").toHaveBeenCalled;
  });
});
