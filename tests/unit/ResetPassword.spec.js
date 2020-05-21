import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ResetPassword from "../../src/views/ResetPassword";

describe("ResetPassword", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    query: {
       token: "",
    },
  };
  localVue.prototype.$route = $route;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
       Authorization: {
          namespaced: true,
          actions: {
            resetPassword: jest.fn()
          },
        },
      },
    });
    wrapper = shallowMount(ResetPassword, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("input email", () => {
    let pass = wrapper.find("#passwordInput");
    pass.element.value = "pass";
    pass.trigger("input");
    expect(wrapper.vm.password).toBe("pass");
  });
 
});
