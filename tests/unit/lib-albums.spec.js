import {shallowMount, createLocalVue} from "@vue/test-utils";
import VueRouter from 'vue-router';
import LibAlbums from "@/components/lib-albums.vue";
describe("LibAlbums.vue", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    it("test album name& artist name", () => {
    const wrapper = shallowMount(LibAlbums , {
        localVue,
        propsData:{
            name: "album name",
            artistname: "artist name",
        //   albumId: "1",
            // artistId: 2
        }
        });
    const name = wrapper.find('#cardtitle');
    const artistname = wrapper.find('.artistlink');
    //   const albumId = wrapper.find('#carglink');
    //   const artistId = wrapper.find('.song_length');
      expect(name.text()).toBe("album name");
      expect(artistname.text()).toBe("artist name");
    //   expect(albumId.text()).toBe("1");
    //   expect(artistId.text()).toBe("8:20");
    });
  });