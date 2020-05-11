<template>
  <div class="SideBar" testid="sidebar component">
    <!-- spotify logo -->
    <router-link to="/HomeWebPlayer" testid="logo in sidebar">
      <img
        src="../assets/spotify logo.png"
        alt="Logo"
        style="width: 150px; height: 65px; margin: 20px;"
      />
    </router-link>
    <!-- navigations to pages -->
    <ul>
      <li>
        <div class="divOnFocus">
          <router-link
            to="/HomeWebPlayer"
            testid="homepage link"
            class="homepage"
            id="homepage1"
          >
            <i class="fa fa-home"></i>Home
          </router-link>
        </div>
      </li>
      <li>
        <div
          class="divOnFocus"
          id="callsearch"
          @click="setsearch(), setfocus()"
        >
          <router-link
            to="/HomeWebPlayer/search"
            testid="searchpage link"
            class="searchpage"
          >
            <i class="fa fa-search"></i>Search
          </router-link>
          <!-- router link should navigate to search page -->
        </div>
      </li>
      <li>
        <div class="divOnFocus">
          <router-link
            to="/HomeWebPlayer/library/library-playlists"
            testid="librarypage link"
            class="librarypage"
          >
            <i class="fa fa-bars"></i> Your Library
          </router-link>
          <!-- router link should navigate to library page -->
        </div>
      </li>
    </ul>
    <div class="loggedin" v-if="isLoggedIn == 'success'">
      <label testid="PLAYLISTS lable">PLAYLISTS</label>
      <!-- creat play lists or show liked songs -->
      <ul>
        <li>
          <!-- <CreatePlaylist> -->
          <button
            @click="changeModalState()"
            testid="create button"
            class="createbutton"
          >
            <i class="fa fa-plus-square" id="CreatePlaylist"></i>Creat Playlist
          </button>
          <!-- router link should navigate to pop up -->
          <!-- </CreatePlaylist> -->
        </li>
        <li>
          <router-link
            to="/HomeWebPlayer/liked-tracks"
            testid="likedsongs link"
            class="likedsongs"
          >
            <img
              src="../assets/like.png"
              style="width: 30px; height: 30px; margin-right: 15px;"
            />Liked Songs
          </router-link>
          <!-- router link should navigate to liked songs page -->
        </li>
      </ul>
      <!-- lower border -->
      <div testid="border in sidebar" class="border"></div>
      <!-- user's play lists -->
      <!-- <div id="demo" @contextmenu="openMenu('click')">  -->
      <ul>
        <li
          v-for="(playlist, i) in playlists1"
          :key="i"
          @click.right="
            (playlistid = playlist),
              (showdelete = true),
              getpos(),
              (p_id = playlist.id)
          "
        >
          <router-link to="/" testid="userplaylists" class="userplaylists">{{
            playlist.name
          }}</router-link>
          <!-- router link should navigate to play list page-->
        </li>
      </ul>
      <input
        v-if="showinput"
        id="in_rename"
        v-model="newname"
        @keyup.enter="ChangePlaylistName(), showinputfield()"
      />
      <ul v-if="showdelete" id="right-click-menu">
        <li class="rename_input" @click="showinputfield()">Rename</li>
        <li class="delete_div" @click="changeModalStateDelete()">Delete</li>

        <li class="rename_input" @click="PubPriChange()">Secret</li>
        <li class="rename_input" @click="PubPriChange()">Public</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.SideBar {
  position: fixed;
  width: 235px;
  height: 100%;
  background-color: black;
  top: 0%;
  z-index: 0;
}
label {
  font-size: 11px;
  padding-left: 24px;
  color: darkgray;
  padding-top: 23px;
  margin-bottom: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
.border {
  background-color: #747272;
  width: 190px;
  height: 1px;
  margin: 25px;
  margin-top: 10px;
  margin-bottom: 9px;
  display: block;
}

.homepage,
.searchpage,
.librarypage {
  height: 100%;
  width: 100%;
  font-size: 14px;
  color: darkgray;
  padding-left: 15px;
  font-weight: bold;
  line-height: 45px;
}
.likedsongs {
  height: 100%;
  width: 100%;
  font-size: 14px;
  color: darkgray;
  padding-left: 24px;
  font-weight: bold;
  line-height: 40px;
}
.SideBar ul a i {
  margin-right: 15px;
  font-size: 25px;
}
.createbutton {
  background-color: black;
  height: 100%;
  width: 180px;
  color: darkgray;
  font-weight: bold;
  font-size: 14px;
  line-height: 40px;
  border: none;
  outline: none;
}
.createbutton i {
  margin-right: 15px;
  font-size: 33px;
}
.homepage:hover,
.searchpage:hover,
.librarypage:hover,
.createbutton:hover,
.likedsongs:hover {
  color: white;
  text-decoration: none;
  align-content: center;
}
.homepage:focus,
.searchpage:focus,
.librarypage:focus,
.likedsongs:focus {
  color: white;
}
.userplaylists {
  font-size: 14px;
  color: darkgray;
  padding-left: 30px;
}
.userplaylists:hover {
  color: white;
  text-decoration: none;
}
.divOnFocus {
  border-radius: 15px;
  width: 218px;
  height: 40px;
  margin-left: 8px;
  background: black;
}
.divOnFocus :focus {
  width: 100%;
  height: 100%;
  background: #313030;
  display: block;
}
#right-click-menu {
  background-color: #313030;
  list-style: none;
  width: 150px;
  height: 40px;
  padding-left: 10px;
  padding-top: 7px;
  padding-bottom: 10px;
  position: absolute;
  display: block;
  margin-left: 10px; /* delete it */
}
#right-click-menu li {
  cursor: pointer;
  color: gray;
}
#right-click-menu li:hover {
  color: white;
}
#right-click-menu:hover {
  background-color: rgba(77, 75, 75, 0.7);
}
#in_rename {
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: white;
  color: black;
  height: 20px;
}
</style>

<script>
import { mapGetters } from "vuex";
/**
 * SideBar drawer including navigation to library or home or search
 * @displayName SideBar
 * @example [none]
 */
export default {
  data: function () {
    return {
      show: false,
      showdelete: false,
      playlistid: 0,
      //showinput: false,
      posy: "",
      newname: "",
      p_id: "",
      public: true,
    };
  },
  mounted() {
    this.$store.dispatch("Playlist/showplaylists");
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      playlists1: "Playlist/playlists",
      showModalDelete: "Playlist/showModalDelete",
      isLoggedIn: "Authorization/GetStatus",
      showinput: "Playlist/showinput",
      // renamepl:"creatplaylist/renamepl"
    }),
  },
  name: "SideBar",
  methods: {
    /**
     * triggers creating playlist popup
     * @public This is a public method
     */
    changeModalState() {
      this.$store.dispatch("Playlist/toggleModal");
    },
    /**
     * triggers deleting playlist popup
     * @public This is a public method
     */
    changeModalStateDelete() {
      this.$store.dispatch("Playlist/toggleModalDelete", this.playlistid);
    },
    /**
     * triggers navigating to search action
     * @public This is a public method
     */
    setsearch() {
      this.$store.dispatch("Search/search_V", "");
      this.$store.dispatch("Search/clear");
    },
    /**
     * triggers navigating to search router
     * @public This is a public method
     */
    setfocus() {
      this.searchfocus = true;
      this.$store.dispatch("Search/searchfocus", this.searchfocus);
    },
    showinputfield() {
      this.$store.dispatch("Playlist/showinputfield");
      //this.showinput = !this.showinput;
      this.$nextTick(function () {
        var i = document.getElementById("in_rename");
        console.log("the element", this.posy);
        if (i) {
          i.style.top = this.posy;

          // this.showinput = true;
        }
      });
    },
    getpos() {
      this.posy = event.screenY - 110 + "px";
      console.log(" posy", this.posy);
    },
    ChangePlaylistName() {
      // this.showinput = false;
      let payload = {
        name: this.newname,
        playlist_id: this.p_id,
      };
      console.log("inputstaplaylistids", this.showinput);
      console.log("playlistname", this.newname);
      console.log("id", this.p_id);
      this.$store.dispatch("Playlist/ChangePlaylistName", payload);
    },
    PubPriChange() {
      if (this.public) {
        this.public = false;
      } else {
        this.public = true;
      }
      let payload = {
        public: this.public,
        playlist_id: this.p_id,
      };
      this.$store.dispatch("Playlist/PubPriChange", payload);
    },
  },
};
</script>
