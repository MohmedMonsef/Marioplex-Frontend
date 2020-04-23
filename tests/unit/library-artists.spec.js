import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import libraryArtists from "../../src/views/library-artists";

describe("libraryArtists", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        userlibrary: {
          namespaced: true,
          state: {
            artists: [],
            loadingartists: 0
          },
          getters: {
            artists: state => state.artists,
            loadingartists: state => state.loadingartists
          },
          actions: {
            showUserArtists: jest.fn()
          }
        }
    }
        
    });
    wrapper = shallowMount(libraryArtists, {
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
  it("loading screen Rendering", () => {
    let loading = wrapper.find(".loading");

    expect(loading.exists()).toBe(true);
    let notloading = wrapper.find(".notloading");

    expect(notloading.exists()).toBe(false);
  });
});