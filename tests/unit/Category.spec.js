import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Category from "@/components/Category.vue";

describe("Category", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Categorys: {
          namespaced: true,
          actions:{
            categoryname:jest.fn()
          }
        }
      }
    });
    let Id = "categoryname";
    let Div = document.createElement("div");
    Div.setAttribute("id",Id);
    document.body.appendChild(Div);
    wrapper = shallowMount(Category, {
      store,
      localVue
    });
  });
  it("renders category name", () => {
    expect(wrapper.exists()).toBe(true);
    wrapper.vm.setcategoryname();
    expect("categoryname").toHaveBeenCalled;
  });
});
