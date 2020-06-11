import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AllAlbums from "../../src/views/AllAlbums";

describe("AllAlbums", () => {
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
            POPalbums: {
              albums: []
            }
          },
          getters: {
            POPalbums: state => state.POPalbums
          },
          actions: {
            showPopularAlbums: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(AllAlbums, {
      localVue,
      store
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
