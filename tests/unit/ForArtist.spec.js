import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ForArtist from "../../src/views/ForArtist";
import HomeNavigationBar from "@/components/home-navigation-bar";
describe("ForArtist",()=>{
    let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  beforeEach(()=>{
    store = new Vuex.Store({})
    wrapper = shallowMount(ForArtist, {
        localVue,
        store,
        stubs:{
            HomeNavigationBar
        }
      });

  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
})