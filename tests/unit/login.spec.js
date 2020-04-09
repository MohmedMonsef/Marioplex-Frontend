import { createLocalVue,shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from 'vue-router'
import Login from "../../src/views/Login";

describe("Login", () => {
        let wrapper;
        let store;
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueRouter)
        beforeEach(() => {
          store = new Vuex.Store({
            modules: {
                authorization: {
                namespaced:true,
                state:{
                    status:''
                },
                getters:{
                  GetStatus:state => {
                    return state.status;
                  }
                }
              }
            }
        });
        wrapper = shallowMount(Login,{
           localVue,
           store,
        })
      });
it("input email",()=>{
    let email =wrapper.find("#email")
    email.element.value="mm@gmail.com";
    email.trigger("input");
    expect(wrapper.vm.email).toBe("mm@gmail.com");
});
});