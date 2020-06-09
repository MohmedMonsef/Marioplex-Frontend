import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AllLists from "../../src/views/AllLists";

describe("AllLists", () => {
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
            POPplaylists: {
                playlists: [],
            }
          },
          getters: {
            POPplaylists: (state) => state.POPplaylists
          },
          actions: {
            showPopularPlaylists: jest.fn()
          }
        },
      },
    });
    wrapper = shallowMount(AllLists, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
