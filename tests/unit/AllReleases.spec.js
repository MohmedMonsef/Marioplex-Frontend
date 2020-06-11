import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AllReleases from "../../src/views/AllReleases";

describe("AllReleases", () => {
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
            POPnewreleases: {
              albums: [],
            },
          },
          getters: {
            POPnewreleases: (state) => state.POPnewreleases,
          },
          actions: {
            showPopularNewreleases: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(AllReleases, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
