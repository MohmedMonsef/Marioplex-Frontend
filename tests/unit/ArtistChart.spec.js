import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ArtistChart from "@/components/ArtistChart.vue";

describe("ArtistChart", () => {
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
            artist_followers: [],
            loadedchart: false,
          },
          getters: {
            artist_followers: (state) => {
              return state.artist_followers;
            },
            loadedchart: (state) => {
              return state.loadedchart;
            },
          },
          actions: {
            numberoffollowers: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(ArtistChart, {
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
  it("Artist number of Followers Chart", () => {
    expect("numberoffollowers").toHaveBeenCalled;
    wrapper.vm.numFollowers();
    store.state.ArtistPage.loadedchart = true;
  });
});
