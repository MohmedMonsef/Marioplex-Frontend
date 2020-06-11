import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import AccountNotifications from "@/components/AccountNotifications.vue";

describe("AccountNotifications", () => {
  let wrapper;
  let store;
  let router = new VueRouter();
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Notifications: {
          namespaced: true,
          state: {
            userNotifications: [
              {
                data: {
                  albumId: "5ececb4ceedca51f5079346b",
                  title: "WOOOOOH NEW ALBUM",
                  body: "Nada Uploaded a New Album -- CHECK IT OUT !",
                },
              },
            ],
          },
          getters: {
            notifications: (state) => state.userNotifications,
          },
          actions: {
            showUserNotifications: jest.fn(),
          },
        },
      },
    });
    wrapper = shallowMount(AccountNotifications, {
      localVue,
      store,
      router,
    });
  });
  // it("got to album route", () => {
  //   const myCard = wrapper.find(".card");
  //   myCard.trigger("click");
  //   wrapper.vm.goRoute();
  //   expect(push).toHaveBeenCalledWith('/HomeWebPlayer/album/5ececb4ceedca51f5079346b');
  // });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
