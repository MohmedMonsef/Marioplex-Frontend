import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import UploadSong from "@/components/UploadSong";

describe("UploadSong", () => {
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
            showModalUpload: true,
          },
          getters: {
            GetStatus: (state) => {
              return state.status;
            },
            showModalUpload: (state) => {
              return state.showModalUpload;
            },
          },
          actions: {
            toggleModalUpload: jest.fn(),
            UploadTrack: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(UploadSong, {
      localVue,
      store,
      fileReaderSpy : jest
      .spyOn(FileReader.prototype, "readAsDataURL")
      .mockImplementation(() => null),
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("it shows upload song popup ", () => {
    const input = wrapper.find(".cancel");
    input.trigger("click");
    wrapper.vm.changeModalStateUpload();
    expect("showModalUpload").toHaveBeenCalled;
  });
  it("it get high file ", () => {
    const input = wrapper.find("#uploadheighfile");
    input.trigger("click");
    // wrapper.vm.OnHeighFileSelected();
    expect(wrapper.vm.OnHeighFileSelected).toHaveBeenCalled;
  });
  it("it get medium file ", () => {
    const input = wrapper.find("#uploadmediumfile");
    input.trigger("click");
    // wrapper.vm.OnHeighFileSelected();
    expect(wrapper.vm.OnMediumFileSelected).toHaveBeenCalled;
  });
  it("it get low file ", () => {
    const input = wrapper.find("#uploadlowfile");
    input.trigger("click");
    // wrapper.vm.OnHeighFileSelected();
    expect(wrapper.vm.OnLowFileSelected).toHaveBeenCalled;
  });
  it("it get high enc file ", () => {
    const input = wrapper.find("#uploadheighencfile");
    input.trigger("click");
    // wrapper.vm.OnHeighFileSelected();
    expect(wrapper.vm.OnHeigh_EncFileSelected).toHaveBeenCalled;
  });
  it("it get medium enc file ", () => {
    const input = wrapper.find("#uploadmediumencfile");
    input.trigger("click");
    // wrapper.vm.OnHeighFileSelected();
    expect(wrapper.vm.OnMedium_EncFileSelected).toHaveBeenCalled;
  });
  it("it get low enc file ", () => {
    const input = wrapper.find("#uploadlowencfile");
    input.trigger("click");
    // wrapper.vm.OnHeighFileSelected();
    expect(wrapper.vm.OnLow_EncFileSelected).toHaveBeenCalled;
  });
  it("it get preview file ", () => {
    const input = wrapper.find("#uploadpreviewfile");
    input.trigger("click");
    // wrapper.vm.OnHeighFileSelected();
    expect(wrapper.vm.OnFilePreviewSelected).toHaveBeenCalled;
  });
  it("it upload track  ", () => {
    const input = wrapper.find(".creat_button");
    input.trigger("click.prevent");
    wrapper.vm.UploadTrack();
    expect("UploadTrack").toHaveBeenCalled;
  });
  it("High file upload  ", () => {
     let event = {
        target: {
          files: [
            {
              name: "audio.webm",
              size: 50000,
              type: "audio/webm",
            },
          ],
        },
      };
      
     wrapper.vm.OnHeighFileSelected(event);
     expect(wrapper.vm.Heighselectedfile ).toBe(event.target.files[0]);
  });
  it("medium file upload ", () => {
    const event = {
      target: {
        files: [
          {
            name: "audio.webm",
            size: 50000,
            type: "audio/webm",
          },
        ],
      },
    };
    wrapper.vm.OnMediumFileSelected(event);
    expect(wrapper.vm.Mediumselectedfile ).toBe(event.target.files[0]);
  });
  it("low file upload  ", () => {
    const event = {
      target: {
        files: [
          {
            name: "audio.webm",
            size: 50000,
            type: "audio/webm",
          },
        ],
      },
    };
    
    wrapper.vm.OnLowFileSelected(event);
    expect(wrapper.vm.Lowselectedfile ).toBe(event.target.files[0]);
  });
  it("high encrypted file upload  ", () => {
    const event = {
      target: {
        files: [
          {
            name: "audio.webm",
            size: 50000,
            type: "audio/webm",
          },
        ],
      },
    };
    
    wrapper.vm.OnHeigh_EncFileSelected(event);
    expect(wrapper.vm.Heigh_Encselectedfile ).toBe(event.target.files[0]);
  });
  it("medium file encrypted upload  ", () => {
    const event = {
      target: {
        files: [
          {
            name: "audio.webm",
            size: 50000,
            type: "audio/webm",
          },
        ],
      },
    };
    
    wrapper.vm.OnMedium_EncFileSelected(event);
    expect(wrapper.vm.Medium_Encselectedfile).toBe(event.target.files[0]);
  });
  it("low file encrypted upload  ", () => {
    const event = {
      target: {
        files: [
          {
            name: "audio.webm",
            size: 50000,
            type: "audio/webm",
          },
        ],
      },
    };;
    wrapper.vm.OnLow_EncFileSelected(event);
    expect(wrapper.vm.Low_Encselectedfile).toBe(event.target.files[0]);
  });
  it("preview file upload  ", () => {
    const event = {
      target: {
        files: [
          {
            name: "audio.webm",
            size: 50000,
            type: "audio/webm",
          },
        ],
      },
    };
    wrapper.vm.OnFilePreviewSelected(event);
    expect(wrapper.vm.selectedpreview).toBe(event.target.files[0]);
  });
});
