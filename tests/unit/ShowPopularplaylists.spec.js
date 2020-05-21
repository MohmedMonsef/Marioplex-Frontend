import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import ShowPopularplaylists from "@/components/ShowPopularPlaylists.vue";
describe("ShowPopularplaylists.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  it("test if show playlist name and its description", () => {
    const wrapper = shallowMount(ShowPopularplaylists, {
      localVue,
      propsData: {
        name: "playlist_name",
        Description: "be happy",
      },
    });
    const name = wrapper.find("#cardtitle");
    const Description = wrapper.find(".card-text");
    expect(name.text()).toBe("playlist_name");
    expect(Description.text()).toBe("be happy");
  });
  it("renders", () => {
    const wrapper = shallowMount(ShowPopularplaylists, { localVue });
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    const wrapper = shallowMount(ShowPopularplaylists, { localVue });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
