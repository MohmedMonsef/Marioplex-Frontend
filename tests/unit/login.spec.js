import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Login from "../../src/views/Login";
import LogoHeader from "@/components/LogoHeader.vue";
import Divider from "@/components/Divider.vue";

describe("Login", () => {
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
            status: "",
            token: "",
            User: {},
          },
          getters: {
            GetStatus: (state) => {
              return state.status;
            },
          },
          actions: {
            facebook_signUp: jest.fn(),
            login: jest.fn()
          },
        },
      },
    });
    wrapper = shallowMount(Login, {
      localVue,
      store,
      stubs: {
        LogoHeader,
        Divider,
      },
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
  it("input password", () => {
    let password = wrapper.find("#password");
    password.element.value = "1010";
    password.trigger("input");
    expect(wrapper.vm.password).toBe("1010");
  });
  it("required inputs", async () => {
    const login_btn = wrapper.find("#login-btn");
    login_btn.trigger("click");
    await wrapper.vm.$nextTick();
    wrapper.vm.cannotSubmit();
    expect(wrapper.find("#req_email").exists()).toBe(true);
    expect(wrapper.find("#req_password").exists()).toBe(true);
   
  });
  it("facebook login", () => {
    wrapper.vm.facebook_login();
    expect("facebook_signUp").toHaveBeenCalled;
  });
  it("login", () => {
    wrapper.vm.login();
    expect("login").toHaveBeenCalled;
  });
  it("renders time out function", () => {
    let email = wrapper.find("#email");
    email.element.value = "mm@gmail.com";
    email.trigger("input");
   
    let password = wrapper.find("#password");
    password.element.value = "1010";
    password.trigger("input");

    const login_btn = wrapper.find("#login-btn");
    login_btn.trigger("click");
    wrapper.vm.login();
  });
});
