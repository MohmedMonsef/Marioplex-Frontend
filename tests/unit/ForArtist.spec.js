import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import ForArtist from "../../src/views/ForArtist";
import HomeNavigationBar from "@/components/HomeNavigationBar";
describe("ForArtist", () => {
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
            status: "",
          },
          getters: {
            GetStatus: (state) => {
              return state.status;
            },
          },
          actions: {
            facebook_signUp: jest.fn(),
            signUp: jest.fn(),
            ClaimArtistProfile: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(ForArtist, {
      localVue,
      store,
      stubs: {
        HomeNavigationBar,
      },
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
