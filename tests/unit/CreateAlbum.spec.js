import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import CreateAlbum from "@/components/CreateAlbum";
describe("CreateAlbum", () => {
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
                showModalCreate: true,
              },
              getters: {
                GetStatus: (state) => {
                  return state.status;
                },
                showModalCreate: (state) => {
                  return state.showModalCreate;
                },
              },
              actions: {
                toggleModalCreate: jest.fn(),
                Create_Album: jest.fn(),
              },
            },
          },
        });
        wrapper = shallowMount(CreateAlbum, {
          localVue,
          store,
        });
      });
      it("renders", () => {
        expect(wrapper.exists()).toBe(true);
      });
      it("it shows Create album popup ", () => {
        const input = wrapper.find(".cancel");
        input.trigger("click");
        wrapper.vm.changeModalStateCreate();
        expect("showModalCreate").toHaveBeenCalled;
      });
      it("it Creates Album ", () => {
        const input = wrapper.find(".creat_button");
        input.trigger("click");
        wrapper.vm.Create_Album();
        expect("Create_Album").toHaveBeenCalled;
      });
})