import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import NavbarWebplayer from "@/components/NavbarWebplayer.vue";
import Vuex from "vuex";
describe("NavbarWebplayer.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);
  let router = new VueRouter();
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Authorization: {
          namespaced: true,
          state: {
            status: "success",
            User: {
              displayName: "user name",
            },
          },
          getters: {
            Username: (state) => state.User.displayName,
            GetStatus: (state) => state.status,
          },
          actions: {
            logout: jest.fn(),
          },
        },
      },
    });
  });
  it("has a playlist router", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists("#playlist-link")).toBe(true);
  });

  it("has a album router", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists("#album-link")).toBe(true);
  });
  it("has a artist router", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists("#artist-link")).toBe(true);
  });
  it("has a user profile  router", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists("#account-link")).toBe(true);
  });
  it("has a upgrade button", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists(".upgrade_button")).toBe(true);
  });
  it("has a login botton", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists(".login_botton")).toBe(true);
  });
  it("has a signup botton", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists(".signup_botton")).toBe(true);
  });
  it("has a drop down list", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists("#drop_button")).toBe(true);
  });

  // it("call check function", () => {
  //   const wrapper = shallowMount(NavbarWebplayer, {
  //     localVue,
  //     store
  //   });
  //   const check = jest.fn();
  //   wrapper.setData({
  //     inlibrary: true,
  //     insearch: true
  //   })
  //   wrapper.setMethods({
  //     check: check
  //   });
  //   wrapper.trigger('click');
  //   expect(check).toHaveBeenCalled;
  // });

  it("call goprev function when previous button is clicked", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    const goprev = jest.fn();
    wrapper.setMethods({
      goprev: goprev,
    });
    const prev_button = wrapper.find(".prev");
    prev_button.trigger("click");
    expect(goprev).toHaveBeenCalled;
  });

  it("call gonext function when next button is clicked", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });

    const gonext = jest.fn();
    wrapper.setMethods({
      gonext: gonext,
    });
    const next_button = wrapper.find(".next");
    next_button.trigger("click");
    expect(gonext).toHaveBeenCalled;
  });
  // it("check dropdown list has user name", () => {
  //     const wrapper = shallowMount(NavbarWebplayer , {
  //         localVue,
  //         store,
  //     });
  //     const dropdown = wrapper.find('#drop_button');
  //     expect(dropdown.text()).toBe('User Icon user name');
  //     });
  it("call logout function", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });

    const logout = jest.fn();
    wrapper.setMethods({
      logout: logout,
    });
    const anchor = wrapper.find("#logout");
    anchor.trigger("click");
    expect(logout).toHaveBeenCalled;
  });
  it("renders", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store,
      router
    });
    expect(wrapper.exists()).toBe(true);
  });
});
