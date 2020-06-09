import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import ArtistHeader from "@/components/ArtistHeader"
describe("ArtistHeader", () => {
    let wrapper;
    let store;
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    beforeEach(() => {
      store = new Vuex.Store({
        modules: {
            ArtistProperties: {
            namespaced: true,
            state: {
              status: "",
              showinput: true,
            },
            getters: {
              GetStatus: (state) => {
                return state.status;
              },
              showinput:(state)=>{
                return state.showinput;
              }
            },
            actions: {
                Get_Artist_Name: jest.fn(),
                EditName: jest.fn(),
            },
          },
        },
      });
      wrapper = shallowMount(ArtistHeader, {
        localVue,
        store,
      });
    });
    it("renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    it("it show artistrename inputfield ", () => {
        const input = wrapper.find("#account-link");
        input.trigger("click");
        wrapper.vm.showinputfield();
        expect("showinputfield").toHaveBeenCalled;
      });
      it("it rename artistname  ", () => {
        const input = wrapper.find("#in_rename");
        input.trigger("keyup.enter");
        wrapper.vm.ChangeArtistName();
        expect("EditName").toHaveBeenCalled;
      });
      it("it close artistname input field  ", () => {
        const input = wrapper.find("#in_rename");
        input.trigger("keyup.enter");
         wrapper.vm.showinputfield();
        expect("showinputfield").toHaveBeenCalled;
      });
  });