<template>
  <div class="home-navbar"
   :class="[
      {
        notScrolled: scrollPosition == 0 ,
        scrolled: scrollPosition > 0
      }
    ]"
   id="navBar">
    <button class="prev" @click="goprev()">
      <i class="fa fa-angle-left"></i>
    </button>
    <button class="next" @click="gonext()">
      <i class="fa fa-angle-right"></i>
    </button>
    <div class="login" v-if="isLoggedIn == 'success'">
      <div class="library-navbar" v-if="inlibrary">
        <ul class="nav">
          <li class="nav-item active">
            <div class="divOnFocus">
              <router-link
                to="/HomeWebPlayer/library/library-playlists"
                testid="playlists in library"
                class="nav-link"
                id="playlist-link"
                >Playlists</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="divOnFocus">
              <router-link
                to="/HomeWebPlayer/library/library-artists"
                testid="Artists in library"
                class="nav-link"
                id="artist-link"
                >Artists</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="divOnFocus">
              <router-link
                to="/HomeWebPlayer/library/library-albums"
                testid="Albums in library"
                class="nav-link"
                id="album-link"
                >Albums</router-link
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          type="button"
          class="dropdown-toggle"
          data-toggle="dropdown"
          id="drop_button"
          testid="dropdown list"
        >
          <svg
            class="user_icon"
            width="25"
            height="25"
            viewBox="0 0 80 90"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>User Icon</title>
            <path
              d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
          {{ Username }}
        </button>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            href="/UserAccount/Account-overview"
            target="_blank"
            testid="userprofilr link"
            id="account-link"
          >
            Account
          </a>
          <div class="divider">________________________</div>
          <router-link to="/HomeWebPlayer" id="logout">
            <a
              class="dropdown-item"
              testid="logout button"
              id="logout"
              @click="logout()"
            >
              Log out
            </a>
          </router-link>
        </div>
      </div>
     <router-link to="/Premium"
       class="upgrade_button"  
       v-if="!inlibrary && !insearch" 
       tag="button">
          UPGRADE
      </router-link>
    </div>
    <div class="logout" v-if="isLoggedIn == '' || isLoggedIn == 'error'">
      <router-link to="/Login">
        <button class="login_botton" testid="login_botton">
          LOG IN
        </button>
      </router-link>
      <router-link to="/SignUp">
        <button class="signup_botton" testid="signup_botton">
          SIGN UP
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-navbar ul a {
  font-size: 18px;
  color: white;
  font-weight: bold;
  align-content: center;
  line-height: 13px;
  height: 100%;
  width: 100%;
  position: absolute;
}
.nav {
  position: absolute;
  margin-left: 140px;
}
.home-navbar {
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0%;
  z-index: 0;
   transition: background-color 0.2s linear;
}

.divOnFocus {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  /* background: #161516; */
  background: transparent;
  margin-left: 8px;
  margin-top: 15px;
}
.divOnFocus :focus {
  width: 100px;
  height: 30px;
  background: #313030;
  display: block;
}
#drop_button {
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 30px;
  background-color: black;
  margin-left: 70%;
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  outline: none;
  position: absolute;
  padding-bottom: 5px;
  padding-top: 2px;
}
svg {
  margin-right: 10px;
  /* margin-left: 2px; */
}
.dropdown-menu {
  background: #313030;
  margin-right: 35px;
  margin-top: 7px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.dropdown-item {
  background: #313030;
  color: rgb(165, 165, 165);
  font-size: 14px;
  cursor: pointer;
}
.divider {
  color: rgb(85, 84, 84);
  margin-top: -16px;
  margin-bottom: -3px;
  cursor: pointer;
}
.dropdown-item:hover {
  color: rgb(219, 219, 219);
  background: #4e4e4e;
}
.upgrade_button {
  outline: none;
  background: none;
  height: 38px;
  width: 135px;
  /* background-color: #161516; */
  background: transparent;
  border-radius: 26px;
  border-color: white;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin-left: 59%;
  margin-top: 10px;
}
.upgrade_button:hover {
  width: 140px;
  height: 40px;
}
#logout {
  text-decoration: none;
}
.login_botton {
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 38px;
  background-color: white;
  margin-left: 70%;
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(31, 31, 31);
  outline: none;
  position: absolute;
}
.signup_botton {
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 38px;
  /* background-color: #161516; */
  background: transparent;
  margin-left: 61%;
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  outline: none;
}
.login_botton:hover {
  width: 125px;
  height: 40px;
}
.signup_botton:hover {
  width: 120px;
  height: 40px;
}
.prev {
  margin-left: 3%;
  margin-top: 15px;
  background-color: rgb(8, 8, 8);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  outline: none;
  text-decoration: none;
  position: absolute;
  border: none;
}
.next {
  margin-left: 90px;
  margin-top: 15px;
  background-color: rgb(8, 8, 8);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  outline: none;
  text-decoration: none;
  position: absolute;
  border: none;
}
i {
  color: gray;
  font-size: 25px;
}
.prev:hover,
.next:hover {
  background-color: black;
}
i:hover {
  color: rgb(202, 202, 202);
}
.notScrolled{
  background-color:transparent;
  transition: background-color 0.2s linear;
}
.scrolled{
  background-color:black;
  transition: background-color 0.2s linear;
}
</style>

<script>
import { mapGetters } from "vuex";
/**
 * @displayName Navbar in home webplayer
 * @example [none]
 */
export default {
  data: function () {
    return {
      inlibrary: false,
      insearch: false,
      scrollPosition: null
    };
  },
  name: "NavbarWebplayer",
  computed: {
    ...mapGetters({
      isLoggedIn: "Authorization/GetStatus",
      Username: "Authorization/Username",
    }),
  },
  methods: {
    /**
     * triggers logout function
     * @public This is a public method
     */
    logout() {
      this.$store.dispatch("Authorization/logout");
    },
    /**
     * Go to previous router page
     * @public This is a public method
     */
    goprev: function () {
      if (this.$router.currentRoute.path !== "/HomeWebPlayer/search") {
        this.$store.dispatch("Search/showresult", "h");
      }
      this.$router.go(-1);
    },
    /**
     * Go to next router page
     * @public This is a public method
     */
    gonext: function () {
      this.$router.go(1);
    },
  /**
     * Update the scroll position
     * @public This is a public method
     */
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    /**
     * Update navbar component based on current router
     * @public This is a public method
     */
    check() {
      if (
        this.$router.currentRoute.path ==
          "/HomeWebPlayer/library/library-playlists" ||
        this.$router.currentRoute.path ==
          "/HomeWebPlayer/library/library-artists" ||
        this.$router.currentRoute.path ==
          "/HomeWebPlayer/library/library-albums"
      ) {
        this.inlibrary = true;
      } else {
        this.inlibrary = false;
      }
      if (this.$router.currentRoute.path == "/HomeWebPlayer/search") {
        this.insearch = true;
      } else {
        this.insearch = false;
      }
    },
  },
  destroyed() {
    window.removeEventListener("click", this.check);
    window.removeEventListener("scroll", this.updateScroll);
  },
  mounted() {
    window.addEventListener("click", this.check);
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
