import { shallowMount, createLocalVue } from "@vue/test-utils";
import DeletePlaylist from "@/components/DeletePlaylist.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
describe("DeletePlaylist", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        creatplaylist: {
          namespaced: true,
          state: {
            showModalDelete: true,
            todelete: 0,
            Playlists: [],
          },
          getters: {
            todelete: (state) => {
              return state.todelete;
            },
            showModalDelete: (state) => {
              return state.showModalDelete;
            },
          },
          mutations: {
            toggleModalDelete: jest.fn(),
          },
          actions: {
            DeletePlaylist: jest.fn(),
            toggleModalDelete: jest.fn(),
          },
        },
      },
    });
  });
  it("has a button", () => {
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    expect(wrapper.exists(".delete_button")).toBe(true);
    //expect(true).toBe(true)
  });
  it("it's a vue instance ", () => {
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("it deletes a playlist", () => {
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    const Delete = jest.fn();
    wrapper.setMethods({
      DeletePlaylist: Delete,
    });
    const btn = wrapper.find(".delete_button");
    btn.trigger("click");
    expect(Delete).toHaveBeenCalled();
  });
  it("it close icon ", () => {
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    const changeModalStateDelete = jest.fn();
    wrapper.setMethods({
      changeModalStateDelete: changeModalStateDelete,
    });
    const btn = wrapper.find(".cancel");
    btn.trigger("click");
    expect(changeModalStateDelete).toHaveBeenCalled();
  });
  it("it cancel button ", () => {
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    const changeModalStateDelete = jest.fn();
    wrapper.setMethods({
      changeModalStateDelete: changeModalStateDelete,
    });
    const btn = wrapper.find(".cancel_button");
    btn.trigger("click");
    expect(changeModalStateDelete).toHaveBeenCalled();
  });

  it("renders", () => {
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("it deletes a playlist", () => {
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    const changeModalStateDelete = jest.fn();
    wrapper.setMethods({
      changeModalStateDelete: changeModalStateDelete,
    });
    const btn = wrapper.find(".delete_button");
    btn.trigger("click");
    expect(changeModalStateDelete).toHaveBeenCalled();
  });
  it("it calls delete dispatch ti delete a playlist", () => {
    //const store = new Vuex.Store();
    store.dispatch = jest.fn();
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    const btn = wrapper.find(".delete_button");
    btn.trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith(
      "creatplaylist/DeletePlaylist",
      0
    );
  });
  it("it calls tooglemodal dispatch ti change modalstate", () => {
    store.dispatch = jest.fn();
    const wrapper = shallowMount(DeletePlaylist, { localVue, store });
    const btn = wrapper.find(".delete_button");
    btn.trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith(
      "creatplaylist/toggleModalDelete"
    );
  });
  // it("commits a mutation when a button is clicked",  () => {
  //   const wrapper = mount(DeletePlaylist, {
  //     store, localVue
  //   })

  //   wrapper.find(".cancel_button").trigger("click")
  //   expect(store.mutations).toHaveBeenCalledWith(
  //     "toggleModalDelete",
  //     0
  //   )
  // });
});
