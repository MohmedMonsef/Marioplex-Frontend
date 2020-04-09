import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Login from "../../src/views/Login";

describe("Login", () => {
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
          state: {
            status: ""
          },
          getters: {
            GetStatus: state => {
              return state.status;
            }
          },
          actions: {
            facebook_signUp: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(Login, {
      localVue,
      store
    });
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
  it("facebook login", () => {
    const facebook = wrapper.find("#facebook-btn");
    facebook.trigger("click");
    const facebook_login = jest.fn();
    wrapper.setMethods({
      facebook_login: facebook_login
    });
    expect("facebook_login").toHaveBeenCalled;
  });
  it("login", () => {
    const login_btn = wrapper.find("#login-btn");
    login_btn.trigger("click");
    const login = jest.fn();
    wrapper.setMethods({
      login: login
    });
    expect("login").toHaveBeenCalled;
  });
});
