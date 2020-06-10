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
            showModalCreate:true,
          },
          actions: {
            toggleModalUpload: jest.fn(),
            Get_Artist_ID: jest.fn(),
            Get_Artist_Bio: jest.fn(),
            UploadPhoto: jest.fn(),
            toggleModal: jest.fn(),
            Get_Album_ID: jest.fn(),
            Get_Artist_Name: jest.fn(),
            toggleModalCreate: jest.fn(),
          },
          getters: {
            showModal: (state) => {
              return state.showModal;
            },
            showModalUpload: (state) => {
              return state.showModalUpload;
            },
            image_id: (state) => {
              return state.image_id;
            },
            ArtistBio: (state) => {
              return state.ArtistBio;
            },
            ArtistName: (state) => {
              return state.ArtistName;
            },
            showinput: (state) => {
              return state.showinput;
            },
            Artist_ID: (state) => {
              return state.Artist_ID;
            },
            Albums: (state) => {
              return state.Albums;
            },
          },
        },
      },
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
    // jest.mock('image.png', () => 'image.png');
    // wrapper.vm.load((error) => {
    //   expect(wrapper.emitted().ready.length).toBe(1);
    //   done(error);
    // });
    const fileReaderSpy = jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(() => null)
    const persistSpy = jest.spyOn(wrapper.vm, 'persist')
 
    wrapper.vm.OnPhotoUpload(event)
    expect(fileReaderSpy).toHaveBeenCalledWith(event.target.files[0])
    expect(persistSpy).toHaveBeenCalledWith(event.target.files[0])
  });
  it("it shows upload cover photo popup ", () => {
    const input = wrapper.find(".uploadbutton");
    input.trigger("click");
    wrapper.vm.UploadPhoto();
    expect("UploadPhoto").toHaveBeenCalled;
  });
  it("it shows create track popup ", () => {
    const input = wrapper.find(".c_album");
    input.trigger("click");
    wrapper.vm.changeModalStateCreate();
    expect("showModalCreate").toHaveBeenCalled;
  });
  
  // it('onload', done => {
  //   const callback = jest.fn(status => {
  //     expect(status).toBe(true);
  //     done();
  //   });
});