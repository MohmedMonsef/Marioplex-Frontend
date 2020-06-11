import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import RelatedArtists from "@/components/RelatedArtists.vue";

describe("RelatedArtists", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      id: "",
    },
  };
  localVue.prototype.$route = $route;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        ArtistPage: {
          namespaced: true,
          store: {
            artist_relatedartists: [],
          },
          getters: {
            artist_relatedartists: (state) => {
              return state.artist_relatedartists;
            },
          },
          actions: {
            artist_relatedartists: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(RelatedArtists, {
      store,
      localVue,
      propsData: {
        id: "",
      },
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Related Artists", () => {
    expect("artist_relatedartists").toHaveBeenCalled;
  });
});
