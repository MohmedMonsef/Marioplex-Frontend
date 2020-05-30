import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ArtistProfile from "../../src/views/ArtistProfile";

describe("ArtistProfile", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      id: ""
    }
  };
  localVue.prototype.$route = $route;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        ArtistPage: {
          namespaced: true,
          actions: {
            artist_page: jest.fn(),
            checkisfollowed: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(ArtistProfile, {
      store,
      localVue,
      propsData: {
        id: ""
      }
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Artist Profile view", () => {
    expect("artist_page").toHaveBeenCalled;
    expect("checkisfollowed").toHaveBeenCalled;
  });
});
