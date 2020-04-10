import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import playlist_info from "../../src/components/playlist_info";

describe("playlist_info", () => {
  let wrapper;
  let ifliked;
  let ifnotliked;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        playlist: {
          namespaced: true,
          state: {
            playlist_length: 3,
            playlist_name: "PlayList",
            owner_name: "User",
            playlist_image: "cry.png",
            likedplaylist: false
          },
          getters: {
            playlist_length: state => state.playlist_length,
            playlist_name: state => state.playlist_name,
            owner_name: state => state.owner_name,
            playlist_image: state => state.playlist_image,
            likeplaylist: state => state.likedplaylist
          },
          actions: {
            like_playlist: jest.fn(),
            unlike_playist: jest.fn()
          }
        },
        authorization: {
          namespaced: true,
          state: {
            status: {}
          },
          getters: {
            GetStatus: state => state.status
          }
        },
        mediaplayer: {
          namespaced: true,
          state: {
            playicon: false
          },
          getters: {
            playicon: state => state.playicon
          }
        }
      }
    });
  });

  it("renders playlist information", () => {
    wrapper = shallowMount(playlist_info, {
      localVue,
      store,
      propsData: {}
    });
    const playlist_name = wrapper.find(".playlistname");
    expect(playlist_name.text()).toBe("PlayList");
    const owner_name = wrapper.find("#owner_name");
    expect(owner_name.text()).toBe("User");
    const playlist_length = wrapper.find("#playlistlength");
    expect(playlist_length.text()).toBe(3 + " SONGS");
  });
  it("if the playlist is liked", async () => {
    ifliked = shallowMount(playlist_info, {
      localVue,
      store,
      propsData: {}
    });
    ifliked.setData({
      show: false,
      play: false
    });
    const heart = ifliked.find(".emptyheartbutton");
    const likecurrentplaylist = jest.fn();
    ifliked.setMethods({
      likecurrentplaylist: likecurrentplaylist
    });
    heart.trigger("click");
    await ifliked.vm.$nextTick();
    const isnotliked = ifliked.find(".emptyheartbutton");
    const isliked = ifliked.find(".filledheartbutton");
    expect(isliked.exists()).toBe(false);
    expect(isnotliked.exists()).toBe(true);
  });
});
