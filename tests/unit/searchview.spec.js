import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import Search from "../../src/views/Search";

describe("Search", () => {
  let Wrapper;
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
            result: [],
            albumres5: [],
            playlistres5: [],
            load: false,
            in: false,
            searchfocus: false
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
            getresult(state) {
              return state.result;
            },
            getalbumres5(state) {
              return state.albumres5;
            },
            getplaylistsres5(state) {
              return state.playlistres5;
            },
            loadingsearch: state => state.load,

            searchfocus: state => state.searchfocus
          },

          actions: {
            showcategory: jest.fn()
          }
        },
        categorys: {
          namespaced: true,
          state:{
            category: [],
            loading: false
          },
          getters: {
            getcategory: state => state.category,
            loading: state => state.loading
          }
        }
      }
    });
  });

  it("when input field is empty it call setvalue dispatch only ", () => {
    const store = new Vuex.Store();
    store.dispatch = jest.fn();
    const Wrapper = shallowMount(Search, {
      store,
      localVue
    });
    expect(store.dispatch).toHaveBeenCalledWith("categorys/showcategory");
  });
});
