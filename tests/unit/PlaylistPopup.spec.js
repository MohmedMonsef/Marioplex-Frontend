import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import PlaylistPopup from "@/components/PlaylistPopup.vue";

describe("PlaylistPopup", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        CheckUserPopup: {
          namespaced: true,
          store: {
            showpagesModal: false
          },
          getters: {
            showpagesModal: state => {
              return state.showpagesModal;
            }
          },
          actions: {
            togglepagespopup: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(PlaylistPopup, {
      store,
      localVue
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Artist number of Followers Chart", () => {
    wrapper.vm.changeModalState();
    expect("togglepagespopup").toHaveBeenCalled;
  });
});
