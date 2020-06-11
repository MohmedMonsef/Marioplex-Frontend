import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import HomeWebPlayer from "../../src/views/HomeWebPlayer";

describe("HomeWebPlayer", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Playlist: {
          namespaced: true,
          state: {
            showModalDelete: false,
            showModal: false,
            showModalAdd: false,
          },
        },
        CheckUserPopup: {
            namespaced: true,
            state: {
                showModal: false,
                showpagesModal: false,
            },
        },
        Mediaplayer: {
            namespaced: true,
            state: {
                premiumPopup: false,
            },
            getters: {
                premiumPopup: state => {
                    return state.premiumPopup;
                  },
            }
        },
        UserLibrary: {
            state:{
                sideMenu:false,
                scrolling:0
            },
            getters: {
                sideMenu:(state)=>state.sideMenu,
                scrolling: state => state.scrolling
            },
            actions: {
                sideMenu: jest.fn(),
                scrolling: jest.fn(),
            }
        }
      },
    });
    wrapper = shallowMount(HomeWebPlayer, {
      localVue,
      store,
    });
    wrapper.setData({
        componentKey: 0,
    })
  });
  it("call side menu", () => {
    const close = wrapper.find(".home_webplayer");
    close.trigger("click");
    wrapper.vm.closeMenu();
    expect("sideMenu").toHaveBeenCalled;
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
