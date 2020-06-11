import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import LibPlaylists from "@/components/LibPlaylists.vue";
import { shorten } from "@/components/LibPlaylists.vue";
import Vuex from "vuex";
describe("LibPlaylists.vue", () => {
  const localVue = createLocalVue();
  localVue.filter("shorten", shorten);
  localVue.use(VueRouter);
  localVue.use(Vuex);
  let store;
  let wrapper;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Authorization: {
          namespaced: true,
          state: {
            User: {
              displayName: "user name"
            }
          },
          getters: {
            Username: state => state.User.displayName
          }
        },
        Playlist: {
          namespaced: true,
          state: {
            likedplaylist: true
          },
          getters: {
            likeplaylist: state => state.likedplaylist
          }
        }
      }
    });
    wrapper = shallowMount(LibPlaylists, {
      localVue,
      store,
      propsData: {
        name: "playlist name",
        ownerName: "dai"
      }
    });
  });
  it("test playlist name & owner", () => {
    const name = wrapper.find("#cardtitle");
    const ownerName = wrapper.find("#carddescribtion");
    expect(name.text()).toBe("playlist name");
    expect(ownerName.text()).toBe("By dai");
  });
  it("test playlist namekk & owner", () => {
    store.state.Playlist.likedplaylist = false;
    let wrapper2 = shallowMount(LibPlaylists, {
      localVue,
      store,
      propsData: {
        name: "playlist name",
        ownerName: "dai"
      }
    });
    const name = wrapper2.find("#cardtitle");
    const ownerName = wrapper2.find("#carddescribtion");
    expect(name.text()).toBe("playlist name");
    expect(ownerName.text()).toBe("By user name");
  });
  it("renders", () => {
    const wrapper = shallowMount(LibPlaylists, {
      localVue,
      store
    });
    expect(wrapper.exists()).toBe(true);
  });
});
