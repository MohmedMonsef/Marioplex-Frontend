import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Mediaplayer from "../../src/components/Mediaplayer.vue";

describe("Mediaplayer", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  let spy;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Mediaplayer: {
          namespaced: true,
          state: {
            playicon: true,
            currentsong: {
              track: {
                _id: "5eb0a55eec0c444e9c48982f",
                images: [{ _id: "5eb0b3f2de66c65e34c18b7a" }],
                duration: 60,
                name: "track21",
                artistId: "5eb0a4559b15d854c08f7365",
                albumId: "5eb0a55cec0c444e9c48982d",
                type: "Track",
                like: 1,
              },
              isLiked: false,
              album: {
                name: "Criss cross",
                _id: "5eb0a55cec0c444e9c48982d",
                artist: { name: "artist4", _id: "5eb0a4559b15d854c08f7365" },
              },
              isPlaylist: true,
              playlistId: "5eb5248b680ef51b4c4492a1",
              isPlayable: true,
            },
            progress: 0,
            trackduration: 0,
            volumeprogress: 0,
            currentSongIndex: 0,
          },
          getters: {
            playicon: (state) => state.playicon,
            Get_Currentsong: (state) => state.currentsong,
            progress: (state) => state.progress,
            duration: (state) => state.trackduration,
            volumeprogress: (state) => state.volumeprogress,
            Index: (state) => state.currentSongIndex,
            duration: (state) => state.duration,
            liked: (state) => state.currentsong.isLiked,
          },
          actions: {
            advance_progress: jest.fn(),
            update_progress: jest.fn(),
            update_volume: jest.fn(),
            shufflesong_state: jest.fn(),
            repeatsong_state: jest.fn(),
            playsong_state: jest.fn(),
            pausesong_state: jest.fn(),
            prevsong_state: jest.fn(),
            nextsong_state: jest.fn(),
            shufflesong_state: jest.fn(),
            Like: jest.fn(),
          },
        },
        Authorization: {
          namespaced: true,
          state: {
            status: "",
            User: {},
          },
          getters: {
            GetStatus: (state) => {
              return state.status;
            },
            User: (state) => {
              return state.User;
            },
          },
        },
        CheckUserPopup: {
          namespaced: true,
          state: {
            showModal: false,
          },
          getters: {
            showModal: (state) => {
              return state.showModal;
            },
          },
          actions: {
            togglePopup: jest.fn(),
          },
        },
        Queue: {
          namespaced: true,
          actions: {
            CreateQueue: jest.fn(),
          },
        },
      },
    });
    spy = jest.spyOn(document, "getElementById");
    wrapper = shallowMount(Mediaplayer, {
      localVue,
      store,
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("is playing function", () => {
    wrapper.setData({
      isRepeat: 0,
      isShuffle: false,
      volumedrag: false,
      drag: false,
      currentPos: 0,
      volumepos: 0,
      sound: 0,
      song_state: false,
    });
    ////moving song bar test
    wrapper.vm.moving_song_bar();
    expect("advance_progress").toHaveBeenCalled;
    wrapper.vm.drag = true;
    wrapper.vm.moving_song_bar();
    expect("advance_progress").toHaveBeenCalled;

    wrapper.vm.startDrag();
    expect(wrapper.vm.drag).toBe(true);
    wrapper.vm.volumestartDrag();
    expect(wrapper.vm.volumedrag).toBe(true);

    store.state.Authorization.status = "";
    wrapper.vm.shuffle();
    expect("togglePopup").toHaveBeenCalled;
    store.state.Authorization.status = "success";
    wrapper.vm.shuffle();
    expect(wrapper.vm.isShuffle).toBe(true);
    expect("shufflesong_state").toHaveBeenCalled;

    store.state.Authorization.status = "";
    wrapper.vm.repeat_song();
    expect("togglePopup").toHaveBeenCalled;
    store.state.Authorization.status = "success";
    wrapper.vm.repeat_song();
    expect(wrapper.vm.isRepeat).toBe(1 % 3);
    expect("repeatsong_state").toHaveBeenCalled;

    ////play song
    store.state.Authorization.status = "";
    wrapper.vm.playSong();
    expect("togglePopup").toHaveBeenCalled;
  });
  it("destroy life hook test", () => {
    wrapper.destroy();
  });
});
