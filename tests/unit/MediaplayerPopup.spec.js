import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import MediaplayerPopup from "@/components/MediaplayerPopup.vue";

describe("MediaplayerPopup", () => {
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
            showModal: false
          },
          getters: {
            showModal: state => {
              return state.showModal;
            }
          },
          actions: {
            togglePopup: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(MediaplayerPopup, {
      store,
      localVue
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Artist number of Followers Chart", () => {
    wrapper.vm.changeModalState();
    expect("togglePopup").toHaveBeenCalled;
  });
});
