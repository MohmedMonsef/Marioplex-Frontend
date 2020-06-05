import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import ForArtist from "../../src/views/ForArtist";
describe("ForArtist", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    wrapper = shallowMount(ForArtist, {
      localVue,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
