import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import PlaylistView from "../../src/views/PlaylistView";

describe("PlaylistView", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      id: ""
    }
  };
  localVue.prototype.$route = $route;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Playlist: {
          namespaced: true,
          store: {
            playlist_tracks: [],
            playlist_loaded: -1,
            playlist_length: "",
            playlist_image: "",
          },
          getters: {
            playlist_tracks: state => {
              return state.playlist_tracks;
            },
            playlist_length: state => {
                return state.playlist_length;
              },
              playlist_loaded: state => {
                return state.playlist_loaded;
              },
              playlist_image: state => {
                return state.playlist_image;
              },
          },
          actions: {
            playlist_tracks: jest.fn(),
            ReorderTracks: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(PlaylistView, {
      store,
      localVue,
      propsData: {
        id: ""
      }
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Playlist View", () => {
    wrapper.setData({
        oldIndex: "",
        newIndex: "",
        playlist_id: "",
    }),
    window.dispatchEvent(new Event('load'));
    expect("playlist_tracks").toHaveBeenCalled;
    // wrapper.vm.ReorderTracks();
    // expect("ReorderTracks").toHaveBeenCalled;
  });
});
