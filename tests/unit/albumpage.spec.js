import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from 'vue-router';
import album_info from "../../src/components/album_info";

describe("album_info", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        album: {
          namespaced:true,
          state: {
            album_length: 5,
            album_name: "Album",
            artist_name: "Artist",
            album_image: "../../src/assets/cry.png",
            likedalbum: false
          },
          getters:{
           album_length: state => state.album_length,
           album_name: state => state.album_name,
           artist_name: state => state.artist_name,
           album_image: state => state.album_image,
           likealbum: state => state.likedalbum
          },
          actions:{
            like_album: jest.fn(),
            unlike_album: jest.fn(),
            album_tracks:jest.fn()
          }
        }
      }
    });
    wrapper = shallowMount(album_info, {
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
  it("renders album name", () => {
    const album_name = wrapper.find('.albumname');
    expect(album_name.text()).toBe("Album");
  });
  
  it("renders album artistname", () => {
    const artist_name = wrapper.find('#artist_name');
    expect(artist_name.text()).toBe("Artist");
  });

  it("renders album length", () => {
    const  album_length = wrapper.find('#albumlength');
    expect(album_length.text()).toBe(5 + " SONGS");
  });

  it("if the album is liked onclick button", async () => {
    wrapper.setData({
      show: false,
      play: false
    });
    const heart = wrapper.find(".emptyheartbutton");  
    const likecurrentalbum = jest.fn();
    wrapper.setMethods({
      likecurrentalbum:likecurrentalbum
    });
    heart.trigger("click");
    await wrapper.vm.$nextTick();
    const isnotliked = wrapper.find(".emptyheartbutton");
    const isliked = wrapper.find(".filledheartbutton");
    expect(isliked.exists()).toBe(false);
    expect(isnotliked.exists()).toBe(true);
  });
  it("if the album is liked onclick icon", async () => {
    wrapper.setData({
      show: false,
      play: false
    });
    const heart = wrapper.find("#emptyhearticon");  
    const likecurrentalbum = jest.fn();
    wrapper.setMethods({
      likecurrentalbum:likecurrentalbum
    });
    heart.trigger("click");
    await wrapper.vm.$nextTick();
    const isnotliked = wrapper.find("#emptyhearticon");
    const isliked = wrapper.find("#filledhearticon");
    expect(isliked.exists()).toBe(false);
    expect(isnotliked.exists()).toBe(true);
  });

  it("likedalbum method", async () => {
    wrapper.setData({
      show: false,
      play: false
    });
    const heart = wrapper.find(".emptyheartbutton");  
    const likecurrentalbum = jest.fn();
    wrapper.setMethods({
      likecurrentalbum:likecurrentalbum
    });
    heart.trigger("click");
    await wrapper.vm.$nextTick();
    expect(likecurrentalbum).toHaveBeenCalled;
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

      it("image on hover" , () => {
        wrapper.setData({
          show: false,
          play: true
        });
        const onhoverimage = jest.fn();
        wrapper.setMethods({
          onhoverimage:onhoverimage
        });
        const playbutton = wrapper.find(".album_image");
        playbutton.trigger("mouseover");
        expect(onhoverimage).toHaveBeenCalled;
        });
        it("image on leave" , () => {
          wrapper.setData({
            show: false,
            play: true
          });
          const onleaveimage = jest.fn();
          wrapper.setMethods({
            onleaveimage:onleaveimage
          });
          const pausebutton = wrapper.find(".album_image");
          pausebutton.trigger("mouseleave");
          expect(onleaveimage).toHaveBeenCalled;
          });
          
});