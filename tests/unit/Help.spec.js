import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Help  from "../../src/views/Help.vue"
describe("Help", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    wrapper = shallowMount(Help, {
      localVue,
      store,
      stubs: ['Plyr','plyrVideo']
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
