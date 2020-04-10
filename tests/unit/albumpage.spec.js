import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from 'vue-router';
import album_info from "../../src/components/album_info";

describe("album_info", () => {
  let wrapper;
  let ifliked;
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
  it("renders album information", () => {
    const album_name = wrapper.find('.albumname');
    expect(album_name.text()).toBe("Album");
    const artist_name = wrapper.find('#artist_name');
    expect(artist_name.text()).toBe("Artist");
    const  album_length = wrapper.find('#albumlength');
    expect(album_length.text()).toBe(5 + " SONGS");
    
  });
  it("if the album is liked", async () => {
    ifliked = shallowMount(album_info, {
      localVue,
      store,
      propsData: {}
    });
    ifliked.setData({
      show: false,
      play: false
    });
    const heart = ifliked.find(".emptyheartbutton");  
    const likecurrentalbum = jest.fn();
    ifliked.setMethods({
      likecurrentalbum:likecurrentalbum
    });
    heart.trigger("click");
    await ifliked.vm.$nextTick();
    const isnotliked = ifliked.find(".emptyheartbutton");
    const isliked = ifliked.find(".filledheartbutton");
    expect(isliked.exists()).toBe(false);
    expect(isnotliked.exists()).toBe(true);
  });
});