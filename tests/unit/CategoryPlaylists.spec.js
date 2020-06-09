import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import categoryplaylist from "../../src/views/CategoryPlaylists";

describe("categoryplaylist", () => {
  let wrapper;
  let store;

  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Categorys: {
          namespaced: true,
          state: {
            categoryplaylists5:[]
          },
          getters: {
            getcategoryplaylists5(state) {
              return state.categoryplaylists5;
            }
          },
        },
      },
    });
  });

  it("when render", () => {
    wrapper = shallowMount(categoryplaylist, {
      store,
      localVue,
    });
  });
});
