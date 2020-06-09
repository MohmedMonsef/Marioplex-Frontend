import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ArtistPageCoverPhoto from "@/components/ArtistPageCoverPhoto.vue";

describe("ArtistPageCoverPhoto", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const $route = {
    params: {
      artist_id: ""
    }
  };
  localVue.prototype.$route = $route;
  let spy;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        ArtistPage: {
          namespaced: true,
          store: {
            followartist: false,
            artist_name: "",
            artistcover_image: ""
          },
          getters: {
            artist_name: state => {
              return state.artist_name;
            },
            artistcover_image: state => {
              return state.artistcover_image;
            },
            followartist: state => {
              return state.followartist;
            },
          },
          actions: {
            follow_artist: jest.fn(),
            unfollow_artist: jest.fn()
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
        }
      }
    });
    spy = jest.spyOn(document, "getElementById");
    wrapper = shallowMount(ArtistPageCoverPhoto, {
      store,
      localVue
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Artist Page CoverPhoto", () => {
    wrapper.setData({
      play: false,
      imgId: ""
    });
    let testId = "artistliketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testId);
    document.body.appendChild(toast);
    wrapper.vm.isplaying();
    wrapper.vm.stopplaying();
    wrapper.vm.followartist();
    expect("follow_artist").toHaveBeenCalled;
    jest.useFakeTimers();
    jest.runAllTimers();
    store.state.ArtistPage.followartist = true;
    wrapper.vm.followartist();
    expect("unfollow_artist").toHaveBeenCalled;
    /////////////////
    testId = "image";
    let ArtistCoverPhoto = document.createElement("div");
    ArtistCoverPhoto.setAttribute("id", testId);
    document.body.appendChild(ArtistCoverPhoto);
    ///////////////
    wrapper.vm.getImg();
    jest.runAllTimers();
  });
});
