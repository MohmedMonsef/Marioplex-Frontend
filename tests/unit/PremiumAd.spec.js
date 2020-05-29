import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import premiumAd from "../../src/components/premiumAd";

describe("premiumAd", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Mediaplayer: {
          namespaced: true,
          state: {
            premiumPopup: true,
            premiumAd:0
          },
          getters: {
            premiumPopup: (state) => state.premiumPopup,
            premiumAd: (state) => state.premiumAd,
          },
        },
      },
    });
    wrapper = shallowMount(premiumAd, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    store.state.Mediaplayer.premiumAd=0;
    expect(wrapper.exists()).toBe(true);

  });
  it("renders", () => {
    store.state.Mediaplayer.premiumAd=3;
    expect(wrapper.exists()).toBe(true);
  });
  it("renders", () => {
    store.state.Mediaplayer.premiumAd=1;
    expect(wrapper.exists()).toBe(true);

  });
  it("renders", () => {
    store.state.Mediaplayer.premiumAd=2;
    expect(wrapper.exists()).toBe(true);
  });
});
