import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AccountRecover from "@/components/AccountRecover.vue";

describe("AccountRecover", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Authorization: {
          namespaced: true,
          state: {
            deleted_playlists: [
              {
                id: "1",
                name: "wow",
                songsNumber: 5,
                deletedAt: "1999-09-04T00:00:00.000Z",
              },
            ],
          },
          getters: {
            deleted_playlists: (state) => state.deleted_playlists,
          },
          actions: {
            showDeletedPlaylists: jest.fn(),
          },
        },
        Playlist: {
          namespaced: true,
          state: {
            restored: "",
          },
          getters: {
            restored: (state) => state.restored,
          },
          actions: {
            restorePlaylist: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(AccountRecover, {
      localVue,
      store,
    });
  });
  it("call Restore functions", () => {
    const restoreButton = wrapper.find(".restore");
    restoreButton.trigger("click");
    wrapper.vm.Restore();
    expect("restorePlaylist").toHaveBeenCalled;
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
