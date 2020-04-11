import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";

import topresult_card from "../../src/components/topresult_card"

describe("topresult_card", () => {
    let Wrapper;
    let store;

    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);

    beforeEach(() => {
        store = new Vuex.Store({
            moduales: {
                Search: {
                    namespace: true,
                    state: {
                        topres: [],
                    },
                    getters: {
                        gettopres(state) {
                            return state.topres;
                        },
                    },
                },
            },
        });
    });

    Wrapper = shallowMount(topresult_card, {
        localVue,
        store,
        propsData: {
            name: "amr",
            type: "artist",
        },
    });
    
    it("renders", () => {
        expect(Wrapper.exists()).toBe(true);
      });
      
    it("renders a vue instance", () => {
        expect(Wrapper.isVueInstance()).toBe(true);
    });

    it("renders topresult_card name", () => {
        const topresult_card_name = Wrapper.find(".card-title");

        expect(topresult_card_name.text()).toBe("amr");
    });

    it("renders topresult_card type", () => {
        const topresult_card_type = Wrapper.find(".typecont");

        expect(topresult_card_type.text()).toBe("artist");
    });

});
