import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import searchresults from "../../src/views/SearchResults";

describe("searchresults", () => {
  let wrapper;
  let store;

  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Search: {
          namespaced: true,
          state: {
            search_Value: "",
            topres: [],
            result5: [],
            albumres5: [],
            playlistres5: [],
            load: false,
            user5: [],
            track3: [],
          },
          getters: {
            get_value(state) {
                return state.search_Value;
              },
              gettopres(state) {
                return state.topres;
              },
              getresult5(state) {
                return state.result5;
              },
              getalbumres5(state) {
                return state.albumres5;
              },
              getplaylistsres5(state) {
                return state.playlistres5;
              },
              loadingsearch: (state) => state.load,
              getuser5(state) {
                return state.user5;
              },
              gettrack3(state) {
                return state.track3;
              }
          },
          actions: {
            showresult: jest.fn(),
          },
        },
      },
    });
  });

  it("when render ", () => {
    wrapper = shallowMount(searchresults, {
      store,
      localVue,
    });
    wrapper.vm.change()
    expect("showresult").toHaveBeenCalled;
    wrapper.vm.getImg()
    expect("getImg").toHaveBeenCalled;
  });
});
