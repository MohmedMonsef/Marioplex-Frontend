import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import AlbumInfo from "../../src/components/AlbumInfo.vue";

describe("AlbumInfo", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      album_id: ""
    }
  };
  localVue.prototype.$route = $route;
  let spy;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Album: {
          namespaced: true,
          state: {
            album_length: 3,
            album_name: "Album",
            artist_name: "Artist",
            album_image: "cry.png",
            likedalbum: false
          },
          getters: {
            album_length: state => state.album_length,
            album_name: state => state.album_name,
            artist_name: state => state.artist_name,
            album_image: state => state.album_image,
            likealbum: state => state.likedalbum
          },
          actions: {
            unlike_album: jest.fn(),
            like_album: jest.fn()
          }
        },
        Mediaplayer: {
          namespaced: true,
          state: {
            playicon: true
          },
          getters: {
            playicon: state => state.playicon
          }
        },
        Authorization:{
          namespaced: true,
          state: {
            status: "",
          },
          getters: {
            GetStatus: state => state.status
          },
        }
      }
    });
    spy = jest.spyOn(document, "getElementById");
    wrapper = shallowMount(AlbumInfo, {
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
      play: false
    });

    let testId = "album_image";
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
    store.state.Authorization.status = "";
    wrapper.vm.isplaying();
    store.state.Authorization.status = "success";
    store.state.Mediaplayer.playicon = true;
    wrapper.vm.isplaying();
    store.state.Mediaplayer.playicon = false;
    wrapper.vm.isplaying();

    expect(wrapper.vm.play).toBe(true);

    wrapper.vm.stopplaying();

    wrapper.vm.stopplayingbutton();

    expect(wrapper.vm.play).toBe(false);
  });
  it("test hover on image", () => {
    let testId = "album_image";
    let albumimage = document.createElement("div");
    albumimage.setAttribute("id", testId);
    document.body.appendChild(albumimage);

    testId = "imageplayicon";
    let playbutton = document.createElement("div");
    playbutton.setAttribute("id", testId);
    document.body.appendChild(playbutton);

    testId = "imagepauseicon";
    let pausebutton = document.createElement("div");
    pausebutton.setAttribute("id", testId);
    document.body.appendChild(pausebutton);

    let obj = wrapper.vm.onhoverimage();

    expect(obj.img).toBe("0.3");
    expect(obj.btn).toBe("1");
    obj = wrapper.vm.onleaveimage();
    expect(obj.img).toBe("1");
    expect(obj.btn).toBe("0");
    wrapper.vm.play = true;
    obj = wrapper.vm.onhoverimage();
    expect(obj.btn).toBe("1");
    obj = wrapper.vm.onleaveimage();
    expect(obj.img).toBe("0.3");
    expect(obj.btn).toBe("1");
  });
  it("test like / unlike album", () => {
    let testId = "albumliketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testId);
    document.body.appendChild(toast);
    store.state.Authorization.status = "";
    wrapper.vm.likecurrentalbum();
    store.state.Authorization.status = "success";
    wrapper.vm.likecurrentalbum();
    expect("like_album").toHaveBeenCalled;
    jest.useFakeTimers();
    jest.runAllTimers();
    store.state.Album.likedalbum = true;
    store.state.Authorization.status = "";
    wrapper.vm.likecurrentalbum();
    store.state.Authorization.status = "success";
    wrapper.vm.likecurrentalbum();
    expect("unlike_album").toHaveBeenCalled;
    jest.runAllTimers();
  });
});
