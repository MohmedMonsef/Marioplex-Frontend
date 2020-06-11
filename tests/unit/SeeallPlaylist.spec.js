import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import seeallplaylist from "../../src/views/SeeallPlaylist";

describe("seeallplaylist", () => {
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
            playlistres: [],
          },
          getters: {
            get_value(state) {
              return state.search_Value;
            },
            getplaylistsres(state) {
              return state.playlistres;
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
    wrapper = shallowMount(seeallplaylist, {
      store,
      localVue,
    });
    wrapper.vm.inartist();
    expect("inartist").toHaveBeenCalled;
  });
});
