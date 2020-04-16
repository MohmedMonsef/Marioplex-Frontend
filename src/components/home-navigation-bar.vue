<template>
  <div class="container-fluid navbar-container">
    <div class="row navbar-inner">
      <!-- logo -->
      <div class="logo-div">
        <router-link to="/"> <img src="../assets/logo.png"/></router-link>
      </div>
      <!-- logo -->
      <!--nav items-->
      <div class="navbar-list ">
        <ul>
          <router-link to="/premium" tag="li">
            <a> Premium</a>
          </router-link>
          <router-link to="/Help" tag="li">
            <a>Help</a>
          </router-link>
          <li id="separator">|</li>
          <router-link to="/SignUp" v-if="isLoggedIn != 'success'" tag="li">
            <a> Sign up</a>
          </router-link>
          <router-link to="/Login" v-if="isLoggedIn != 'success'" tag="li">
            <a>Log In</a>
          </router-link>
          <div class="dropdown" v-if="isLoggedIn == 'success'">
            <div
              class="btn  dropdown-toggle dropdown-custom"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-user-circle"></i>
              Profile
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link to="/" class="dropdown-item" tag="p">
                <a>Account</a>
              </router-link>
              <router-link
                to="/"
                @click="logout()"
                class="dropdown-item"
                tag="p"
              >
                <a> Logout</a>
              </router-link>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <!-- nav items -->
    <!-- menu icon -->
    <div id="nav-small">
      <!-- logo -->
      <div class="logo-small">
        <router-link to="/"> <img src="../assets/logo.png"/></router-link>
      </div>
      <!-- logo -->
      <div id="disable-page"></div>
      <div id="collapsed-div">
        <div id="menu-icon" @click="collapseBar()">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <!-- menu icon -->
        <!--collapsed navbar list-->
        <div id="collapsed">
          <ul>
            <router-link
              to="/premium"
              class="big"
              testid="premium link"
              tag="li"
            >
              <a> Premium</a>
            </router-link>
            <router-link to="/Help" class="big" testid="help link" tag="li">
              <a>Help</a>
            </router-link>
            <li id="separator">____</li>
            <router-link
              to="/SignUp"
              v-if="isLoggedIn != 'success'"
              class="small"
              testid="signup link"
              tag="li"
            >
              <a> Sign up</a>
            </router-link>
            <router-link
              to="/Login"
              v-if="isLoggedIn != 'success'"
              class="small"
              testid="login link"
              tag="li"
            >
              <a>Log In</a>
            </router-link>
            <router-link
              to="/"
              v-if="isLoggedIn == 'success'"
              class="small"
              testid="logout link"
              tag="li"
            >
              <a @click="logout()"> Logout</a>
            </router-link>
          </ul>
          <router-link to="/"> <img src="../assets/logo.png"/></router-link>
        </div>
      </div>
    </div>
    <!--collapsed navbar list-->
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0%;
  position: fixed;
  height: 80px;
  z-index: 2000;
  .navbar-inner {
    padding: 0px 15px;
    max-width: 80px;
    .navbar-list {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      position: fixed;
      right: 7%;
      ul {
        margin: 0%;
        list-style-type: none;
        display: inline-flex;
        li {
          padding: 28px 17px;
          text-align: center;
          float: right;
          color: #ffffff;
          #separator {
            margin: 17px;
          }
          a {
            color: #ffffff;
            font-size: 15px;
            text-decoration: none;
            padding: 0%;
            display: block;
          }
          a:hover {
            color: #1db954;
          }
        }
      }
    }
  }

  .logo-small {
    margin-top: -5px;
    position: fixed;
    left: 7%;
    img {
      width: 95px;
    }
  }
  .logo-div {
    margin-top: 20px;
    position: fixed;
    left: 7%;
    img {
      width: 150px;
    }
  }
  //animating menu icon to turn into an x upon click
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-5px, 4px);
    z-index: 2000px;
  }

  .change .bar2 {
    opacity: 0;
    z-index: 2000px;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-4px, -4px);
    transform: rotate(45deg) translate(-4px, -4px);
    z-index: 2000px;
  }
}
#nav-small {
  opacity: 0;
  display: none;
}
.dropdown-custom {
  background-color: transparent;
  border: transparent;
  padding-top: 20px;
  color: white;
  font-size: 20px;
  margin-bottom: 0%;

  i {
    font-size: 35px;
    margin: 0px 5px;
  }

  &:hover {
    background-color: transparent;
    border: transparent;
    color: blue;
  }
  &:active{
    color: blue;
  }
 &:focus{
    color: blue;
  }

}
    p{
    margin: 0%;
  }
//styling when the screen is less than 700px
@media screen and (max-width: 1000px) {
  .navbar-inner {
    display: none;
    opacity: 0;
  }
  .navbar-list {
    display: none;
    opacity: 0;
  }
  .navbar-container {
    background-color: rgb(0, 0, 0);
    margin: 0%;
    position: fixed;
    height: 54px;
  }
  #menu-icon {
    padding-top: 0px;
    position: fixed;
    right: 7%;
    width: 45px;
    cursor: pointer;
    margin: 0%;
    z-index: 2000px;
  }
  #nav-small {
    opacity: 1;
    display: inline-block;
    width: 54px;
    background-color: rgba(0, 0, 0, 1);
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 22px;
    height: 3px;
    background-color: rgb(255, 255, 255);
    margin: 3px 0;
    border-radius: 3px;
    transition: 0.4s;
    z-index: 2000px;
  }
  #disable-page {
    opacity: 1;
    position: absolute;
    float: right;
    top: 0px;
    right: 0px;
    width: 0px;
    height: calc(100vh);
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0s;
  }
  #collapsed-div {
    opacity: 1;
    position: absolute;
    float: right;
    right: 0px;
    width: 0px;
    height: calc(100vh);
    background-color: black;
    transition: 0.3s;
    overflow-y: scroll;
  }
  #collapsed {
    opacity: 1;
    position: absolute;
    float: right;
    right: 0px;
    top: 54px;
    width: 0px;
    height: calc(100vh - 55px);
    background-color: black;
    transition: 0.3s;
    font-family: Helvetica, Arial, sans-serif;
    ul {
      margin: 0%;
      list-style-type: none;
      .big {
        font-weight: 700;
        font-size: 36px;
        a {
          color: #ffffff;
        }
      }
      .small {
        font-weight: 400;
        font-size: 28px;
        color: #ffffff;
        a {
          color: #b3b3b3;
        }
      }
      li {
        padding: 10px 0px;
        color: #ffffff;
        #separator {
          margin-top: 17px;
          margin-bottom: 30px;
        }
        a {
          text-decoration: none;
          padding: 0%;
        }
        a:hover {
          color: #1db954;
        }
      }
    }
    img {
      width: 95px;
      margin-left: 40px;
      margin-top: 30%;
    }
  }
}
</style>
<script>
import { mapGetters } from "vuex";
/**
 * Staic Navbar in homepage
 * @displayName Navbar Homepage
 * @example [none]
 */
export default {
  name: "home-navigation-bar",
  data: function() {
    return {
      togglelength: false
    };
  },
  methods: {
    collapseBar() {
      this.togglelength = !this.togglelength;
      console.log(this.togglelength);
      var element = document.getElementById("menu-icon");
      element.classList.toggle("change");
      element = document.getElementById("collapsed");
      if (this.togglelength) element.style.width = 430 + "px";
      else element.style.width = 0 + "px";
      element = document.getElementById("collapsed-div");
      if (this.togglelength) element.style.width = 430 + "px";
      else element.style.width = 0 + "px";
      element = document.getElementById("disable-page");
      if (this.togglelength) element.style.width = 100 + "vw";
      else element.style.width = 0 + "px";
    },
    /**
     * triggers logout function
     * @public This is a public method
     */
    logout() {
      this.$store.dispatch("authorization/logout");
      console.log("logout");
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "authorization/GetStatus"
    })
  }
};
</script>
