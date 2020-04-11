import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import LibLikedsongs from "@/components/lib-likedsongs.vue";
import Vuex from "vuex";
describe("LibLikedsongs.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        userlibrary: {
          namespaced: true,
          state: {
            user_songs: [
              {
                artistName: "artist name",
                name: "song name"
              }
            ]
          },
          getters: {
            songs: state => state.user_songs
          },
          actions: {
            showUserSongs: jest.fn()
          }
        }
      }
    });
  });
  it("test artist name & song name", () => {
    const wrapper = shallowMount(LibLikedsongs, {
      localVue,
      store
    });
    const name = wrapper.find(".songname");
    const artistName = wrapper.find("#artist_name");
    const songs_length = wrapper.find(".card-text");
    expect(name.text()).toBe("song name");
    expect(artistName.text()).toBe("artist name");
    expect(songs_length.text()).toBe("1 liked songs");
  });
  it("renders", () => {
    const wrapper = shallowMount(LibLikedsongs, {
      localVue,
      store
    });
    expect(wrapper.exists()).toBe(true);
  }); 
  it("renders a vue instance", () => {
    const wrapper = shallowMount(LibLikedsongs, {
      localVue,
      store
    });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
