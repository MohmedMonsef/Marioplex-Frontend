import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import ShowPopularartists from "@/components/ShowPopularArtists.vue";
describe("ShowPopularartists.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  it("test if show artist name", () => {
    const wrapper = shallowMount(ShowPopularartists, {
      localVue,
      propsData: {
        name: "artist_name"
      }
    });
    const name = wrapper.find("#cardtitle");
    expect(name.text()).toBe("artist_name");
  });
  it("renders", () => {
    const wrapper = shallowMount(ShowPopularartists, { localVue });
    expect(wrapper.exists()).toBe(true);
  });
});
