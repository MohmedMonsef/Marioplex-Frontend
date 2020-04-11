import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import LibPlaylistsDefault from "@/components/lib-playlists-default.vue";
import Vuex from "vuex";
describe("LibPlaylistsDefault.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        creatplaylist: {
          namespaced: true,
          actions: {
            toggleModal: jest.fn()
          }
        }
      }
    });
  });
  it("test artist name", () => {
    const wrapper = shallowMount(LibPlaylistsDefault, {
      localVue
    });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState
    });
    const create = wrapper.find(".create_button");
    create.trigger("click");
    expect(changeModalState).toHaveBeenCalled;
  });
  it("has a changeModalState dispatch", () => {
    store.dispatch = jest.fn();
    const wrapper = shallowMount(LibPlaylistsDefault, {
      localVue,
      store
    });
    wrapper.find(".create_button").trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith("creatplaylist/toggleModal");
  });
  it("renders", () => {
    const wrapper = shallowMount(LibPlaylistsDefault, { localVue });
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    const wrapper = shallowMount(LibPlaylistsDefault, { localVue });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
