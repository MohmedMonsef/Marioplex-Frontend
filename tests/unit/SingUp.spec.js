import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import SignUp from "../../src/views/SignUp";

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
            facebook_signUp: jest.fn(),
            signUp: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(SignUp, {
      localVue,
      store
    });
  });
  it("input email", async() => {
    let email = wrapper.find("#email");
    email.element.value = "mm@gmail.com";
    email.trigger("input");
    expect(wrapper.vm.email).toBe("mm@gmail.com");

    //invalid
    email.element.value = "mmgmail.com";
    email.trigger("input");

    const signup_btn = wrapper.find("#signup-btn");
    signup_btn.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#invalid_email").exists()).toBe(true);
  });
  it("input email confirmation",async () => {
    let confirm_email = wrapper.find("#confirm_email");
    confirm_email.element.value = "mm@gmail.com";
    confirm_email.trigger("input");
    expect(wrapper.vm.email_confirmation).toBe("mm@gmail.com");

    //mismatching emails
    let email = wrapper.find("#email");
    email.element.value = "mm@gmail.com";
    email.trigger("input");

    confirm_email.element.value = "mmh@gmail.com";
    confirm_email.trigger("input");

    const signup_btn = wrapper.find("#signup-btn");
    signup_btn.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#mistched_emails").exists()).toBe(true);
  });
  it("input password",async () => {
    let password = wrapper.find("#password");
    password.element.value = "1010";
    password.trigger("input");
    expect(wrapper.vm.password).toBe("1010");

    const signup_btn = wrapper.find("#signup-btn");
    signup_btn.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#short_password").exists()).toBe(true);
  });
  it("input username", () => {
    let username = wrapper.find("#username");
    username.element.value = "menna";
    username.trigger("input");
    expect(wrapper.vm.username).toBe("menna");
  });
    it("input country",async () => {
      let country = wrapper.find(".country_select");
      country.element.value = "Egypt";
      country.selected = true;
      country.trigger("change");
      expect(wrapper.vm.country).toBe("Egypt");

      country.element.value = "Choose a country";
      country.selected = true;
      country.trigger("change");
//invalid input
      const signup_btn = wrapper.find("#signup-btn");
      signup_btn.trigger("click");
      await wrapper.vm.$nextTick();

      expect(wrapper.find("#req_country").exists()).toBe(true);
    });
    it("input date",async () => {
      let day = wrapper.find("#day");
      day.element.value = "1";
      day.trigger("input");
      expect(wrapper.vm.day).toBe("1");

      let month = wrapper.find("#month");
      month.element.value = "1";
      month.trigger("input");
      expect(wrapper.vm.day).toBe("1");

      let year = wrapper.find("#year");
      year.element.value = "1999";
      year.trigger("input");
      expect(wrapper.vm.year).toBe("1999");

      //trigerring invalid input
      day.element.value = "n";
      day.trigger("input");
      month.element.value = "0";
      month.trigger("input");
      year.element.value = "2009";
      year.trigger("input");

      const signup_btn = wrapper.find("#signup-btn");
      signup_btn.trigger("click");
      await wrapper.vm.$nextTick();

      expect(wrapper.find("#req_day").exists()).toBe(true);
      expect(wrapper.find("#req_month").exists()).toBe(true);
      expect(wrapper.find("#invalid_age").exists()).toBe(true);
    });
    it("input gender", () => {
      let fgender = wrapper.find("#female_gender");
      fgender.selected = true;
      fgender.trigger("change");
      expect(wrapper.vm.gender).toBe("m");
    });
    it("required inputs", async () => {
      const signup_btn = wrapper.find("#signup-btn");
      signup_btn.trigger("click");
      await wrapper.vm.$nextTick();
      expect(wrapper.find("#req_email").exists()).toBe(true);
      expect(wrapper.find("#req_password").exists()).toBe(true);
      expect(wrapper.find("#confirm_email_req").exists()).toBe(true);
      expect(wrapper.find("#req_password").exists()).toBe(true);
      expect(wrapper.find("#req_username").exists()).toBe(true);
      expect(wrapper.find("#req_country").exists()).toBe(true);
      expect(wrapper.find("#req_day").exists()).toBe(true);
      expect(wrapper.find("#req_month").exists()).toBe(true);
      expect(wrapper.find("#req_year").exists()).toBe(true);
      expect(wrapper.find("#req_gender").exists()).toBe(true);
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
    const signup_btn = wrapper.find("#signup-btn");
    signup_btn.trigger("click");
    const signUp = jest.fn();
    wrapper.setMethods({
      signUp: signUp
    });
    expect("signUp").toHaveBeenCalled;
  });
});
