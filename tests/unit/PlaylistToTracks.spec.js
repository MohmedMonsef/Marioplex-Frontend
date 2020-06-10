import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import PlaylistsToTracks from "@/components/PlaylistsToTracks";

describe("PlaylistsToTracks", () => {
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
            toggleModalAdd: true,
          },
          getters: {
            GetStatus: (state) => {
              return state.status;
            },
            toggleModalAdd: (state) => {
              return state.toggleModalAdd;
            },
            trackid: (state) => {
              return state.trackid;
            },
          },
          actions: {
            toggleModalAdd: jest.fn(),
            AddTrackToExsistPlaylist: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(PlaylistsToTracks, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("it shows upload song popup ", () => {
    let testid = "liketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testid);
    document.body.appendChild(toast);
    const input = wrapper.find(".card");
    input.trigger("click");
    wrapper.vm.changeModalStateAdd();
    expect("toggleModalAdd").toHaveBeenCalled;
  });
  it("it add track to a playlist ", () => {
    const input = wrapper.find(".card");
    input.trigger("click");
    wrapper.vm.AddTrackToExsistPlaylist();
    expect("AddTrackToExsistPlaylist").toHaveBeenCalled;
  });
});
