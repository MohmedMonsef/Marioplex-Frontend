import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import seeallartist from "../../src/views/SeeallArtist";

describe("seeallartist", () => {
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
            result: [
              {
                name: "lala",
                artistId: "1234",
                images: [],
              },
            ],
          },
          getters: {
            get_value(state) {
              return state.search_Value;
            },
            getresult(state) {
              return state.result;
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
    wrapper = shallowMount(seeallartist, {
      store,
      localVue,
    });
    wrapper.vm.inartist()
    expect("inartist").toHaveBeenCalled;
  });
});
