import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ArtistOverview from "@/components/ArtistOverview.vue";

describe("ArtistOverview", () => {
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
        ArtistPage: {
          namespaced: true,
          store: {
            artist_tracks: [],
            artist_albums: [],
            tracks_length: ""
          },
          getters: {
            artist_tracks: state => {
              return state.artist_tracks;
            },
            artist_albums: state => {
              return state.artist_albums;
            },
            tracks_length: state => {
              return state.tracks_length;
            }
          },
          actions: {
            artist_tracks: jest.fn(),
            artist_albums: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(ArtistOverview, {
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
  it("Artist Overview", () => {
    expect("artist_tracks").toHaveBeenCalled;
    expect("artist_albums").toHaveBeenCalled;
  });
});
