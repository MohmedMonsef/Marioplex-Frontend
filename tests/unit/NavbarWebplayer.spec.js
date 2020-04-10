import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import NavbarWebplayer from "@/components/NavbarWebplayer.vue";
import Vuex from "vuex";
describe("NavbarWebplayer.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        authorization: {
          namespaced: true,
          state: {
            status: "success",
            User: {
              displayName: "user name"
            }
          },
          getters: {
            Username: state => state.User.displayName,
            GetStatus: state => state.status
          }
        }
      }
    });
  });
  it("call goprev function when previous button is clicked", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store
    });
    const goprev = jest.fn();
    wrapper.setMethods({
      goprev: goprev
    });
    const prev_button = wrapper.find(".prev");
    prev_button.trigger("click");
    expect(goprev).toHaveBeenCalled;
  });

  it("call gonext function when next button is clicked", () => {
    const wrapper = shallowMount(NavbarWebplayer, {
      localVue,
      store
    });

    const gonext = jest.fn();
    wrapper.setMethods({
      gonext: gonext
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
      store
    });

    const logout = jest.fn();
    wrapper.setMethods({
      logout: logout
    });
    const anchor = wrapper.find("#logout");
    anchor.trigger("click");
    expect(logout).toHaveBeenCalled;
  });
});