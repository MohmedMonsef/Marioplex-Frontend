import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import likedtracks_info from "../../src/components/likedtracks_info";

describe("likedtracks_info", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        likedtracks: {
          namespaced: true,
          state: {
            likedtracks_length: 5,
            owner_name: "User"
          },
          getters: {
            likedtracks_length: state => state.likedtracks_length,
            owner_name: state => state.owner_name
          }
        },
        mediaplayer:{
          state:{
            playicon: false,
          },
          getters:{
            playicon: state => {
              return state.playicon;
          }
        }
      }
    }
    });
    wrapper = shallowMount(likedtracks_info, {
      localVue,
      store,
      propsData: {}
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders likedtracks information", () => {
    const owner_name = wrapper.find("#owner_name");
    expect(owner_name.text()).toBe("User");
  });
  it("play button click", () => {
    wrapper.setData({
      play: false
    });
    const isplaying = jest.fn();
    wrapper.setMethods({
      isplaying: isplaying,
    });
    const playbutton = wrapper.find(".playbutton");
    playbutton.trigger("click");
    expect(isplaying).toHaveBeenCalled;
  });
  it("pause button click", () => {
    wrapper.setData({
      play: true
    });
    const stopplayingbutton = jest.fn();
    wrapper.setMethods({
      stopplayingbutton: stopplayingbutton,
    });
    const pausebutton = wrapper.find(".pausebutton");
    pausebutton.trigger("click");
    expect(stopplayingbutton).toHaveBeenCalled;
  });
  it("play icon click", () => {
    wrapper.setData({
      play: false
    });
    const isplaying = jest.fn();
    wrapper.setMethods({
      isplaying: isplaying,
    });
    const playicon = wrapper.find("#imageplayicon");
    playicon.trigger("click");
    expect(isplaying).toHaveBeenCalled;
  });
  it("pause icon click", () => {
    wrapper.setData({
      play: true
    });
    const stopplaying = jest.fn();
    wrapper.setMethods({
      stopplaying: stopplaying,
    });
    const pauseicon = wrapper.find("#imagepauseicon");
    pauseicon.trigger("click");
    expect(stopplaying).toHaveBeenCalled;
  });
  it("renders likedtracks information", () => {
    const likedtracks_length = wrapper.find(".length");
    expect(likedtracks_length.text()).toBe(5 + " SONGS");
  });
  it("play button click", () => {
    wrapper.setData({
      play: false
    });
    const playSong = jest.fn();
    wrapper.setMethods({
      playSong: playSong
    });
    const playbutton = wrapper.find(".playbutton");
    playbutton.trigger("click");
    expect(playSong).toHaveBeenCalled;
  });
  it("pause button click", () => {
    wrapper.setData({
      play: true
    });
    const pauseSong = jest.fn();
    wrapper.setMethods({
      pauseSong: pauseSong
    });
    const pausebutton = wrapper.find(".pausebutton");
    pausebutton.trigger("click");
    expect(pauseSong).toHaveBeenCalled;
  });
  it("play icon click", () => {
    wrapper.setData({
      play: false
    });
    const playSong = jest.fn();
    wrapper.setMethods({
      playSong: playSong
    });
    const playicon = wrapper.find("#imageplayicon");
    playicon.trigger("click");
    expect(playSong).toHaveBeenCalled;
  });
  it("pause icon click", () => {
    wrapper.setData({
      play: true
    });
    const pauseSong = jest.fn();
    wrapper.setMethods({
      pauseSong: pauseSong
    });
    const pauseicon = wrapper.find("#imagepauseicon");
    pauseicon.trigger("click");
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
