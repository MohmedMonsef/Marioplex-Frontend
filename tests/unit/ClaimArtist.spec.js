import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import ClaimArtist from "../../src/views/ClaimArtist";
describe("ClaimArtist", () => {
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
            showModal: true,
          },
          getters: {
            showModal: (state) => {
              return state.showModal;
            },
          },
          actions: {
            toggleModal: jest.fn(),
          },
        },
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
            ClaimArtistProfile: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(ClaimArtist, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("it shows claim artist popup ", () => {
    const input = wrapper.find(".popup_button");
    input.trigger("click");
    wrapper.vm.changeModalState();
    expect("showModal").toHaveBeenCalled;
  });
  it("it claims artist profile ", () => {
    const input = wrapper.find(".creat_button");
    input.trigger("click");
    wrapper.vm.ClaimArtistProfile();
    expect("ClaimArtistProfile").toHaveBeenCalled;
  });
});
