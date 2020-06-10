import { shallowMount, createLocalVue } from "@vue/test-utils";
import DeletePlaylist from "@/components/DeletePlaylist.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

describe("DeletePlaylist", () => {
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
            showModalDelete: true,
            todelete: "0",
          },
          getters: {
            todelete: (state) => {
              return state.todelete;
            },
            showModalDelete: (state) => {
              return state.showModalDelete;
            },
          },
          actions: {
            toggleModalDelete: jest.fn(),
            DeletePlaylist: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(DeletePlaylist, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("it show delete popup ", () => {
    const input = wrapper.find(".cancel");
    input.trigger("click");
    wrapper.vm.changeModalStateDelete();
    expect("toggleModalDelete").toHaveBeenCalled;
  });
  it("it delete playlist  ", () => {
    let testid = "liketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testid);
    document.body.appendChild(toast);
    const input = wrapper.find(".cancel_button");
    input.trigger("keyup.enter");
    wrapper.vm.DeletePlaylist();
    expect("DeletePlaylist").toHaveBeenCalled;
  });
  it("it show modalstate ", () => {
    let testid = "liketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testid);
    document.body.appendChild(toast);
    const toggle_add = wrapper.find(".delete_button");
    toggle_add.trigger("click");
    wrapper.vm.changeModalStateDelete();
    expect("toggleModalDelete").toHaveBeenCalled;
  });
  it("it toast ", () => {
    let testid = "liketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testid);
    document.body.appendChild(toast);
  });
});

