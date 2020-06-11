import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import LikedTracksInfo from "../../src/components/LikedTracksInfo.vue";

describe("LikedTracksInfo", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  let spy;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        LikedTracks: {
          namespaced: true,
          state: {
            likedtracks_length: "",
            owner_name: ""
          },
          getters: {
            likedtracks_length: state => state.likedtracks_length,
            owner_name: state => state.owner_name
          }
        },
        Mediaplayer: {
          namespaced: true,
          state: {
            playicon: true
          },
          getters: {
            playicon: state => state.playicon
          }
        }
      }
    });
    spy = jest.spyOn(document, "getElementById");
    wrapper = shallowMount(LikedTracksInfo, {
      localVue,
      store
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("is playing function", () => {
    wrapper.setData({
      play: false
    });

    let testId = "likedtracks_image";
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", testId);
    document.body.appendChild(newDiv);
    testId = "imageplayicon";
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", testId);
    document.body.appendChild(newDiv);
    testId = "imagepauseicon";
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", testId);
    document.body.appendChild(newDiv);
    store.state.Mediaplayer.playicon = true;
    wrapper.vm.isplaying();
    store.state.Mediaplayer.playicon = false;
    wrapper.vm.isplaying();

    expect(wrapper.vm.play).toBe(true);

    wrapper.vm.stopplaying();

    wrapper.vm.stopplayingbutton();

    expect(wrapper.vm.play).toBe(false);
  });
  it("test hover on image", () => {
    let testId = "likedtracks_image";
    let likedtracksimage = document.createElement("div");
    likedtracksimage.setAttribute("id", testId);
    document.body.appendChild(likedtracksimage);

    testId = "imageplayicon";
    let playbutton = document.createElement("div");
    playbutton.setAttribute("id", testId);
    document.body.appendChild(playbutton);

    testId = "imagepauseicon";
    let pausebutton = document.createElement("div");
    pausebutton.setAttribute("id", testId);
    document.body.appendChild(pausebutton);

    let obj = wrapper.vm.onhoverimage();

    expect(obj.img).toBe("0.3");
    expect(obj.btn).toBe("1");
    obj = wrapper.vm.onleaveimage();
    expect(obj.img).toBe("1");
    expect(obj.btn).toBe("0");
    wrapper.vm.play = true;
    obj = wrapper.vm.onhoverimage();
    expect(obj.btn).toBe("1");
    obj = wrapper.vm.onleaveimage();
    expect(obj.img).toBe("0.3");
    expect(obj.btn).toBe("1");
  });
});
