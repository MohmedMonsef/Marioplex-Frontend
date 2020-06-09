import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import playlist_info from "../../src/components/PlaylistInfo.vue";

describe("playlist_info", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      playlist_id: "",
    },
  };
  localVue.prototype.$route = $route;
  let spy;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Playlist: {
          namespaced: true,
          state: {
            playlist_length: 3,
            playlist_name: "PlayList",
            owner_name: "User",
            playlist_image: "cry.png",
            likedplaylist: false,
            showModalDelete: false,
            showModal: false,
            todelete: 0,
            Playlists: [],
            loadingplaylists: 0,
          },
          getters: {
            playlist_length: (state) => state.playlist_length,
            playlist_name: (state) => state.playlist_name,
            owner_name: (state) => state.owner_name,
            playlist_image: (state) => state.playlist_image,
            likeplaylist: (state) => state.likedplaylist
          },
          actions: {
            like_playlist: jest.fn(),
            unlike_playist: jest.fn(),
            playlist_tracks: jest.fn(),
            showplaylists: jest.fn(),
          },
        },
        Authorization: {
          namespaced: true,
          state: {
            status: {},
          },
          getters: {
            GetStatus: (state) => state.status,
          },
        },
        Mediaplayer: {
          namespaced: true,
          state: {
            playicon:true,
          },
          getters: {
            playicon: (state) => state.playicon,
          },
        }
      },
    });
    spy = jest.spyOn(document, 'getElementById');
    wrapper = shallowMount(playlist_info, {
      localVue,
      store,
      stubs: ['router-link', 'router-view']
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("is playing function", () => {
    wrapper.setData({
      play:false
    });

    let testId = "playlist_image";
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
    store.state.Mediaplayer.playicon=true;
    wrapper.vm.isplaying();
    store.state.Mediaplayer.playicon=false;
    wrapper.vm.isplaying();

    expect(wrapper.vm.play).toBe(true);

    wrapper.vm.stopplaying();

    wrapper.vm.stopplayingbutton();

    expect(wrapper.vm.play).toBe(false);

  });
  it("test hover on image",() => {
    let testId = "playlist_image";
    let playlistimage = document.createElement("div");
    playlistimage.setAttribute("id", testId);
    document.body.appendChild(playlistimage);

    testId = "imageplayicon";
    let playbutton = document.createElement("div");
    playbutton.setAttribute("id", testId);
    document.body.appendChild(playbutton);

    testId = "imagepauseicon";
    let pausebutton = document.createElement("div");
    pausebutton.setAttribute("id", testId);
    document.body.appendChild(pausebutton);

    let obj =wrapper.vm.onhoverimage();

    expect(obj.img).toBe('0.3');
    expect(obj.btn).toBe('1');
    obj = wrapper.vm.onleaveimage();
    expect(obj.img).toBe('1');
    expect(obj.btn).toBe('0');
    wrapper.vm.play=true;
    obj = wrapper.vm.onhoverimage();
    expect(obj.btn).toBe('1');
    obj = wrapper.vm.onleaveimage();
    expect(obj.img).toBe('0.3');
    expect(obj.btn).toBe('1');
  });
  it("test like playlist", () => {
    let testId = "playlistliketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testId);
    document.body.appendChild(toast);
    wrapper.vm.likecurrentplaylist();
    expect("like_playlist").toHaveBeenCalled;
    expect("showplaylists").toHaveBeenCalled;
    jest.useFakeTimers();
    jest.runAllTimers(); 
    store.state.Playlist.likedplaylist = true;
    wrapper.vm.likecurrentplaylist();
    expect("unlike_playist").toHaveBeenCalled;
    expect("showplaylists").toHaveBeenCalled;
    jest.runAllTimers();
  });
});
