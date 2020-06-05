import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ThanksForConfirmation from "../../src/views/ThanksForConfirmation";

describe("ThanksForConfirmation", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    query: {
      id: ""
    }
  };
  localVue.prototype.$route = $route;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Authorization: {
          namespaced: true,
          actions: {
            ConfirmEmail: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(ThanksForConfirmation, {
      store,
      localVue,
      propsData: {
        id: ""
      }
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Thanks for Email Confirmation", () => {
    wrapper.vm.thanksForConfirmation();
    expect("ConfirmEmail").toHaveBeenCalled;
  });
});
