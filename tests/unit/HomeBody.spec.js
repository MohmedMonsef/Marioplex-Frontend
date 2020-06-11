import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import HomeBody from "../../src/components/HomeBody";
import VueRouter from "vue-router";

describe("HomeBody", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Authorization: {
          namespaced: true,
          state: {
            GetStatus: "success"
          },
          getters: {
            GetStatus: state => state.GetStatus
          }
        }
      }
    });
    wrapper = shallowMount(HomeBody, {
      localVue,
      store
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
