import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import ArtistPersonalPage from "../../src/views/ArtistPersonalPage";
import UploadSong from "@/components/UploadSong";
import ArtistHeader from "@/components/ArtistHeader";
import EditBio from "@/components/EditBio";
describe("ArtistPersonalPage", () => {
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
            showModal: true,
            showModalUpload: true,
            ArtistName: "",
            ArtistBio: "",
            ArtistGenre: "",
            currentimage: "",
            image_id: "",
            Artist_ID: "",
          },
          actions: {
            toggleModalUpload: jest.fn(),
            Get_Artist_ID: jest.fn(),
            Get_Artist_Bio: jest.fn(),
            UploadPhoto: jest.fn(),
            toggleModal: jest.fn(),
          },
          getters: {
            showModal: (state) => {
              return state.showModal;
            },
            showModalUpload: (state) => {
              return state.showModalUpload;
            },
          },
        },
      },
      // data:{

      //   choosebutton:true,
      // }
    });
    wrapper = shallowMount(ArtistPersonalPage, {
      localVue,
      store,
      stubs: {
        UploadSong,
        ArtistHeader,
        EditBio,
      },
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("it shows upload song popup ", () => {
    const input = wrapper.find(".c_track");
    input.trigger("click");
    wrapper.vm.changeModalStateUpload();
    expect("showModalUpload").toHaveBeenCalled;
  });
  it("it shows upload song popup ", () => {
    const input = wrapper.find(".svg-container");
    input.trigger("click");
    wrapper.vm.changeModalState();
    expect("showModal").toHaveBeenCalled;
  });
  it("preview file upload  ", () => {
    const event = {
      target: {
        files: [
          {
            name: "image.png",
            size: 50000,
            type: "image/png",
            width:100,
            height:5000,
          },
        ],
      },
    };
    // wrapper.vm.OnPhotoUpload(event);
    // expect(wrapper.vm.selectedphoto).toBe(event.target.files[0]);

    // const callback = jest.fn(status => {
    //   expect(status).toBe(true);
    // });
    // const imageUrl = 'https://github.com/mrdulin';
    // const img = OnPhotoUpload(imageUrl, callback);
    // if (img.onload) {
    //   //const event: any = {};
    //   img.onload(event);
    // }

    const fileReaderSpy = jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(() => null)
    // const myfileReaderSpy = jest.spyOn(FileReader.prototype, 'onload').mockImplementation(() => null)
    // Spy on the component’s persist() method
    const persistSpy = jest.spyOn(wrapper.vm, 'persist')
 
    // Manually trigger the component’s onChange() method
    wrapper.vm.OnPhotoUpload(event)
 
    // Assert that the FileReader object was called with the uploaded image
    expect(fileReaderSpy).toHaveBeenCalledWith(event.target.files[0])
    // expect(myfileReaderSpy).toHaveBeenCalledWith(event.target.files[0])
    // Assert that the component’s persist() method was called with the uploaded image
    expect(persistSpy).toHaveBeenCalledWith(event.target.files[0])
  });
  it("it shows upload cover photo popup ", () => {
    const input = wrapper.find(".uploadbutton");
    input.trigger("click");
    wrapper.vm.UploadPhoto();
    expect("UploadPhoto").toHaveBeenCalled;
  });
  
  // it('onload', done => {
  //   const callback = jest.fn(status => {
  //     expect(status).toBe(true);
  //     done();
  //   });

    // const imageUrl = 'https://github.com/mrdulin';
    // const img = OnPhotoUpload(imageUrl, callback);
    // if (img.onload) {
    //   // const event: any = {};
    //   img.onload(event);
    // }
  // });

















  // it("it editbio ", () => {
  //   //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
  //   const changeModalState = jest.fn();
  //   wrapper.setMethods({
  //     changeModalState: changeModalState,
  //   });
  //   const btn = wrapper.find(".svg-container");
  //   btn.trigger("click");
  //   expect(changeModalState).toHaveBeenCalled();
  // });
  // it("it create track ", () => {
  //   //const wrapper = shallowMount(CreatePlaylist, { localVue, store });
  //   const changeModalStateUpload = jest.fn();
  //   wrapper.setMethods({
  //     changeModalStateUpload: changeModalStateUpload,
  //   });
  //   const btn = wrapper.find(".c_track");
  //   btn.trigger("click");
  //   expect(changeModalStateUpload).toHaveBeenCalled();
  // });

  // it("it calls togglemodal dispatch ti change modalstate", () => {
  //   store.dispatch = jest.fn();
  //   const btn = wrapper.find(".svg-container");
  //   btn.trigger("click");
  //   expect(store.dispatch).toHaveBeenCalledWith("ArtistProperties/toggleModal");
  // });
  // it("it calls toglemodalupload dispatch ti change modalstateupload", () => {
  //   store.dispatch = jest.fn();
  //   const btn = wrapper.find(".c_track");
  //   btn.trigger("click");
  //   expect(store.dispatch).toHaveBeenCalledWith(
  //     "ArtistProperties/toggleModalUpload"
  //   );
  // });
});
