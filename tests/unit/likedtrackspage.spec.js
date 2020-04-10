import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from 'vue-router';
import likedtracks_info from "../../src/components/likedtracks_info";

describe("likedtracks_info", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        likedtracks: {
          namespaced:true,
          state: {
            likedtracks_length: 5,
            owner_name: "User"
          },
          getters:{
        likedtracks_length: state => state.likedtracks_length,
        owner_name: state => state.owner_name
          }
        }
      }
    });
    wrapper = shallowMount(likedtracks_info, {
        localVue,
        store,
        propsData: {}
      });
  });
  it("renders likedtracks information", () => {
    const owner_name = wrapper.find('#owner_name');
    expect(owner_name.text()).toBe("User");
    const  likedtracks_length = wrapper.find('.length');
    expect(likedtracks_length.text()).toBe(5 + " SONGS");
    
  });
});