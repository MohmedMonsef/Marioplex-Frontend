import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import HomeBodyNoUser from "../../src/components/HomeBodyNoUser";

describe("HomeBodyNoUser", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
        modules: {
          Authorization: {
            namespaced: true,
            state: {
                GetStatus:"success"
            },
            getters: {
                GetStatus: (state) => state.GetStatus,
            },
          },
        },
      });
    wrapper = shallowMount(HomeBodyNoUser, {
      localVue,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);

  });
});
