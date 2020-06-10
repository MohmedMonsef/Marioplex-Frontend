import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import seeallalbum from "../../src/views/SeeallAlbum";

describe("seeallalbum", () => {
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
            albumres: [],
          },
          getters: {
            get_value(state) {
              return state.search_Value;
            },
            getalbumres(state) {
              return state.albumres;
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
    wrapper = shallowMount(seeallalbum, {
      store,
      localVue,
    });
    wrapper.vm.inartist()
    expect("inartist").toHaveBeenCalled;
  });
});
