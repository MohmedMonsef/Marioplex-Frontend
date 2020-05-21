import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import category from "../../src/components/Category";

describe("category", () => {
  let Wrapper;
  let store;

  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      moduales: {
        Categorys: {
          namespace: true,
          state: {
            category: [],
          },
          getters: {
            getcategory: (state) => state.category,
          },
        },
      },
    });
  });

  Wrapper = shallowMount(category, {
    localVue,
    store,
    propsData: {
      name: "pop",
      categoryId: "123456",
    },
  });

  it("renders", () => {
    expect(Wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(Wrapper.isVueInstance()).toBe(true);
  });

  it("renders category info", () => {
    const category_name = Wrapper.find(".card-title");
    // const category_id = wrapper.find('');

    expect(category_name.text()).toBe("pop");
  });
});
