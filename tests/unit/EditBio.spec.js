import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import EditBio from "@/components/EditBio";
describe("EditBio", () => {
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
            showModal: true,
          },
          getters: {
            GetStatus: (state) => {
              return state.status;
            },
            showModal: (state) => {
              return state.showModal;
            },
          },
          actions: {
            toggleModal: jest.fn(),
            EditBio: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(EditBio, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("it show artistrename inputfield ", () => {
    const input = wrapper.find(".cancel");
    input.trigger("click");
    wrapper.vm.changeModalState();
    expect("toggleModal").toHaveBeenCalled;
  });
  it("it rename artistname  ", () => {
    const input = wrapper.find(".edit_button");
    input.trigger("click.prevent");
    wrapper.vm.EditBio();
    expect("EditBio").toHaveBeenCalled;
  });
});
