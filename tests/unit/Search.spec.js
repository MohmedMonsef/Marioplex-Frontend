import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Search from "@/views/Search.vue";

describe("Search", () => {
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
            getcategory: [],
            loading: false
          },
          getters: {
            getcategory: state => state.getcategory,
            loading: state => state.loading
          },
          actions: {
            showcategory: jest.fn()
          }
        },
        Search: {
          namespaced: true,
          state: {
            get_value: "",
            loadingsearch: false,
            showeres: ""
          },
          getters: {
            get_value: state => state.get_value,
            loadingsearch: state => state.loadingsearch,
            showeres: state => state.showeres
          }
        }
      }
    });
    wrapper = shallowMount(Search, {
      store,
      localVue
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
