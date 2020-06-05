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
    wrapper = shallowMount(HomeNavigationBar, {
      localVue,
      store,
      stubs: ['router-link', 'router-view']
    });
  });
  it("renders premium page", () => {
    $route.path="/premium"
    let premiumWrapper =  shallowMount(HomeNavigationBar, {
      localVue,
      store,
      stubs: ['router-link', 'router-view']
    });
    expect( premiumWrapper.exists()).toBe(true);
    $route={
      path:"/login"
    };
    expect( premiumWrapper.exists()).toBe(true);
  });
  it("renders in home page", () => {
    $route.path="/"
    expect(wrapper.exists()).toBe(true);
  });
  it("logout function", () => {
    wrapper.vm.logout();
    expect("logout").toHaveBeenCalled;
  });
   it("collapsed menu function", () => {
    let testId = "menu-icon";
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", testId);
    document.body.appendChild(newDiv);

    testId = "collapsed";
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", testId);
    document.body.appendChild(newDiv);

    testId = "collapsed-div";
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", testId);
    document.body.appendChild(newDiv);

    testId = "disable-page";
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", testId);
    document.body.appendChild(newDiv);

    wrapper.setData({
      togglelength: true,
    });
    wrapper.vm.collapseBar();
    expect(wrapper.vm.togglelength).toBe(false);
    wrapper.vm.collapseBar();
    expect(wrapper.vm.togglelength).toBe(true);
  });
  it("scroll position test", () => {
    window.scrollY = 200;
    wrapper.vm.updateScroll();
    expect(wrapper.vm.scrollPosition).toBe(200);
  });
  
  it("destroy life hook test", () => {
    wrapper.destroy();
  });
});
