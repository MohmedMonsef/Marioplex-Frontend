import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import categoryplaylist from "../../src/views/CategoryPlaylists";

describe("categoryplaylist", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      categoryId: "",
      name: ""
    }
  };
  localVue.prototype.$route = $route;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Categorys: {
          namespaced: true,
          state: {
            categoryplaylists5: []
          },
          getters: {
            getcategoryplaylists5(state) {
              return state.categoryplaylists5;
            }
          },
          actions: {
            categoryplaylists: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(categoryplaylist, {
      store,
      localVue,
      propsData: {
        categoryId: "",
        name: ""
      }
    });
  });

  it("when render", () => {
    wrapper = shallowMount(categoryplaylist, {
      store,
      localVue
    });
  });
});
