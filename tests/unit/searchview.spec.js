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
                    category: [],
                    search_Value: "",
                    load: false
                },
                getters: {
                    getcategory: state => state.category,
                    loadingsearch: state => state.load,
                    get_value(state) {
                        return state.search_Value;
                      }
                },
                
                actions:{
                    showcategory:jest.fn()
                }
            },
        },
    });
});


it("when input field is empty it call setvalue dispatch only ",()=>{
    const store = new Vuex.Store()
    store.dispatch = jest.fn()
   const Wrapper = shallowMount(Search,{
   store, localVue
 })
expect(store.dispatch).toHaveBeenCalledWith(
     "categorys/showcategory")
})

})