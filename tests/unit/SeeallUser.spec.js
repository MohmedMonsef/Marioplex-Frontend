import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import seealluser from "../../src/views/SeeallUser";

describe("seealluser", () => {
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
            user: [],
          },
          getters: {
            get_value(state) {
              return state.search_Value;
            },
            getuser(state) {
              return state.user;
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
    wrapper = shallowMount(seealluser, {
      store,
      localVue,
    });
    wrapper.vm.inartist();
    expect("inartist").toHaveBeenCalled;
  });
});
