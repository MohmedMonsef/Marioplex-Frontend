import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import AccountSidebar from "@/components/AccountSidebar.vue";

describe("AccountSidebar", () => {
  let wrapper;
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  beforeEach(() => {
    wrapper = shallowMount(AccountSidebar, {
      localVue,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
