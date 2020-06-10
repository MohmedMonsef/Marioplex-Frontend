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
            currentsong:{
                track:
                {_id:"5eb0a55eec0c444e9c48982f",
                 images:[
                   {"_id":"5eb0b3f2de66c65e34c18b7a"}],
                   "duration":60,
                   "name":"track21",
                   "artistId":"5eb0a4559b15d854c08f7365",
                   "albumId":"5eb0a55cec0c444e9c48982d","type":"Track","like":1},
                   "isLiked":false,
                   "album":{"name":"Criss cross","_id":"5eb0a55cec0c444e9c48982d","artist":{"name":"artist4",
                   "_id":"5eb0a4559b15d854c08f7365"}},
                  "isPlaylist":true,"playlistId":"5eb5248b680ef51b4c4492a1","isPlayable":true},
                  progress: 0,
                  trackduration: 0,
                  volumeprogress: 0,
                  currentSongIndex: 0,
          },
          getters: {
            playicon: state => state.playicon,
            currentsong: state => state.currentsong,
            progress: state => state.progress,
            duration: state => state.trackduration,
            volumeprogress: state => state.volumeprogress,
            Index: state => state.currentSongIndex,
            duration: state => state.duration,
          },
          actions:{
            advance_progress: jest.fn(),
            update_progress: jest.fn(),
            update_volume: jest.fn(),
            shufflesong_state: jest.fn(),
            repeatsong_state: jest.fn(),
            playsong_state: jest.fn(),
            pausesong_state:jest.fn(),
            prevsong_state:jest.fn(),
            nextsong_state:jest.fn(),
            shufflesong_state:jest.fn(),
            Like:jest.fn(),
          }
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
            actions:{
                togglePopup: jest.fn(),
            }
          },
          Queue: {
            namespaced: true,
            actions:{
                CreateQueue: jest.fn(),
            }
          },
      }
    });
    spy = jest.spyOn(document, "getElementById");
    wrapper = shallowMount(Mediaplayer, {
      localVue,
      store
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
    ///////////////////
    // wrapper.vm.isDrag();
    // let seekbar = wrapper.find("#seekbar");
    // testId = "seekbar";
    // newDiv = document.createElement("div");
    // newDiv.setAttribute("id", testId);
    // document.body.appendChild(newDiv);
    // const getBoundingClientRectSpy = jest.fn(() => ({ left:0 }));
    // global.document.getElementById = jest.fn(() => ({
    //   getBoundingClientRect: getBoundingClientRectSpy  // <= add getBoundingClientRect
    // }));
    // const getBoundingClientRectSpy2 = jest.fn(() => ({ width:0 }));
    // global.document.getElementById = jest.fn(() => ({
    //   getBoundingClientRect: getBoundingClientRectSpy2  // <= add getBoundingClientRect
    // }));
    wrapper.vm.startDrag();
    expect(wrapper.vm.drag).toBe(true);
    wrapper.vm.stopDrag();
    expect("update_progress").toHaveBeenCalled;
    expect(wrapper.vm.drag).toBe(false);
    wrapper.vm.volumestartDrag();
    expect(wrapper.vm.volumedrag).toBe(true);
    wrapper.vm.volumeisDrag();
    wrapper.vm.volumestopDrag();
    expect("update_volume").toHaveBeenCalled;
    expect(wrapper.vm.volumedrag).toBe(false);
    wrapper.vm.volume_song();
    expect("update_volume").toHaveBeenCalled;
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
    expect(wrapper.vm.isRepeat).toBe(1%3);
    expect("repeatsong_state").toHaveBeenCalled;
    wrapper.vm.changeTime();
    wrapper.vm.totalDuration();
    /////////////////
    store.state.Mediaplayer.trackduration = NAN;
    wrapper.vm.totalDuration();
    store.state.Mediaplayer.trackduration = -8;
    wrapper.vm.totalDuration();
    ///////////////////////
    //toast test
    let testId = "liketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testId);
    document.body.appendChild(toast);
    ////play song
    store.state.Authorization.status = "";
    wrapper.vm.playSong();
    expect("togglePopup").toHaveBeenCalled;
    store.state.Authorization.status = "success";
    wrapper.vm.playSong();
    expect(wrapper.vm.song_state).toBe(true);
    expect("playsong_state").toHaveBeenCalled;
    expect("CreateQueue").toHaveBeenCalled;
    //pause song
    store.state.Authorization.status = "";
    wrapper.vm.pauseSong();
    expect("togglePopup").toHaveBeenCalled;
    store.state.Authorization.status = "success";
    wrapper.vm.pauseSong();
    expect(wrapper.vm.song_state).toBe(false);
    expect("pausesong_state").toHaveBeenCalled;
    /////previous song
    store.state.Authorization.status = "";
    wrapper.vm.prev_song();
    expect("togglePopup").toHaveBeenCalled;
    store.state.Authorization.status = "success";
    wrapper.vm.prev_song();
    expect("prevsong_state").toHaveBeenCalled;
    ////next song
    store.state.Authorization.status = "";
    wrapper.vm.next_song();
    expect("togglePopup").toHaveBeenCalled;
    store.state.Authorization.status = "success";
    wrapper.vm.next_song();
    expect("nextsong_state").toHaveBeenCalled;
    ////random songs
    store.state.Authorization.status = "";
    wrapper.vm.random_songs();
    expect("togglePopup").toHaveBeenCalled;
    store.state.Authorization.status = "success";
    wrapper.vm.random_songs();
    expect("shufflesong_state").toHaveBeenCalled;
    ///like and unlike current song
    wrapper.vm.likecurrentsong();
    expect("Like").toHaveBeenCalled;
    store.state.Mediaplayer.isLiked = true;
    wrapper.vm.likecurrentsong();
    expect("UnLike").toHaveBeenCalled;
    ///queue
    wrapper.vm.queue_alter();
  }); 
  it("destroy life hook test", () => {
    wrapper.destroy();
  }); 
});
