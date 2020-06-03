import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AccountNotifications from "@/components/AccountNotifications.vue";

describe("AccountNotifications", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Notifications: {
          namespaced: true,
          state: {
            userNotifications: [],
          },
          getters: {
            notifications: (state) => state.userNotifications
          },
          actions:{
            showUserNotifications: jest.fn()
          }
        },
      },
    });
    wrapper = shallowMount(AccountNotifications, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
