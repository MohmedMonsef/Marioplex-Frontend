<template>
  <div class="row justify-content-center footer px-0 m-0">
    <!-- <div class="col-9"> -->
    <div class="col-sm-2 logo-div">
      <router-link to="/"> <img src="../assets/logo.png"/></router-link>
    </div>
    <!-- <div class="col-sm-6"> -->
    <div class="col-sm-2">
      <ul>
        <li class="disabled">
          Communities
        </li>
        <router-link class="able" to="/ForArtist" tag="li">
          For Artist
        </router-link>
        <router-link class="able" to="/ArtistPersonalPage" tag="li">
          ArtistPage
        </router-link>
      </ul>
    </div>
    <div class="col-sm-2">
      <ul>
        <li class="disabled">
          Useful links
        </li>
        <router-link class="able" to="/Help" tag="li" replace>
          Help
        </router-link>
        <router-link class="able" to="/HomeWebPlayer" tag="li" replace>
          WebPlayer
        </router-link>
      </ul>
    </div>
    <div class="col-sm-2 icon-div">
      <span
        ><a href="https://www.facebook.com/spotifyegypt"
          ><i class="fa fa-facebook-f"></i></a
      ></span>
      <span
        ><a href="https://twitter.com/spotify"><i class="fa fa-twitter"></i></a
      ></span>
      <span
        ><a href="https://www.instagram.com/spotify/"
          ><i class="fa fa-instagram"></i></a
      ></span>
    </div>
    <!-- </div> -->
  </div>
  <!-- </div> -->
</template>
<style lang="scss" scoped>
.footer {
  height: 50%;
  background-color: black;
  position: relative;
  z-index: 2000;
  padding-top: 80px;
  padding-bottom: 50px;
  padding-left: 60px;
  padding-right: 60px;
  clear: both;
}
div {
  ul {
    list-style-type: none;
    padding: 0%;
    .disabled {
      color: #b3b3b3;
      padding: 10px;
    }
    .able {
      text-decoration: none;
      color: white;
      padding: 10px;
      cursor: pointer;
    }
    .able:hover {
      color: #1db954;
    }
  }
}
.logo-div {
  margin-bottom: 20px;
  img {
    width: 150px;
  }
}
.icon-div {
  span {
    float: right;
    background-color: #424040;
    margin: 0 5px;
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 13px 0px;
    border-radius: 25px;
    i {
      color: white;
      font-size: 25px;
    }
    i:hover {
      color: #1db954;
    }
  }
}
@media screen and (max-width: 1000px) {
  .footer {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .icon-div {
    span {
      float: left;
    }
  }
}
</style>
<script>
/**
 * Staic Footer in homepage
 * @displayName Footer in homepage
 * @example [none]
 */
export default {};
</script>
