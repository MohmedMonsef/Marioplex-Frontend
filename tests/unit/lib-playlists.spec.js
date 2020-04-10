import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import LibPlaylists from "@/components/lib-playlists.vue";
import Vuex from "vuex";
describe("LibPlaylists.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        authorization: {
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
        playlist: {
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
  });
  it("test playlist name & owner", () => {
    const wrapper = shallowMount(LibPlaylists, {
      localVue,
      store,
      propsData: {
        name: "playlist name",
        ownerName: "dai"
      }
    });
    const name = wrapper.find("#cardtitle");
    const ownerName = wrapper.find("#carddescribtion");
    expect(name.text()).toBe("playlist name");
    expect(ownerName.text()).toBe("By dai");
  });
  it("renders", () => {
    const wrapper = shallowMount(LibPlaylists, {
      localVue,
      store
    });
    expect(wrapper.exists()).toBe(true);
  }); 
  it("renders a vue instance", () => {
    const wrapper = shallowMount(LibPlaylists, {
      localVue,
      store
    });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
