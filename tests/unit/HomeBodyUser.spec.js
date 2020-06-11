import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import HomeBodyUser from "../../src/components/HomeBodyUser";

describe("HomeBodyUser", () => {
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
            user: {
              product: "premium"
            },
            GetStatus: "success"
          },
          getters: {
            user: state => state.user,
            GetStatus: state => state.GetStatus
          }
        },
        ShowWebPlayer: {
          namespaced: true,
          state: {
            homePlaylists: [
              {
                images: "1",
                playlistId: "1",
                name: "name"
              }
            ]
          },
          getters: {
            homePlaylists: state => state.homePlaylists
          },
          actions: {
            homePlaylists: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(HomeBodyUser, {
      localVue,
      store
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
