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
            showModalDelete: false,
            Playlists: []
          },
          getters: {
            showModalDelete: state => {
              return state.showModalDelete;
            },
            playlists: state => state.Playlists
          }
        }
      }
    });
  });
  it("call setsearch function", () => {
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
});
