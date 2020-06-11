<template>
  <div class="SideBar" testid="sidebar component">
    <!-- spotify logo -->
    <router-link to="/HomeWebPlayer" testid="logo in sidebar">
      <img
        src="../assets/white Marioplex.png"
        alt="Logo"
        class="logoImg"
       
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
            <i class="fa fa-home"></i>
            <span class="smallbar"> Home </span>
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
            <i class="fa fa-search"></i>
            <span class="smallbar"> Search</span>
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
            <i class="fa fa-bars"></i>
            <span class="smallbar"> Your Library</span>
          </router-link>
          <!-- router link should navigate to library page -->
        </div>
      </li>
    </ul>
    <div class="loggedin" v-if="isLoggedIn == 'success'">
      <label testid="PLAYLISTS lable" class="smallbar">PLAYLISTS</label>
      <!-- creat play lists or show liked songs -->
      <ul>
        <li>
          <!-- <CreatePlaylist> -->
          <button
            @click="changeModalState()"
            testid="create button"
            class="createbutton"
          >
            <i class="fa fa-plus-square" id="CreatePlaylist"></i>
            <span class="smallbar">Create Playlist</span>
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
            <img src="../assets/like.png" class="likedimg" />
            <span class="smallbar">Liked Songs</span>
          </router-link>
          <!-- router link should navigate to liked songs page -->
        </li>
      </ul>
      <!-- lower border -->
      <div testid="border in sidebar" class="border smallbar"></div>
      <!-- user's play lists -->
      <!-- <div id="demo" @contextmenu="openMenu('click')">  -->
      <ul class="smallbar">
        <li
          v-for="(playlist, i) in playlists1"
          :key="i"
          @click.right="
            (playlistid = playlist),
              toggleSideMenu(playlist.type, playlist.isPublic),
              getpos(),
              (p_id = playlist.id)
          "
        >
          <router-link
            :to="{ path: '/HomeWebPlayer/playlist/' + playlist.id }"
            testid="userplaylists"
            class="userplaylists"
          >
            {{ playlist.name }}
          </router-link>
          <!-- router link should navigate to play list page-->
        </li>
      </ul>

      <!-- try -->

      <div id="mydropdown" class="db" v-if="showSideMenu">
        <p
          v-if="type == 'created'"
          class="rename_input"
          id="renameInput"
          @click="showinputfield(true)"
        >
          Rename
        </p>
        <p class="delete_div" @click="changeModalStateDelete()">
          Delete
        </p>
        <p v-if="isPublic && type == 'created'" @click="PubPriChange()">
          Secret
        </p>
        <p v-if="!isPublic && type == 'created'" @click="PubPriChange()">
          Public
        </p>
      </div>

      <!-- try -->
      <input
        v-if="showinput"
        id="in_rename"
        v-model="newname"
        @keyup.enter="ChangePlaylistName(), showinputfield(false)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.SideBar {
  position: absolute;
  width: 235px;
  height: calc(100vh - 90px);
  background-color: black;
  top: 0%;
  z-index: 0;
  overflow-y: auto;
  overflow-x: hidden;
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
  left: 10px;
  background-color: white;
  color: black;
  height: 20px;
}
.db {
  position: absolute;
  background-color: #282828;
  width: 203px;
  padding: 5px 0;
  z-index: 1000;
  border-radius: 0.25rem;
  right: 20px;
  p {
    color: darkgray;
    margin: 0%;
    margin-top: 2px;
    padding: 10px 20px;
    font-size: 14px;
    height: 38px;
  }
  p:hover {
    background-color: #313030;
    color: #fff;
    cursor: pointer;
  }
}
.song:hover {
  background-color: #313030;
}
.likedimg {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}
.logoImg{
  width: 140px; 
  margin: 20px;
}
@media screen and (max-width: 1000px) {
  .smallbar {
    display: none;
  }
  .SideBar {
    width: 60px;
    padding-top: 20px;
  }
  .divOnFocus {
    width: 45px;
    text-align: center;
    a {
      padding-left: 12px;
    }
  }
  .createbutton {
    width: 60px;
    margin-left: 8px;
  }
  .likedimg {
    margin-left: -10px;
    width: 30px;
  }
  .logoImg{
  width: 50px; 
  margin: 5px;
}
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
  data: function() {
    return {
      show: false,
      showdelete: false,
      playlistid: 0,
      posy: "",
      newname: "",
      p_id: "",
      public: true,
      showSideMenu: false,
      type: "",
      isPublic: false,
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
      sideMenu: "UserLibrary/sideMenu",
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
    showinputfield(flag) {
      this.$store.dispatch("Playlist/showinputfield", flag);
      //this.showinput = !this.showinput;
      this.$nextTick(function() {
        var i = document.getElementById("in_rename");
        console.log("the element", this.posy);
        if (i) {
          i.style.top = this.posy;

          // this.showinput = true;
        }
      });
    },
    getpos() {
      this.posy = (event.screenY - 105) + "px";
    },
    ChangePlaylistName() {
      let payload = {
        name: this.newname,
        playlist_id: this.p_id
      };
      this.$store.dispatch("Playlist/ChangePlaylistName", payload);
      this.newname = "";
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
    toggleSideMenu(type, isPublic) {
      this.type = type;
      this.isPublic = isPublic;
      var x = this.showSideMenu;
      this.$store.dispatch("UserLibrary/sideMenu", true);
      window.Element.showSideMenu = false;
      this.showSideMenu = !x;
      if (!x) {
        this.$nextTick(function() {
          var div = document.getElementById("mydropdown");
          var left;
          if (event.screenX > 68) left = event.screenX - 70 + "px";
          else left = event.screenX - 30 + "px";
          var top = event.screenY - 70 + "px";
          if (div) {
            div.style.left = left;
            div.style.top = top;
          }
        });
      }
    },
    hideMenu(event) {
      var targetId = event.target.id;
      this.showSideMenu = false;
      if (targetId != "renameInput" && targetId != "in_rename")
        this.$store.dispatch("Playlist/showinputfield", false);
      if (!this.$el.contains(event.target)) {
        this.showSideMenu = false;
      }
    },
  },
  created: function() {
    document.addEventListener("click", this.hideMenu);
  },
  destroyed: function() {
    document.removeEventListener("click", this.hideMenu);
  },
};
</script>
