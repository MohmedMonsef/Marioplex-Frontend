import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
//import VueRouter from "vue-router";
import ArtistPersonalPage from "../../src/views/ArtistPersonalPage";
import UploadSong from "@/components/UploadSong";
import ArtistHeader from "@/components/ArtistHeader";
import EditBio from "@/components/EditBio";
describe("ArtistPersonalPage",()=>{
    let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  //localVue.use(VueRouter);
  beforeEach(()=>{
    store = new Vuex.Store({
        modules:{
            artistproperties:{
                namespaced:true,
                state: {
                    showModal: true,
                    showModalUpload: true
                  },
                  actions:{
                    toggleModalUpload:jest.fn(),
                  },
            },
        }
    });
    wrapper = shallowMount(ArtistPersonalPage, {
        localVue,
        store,
        stubs:{
            UploadSong,
            ArtistHeader,
            EditBio
        }
      });
  });
  it("it editbio ", () => {
    //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalState = jest.fn();
    wrapper.setMethods({
      changeModalState: changeModalState
    });
    const btn = wrapper.find(".svg-container");
    btn.trigger("click");
    expect(changeModalState).toHaveBeenCalled();
  });
   it("it create track ", () => {
    //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
    const changeModalStateUpload = jest.fn();
    wrapper.setMethods({
      changeModalStateUpload: changeModalStateUpload
    });
    const btn = wrapper.find(".c_track");
    btn.trigger("click");
    expect(changeModalStateUpload).toHaveBeenCalled();
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("it calls togglemodal dispatch ti change modalstate", () => {
    store.dispatch = jest.fn();
    const btn = wrapper.find(".svg-container");
    btn.trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith(
      "artistproperties/toggleModal")
  });
  it("it calls toglemodalupload dispatch ti change modalstateupload", () => {
    store.dispatch = jest.fn();
    const btn = wrapper.find(".c_track");
    btn.trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith(
      "artistproperties/toggleModalUpload")
  });

})