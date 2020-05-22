import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import LikedTracks from "../../src/views/LikedTracks";
import SongComponent from "@/components/SongComponent.vue";
import likedtracks_info from "@/components/LikedtracksInfo.vue";
import emptylikedtracks from "@/components/EmptyLikedTracks.vue";
describe("ForArtist", () => {
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
            owner_name: "",
          },
          getters: {
            likedtracks_tracks: (state) => state.likedtracks_tracks,
            likedtracks_loaded: (state) => state.likedtracks_loaded,
            likedtracks_length: (state) => state.likedtracks_length,
          },
          actions: {
            likedtracks_tracks: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(LikedTracks, {
      localVue,
      store,
      stubs: {
        SongComponent,
        likedtracks_info,
        emptylikedtracks,
      },
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
