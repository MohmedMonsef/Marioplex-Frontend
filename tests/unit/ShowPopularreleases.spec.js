import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import ShowPopularreleases from "@/components/ShowPopularreleases.vue";
describe("ShowPopularreleases.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  it("test if show release name & artist name", () => {
    const wrapper = shallowMount(ShowPopularreleases, {
      localVue,
      propsData: {
        name: "release_name",
        artistname: "artist_name"
      }
    });
    const name = wrapper.find("#cardtitle");
    const artistname = wrapper.find(".card-text");
    expect(name.text()).toBe("release_name");
    expect(artistname.text()).toBe("artist_name");
  });
  it("renders", () => {
    const wrapper = shallowMount(ShowPopularreleases, {localVue});
    expect(wrapper.exists()).toBe(true);
  }); 
  it("renders a vue instance", () => {
    const wrapper = shallowMount(ShowPopularreleases, {localVue});
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
