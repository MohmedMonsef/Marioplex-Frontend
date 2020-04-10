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
        authorization: {
          namespaced: true,
          state: {
            status: "success"
          },
          getters: {
            GetStatus: state => state.status
          }
        },
        creatplaylist: {
          namespaced: true,
          state: {
            showModalDelete: true,
            Playlists: [
              {
                name:'play'
              }
            ]
          },
          getters: {
            showModalDelete: state => {
              return state.showModalDelete;
            },
            playlists: state => state.Playlists
          },
          actions:{
            showplaylists: jest.fn()
          }
        }
      }
    });
  });
  it("call setsearch & setfocus function", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store
    });
    const setsearch = jest.fn();
    const setfocus = jest.fn();
    wrapper.setMethods({
      setsearch: setsearch,
      setfocus: setfocus
    });
    const search_div = wrapper.find("#callsearch");
    search_div.trigger("click");
    expect(setsearch).toHaveBeenCalled;
    expect(setfocus).toHaveBeenCalled;
  });
  it("call change Modal State function", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store
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
      store
    });
    const playlist_name = wrapper.find(".userplaylists");
    expect(playlist_name.text()).toBe('play');
  });
  it("call change Modal StateDelete function", () => {
    const wrapper = shallowMount(SideBar, {
      localVue,
      store
    });
    wrapper.setData({
      showdelete: true,
    });
    const changeModalStateDelete = jest.fn();
    wrapper.setMethods({
      changeModalStateDelete: changeModalStateDelete,
    });
    const delete_button = wrapper.find(".delete_div");
    delete_button.trigger("click");
    expect(changeModalStateDelete).toHaveBeenCalled;
  });

});
