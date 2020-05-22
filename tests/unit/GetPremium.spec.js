import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import GetPremium from "../../src/components/GetPremium";

describe("GetPremium", () => {
  let wrapper;
  let store;
  jest.useFakeTimers();
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
       Authorization: {
          namespaced: true,
          store:{
            upgraded:true
          },
          getters:{
            upgraded: (state) => {
                return state.upgraded;
              },
          },
          actions: {      
            toPremium: jest.fn()
          },
        },
      },
    });
    wrapper = shallowMount(GetPremium, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    let SecurityCode = wrapper.find("#SecurityCode");
    //valid input
    SecurityCode.element.value = "101";
    SecurityCode.trigger("input");

    let CreditNumber = wrapper.find("#CreditNumber");
    CreditNumber.element.value = "10100000";
    CreditNumber.trigger("input");

    expect(wrapper.exists()).toBe(true);

    //invalid input

    SecurityCode.element.value = "x";
    SecurityCode.trigger("input");

    CreditNumber.element.value = "c";
    CreditNumber.trigger("input");

    expect(wrapper.exists()).toBe(true);
  });
  it("input date and invalid security code", () => {
    wrapper.vm.SecurityCode = "11111";
    wrapper.vm.valid_security();
    
    expect(wrapper.vm.vsecurity).toBe(false);
  });
  it("invalid year", () => {
    wrapper.vm.year = "2";
    expect(wrapper.vm.valid_year()).toBe(false);
  });
  it("invalid month", () => {
    wrapper.vm.month = "2";
    expect(wrapper.vm.valid_month()).toBe(false);
  });
  it("premium updrate", () => {
    const signup_btn = wrapper.find("#premium-btn");
    signup_btn.trigger("click");
    expect("toPremium").toHaveBeenCalled;
  });

});
