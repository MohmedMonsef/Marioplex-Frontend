import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import AboutArtist from "@/components/AboutArtist.vue";

describe("AboutArtist", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        ArtistPage: {
          namespaced: true,
          store: {
            bio: "",
          },
          getters: {
            artist_bio: (state) => {
              return state.artist_bio;
            },
          },
        },
      },
    });
    wrapper = shallowMount(AboutArtist, {
      store,
      localVue,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("artist biography header", () => {
    let biographyheader = wrapper.find("#biotitle");
    expect(biographyheader.text()).toBe("Biography");
  });
});
