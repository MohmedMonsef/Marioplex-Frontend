import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AllArtists from "../../src/views/AllArtists";

describe("AllArtists", () => {
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
            POPartists: {
                artists: [],
            }
          },
          getters: {
            POPartists: (state) => state.POPartists
          },
          actions: {
            showPopularArtists: jest.fn()
          }
        },
      },
    });
    wrapper = shallowMount(AllArtists, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
