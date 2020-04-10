import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import ForgetPassword from "../../src/views/ForgetPassword";

describe("ForgetPassword", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        authorization: {
          namespaced: true,
          actions: {
            facebook_signUp: jest.fn(),
            reset: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(ForgetPassword, {
      store,
      localVue
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("input email", () => {
    let email = wrapper.find("#email");
    email.element.value = "mm@gmail.com";
    email.trigger("input");
    expect(wrapper.vm.email).toBe("mm@gmail.com");
  });
  it("invalid input", async () => {
    const send_btn = wrapper.find("#send-btn");
    send_btn.trigger("click");
    const send = jest.fn();
    wrapper.setMethods({
      send: send
    });
    expect("send").toHaveBeenCalled;
    await wrapper.vm.$nextTick();
    const req_error = wrapper.find("#req_error");
    expect(req_error.exists()).toBe(true);
  });
  it("valid input", async () => {
    let email = wrapper.find("#email");
    email.element.value = "mm@gmail.com";
    email.trigger("input");
    const send_btn = wrapper.find("#send-btn");
    send_btn.trigger("click");
    const send = jest.fn();
    wrapper.setMethods({
      send: send
    });
    expect("send").toHaveBeenCalled;
    await wrapper.vm.$nextTick();
    const req_error = wrapper.find("#req_error");
    expect(req_error.exists()).toBe(false);
    const submitted = wrapper.find("#submitted");
    expect(submitted.exists()).toBe(true);
  });
});
