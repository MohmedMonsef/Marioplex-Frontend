import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import LibArtistsDefault from "@/components/LibArtistsDefault.vue";
describe("LibArtistsDefault", () => {
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
            actions: {
            search_V: jest.fn(),
            clear:jest.fn()
            },
          },
        },
      });
    });
  
    it("when render ", () => {
      wrapper = shallowMount(LibArtistsDefault, {
        store,
        localVue,
      });
      const btn = wrapper.find(".search_button");
      btn.trigger("click");
      expect("search_V").toHaveBeenCalled;
      expect("clear").toHaveBeenCalled;
    });
  });
  
