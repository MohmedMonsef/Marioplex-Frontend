import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import SongComponent from "../../src/components/SongComponent";

describe("SongComponent", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Mediaplayer: {
          namespaced: true,
          state: {
            currentsong: {
              track: {
                _id: "5e80ceb853e67b1e284a0f15",
                trackNumber: 1,
                name: "HAVANA",
                artistId: "5e80c9b614c8566d6cd9b40e",
                albumId: "5e80cc2b14c8566d6cd9b40f",
                images: [],
              },
              isLiked: true,
              album: {
                name: "HELLO KIDS",
                _id: "5e80cc2b14c8566d6cd9b40f",
                artist: { name: "nada", _id: "5e80c9b614c8566d6cd9b40e" },
              },
              isPlaylist: true,
              playlistId: "5e891c8edb96e26db4efc790",
              isPlayable: true,
            },
            playicon: "false",
          },
          getters: {
            Get_Currentsong: (state) => {
              return state.currentsong;
            },
            playicon: (state) => {
              return state.playicon;
            },
          },
          actions:{
            UnLike:jest.fn()
          }
        },
        Playlist:{
          namespaced:true,
          state:{
            showModalAdd:false,
            withtrack:true
          },
          getters:{
            withtrack: (state) => {
              return state.withtrack;
            },
          },
          actions:{
            toggleModalAdd:jest.fn(),
            RemoveFromThisPlaylist:jest.fn()
          }
        },
        Authorization:{
          namespaced:true,
          state:{
            Usename:""
          },
          getters:{
            Usename: (state) => {
              return state.Usename;
            },
          }
        },
        Queue:{
          namespaced:true,
        actions:{
          AddToQueue:jest.fn()
        }
        }
      },
    });
    wrapper = shallowMount(SongComponent, {
      localVue,
      store,    
      propsData: {
        song_name: "my song",
        song_album: "burtonhollow",
        song_artists: "civil wars",
        song_length: 0,
        isPlayable:true
      }, });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
    wrapper.destroy();
  });
  it("show options list", () => {
    var event="";
    let testId = "mydropdown";
    let mydropdown = document.createElement("div");
    mydropdown.setAttribute("id", testId);
    document.body.appendChild(mydropdown);
    wrapper.vm.toggleShow(event) 
    
  });
  
  it("test add to queue function ", () => {
    wrapper.vm.addToQueue();
    expect("AddToQueue").toHaveBeenCalled;
  }); 
  it("show add to playlist popup", () => {
    wrapper.vm.changeModalStateAdd();
    expect("toggleModalAdd").toHaveBeenCalled;
  }); 
  it("remove from playlist function ", () => {
    wrapper.vm.RemoveFromThisPlaylist();
    expect("RemoveFromThisPlaylist").toHaveBeenCalled;
  }); 
  it("click to toggle style ",() => {
    wrapper.vm.clicked();
    expect(wrapper.vm.isclicked).toBe(true);
  });
  it("play song on double click",() => {
    wrapper.vm.playOnDblCLk();
    expect(wrapper.vm.playSong()).toHaveBeenCalled;
    wrapper.vm.playOnDblCLk();
    expect(wrapper.vm.playSong()).toHaveBeenCalled;
    wrapper.vm.song_id ="5e80ceb853e67b1e284a0f15";
    wrapper.vm.albumId= "5e80cc2b14c8566d6cd9b40f";

    store.state.Mediaplayer.playicon=false;

    wrapper.vm.playOnDblCLk();
    expect(wrapper.vm.playSong()).toHaveBeenCalled;

    store.state.Mediaplayer.playicon=true;

    wrapper.vm.playOnDblCLk();
    expect(wrapper.vm.pauseSong()).toHaveBeenCalled;

  });
  it("like and unlike current song ",() => 
  {
    let testId = "liketoast";
    let toast = document.createElement("div");
    toast.setAttribute("id", testId);
    document.body.appendChild(toast);
    wrapper.vm.likecurrentsong();
    jest.useFakeTimers();
    jest.runAllTimers(); 
    expect("Like").toHaveBeenCalled;
    expect(wrapper.vm.isLiked).toBe(true);
    wrapper.vm.likecurrentsong();
    jest.runAllTimers(); 
    expect("UnLike").toHaveBeenCalled;
    expect(wrapper.vm.isLiked).toBe(false);
  });
  it("hide options list ",() => {
    let event={
       target:{
         id:""
        }
    };
    wrapper.vm.hideshow(event);
    expect(wrapper.vm.isclicked).toBe(false);
    expect(wrapper.vm.show).toBe(false);
  });
});
