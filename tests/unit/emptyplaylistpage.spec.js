import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from 'vue-router';
import playlist from "../../src/components/playlist";

describe("playlist", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        playlist: {
          namespaced:true,
          state: {
            playlist_name: "NEW PlayList",
            owner_name: "User",
          },
          getters:{
            playlist_name: state => state.playlist_name,
            owner_name: state => state.owner_name,
          }
        }
      }
    });
    wrapper = shallowMount(playlist, {
        localVue,
        store,
        propsData: {}
      });
  });
  it("renders empty playlist information", () => {
    const playlist_name = wrapper.find('.playlistname');
    expect(playlist_name.text()).toBe("NEW PlayList");
    const owner_name = wrapper.find('#owner_name');
    expect(owner_name.text()).toBe("User");
    
  });
});