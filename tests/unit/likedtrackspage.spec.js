import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import likedtracks_info from "../../src/components/LikedTracksInfo";

describe("likedtracks_info", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        LikedTracks: {
          namespaced: true,
          state: {
            likedtracks_length: 5,
            owner_name: "User",
          },
          getters: {
            likedtracks_length: (state) => state.likedtracks_length,
            owner_name: (state) => state.owner_name,
          },
        },
        Mediaplayer: {
          namespaced: true,
          state: {
            playicon: false,
          },
          getters: {
            playicon: (state) => state.playicon,
          },
          actions: {
            playSong: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(likedtracks_info, {
      localVue,
      store,
      propsData: {},
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders likedtracks information", () => {
    const owner_name = wrapper.find("#owner_name");
    expect(owner_name.text()).toBe("User");
    const likedtracks_length = wrapper.find(".length");
    expect(likedtracks_length.text()).toBe(5 + " SONGS");
  });
  it("play button click", () => {
    wrapper.setData({
      play: false,
    });
    const isplaying = jest.fn();
    const playSong = jest.fn();
    wrapper.setMethods({
      isplaying: isplaying,
      playSong: playSong,
    });
    const playbutton = wrapper.find(".playbutton");
    playbutton.trigger("click");
    expect(isplaying).toHaveBeenCalled;
    expect(playSong).toHaveBeenCalled;
  });
  it("pause button click", () => {
    wrapper.setData({
      play: true,
    });
    const stopplayingbutton = jest.fn();
    const pauseSong = jest.fn();
    wrapper.setMethods({
      stopplayingbutton: stopplayingbutton,
      pauseSong: pauseSong,
    });
    const pausebutton = wrapper.find(".pausebutton");
    pausebutton.trigger("click");
    expect(stopplayingbutton).toHaveBeenCalled;
    expect(pauseSong).toHaveBeenCalled;
  });
  it("play icon click", () => {
    wrapper.setData({
      play: false,
    });
    const isplaying = jest.fn();
    const playSong = jest.fn();
    wrapper.setMethods({
      isplaying: isplaying,
      playSong: playSong,
    });
    const playicon = wrapper.find("#imageplayicon");
    playicon.trigger("click");
    expect(isplaying).toHaveBeenCalled;
    expect(playSong).toHaveBeenCalled;
  });
  it("pause icon click", () => {
    wrapper.setData({
      play: true,
    });
    const stopplaying = jest.fn();
    const pauseSong = jest.fn();
    wrapper.setMethods({
      stopplaying: stopplaying,
      pauseSong: pauseSong,
    });
    const pauseicon = wrapper.find("#imagepauseicon");
    pauseicon.trigger("click");
    expect(stopplaying).toHaveBeenCalled;
    expect(pauseSong).toHaveBeenCalled;
  });
  it("image leaving", () => {
    const onleaveimage = jest.fn();
    wrapper.setMethods({
      onleaveimage: onleaveimage,
    });
    const playbutton = wrapper.find(".image");
    playbutton.trigger("mouseleave");
    expect(onleaveimage).toHaveBeenCalled;
  });
  it("image hovering", () => {
    const onhoverimage = jest.fn();
    wrapper.setMethods({
      onhoverimage: onhoverimage,
    });
    const playbutton = wrapper.find(".image");
    playbutton.trigger("mouseover");
    expect(onhoverimage).toHaveBeenCalled;
  });
});
