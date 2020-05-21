import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import UserProfile from "../../src/views/UserProfile";

describe("UserProfile", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      user_id: "",
    },
  };
  localVue.prototype.$route = $route;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        UserPage: {
          namespaced: true,
          state: {
            user: {
              displayName: "Menna",
              images: [
                {
                  _id: 1,
                },
              ],
            },
            loading: true,
            playlists: [],
          },
          getters: {
            user: (state) => state.user,
            playlists: (state) => state.playlists,
            loading: (state) => state.loading,
          },
          actions: {
            user_playlists: jest.fn(),
            user_info: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(UserProfile, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Headers Rendering", () => {
    let main_header = wrapper.find("#userName");
    expect(main_header.exists()).toBe(true);
  });
});
