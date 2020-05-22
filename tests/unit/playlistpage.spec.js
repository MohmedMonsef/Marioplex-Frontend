import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import playlist_info from "../../src/components/PlaylistInfo.vue";

describe("playlist_info", () => {
  let wrapper;
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Playlist: {
          namespaced: true,
          state: {
            playlist_length: 3,
            playlist_name: "PlayList",
            owner_name: "User",
            playlist_image: "cry.png",
            likedplaylist: false,
            showModalDelete: false,
            showModal: false,
            todelete: 0,
            Playlists: [],
            loadingplaylists: 0,
          },
          getters: {
            playlist_length: (state) => state.playlist_length,
            playlist_name: (state) => state.playlist_name,
            owner_name: (state) => state.owner_name,
            playlist_image: (state) => state.playlist_image,
            likeplaylist: (state) => state.likedplaylist,
          },
          actions: {
            like_playlist: jest.fn(),
            unlike_playist: jest.fn(),
            playlist_tracks: jest.fn(),
            showplaylists: jest.fn(),
          },
        },
        Authorization: {
          namespaced: true,
          state: {
            status: {},
          },
          getters: {
            GetStatus: (state) => state.status,
          },
        },
        Mediaplayer: {
          namespaced: true,
          state: {
            playicon: false,
          },
          getters: {
            playicon: (state) => state.playicon,
          },
        }
      },
    });
    // wrapper = shallowMount(playlist_info, {
    //   localVue,
    //   store,
    //   propsData: {}
    // });
  });

  it("renders", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    expect(wrapper.exists()).toBe(true);
  });
  it("renders playlist name", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    const playlist_name = wrapper.find(".playlistname");
    expect(playlist_name.text()).toBe("PlayList");
  });
  it("has a playlist owner page router", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    expect(wrapper.exists("#owner_name")).toBe(true);
  });

  it("renders playlist ownername", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    const owner_name = wrapper.find("#owner_name");
    expect(owner_name.text()).toBe("User");
  });
  it("renders playlist length", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    const playlist_length = wrapper.find("#playlistlength");
    expect(playlist_length.text()).toBe(3 + " SONGS");
  });

  it("if the playlist is liked button onclick", async () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: false,
    });
    const heart = wrapper.find(".emptyheartbutton");
    const likecurrentplaylist = jest.fn();
    wrapper.setMethods({
      likecurrentplaylist: likecurrentplaylist,
    });
    heart.trigger("click");
    await wrapper.vm.$nextTick();
    const isnotliked = wrapper.find(".emptyheartbutton");
    const isliked = wrapper.find(".filledheartbutton");
    expect(isliked.exists()).toBe(false);
    expect(isnotliked.exists()).toBe(true);
  });
  it("if the playlist is liked icon onclick", async () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: false,
    });
    const heart = wrapper.find("#emptyhearticon");
    const likecurrentplaylist = jest.fn();
    wrapper.setMethods({
      likecurrentplaylist: likecurrentplaylist,
    });
    heart.trigger("click");
    await wrapper.vm.$nextTick();
    const isnotliked = wrapper.find("#emptyhearticon");
    const isliked = wrapper.find("#filledhearticon");
    expect(isliked.exists()).toBe(false);
    expect(isnotliked.exists()).toBe(true);
  });
  it("likedplaylist method", async () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: false,
    });
    const heart = wrapper.find("#emptyhearticon");
    const likecurrentplaylist = jest.fn();
    wrapper.setMethods({
      likecurrentplaylist: likecurrentplaylist,
    });
    heart.trigger("click");
    await wrapper.vm.$nextTick();
    expect(likecurrentplaylist).toHaveBeenCalled;
  });
  it("play button click", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: false,
    });
    const isplaying = jest.fn();
    const playSong = jest.fn();
    wrapper.setMethods({
      isplaying: isplaying,
      playSong: playSong,
    });
    const playbutton = wrapper.find(".playbutton");
    playbutton.trigger("click");
    expect(isplaying).toHaveBeenCalled;
    expect(playSong).toHaveBeenCalled;
  });
  it("pause button click", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: true,
    });
    const stopplayingbutton = jest.fn();
    const pauseSong = jest.fn();
    wrapper.setMethods({
      stopplayingbutton: stopplayingbutton,
      pauseSong: pauseSong,
    });
    const pausebutton = wrapper.find(".pausebutton");
    pausebutton.trigger("click");
    expect(stopplayingbutton).toHaveBeenCalled;
    expect(pauseSong).toHaveBeenCalled;
  });
  it("play icon click", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: false,
    });
    const isplaying = jest.fn();
    const playSong = jest.fn();
    wrapper.setMethods({
      isplaying: isplaying,
      playSong: playSong,
    });
    const playicon = wrapper.find("#imageplayicon");
    playicon.trigger("click");
    expect(isplaying).toHaveBeenCalled;
    expect(playSong).toHaveBeenCalled;
  });
  it("pause icon click", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: true,
    });
    const stopplaying = jest.fn();
    const pauseSong = jest.fn();
    wrapper.setMethods({
      stopplaying: stopplaying,
      pauseSong: pauseSong,
    });
    const pauseicon = wrapper.find("#imagepauseicon");
    pauseicon.trigger("click");
    expect(stopplaying).toHaveBeenCalled;
    expect(pauseSong).toHaveBeenCalled;
  });
  it("image on hover", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: true,
    });
    const onhoverimage = jest.fn();
    wrapper.setMethods({
      onhoverimage: onhoverimage,
    });
    const playbutton = wrapper.find(".playlist_image");
    playbutton.trigger("mouseover");
    expect(onhoverimage).toHaveBeenCalled;
  });
  it("image on leave", () => {
    const wrapper = shallowMount(playlist_info, {
      localVue,
      store,
    });
    wrapper.setData({
      show: false,
      play: true,
    });
    const onleaveimage = jest.fn();
    wrapper.setMethods({
      onleaveimage: onleaveimage,
    });
    const pausebutton = wrapper.find(".playlist_image");
    pausebutton.trigger("mouseleave");
    expect(onleaveimage).toHaveBeenCalled;
  });
});
