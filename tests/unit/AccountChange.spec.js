import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AccountChange from "@/components/AccountChange.vue";

describe("AccountChange", () => {
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
            isEdited: ""
          },
          getters: {
            isEdited: state => state.isEdited
          },
          actions: {
            saveEdit: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(AccountChange, {
      localVue,
      store
    });
    wrapper.setData({
      password: "",
      newpassword: "",
      repeatedPassword: "",
      canSet1: false,
      canSet2: false,
      canSet3: false,
      canSet4: false,
      saved: "0"
    });
  });
  it("call change Password functions", () => {
    const editButton = wrapper.find(".save");
    editButton.trigger("click");
    wrapper.vm.changePassword();
    expect("req_password").toHaveBeenCalled;
    expect("req_newpassword").toHaveBeenCalled;
    expect("req_repeatpassword").toHaveBeenCalled;
    expect("equal_password").toHaveBeenCalled;
  });
  it("toggel canSet1 to true", () => {
    const password = wrapper.find("#current");
    password.element.value = "12345678";
    password.trigger("input");
    wrapper.vm.req_password();
    expect(wrapper.vm.canSet1).toBe(true);
  });
  it("toggel canSet1 to false", () => {
    const password = wrapper.find("#current");
    password.element.value = "";
    password.trigger("input");
    wrapper.vm.req_password();
    expect(wrapper.vm.canSet1).toBe(false);
  });

  it("toggel canSet2 to true", () => {
    const newpassword = wrapper.find("#new");
    newpassword.element.value = "12345678";
    newpassword.trigger("input");
    wrapper.vm.req_newpassword();
    expect(wrapper.vm.canSet2).toBe(true);
  });
  it("toggel canSet2 to false", () => {
    const newpassword = wrapper.find("#new");
    newpassword.element.value = "";
    newpassword.trigger("input");
    wrapper.vm.req_newpassword();
    expect(wrapper.vm.canSet2).toBe(false);
  });

  //   it("toggel canSet3 to true", () => {
  //     const repeatpassword = wrapper.find("#repeat");
  //     repeatpassword.element.value = "12345678";
  //     repeatpassword.trigger("input");
  //     wrapper.vm.req_repeatpassword();
  //     expect(wrapper.vm.canSet3).toBe(true);
  //   });
  //   it("toggel canSet3 to false", () => {
  //     const repeatpassword = wrapper.find("#repeat");
  //     repeatpassword.element.value = "";
  //     repeatpassword.trigger("input");
  //     wrapper.vm.req_repeatpassword();
  //     expect(wrapper.vm.canSet3).toBe(false);
  //   });

  it("toggel canSet4 to true", () => {
    const newpassword = wrapper.find("#new");
    newpassword.element.value = "12345678";
    const repeatpassword = wrapper.find("#repeat");
    repeatpassword.element.value = "12345678";
    repeatpassword.trigger("input");
    newpassword.trigger("input");
    wrapper.vm.equal_password();
    expect(wrapper.vm.canSet4).toBe(true);
  });
  it("toggel canSet4 to false", () => {
    const newpassword = wrapper.find("#new");
    newpassword.element.value = "12345";
    const repeatpassword = wrapper.find("#repeat");
    repeatpassword.element.value = "12345678";
    repeatpassword.trigger("input");
    newpassword.trigger("input");
    wrapper.vm.equal_password();
    expect(wrapper.vm.canSet4).toBe(false);
  });
  it("has saved div", () => {
    store.state.Authorization.isEdited = "success";
    let wrapper2 = shallowMount(AccountChange, {
      localVue,
      store
    });
    wrapper2.setData({
      saved: "1"
    });
    expect(wrapper2.exists(".saved")).toBe(true);
  });
  it("has wrong div", () => {
    store.state.Authorization.isEdited = "faild";
    let wrapper3 = shallowMount(AccountChange, {
      localVue,
      store
    });
    wrapper3.setData({
      saved: "2"
    });
    expect(wrapper3.exists(".wrong")).toBe(true);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
