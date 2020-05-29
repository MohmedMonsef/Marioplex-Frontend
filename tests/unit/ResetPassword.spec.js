import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ResetPassword from "../../src/views/ResetPassword";

describe("ResetPassword", () => {
  let wrapper;
  let store;
  jest.useFakeTimers();
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
      propsData: {
        token: "",
      },
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

    pass = wrapper.find("#confirmInput");
    pass.element.value = "pass";
    pass.trigger("input");
    expect(wrapper.vm.password_confirmation).toBe("pass");
  });
  it("reset password", () => {
    const reset_btn = wrapper.find("#reset-btn");
    reset_btn.trigger("click");

    wrapper.vm.reset();
    wrapper.vm.canSubmit();
    wrapper.vm.cannotSubmit();
  
    wrapper.setData({
      trigger_validation: true,
      can_submit:true
    });
    //valid password and confirm
    let pass = wrapper.find("#passwordInput");
    pass.element.value = "12345678";
    pass.trigger("input");

    pass = wrapper.find("#confirmInput");
    pass.element.value = "12345678";
    pass.trigger("input");

    reset_btn.trigger("click");
    wrapper.vm.canSubmit();
  
    //invalid password and cofirmation

    pass = wrapper.find("#passwordInput");
    pass.element.value = "1234";
    pass.trigger("input");

    pass = wrapper.find("#confirmInput");
    pass.element.value = "1278";
    pass.trigger("input");

    reset_btn.trigger("click");
    wrapper.vm.cannotSubmit();
  });
  it("set time out to call dispatch reset password", () => {
    const reset_btn = wrapper.find("#reset-btn");
    reset_btn.trigger("click");

    wrapper.setData({
      trigger_validation: true,
      can_submit:true,
      password: "12345678"  
    });
    //valid password and confirm
    let pass = wrapper.find("#passwordInput");
    pass.element.value = "12345678";
    pass.trigger("input");

    pass = wrapper.find("#confirmInput");
    pass.element.value = "12345678";
    pass.trigger("input");
    
    reset_btn.trigger("click");
    jest.runAllTimers(); 
    expect(wrapper.exists()).toBe(true);
  });
  it("set time out to call dispatch reset password", () => {
    const reset_btn = wrapper.find("#reset-btn");
    reset_btn.trigger("click");
    
    wrapper.setData({
      can_submit:false,
    });    
    reset_btn.trigger("click");
    jest.runAllTimers(); 
    expect(wrapper.exists()).toBe(true);
  });
});
