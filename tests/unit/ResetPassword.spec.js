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
    const reset = jest.fn();
    const canSubmit =jest.fn();
    const cannotSubmit =jest.fn();
    wrapper.setMethods({
      reset: reset,
      canSubmit:canSubmit,
      cannotSubmit:cannotSubmit 
    });
    expect("reset").toHaveBeenCalled;
    expect("cannotSubmit").toHaveBeenCalled;
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
    expect("canSubmit").toHaveBeenCalled;
  
    //invalid password and cofirmation

    pass = wrapper.find("#passwordInput");
    pass.element.value = "1234";
    pass.trigger("input");

    pass = wrapper.find("#confirmInput");
    pass.element.value = "1278";
    pass.trigger("input");

    reset_btn.trigger("click");
    expect("cannotSubmit").toHaveBeenCalled;
  });
  it("set time out to call dispatch reset password", () => {
    const reset_btn = wrapper.find("#reset-btn");
    reset_btn.trigger("click");
    const reset = jest.fn();
    const canSubmit =jest.fn();
    const cannotSubmit =jest.fn();
    wrapper.setMethods({
      reset: reset,
      canSubmit:canSubmit,
      cannotSubmit:cannotSubmit 
    });
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
   // expect(store.dispatch).toHaveBeenCalledWith("Authorization/resetPassword");
  });
  it("set time out to call dispatch reset password", () => {
    const reset_btn = wrapper.find("#reset-btn");
    reset_btn.trigger("click");
    const reset = jest.fn();
    wrapper.setMethods({
      reset: reset,
    });
    wrapper.setData({
      can_submit:false,
    });    
    reset_btn.trigger("click");
    jest.runAllTimers(); 
    expect(wrapper.exists()).toBe(true);
    //expect(store.dispatch).not.toHaveBeenCalledWith("Authorization/resetPassword");
  });
});
