import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import seealltrackt from "../../src/views/SeeallTrack";

describe("seealltrackt", () => {
  let wrapper;
  let store;

  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Search: {
          namespaced: true,
          state: {
            search_Value: "",
            track: [],
          },
          getters: {
            get_value(state) {
              return state.search_Value;
            },
            gettrack(state) {
              return state.track;
            },
          },
          actions: {
            artistin: jest.fn(),
          },
        },
      },
    });
  });

  it("when render dispatch", () => {
    wrapper = shallowMount(seealltrackt, {
      store,
      localVue,
    });
    wrapper.vm.inartist()
    expect("inartist").toHaveBeenCalled;
  });
});
