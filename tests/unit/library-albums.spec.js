import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import libraryAlbums from "../../src/views/LibraryAlbums";

describe("libraryAlbums", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        UserLibrary: {
          namespaced: true,
          state: {
            albums: [],
            loadingalbums: 1,
          },
          getters: {
            albums: (state) => state.albums,
            loadingalbums: (state) => state.loadingalbums,
          },
          actions: {
            showUserAlbums: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(libraryAlbums, {
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
  it("Default screen Rendering", () => {
    let defaultscreen = wrapper.find("#defaultscreen");

    expect(defaultscreen.exists()).toBe(true);
  });
});
