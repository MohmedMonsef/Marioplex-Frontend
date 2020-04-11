import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import seeallartist from "../../src/views/seeallartist";

describe("seeallartist", () => {
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
                    result: [{
                         name:"lala",
                         artistId:"1234",
                         images:[]
                    }]
                },
                getters: {
                    get_value(state) {
                        return state.search_Value;
                    },
                    getresult(state) {
                         return state.result;
                    }
                },
                actions:{
                    artistin:jest.fn()
                }
            },
        },
    });
});

it("when render dispatch",()=>{
     store.dispatch = jest.fn()
     const Wrapper = shallowMount(seeallartist,{
     store, localVue,
     methods:{
          inartist:jest.fn()
     }
 })
 expect("inartist").toHaveBeenCalled
// expect(store.dispatch).toHaveBeenCalledWith(
//      "Search/artistin",true)
})


})