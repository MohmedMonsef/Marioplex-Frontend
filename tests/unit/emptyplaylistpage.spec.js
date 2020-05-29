import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import playlist from "../../src/components/Playlist";

describe("playlist", () => {
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
            playlist_name: "NEW PlayList",
            owner_name: "User",
          },
          getters: {
            playlist_name: (state) => state.playlist_name,
            owner_name: (state) => state.owner_name,
          },
        },
      },
    });
    wrapper = shallowMount(playlist, {
      localVue,
      store,
      propsData: {},
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders empty playlist information", () => {
    const playlist_name = wrapper.find(".playlistname");
    expect(playlist_name.text()).toBe("NEW PlayList");
  });
  it("renders empty playlist information", () => {
    const owner_name = wrapper.find("#owner_name");
    expect(owner_name.text()).toBe("User");
  });
  it("list icon click", () => {
    wrapper.setData({
      show: false,
    });
    const listicon = wrapper.find("#list_icon");
    listicon.trigger("click");
    const toggleShow = jest.fn();
    wrapper.setMethods({
      toggleShow: toggleShow,
    });
    expect(toggleShow).toHaveBeenCalled;
  });
});
