import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import SongComponent from "../../src/components/SongComponent";

describe("SongComponent", () => {
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
        Mediaplayer: {
          namespaced: true,
          state: {
            currentsong: {
              track: {
                availableMarkets: ["EG,US"],
                _id: "5e80ceb853e67b1e284a0f15",
                trackNumber: 1,
                name: "HAVANA",
                artistId: "5e80c9b614c8566d6cd9b40e",
                albumId: "5e80cc2b14c8566d6cd9b40f",
                discNumber: 1,
                explicit: false,
                type: "Track",
                acousticness: 10,
                danceability: 23,
                energy: 100,
                instrumentalness: 4,
                key: 90,
                liveness: 25,
                loudness: 70,
                mode: 56,
                speechiness: 67,
                tempo: 76,
                timeSignature: "2020-03-29T16:37:12.554Z",
                valence: 70,
                __v: 0,
                images: [],
              },
              isLiked: true,
              album: {
                name: "HELLO KIDS",
                _id: "5e80cc2b14c8566d6cd9b40f",
                artist: { name: "nada", _id: "5e80c9b614c8566d6cd9b40e" },
              },
              isPlaylist: true,
              playlistId: "5e891c8edb96e26db4efc790",
              isPlayable: true,
            },
            playicon: "false",
          },
          getters: {
            Get_Currentsong: (state) => {
              return state.currentsong;
            },
            playicon: (state) => {
              return state.playicon;
            },
          },
        },
        Playlist:{
          namespaced:true,
          state:{
            showModalAdd:false
          }
        }
      },
    });
    wrapper = shallowMount(SongComponent, {
      localVue,
      store,
      propsData: {
        song_name: "my song",
        song_album: "burtonhollow",
        song_artists: "civil wars",
        song_length: 500,
      },
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders song info", () => {
    const song_name = wrapper.find(".song_name");
    const song_album = wrapper.find(".song_album");
    const song_artists = wrapper.find(".song_artist");
    const song_length = wrapper.find(".song_length");
    expect(song_name.text()).toBe("my song");
    expect(song_album.text()).toBe("burtonhollow");
    expect(song_artists.text()).toBe("civil wars");
    expect(song_length.text()).toBe("8:20");
  });
  it("if component is clicked ", async () => {
    const music_icon = wrapper.find(".music_icon");
    music_icon.trigger("click");
    wrapper.setData({
      isclicked: true,
    });
    const playSong = jest.fn();
    wrapper.setMethods({
      playSong: playSong,
    });
    expect("playSong").toHaveBeenCalled;
  });
  it("if the component is liked", async () => {
    ifliked = shallowMount(SongComponent, {
      localVue,
      store,
      propsData: {
        isLiked: true,
      },
    });
    ifliked.setData({
      show: false,
    });
    const menu = ifliked.find("#icondiv");
    menu.trigger("click");

    await ifliked.vm.$nextTick();

    const isnotliked = ifliked.find("#ifnotliked");
    const isliked = ifliked.find("#ifliked");

    expect(isliked.exists()).toBe(true);
    expect(isnotliked.exists()).toBe(false);
  });
  it("if the component is not liked", async () => {
    ifnotliked = shallowMount(SongComponent, {
      localVue,
      store,
      propsData: {
        isLiked: false,
      },
    });
    ifnotliked.setData({
      show: false,
    });
    const menu = ifnotliked.find("#icondiv");
    menu.trigger("click");

    await ifnotliked.vm.$nextTick();

    const isnotliked = ifnotliked.find("#ifnotliked");
    const isliked = ifnotliked.find("#ifliked");

    expect(isliked.exists()).toBe(false);
    expect(isnotliked.exists()).toBe(true);
  });
  it("if mouse hover on component", async () => {
    let icon = wrapper.find(".fa-music");
    expect(icon.exists()).toBe(true);

    wrapper.setData({
      hover: true,
    });
    await wrapper.vm.$nextTick();
    icon = wrapper.find(".fa-play");
    expect(icon.exists()).toBe(true);
  });
});
