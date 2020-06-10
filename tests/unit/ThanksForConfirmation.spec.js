import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ThanksForConfirmation from "../../src/views/ThanksForConfirmation";

describe("ThanksForConfirmation", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let $route = {
    query: {
      id: "",
      type:""
    },
  };
  localVue.prototype.$route = $route;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Authorization: {
          namespaced: true,
          actions: {
            ConfirmEmail: jest.fn(),
            ConfirmUpdate: jest.fn(),
            logout: jest.fn(),
            ConfirmPremium: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(ThanksForConfirmation, {
      store,
      localVue,
      propsData: {
        id: "",
        type:""
      },
      stubs: ['router-link', 'router-view']
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Thanks for Email Confirmation", () => {
    $route.query.type == "signup";
    wrapper.vm.thanksForConfirmation();
    expect("ConfirmEmail").toHaveBeenCalled;

    $route.query.type == "update";
    wrapper.vm.thanksForConfirmation();
    expect("ConfirmUpdate").toHaveBeenCalled;
    expect("logout").toHaveBeenCalled;

    $route.query.type == "";
    wrapper.vm.thanksForConfirmation();
    expect("ConfirmPremium").toHaveBeenCalled;
    expect("logout").toHaveBeenCalled;

    
  });
});
