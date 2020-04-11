<template>
  <div class="container-fluid navbar-container">
    <div class="row navbar-inner">
      <!-- logo -->
      <div class="logo-div">
        <img src="../assets/logo.png" />
      </div>
      <!-- logo -->
      <!--nav items-->
      <div class=" navbar-list ">
        <ul>
          <router-link to="/premium" testid="premium link" tag="li">
            <a> Premium</a>
          </router-link>
          <router-link to="/Help" testid="help link" tag="li">
            <a>Help</a>
          </router-link>
          <router-link
            to="/Login"
            v-if="isLoggedIn != 'success'"
            testid="login link"
            tag="li"
          >
            <a>Login</a>
          </router-link>
          <router-link
            to="/SignUp"
            v-if="isLoggedIn != 'success'"
            testid="signup link"
            tag="li"
          >
            <a> SignUp</a>
          </router-link>
          <router-link
            to="/"
            v-if="isLoggedIn == 'success'"
            testid="logout link"
            tag="li"
          >
            <a @click="logout()"> Logout</a>
          </router-link>
        </ul>
      </div>
      <!-- nav items -->
      <!-- menu icon -->
      <div id="menu-icon" @click="collapseBar()">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <!-- menu icon -->
    </div>
    <!--collapsed navbar list-->
    <div id="collapsed"></div>
    <!--collapsed navbar list-->
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0%;
  position: fixed;
  //display: block;
  display: flex;
  justify-content: center;

  .navbar-inner {
    margin: auto;
    padding: 0px 15px;
    display: flex;
    justify-content: space-around;

    .logo-div {
      // width: 150px;
      margin-top: 20px;
      display: inline-block;
      img {
        width: 150px;
      }
    }
    .navbar-list {
      margin-left: 600px;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      //clear: right;

      //display: inline-flex;
      ul {
        margin: 0%;
        list-style-type: none;
        display: inline-flex;
        li {
          padding: 28px 17px;
          text-align: center;
          float: right;
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
  //animating menu icon to turn into an x upon click
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-5px, 4px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-4px, -4px);
    transform: rotate(45deg) translate(-4px, -4px);
  }
}
#collapsed {
  opacity: 0;
}
//styling when the screen is less than 700px
@media screen and (max-width: 800px) {
  .navbar-list {
    display: none;
  }
  #menu-icon {
    padding-top: 20px;
    float: right;
    width: 45px;
    cursor: pointer;

    margin: 0%;
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
  }
  .navbar-container {
    background-color: rgba(0, 0, 0, 1);
  }
  .navbar-inner {
    display: flex;
    justify-content: space-between;
  }
  #collapsed {
    opacity: 1;
    position: absolute;
    float: right;
    right: 0px;
    width: 0px;
    height: 700px;
    background-color: black;
    transition: 0.3s;
  }
}
* {
  box-sizing: border-box;
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
      if (this.togglelength) element.style.width = 450 + "px";
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
