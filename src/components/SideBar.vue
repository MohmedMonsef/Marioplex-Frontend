<template>
  <div class="SideBar" testid="sidebar component">
    <!-- spotify logo -->
    <router-link to="/HomeWebPlayer" testid="logo in sidebar">
      <img
        src="../assets/spotify logo.png"
        alt="Logo"
        style="width:150px; height:65px; margin:20px;"
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
        <div class="divOnFocus" id="callsearch" @click="setsearch(), setfocus()">
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
              style="width:30px; height:30px; margin-right: 15px; "
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
          @click.right="(playlistid = playlist), (showdelete = true)"
        >
          <router-link to="/" testid="userplaylists" class="userplaylists">{{
            playlist.name
          }}</router-link>
          <!-- router link should navigate to play list page-->
        </li>
      </ul>
      <ul v-if="showdelete" id="right-click-menu">
        <li @click="changeModalStateDelete()">Delete</li>
      </ul>
      <!-- id="right-click-menu" 
                tabindex="-1" 
                v-if="viewMenu" 
                @blur="closeMenu()" 
                style="top:top; left:left;" -->
      <!-- </div> -->
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
</style>

<script>
import { mapGetters } from "vuex";
//import Vue from 'vue';
export default {
  // el:'#demo',
  data: function() {
    return {
      show: false,
      showdelete: false,
      playlistid: 0
      //   viewMenu: false,
      //     top: '0px',
      //     left: '0px',
      //     right: '0px'
    };
  },
  mounted() {
    this.$store.dispatch("creatplaylist/showplaylists");
  },
  computed: {
    ...mapGetters({
      // map `this.playlists1` to `this.$store.getters.playlists`
      playlists1: "creatplaylist/playlists",
      // creat new object "playlists1" and map to it
      showModalDelete: "creatplaylist/showModalDelete",
      isLoggedIn: "authorization/GetStatus"
    })
  },
  name: "SideBar",
  methods: {
    changeModalState() {
      this.$store.dispatch("creatplaylist/toggleModal");
    },
    changeModalStateDelete() {
      this.$store.dispatch("creatplaylist/toggleModalDelete", this.playlistid);
    },
    setsearch() {
      this.$store.dispatch("Search/search_V", "");
    },
    setfocus() {
      this.searchfocus = true;
      this.$store.dispatch("Search/searchfocus", this.searchfocus);
    }

    // setMenu: function(top, left) {

    //         var largestHeight = window.innerHeight - this.right.offsetHeight;
    //         var largestWidth = window.innerWidth - this.right.offsetWidth;

    //         if (top > largestHeight) top = largestHeight;

    //         if (left > largestWidth) left = largestWidth;

    //         this.top = top + 'px';
    //         this.left = left + 'px';
    //     },

    //     closeMenu: function() {
    //         this.viewMenu = false;
    //     },

    //     openMenu: function(e) {
    //         this.viewMenu = true;

    //         Vue.nextTick(function() {
    //             this.right.focus();

    //             this.setMenu(e.y, e.x)
    //             }.bind(this));
    //             e.preventDefault();
    //     }
  }
};
</script>
