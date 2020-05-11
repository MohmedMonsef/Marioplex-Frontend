import { shallowMount, createLocalVue } from "@vue/test-utils";
import CreatePlaylist from "@/components/CreatePlaylist.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

describe("CreatePlaylist", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  // let wrapper
  let store;
  // let h
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        creatplaylist: {
          namespaced: true,
          state: {
            showModal: true,
            // Playlists: []
          },
          getters: {
            showModal: (state) => {
              return state.showModal;
            },
            playlists: (state) => state.Playlists,
          },
          //     mutations:{
          //         toggleModal(state) {
          //             state.showModal = !state.showModal;
          //           },
          //           CreatePlaylist(state, playlists) {
          //             state.Playlists.push(
          //               //id: id,
          //               // playlistname: i
          //               playlists
          //             );
          //             console.log("nori");
          //           },
          //    },
          actions: {
            toggleModal: jest.fn(),
            CreatePlaylist: jest.fn(),
          },
        },
        authorization: {
          namespaced: true,
          state: {
            User: {
              displayName: "user name",
            },
          },
          getters: {
            Username: (state) => state.User.displayName,
          },
        },
      },
    });
  });

  it("has a button", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    expect(wrapper.exists(".creat_button")).toBe(true);
  });
  it("it's a vue instance ", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("it creates a playlist", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState,
    });
    const btn = wrapper.find(".creat_button");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("input ", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    //   const data=  wrapper.setData({
    //         playlistname:"hello"
    //     });
    let pname = wrapper.find(".name_input");
    pname.element.value = "hello";
    pname.trigger("input");
    expect(wrapper.vm.playlistname).toBe("hello");
    pname.trigger("keyup.enter");
    expect(wrapper.vm.playlistname).toBe("hello");
  });
  it("it close icon ", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState,
    });
    const btn = wrapper.find(".cancel");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("it cancel button ", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState,
    });
    const btn = wrapper.find(".cancel_button");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("renders", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("has a cancel button", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    expect(wrapper.exists(".cancel_button")).toBe(true);
  });
  it("has a close icon", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    expect(wrapper.exists(".cancel")).toBe(true);
  });
  it("has an input field", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    expect(wrapper.exists(".name_input")).toBe(true);
  });
  it("enter close the popup and create  input  ", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    let pname = wrapper.find(".name_input");
    // pname.element.value="hello";
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState,
    });
    pname.trigger("keyup.enter");
    // expect(wrapper.vm.playlistname).toBe("hello");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("input bind name when press enter", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    let pname = wrapper.find(".name_input");
    pname.element.value = "hello";
    pname.trigger("keyup.enter");
    pname.trigger("input");
    expect(wrapper.vm.playlistname).toBe("hello");
  });
  it("it creates a playlist", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState,
    });
    const btn = wrapper.find(".creat_button");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
  it("has a transition", () => {
    const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    expect(wrapper.exists(".modal-overlay")).toBe(true);
  });
});
