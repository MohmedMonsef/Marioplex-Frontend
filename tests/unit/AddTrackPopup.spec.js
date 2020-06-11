import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AddTrackPopup from "@/components/AddTrackPopup";
import CreatePlaylist from "@/components/CreatePlaylist";
import PlaylistsToTracks from "@/components/PlaylistsToTracks";
describe("AddTrackPopup", () => {
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
            status: "",
            showModal: true,
            showModalAdd: true
          },
          getters: {
            GetStatus: state => {
              return state.status;
            },
            showModalAdd: state => {
              return state.showModalAdd;
            },
            playlists: state => {
              return state.Playlists;
            },
            showModal: state => {
              return state.showModal;
            },
            withtrack: state => {
              return state.withtrack;
            }
          },
          actions: {
            toggleModalAdd: jest.fn(),
            toggleModal: jest.fn(),
            showplaylists: jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(AddTrackPopup, {
      localVue,
      store,
      stubs: {
        CreatePlaylist,
        PlaylistsToTracks
      }
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("it show modalstateadd ", () => {
    const toggle_add = wrapper.find(".cancel");
    toggle_add.trigger("click");
    wrapper.vm.changeModalStateAdd();
    expect("toggleModalAdd").toHaveBeenCalled;
  });
  it("it show modalstate ", () => {
    const toggle_add = wrapper.find(".cratenewplaylist");
    toggle_add.trigger("click");
    wrapper.vm.changeModalState();
    expect("toggleModal").toHaveBeenCalled;
  });
  //   it("it rename artistname  ", () => {
  //     //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
  //     const ChangeArtistName = jest.fn();
  //     wrapper.setMethods({
  //         ChangeArtistName: ChangeArtistName,
  //     });
  //     const input = wrapper.find("#in_rename");
  //     input.trigger("keyup.enter");
  //     expect(ChangeArtistName).toHaveBeenCalled();
  //   });
  //   it("it close artistname input field  ", () => {
  //     //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
  //     const showinputfield = jest.fn();
  //     wrapper.setMethods({
  //         showinputfield: showinputfield,
  //     });
  //     const input = wrapper.find("#in_rename");
  //     input.trigger("keyup.enter");
  //     expect(showinputfield).toHaveBeenCalled();
  //   });
});
