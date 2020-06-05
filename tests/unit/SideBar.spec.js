import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import SideBar from "@/components/SideBar.vue";
import Vuex from "vuex";
describe("SideBar.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Authorization: {
          namespaced: true,
          state: {
            status: "success",
          },
          getters: {
            GetStatus: (state) => state.status,
          },
        },
        Playlist: {
          namespaced: true,
          state: {
            showModalDelete: true,
            Playlists: [
              {
                name: "play",
              },
            ],
          },
          getters: {
            showModalDelete: (state) => {
              return state.showModalDelete;
            },
            playlists: (state) => state.Playlists,
          },
          actions: {
            showplaylists: jest.fn(),
          },
        },
        Search: {
          namespaced: true,
          state: {
            search_Value: "",
            topres: [],
            result5: [],
            result: [],
            albumres5: [],
            playlistres5: [],
            load: false,
            in: false,
            searchfocus: false,
          },
          actions: {
            searchfocus: jest.fn(),
            search_V: jest.fn(),
          },
        },
      },
    });
  });
  it("has a home router", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    expect(wrapper.exists("#homepage1")).toBe(true);
  });

  it("has a library router", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    expect(wrapper.exists(".librarypage")).toBe(true);
  });

  it("has a search page router", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    expect(wrapper.exists(".searchpage")).toBe(true);
  });

  it("has a changeModalState dispatch", () => {
    store.dispatch = jest.fn();
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    wrapper.find(".createbutton").trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith("Playlist/toggleModal");
  });

  it("call setsearch function", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    const setsearch = jest.fn();
    wrapper.setMethods({
      setsearch: setsearch,
    });
    const search_div = wrapper.find("#callsearch");
    search_div.trigger("click");
    expect(setsearch).toHaveBeenCalled;
  });

  it("call setfocus function", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    const setfocus = jest.fn();
    wrapper.setMethods({
      setfocus: setfocus,
    });
    const search_div = wrapper.find("#callsearch");
    search_div.trigger("click");
    expect(setfocus).toHaveBeenCalled;
  });

  it("call change Modal State function", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState,
    });
    const create_button = wrapper.find(".createbutton");
    create_button.trigger("click");
    expect(changeModalState).toHaveBeenCalled;
  });
  it("show playlists names", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    const playlist_name = wrapper.find(".userplaylists");
    expect(playlist_name.text()).toBe("play");
  });
  // it("call change Modal StateDelete function", () => {
  //   const wrapper = shallowMount(SideBar, {
  //     localVue,
  //     store,
  //   });
  //   wrapper.setData({
  //     showdelete: true,
  //     show: false,
  //     playlistid: 0,
  //   });
  //   const changeModalStateDelete = jest.fn();
  //   wrapper.setMethods({
  //     changeModalStateDelete: changeModalStateDelete,
  //   });
  //   const delete_button = wrapper.find(".delete_div");
  //   delete_button.trigger("click");
  //   expect(changeModalStateDelete).toHaveBeenCalled;
  // });
  it("renders", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store,
    });
    expect(wrapper.exists()).toBe(true);
  });
});
