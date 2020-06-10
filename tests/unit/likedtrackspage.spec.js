import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import LikedTracks from "../../src/views/LikedTracks";

describe("LikedTracks", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        LikedTracks: {
          namespaced: true,
          state: {
            likedtracks_tracks: [],
            likedtracks_loaded: 0,
            likedtracks_length: "",
            id: ""
          },
          getters: {
            likedtracks_tracks: state => state.likedtracks_tracks,
            likedtracks_length: state => state.likedtracks_length,
            likedtracks_loaded: state => state.likedtracks_loaded,
            playlist_id: state => state.playlist_id,
          },
          actions: {
            likedtracks_tracks: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(LikedTracks, {
      store,
      localVue,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Liked Tracks Page", () => {
    expect("likedtracks_tracks").toHaveBeenCalled;
  });
});
