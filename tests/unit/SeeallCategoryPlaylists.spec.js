import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import seeallcategoryplaylists from "../../src/views/SeeallCategoryPlaylists";

describe("seeallcategoryplaylists", () => {
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
            categoryplaylists: []
          },
          getters: {
            getcategoryplaylists(state) {
              return state.categoryplaylists;
            }
          }
        }
      }
    });
  });

  it("when render dispatch", () => {
    wrapper = shallowMount(seeallcategoryplaylists, {
      store,
      localVue
    });
  });
});
