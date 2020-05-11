import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import libraryPlaylists from "../../src/views/library-playlists";

describe("libraryPlaylists", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        creatplaylist: {
          namespaced: true,
          state: {
            playlists: [],
            loadingplaylists: 1,
          },
          getters: {
            playlists: (state) => state.playlists,
            loadingplaylists: (state) => state.loadingplaylists,
          },
          actions: {
            showplaylists: jest.fn(),
          },
        },
        userlibrary: {
          namespaced: true,
          state: {
            songs: [],
          },
          getters: {
            songs: (state) => state.songs,
          },
          actions: {
            showUserSongs: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(libraryPlaylists, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("Default screen Rendering", async () => {
    let defaultscreen = wrapper.find("#defaultscreen");

    expect(defaultscreen.exists()).toBe(true);
  });
});
