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
        Authorization: {
          namespaced: true,
          actions: {
            facebook_signUp: jest.fn(),
            reset: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(ForgetPassword, {
      store,
      localVue,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
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
    wrapper.vm.send();
    await wrapper.vm.$nextTick();
    const req_error = wrapper.find("#req_error");
    expect(req_error.exists()).toBe(true);
  });
  it("valid input", () => {
    wrapper.vm.email = "mm@gmail.com";
    wrapper.vm.send();
    expect("reset").toHaveBeenCalled;
  });
});
