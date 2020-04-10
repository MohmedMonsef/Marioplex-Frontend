import {shallowMount, createLocalVue} from "@vue/test-utils";
import VueRouter from 'vue-router';
import NavbarWebplayer from "@/components/NavbarWebplayer.vue";
import Vuex from "vuex";
describe("NavbarWebplayer.vue", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    let store;
    beforeEach(() => {
        store = new Vuex.Store({
        modules: {
            authorization:{
                namespaced: true,
                state:{
                    status: "success",
                    User: {
                        displayName: "user name"
                    }                },
                getters:{
                    Username: state => state.User.displayName,
                    GetStatus: state => state.status
                },
            },
        }
    });
    });
    it("call goprev function when previous button is clicked", () => {
    const wrapper = shallowMount(NavbarWebplayer , {
        localVue,
        store,
    });
    const goprev = jest.fn();
    wrapper.setMethods({
        goprev:goprev,
    });
    const prev_button = wrapper.find('.prev');
    prev_button.trigger('click');
    expect(goprev).toHaveBeenCalled;
    });

    it("call gonext function when next button is clicked", () => {
        const wrapper = shallowMount(NavbarWebplayer , {
            localVue,
            store,
        });
       
        const gonext = jest.fn();
        wrapper.setMethods({
            gonext:gonext,
        });
        const next_button = wrapper.find('.next');
        next_button.trigger('click');
        expect(gonext).toHaveBeenCalled;
        });
        // it("check dropdown list has user name", () => {
        //     const wrapper = shallowMount(NavbarWebplayer , {
        //         localVue,
        //         store,
        //     });
        //     const dropdown = wrapper.find('#drop_button');
        //     expect(dropdown.text()).toBe('User Icon user name');
        //     });
        it("call logout function", () => {
            const wrapper = shallowMount(NavbarWebplayer , {
                localVue,
                store,
            });
           
            const logout = jest.fn();
            wrapper.setMethods({
                logout:logout,
            });
            const anchor = wrapper.find('#logout');
            anchor.trigger('click');
            expect(logout).toHaveBeenCalled;
            });

});


///////////////////////////////////////////////////////////////////////////
// import {shallowMount, createLocalVue} from "@vue/test-utils";
// import CreatePlaylist from "@/components/CreatePlaylist.vue";
// //import VueRouter from 'vue-router';
// import Vuex from "vuex";
// //import TestHelper from "test/test-helpers";
// //import {getters,mutations,actions} from "@/modules/creatplaylist.js"



// describe('CreatePlaylist',()=>{
//     const localVue = createLocalVue()
//     localVue.use(Vuex)
//    // let wrapper
//     let store
//    // let h 
//     beforeEach(()=>{
//         store=new Vuex.Store({
//             modules:{
//                 creatplaylist:{
//                     namespaced:true,
//                     state:{
//                           showModal: false,
//                           Playlists: [],
//                     },
//                     getters:{
//                         showModal: state => {
//                             return state.showModal;
//                           },
                         
//                    },
//                 //     mutations:{
//                 //         toggleModal(state) {
//                 //             state.showModal = !state.showModal;
//                 //           },
//                 //           CreatePlaylist(state, playlists) {
//                 //             state.Playlists.push(
//                 //               //id: id,
//                 //               // playlistname: i
//                 //               playlists
//                 //             );
//                 //             console.log("nori");
//                 //           },
//                 //    },
//                     actions:{
//                         toggleModal:jest.fn(),
//                         CreatePlaylist:jest.fn(),
//                     },
//                 },
//                 authorization:{
//                     namespaced:true,
//                     state:{
//                         User:{
//                             displayName:"user name",
//                         }

//                     },
//                      getters:{
//                         Username: state => state.User.displayName,
//                    }
//                 }
//             }
//         })
        
//        // h=new TestHelper(wrapper,expect)
//     })
    
//     it('has a button', () => {
//         const  wrapper= shallowMount(CreatePlaylist,{localVue,store});     
//         expect(wrapper.exists('.creat_button')).toBe(true)
//         //expect(true).toBe(true)
//       })
//       it("it's a vue instance ",()=>{
//           const wrapper=shallowMount(CreatePlaylist,{localVue,store});
//          expect(wrapper.isVueInstance()).toBe(true);

//       });
//       it("it creates a playlist", ()=>{
//         const wrapper=shallowMount(CreatePlaylist,{localVue,store});
//           //const Create=jest.fn();
//         // const changeModalState=jest.fn();
//         // wrapper.setMethods({
//         //    // CreatePlaylist:Create,
//         // changeModalState:changeModalState
//         //   });
//         const button= wrapper.find('.cancel_button');
//         button.trigger('click');
//         //  //await Vue.nextTick()
//         //   // expect(Create).toHaveBeenCalled();
//         // expect(changeModalState).toHaveBeenCalled();
//        });
// });