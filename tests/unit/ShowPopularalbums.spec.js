import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import ShowPopularalbums from "@/components/ShowPopularalbums.vue";
describe("ShowPopularalbums.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  it("test if show album name& artist name", () => {
    const wrapper = shallowMount(ShowPopularalbums, {
      localVue,
      propsData: {
        name: "album_name",
        artistname: "artist_name"
      }
    });
    const name = wrapper.find("#cardtitle");
    const artistname = wrapper.find(".card-text");
    expect(name.text()).toBe("album_name");
    expect(artistname.text()).toBe("artist_name");
  });
  it("renders", () => {
    const wrapper = shallowMount(ShowPopularalbums, {localVue});
    expect(wrapper.exists()).toBe(true);
  }); 
  it("renders a vue instance", () => {
    const wrapper = shallowMount(ShowPopularalbums, {localVue});
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
