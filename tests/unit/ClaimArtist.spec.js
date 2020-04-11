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
        creatplaylist: {
          namespaced: true,
          state: {
            showModal: true
          },
          getters: {
            showModal: state => {
              return state.showModal;
            }
          },
          actions:{
            toggleModal:jest.fn()
          }
        },

        authorization: {
          namespaced: true,
          state: {
            status: ""
          },
          getters: {
            GetStatus: state => {
              return state.status;
            }
          },
          actions: {
            facebook_signUp: jest.fn(),
            signUp: jest.fn(),
            ClaimArtistProfile:jest.fn(),
          }
        }
      }
    });
    wrapper = shallowMount(ClaimArtist, {
      localVue,
      store
    });
  });
  it("it claim artistpopup ", () => {
    //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState
    });
    const btn = wrapper.find(".popup_button");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("it cancel artistpopup ", () => {
    //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState
    });
    const btn = wrapper.find(".cancel");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("it cancel button artistpopup ", () => {
    //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState
    });
    const btn = wrapper.find(".cancel_button");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("it claim button artistpopup ", () => {
    //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState
    });
    const btn = wrapper.find(".creat_button");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("it claim function artistpopup ", () => {
    //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const ClaimArtistProfile = jest.fn();
    wrapper.setMethods({
      ClaimArtistProfile: ClaimArtistProfile
    });
    const btn = wrapper.find(".creat_button");
    btn.trigger("click");
    expect(ClaimArtistProfile).toHaveBeenCalled();
  });
  //   it("it calls toglemodalupload dispatch ti change modalstateupload", () => {
  //     store.dispatch = jest.fn();
  //     const btn = wrapper.find(".c_track");
  //     btn.trigger("click");
  //     expect(store.dispatch).toHaveBeenCalledWith(
  //       "artistproperties/toggleModalUpload")
  //   });
});
