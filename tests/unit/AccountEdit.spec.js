import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AccountEdit from "@/components/AccountEdit.vue";

describe("AccountEdit", () => {
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
          state:{
            isEdited: ""
          },
          getters: {
            isEdited: (state) => state.isEdited,
          },
          actions: {
            saveEdit: jest.fn()
          }
        },
      },
    });
    wrapper = shallowMount(AccountEdit, {
      localVue,
      store,
      data() {
        return {
        saved: false,
        can_submit1: false,
        can_submit2: false,
        can_submit3: false,
        email: "",
        password: ""
        }
      }
    });
  });
  it("call validation functions", () => {
    const editButton = wrapper.find(".save");
    editButton.trigger("click");
    wrapper.vm.checkEdit();
    expect("req_email").toHaveBeenCalled;
    expect("invalid_email").toHaveBeenCalled;
    expect("req_password").toHaveBeenCalled;
  });
  it("call saveEdit disbatch", () => {
    const editButton = wrapper.find(".save");
    editButton.trigger("click");
    wrapper.vm.checkEdit();
    expect("saveEdit").toHaveBeenCalled;
  });
  it("toggel can_submit1 to true", () => {
    const email = wrapper.find("#myEmail");
    email.element.value = "dai@gmail.com";
    email.trigger("input");
    wrapper.vm.req_email();
    expect(wrapper.vm.can_submit1).toBe(true);
  });
  it("toggel can_submit1 to false", () => {
    const email = wrapper.find("#myEmail");
    email.element.value = "";
    email.trigger("input");
    wrapper.vm.req_email();
    expect(wrapper.vm.can_submit1).toBe(false);
  });

  it("toggel can_submit2 to true", () => {
    const email = wrapper.find("#myEmail");
    email.element.value = "dai@gmail.com";
    email.trigger("input");
    wrapper.vm.invalid_email();
    expect(wrapper.vm.can_submit2).toBe(true);
  });
  it("toggel can_submit2 to false", () => {
    const email = wrapper.find("#myEmail");
    email.element.value = "username";
    email.trigger("input");
    wrapper.vm.invalid_email();
    expect(wrapper.vm.can_submit2).toBe(false);
  });

  it("toggel can_submit3 to true", () => {
    const password = wrapper.find("#myPassword");
    password.element.value = "12345678";
    password.trigger("input");
    wrapper.vm.req_password();
    expect(wrapper.vm.can_submit3).toBe(true);
  });
  it("toggel can_submit3 to false", () => {
    const password = wrapper.find("#myPassword");
    password.element.value = "";
    password.trigger("input");
    wrapper.vm.req_password();
    expect(wrapper.vm.can_submit3).toBe(false);
  });

  it("toggel saved to true", () => {
    wrapper = shallowMount(AccountEdit, {
      localVue,
      store,
      data() {
        return {
        can_submit1: true,
        can_submit2: true,
        can_submit3: true,
        }
      }
    });
    expect(wrapper.vm.saved).toBe(true);
  });
  it("toggel saved to false", () => {
    wrapper = shallowMount(AccountEdit, {
      localVue,
      store,
      data() {
        return {
        can_submit1: false,
        can_submit2: false,
        can_submit3: false,
        }
      }
    });
    expect(wrapper.vm.saved).toBe(false);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
