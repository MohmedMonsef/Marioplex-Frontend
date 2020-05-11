import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import LibArtists from "@/components/lib-artists.vue";
describe("LibArtists.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  it("test artist name", () => {
    const wrapper = shallowMount(LibArtists, {
      localVue,
      propsData: {
        name: "artist name",
      },
    });
    const name = wrapper.find("#cardtitle");
    expect(name.text()).toBe("artist name");
  });
  it("renders", () => {
    const wrapper = shallowMount(LibArtists, { localVue });
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    const wrapper = shallowMount(LibArtists, { localVue });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
