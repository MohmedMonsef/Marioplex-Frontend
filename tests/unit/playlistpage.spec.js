import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from 'vue-router';
import playlist_info from "../../src/components/playlist_info";

describe("playlist_info", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        playlist: {
          namespaced:true,
          state: {
            playlist_length: 3,
            playlist_name: "PlayList",
            owner_name: "User",
            playlist_image: "cry.png",
            likedplaylist: false,
            
          },
          getters:{
            playlist_length: state => state.playlist_length,
            playlist_name: state => state.playlist_name,
            owner_name: state => state.owner_name,
            playlist_image: state => state.playlist_image,
            likeplaylist: state => state.likedplaylist,
         
          },
           actions:{
              like_playlist: jest.fn(),
              unlike_playist: jest.fn()
            }
        },
        authorization:{
            namespaced:true,
            state: {
              status:{}
              },
              getters:{
                GetStatus: state => state.status
              }
        },
        mediaplayer:{
              namespaced:true,
              state: {
                playicon: false,
                },
                getters:{
                    playicon: state => state.playicon
                }
        }
      }
    });
    wrapper = shallowMount(playlist_info, {
      localVue,
      store,
      propsData: {}
    });
  });

  it("renders" , () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a vue instance" , () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders playlist information", () => {
    const playlist_name = wrapper.find('.playlistname');
    expect(playlist_name.text()).toBe("PlayList");
    const owner_name = wrapper.find('#owner_name');
    expect(owner_name.text()).toBe("User");
    const  playlist_length = wrapper.find('#playlistlength');
    expect(playlist_length.text()).toBe(3 + " SONGS");
  });
  it("if the playlist is liked", async () => {
    wrapper.setData({
      show: false,
      play: false
    });
    const heart = wrapper.find(".emptyheartbutton");  
    const likecurrentplaylist = jest.fn();
    wrapper.setMethods({
      likecurrentplaylist:likecurrentplaylist
    });
    heart.trigger("click");
    await wrapper.vm.$nextTick();
    const isnotliked = wrapper.find(".emptyheartbutton");
    const isliked = wrapper.find(".filledheartbutton");
    expect(isliked.exists()).toBe(false);
    expect(isnotliked.exists()).toBe(true);
  });
  it("play button click" , () => {
    wrapper.setData({
      show: false,
      play: false
    });
    const isplaying = jest.fn();
    const playSong = jest.fn();
    wrapper.setMethods({
      isplaying:isplaying,
      playSong:playSong
    });
    const playbutton = wrapper.find(".playbutton");
    playbutton.trigger("click");
    expect(isplaying).toHaveBeenCalled;
    expect(playSong).toHaveBeenCalled;
    });
  it("pause button click" , () => {
    wrapper.setData({
      show: false,
      play: true
    });
    const stopplayingbutton = jest.fn();
    const pauseSong = jest.fn();
    wrapper.setMethods({
      stopplayingbutton:stopplayingbutton,
      pauseSong:pauseSong
    });
    const pausebutton = wrapper.find(".pausebutton");
    pausebutton.trigger("click");
    expect(stopplayingbutton).toHaveBeenCalled;
    expect(pauseSong).toHaveBeenCalled;
  });
  it("play icon click" , () => {
    wrapper.setData({
      show: false,
      play: false
    });
    const isplaying = jest.fn();
    const playSong = jest.fn();
    wrapper.setMethods({
      isplaying:isplaying,
      playSong:playSong
    });
    const playicon = wrapper.find("#imageplayicon");
    playicon.trigger("click");
    expect(isplaying).toHaveBeenCalled;
    expect(playSong).toHaveBeenCalled;
    });
    it("pause icon click" , () => {
      wrapper.setData({
        show: false,
        play: true
      });
      const stopplaying = jest.fn();
      const pauseSong = jest.fn();
      wrapper.setMethods({
        stopplaying:stopplaying,
        pauseSong:pauseSong
      });
      const pauseicon = wrapper.find("#imagepauseicon");
      pauseicon.trigger("click");
      expect(stopplaying).toHaveBeenCalled;
      expect(pauseSong).toHaveBeenCalled;
      });
});