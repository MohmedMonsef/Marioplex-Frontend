import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import ConfirmEmail from "../../src/views/ConfirmEmail";

describe("ConfirmEmail", () => {
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
            ResendEmail: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(ConfirmEmail, {
      store,
      localVue,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Resend Confirmation Email", () => {
    wrapper.vm.ResendConfirmationEmail();
    expect("ResendEmail").toHaveBeenCalled;
  });
});
