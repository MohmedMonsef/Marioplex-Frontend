<template>
  <div class="container-fluid navbar-container ">
    <div class="row navbar-inner  justify-content-center">
      <div class=" navbar navbar-expand-sm  justify-content-center ">
        <span>
          <ul>
            <router-link to="/ArtistPersonalPage" tag="li">
              <a>home</a>
            </router-link>
            <router-link to="/" tag="li">
              <a>music</a>
            </router-link>
          </ul>
        </span>
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
          {{ this.ArtistName }}
        </button>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            target="_blank"
            testid="userprofilr link"
            id="account-link"
            @click="showinputfield()"
          >
            Rename
          </a>
          <input
            v-if="showinput"
            id="in_rename"
            v-model="newname"
            @keyup.enter="ChangeArtistName(), showinputfield()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar-container {
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0%;
  position: fixed;
  height: 80px;
  /* display: block; */
  display: block;
  justify-content: space-around;
  z-index: 50;
  .navbar-inner {
    padding: 0px 15px;
    display: flex;
    justify-content: space-around;

    .list {
      margin-left: 600px;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
    }
    span {
      width: 100%;
    }

    ul {
      margin: 0%;
      list-style-type: none;
      display: inline-flex;

      li {
        margin: 10px;
        padding: 28px 17px;
        text-align: center;
        float: right;
        display: block;
        color: white;

        a {
          color: #ffffff;
          font-size: 15px;
          text-decoration: none;
          padding: 0%;
          display: block;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
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
    position: absolute;
    top: 15%;
  }
  .dropdown-menu {
    background: #313030;
    margin-right: 35px;
    margin-top: 7px;
    padding-top: 0px;
    padding-bottom: 0px;
    position: absolute;
    top: 47%;
    left: 80%;
  }
  .dropdown-item {
    background: #313030;
    color: rgb(165, 165, 165);
    font-size: 14px;
    cursor: pointer;
  }
  #in_rename {
    position: fixed;
    top: 5%;
    left: 55%;
    background-color: white;
    color: black;
    height: 30px;
    z-index: 50px;
  }
}
</style>
<script>
/**
 * Artist navbar header
 * @displayName Artist navigation bar
 * @example [none]
 */
import { mapGetters } from "vuex";
export default {
  name: "ArtistHeader",
  data: function() {
    return {
      posy: "",
      newname: "",
    };
  },
  computed: {
    ...mapGetters({
      showinput: "ArtistProperties/showinput",
      ArtistName: "ArtistProperties/ArtistName",
      // renamepl:"creatplaylist/renamepl"
    }),
  },
  methods: {
    showinputfield() {
      this.$store.dispatch("ArtistProperties/showinputfield");
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
      this.posy = event.screenY - 110 + "px";
      console.log(" posy", this.posy);
    },
    ChangeArtistName() {
      let payload = {
        // Name: this.Name,
        // Genre: this.Genre,
        name: this.newname,
      };
      console.log("in aEDIT BIO POPUP", payload.name);
      console.log("nerd");
      this.$store.dispatch("ArtistProperties/EditName", payload);
    },
  },
  beforeCreate: function() {
    this.$store.dispatch("ArtistProperties/Get_Artist_Name");
  },
};
</script>
