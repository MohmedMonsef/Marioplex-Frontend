import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import HomeNavigationBar from "../../src/components/HomeNavigationBar";

describe("HomeNavigationBar", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let $route = {
    path: "",
  };
  localVue.prototype.$route = $route;
  beforeEach(() => {
    store = new Vuex.Store({
        modules: {
          Authorization: {
            namespaced: true,
            state: {
                GetStatus: "success",
                user:{
                    product:"premium"
                }
            },
            getters: {
                GetStatus(state) {
                return state.GetStatus;
              },
              user(state) {
                return state.user;
              },
            },
            actions: {
              logout: jest.fn(),
            },
          },
        },
      });
  
  });
  it("renders premium page", () => {
    $route.path="/premium"
    wrapper = shallowMount(HomeNavigationBar, {
      localVue,
      store
    });
    expect(wrapper.exists()).toBe(true);
    $route.path="/"
    expect(wrapper.exists()).toBe(true);
  });
  it("renders in home page", () => {
    $route.path="/"
    wrapper = shallowMount(HomeNavigationBar, {
      localVue,
      store
    });
    expect(wrapper.exists()).toBe(true);
  
  });
  it("logout function", () => {
    wrapper = shallowMount(HomeNavigationBar, {
      localVue,
      store
    });
    wrapper.vm.logout();
    expect("logout").toHaveBeenCalled;
  });
  //  it("collapsed menu function", () => {
  //   wrapper = shallowMount(HomeNavigationBar, {
  //     localVue,
  //     store
  //   });

  //   window.resizeTo(700, 700);

  //   wrapper.setData({
  //     togglelength: true,
  //   });

    wrapper.vm.collapseBar();
    expect(togglelength).toBe(false);
  });
  it("destroy life hook test", () => {
    wrapper = shallowMount(HomeNavigationBar, {
      localVue,
      store
    });
    wrapper.destroy();
  });
});
