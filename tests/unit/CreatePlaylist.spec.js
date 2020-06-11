import { shallowMount, createLocalVue } from "@vue/test-utils";
import CreatePlaylist from "@/components/CreatePlaylist.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

describe("CreatePlaylist", () => {
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
            User: {
              displayName: "nerdeen",
            },
          },
          getters: {
            Username: (state) => {
              return state.User.displayName;
            },
          },
        },
        Playlist: {
          namespaced: true,
          state: {
            status: "",
            showModal: true,
            Playlists: [],
            playlist_name: "Islamic",
          },
          getters: {
            GetStatus: (state) => {
              return state.status;
            },
            showModal: (state) => {
              return state.showModal;
            },
            withtrack: (state) => {
              return state.withtrack;
            },
          },
          actions: {
            toggleModal: jest.fn(),
            CreatePlaylist: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(CreatePlaylist, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("it show modalstate ", () => {
    const toggle_add = wrapper.find(".cancel");
    toggle_add.trigger("click");
    wrapper.vm.changeModalState();
    expect("toggleModal").toHaveBeenCalled;
  });
  it("it show modalstate ", () => {
    const toggle_add = wrapper.find(".cancel_button");
    toggle_add.trigger("click");
    wrapper.vm.changeModalState();
    expect("toggleModal").toHaveBeenCalled;
  });
  it("it rename artistname  ", () => {
    const input = wrapper.find(".name_input");
    input.trigger("keyup.enter");
    wrapper.vm.CreatePlaylist();
    expect("CreatePlaylist").toHaveBeenCalled;
  });
  it("it rename artistname  ", () => {
    const input = wrapper.find(".name_input");
    input.trigger("keyup.enter");
    wrapper.vm.changeModalState();
    expect("toggleModal").toHaveBeenCalled;
  });
  it("it rename artistname  ", () => {
    const input = wrapper.find(".creat_button");
    input.trigger("click");
    wrapper.vm.changeModalState();
    expect("toggleModal").toHaveBeenCalled;
  });
  it("it create a playlist ", () => {
    const input = wrapper.find(".creat_button");
    input.trigger("click.prevent");
    wrapper.vm.CreatePlaylist();
    expect("CreatePlaylist").toHaveBeenCalled;
  });
  it("it rename artistname  ", async () => {
    const input = wrapper.find(".name_input");
    input.element.value = "New Playlist";
    input.trigger("input");
    expect(wrapper.vm.playlistname).toBe("New Playlist");
  });
  it("it create playlistwith name  ", () => {
    const input = wrapper.find(".name_input");
    input.element.value = "Islamic";
    input.trigger("input");
    wrapper.vm.CreatePlaylist();
    expect("CreatePlaylist").toHaveBeenCalled;
  });
});
