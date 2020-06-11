import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AccountOverview from "@/components/AccountOverview.vue";

describe("AccountOverview", () => {
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
            User: {
              birthDate: "1999-09-04T00:00:00.000Z",
              country: "eg",
              displayName: "Nerdeen",
              email: "nerdeen.ahmad15@gmail.com",
              gender: "female"
            },
            deleted_Acount: true
          },
          getters: {
            Username: state => state.User.displayName,
            user: state => state.User,
            deleted_Acountt: state => state.deleted_Acount
          },
          actions: {
            removeuser: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(AccountOverview, {
      localVue,
      store
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("test remove function function ", () => {
    const input = wrapper.find("#removeme");
    input.trigger("click");
    wrapper.vm.remove();
    expect("removeuser").toHaveBeenCalled;
  });
});
