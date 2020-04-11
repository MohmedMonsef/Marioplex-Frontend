import {shallowMount, createLocalVue} from "@vue/test-utils";
import DeletePlaylist from "@/components/DeletePlaylist.vue";
import Vuex from "vuex";
describe('DeletePlaylist',()=>{
    const localVue = createLocalVue()
    localVue.use(Vuex)
    let store
    beforeEach(()=>{
        store=new Vuex.Store({
            modules:{
                creatplaylist:{
                    namespaced:true,
                    state:{
                        showModalDelete: true,
                        todelete: 0,
                        Playlists: [],
                    },
                    getters:{
                        todelete: state => {
                            return state.todelete;
                          },
                          showModalDelete: state => {
                            return state.showModalDelete;
                          },
                    }
                }
            }

        })

    });
    it('has a button', () => {
        const  wrapper= shallowMount(DeletePlaylist,{localVue,store});     
         expect(wrapper.exists('.delete_button')).toBe(true)
         //expect(true).toBe(true)
        });
        it("it's a vue instance ",()=>{
           const  wrapper= shallowMount(DeletePlaylist,{localVue,store}); 
           expect(wrapper.isVueInstance()).toBe(true);
  
        });
        it("it deletes a playlist",  ()=>{
            const wrapper=shallowMount(DeletePlaylist,{localVue,store});
            const Delete=jest.fn();
             const changeModalStateDelete=jest.fn();
             wrapper.setMethods({
                 DeletePlaylist:Delete,
                changeModalStateDelete:changeModalStateDelete
             });
          const btn= wrapper.find('.delete_button');
           btn.trigger('click');  
           expect(Delete).toHaveBeenCalled();
           expect(changeModalStateDelete).toHaveBeenCalled();
         });
         it("it close icon ",  ()=>{
            const wrapper=shallowMount(DeletePlaylist,{localVue,store});
             const changeModalStateDelete=jest.fn();
             wrapper.setMethods({
                changeModalStateDelete:changeModalStateDelete
             });
          const btn= wrapper.find('.cancel');
           btn.trigger('click');  
           expect(changeModalStateDelete).toHaveBeenCalled();
         });
         it("it cancel button ",  ()=>{
            const wrapper=shallowMount(DeletePlaylist,{localVue,store});
             const changeModalStateDelete=jest.fn();
             wrapper.setMethods({
                changeModalStateDelete:changeModalStateDelete
             });
          const btn= wrapper.find('.cancel_button');
           btn.trigger('click');  
           expect(changeModalStateDelete).toHaveBeenCalled();
         });


        it("renders", () => {
            const wrapper=shallowMount(DeletePlaylist,{localVue,store});
            expect(wrapper.exists()).toBe(true);
          }); 
          it("renders a vue instance", () => {
            const wrapper=shallowMount(DeletePlaylist,{localVue,store});
            expect(wrapper.isVueInstance()).toBe(true);
          });

})