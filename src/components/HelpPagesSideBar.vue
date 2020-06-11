<template>
  <div>
    <div class="sidcontent">
      <h2 class="header">How can we help you?</h2>
      <div>
        <h3>Account &amp; Payment</h3>
        <ul class="list-unstyled">
          <li class="active">
            <a href="/HelpFixed/HelpAccountHelp">Account Help</a>
          </li>
          <li>
            <a href="/">Payment Help</a>
          </li>
          <li>
            <a href="/">Subscription Options</a>
          </li>
          <li>
            <a href="/">Premium Family</a>
          </li>
          <li>
            <a href="/">Privacy &amp; Security</a>
          </li>
        </ul>
      </div>
      <div class="navigation-list">
        <h3>Using Spotify</h3>
        <ul class="list-unstyled">
          <li>
            <a href="/">Video Tutorials</a>
          </li>
          <li>
            <a href="/">Getting Started</a>
          </li>
          <li>
            <a href="/">Playlists</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">System &amp; Settings</a>
          </li>
          <li>
            <a href="/">Troubleshooting</a>
          </li>
        </ul>
      </div>
      <div class="navigation-list">
        <h3>Listen Everywhere</h3>
        <ul class="list-unstyled">
          <li>
            <a href="/">Speakers</a>
          </li>
          <li>
            <a href="/">TVs</a>
          </li>
          <li>
            <a href="/">Cars</a>
          </li>
          <li>
            <a href="/">Gaming</a>
          </li>
          <li>
            <a href="/">Smart Watches</a>
          </li>
          <li>
            <a href="/">Smart Displays</a>
          </li>
          <li>
            <a href="/">Voice Assistants</a>
          </li>
        </ul>
      </div>
      <hr />
      <div class="external">
        <div>
          <p>Get the full Spotify experience!</p>
          <router-link
            to="/GetPremium"
            class="big-underline"
            v-if="isLoggedIn == 'success' && user.product != 'premium'"
            >Upgrade to premium</router-link
          >
          <router-link
            to="/premium"
            class="big-underline"
            v-if="isLoggedIn != 'success'"
            >Upgrade to premium</router-link
          >
        </div>
        <div>
          <p>
            Have questions, answers, ideas about Spotify? Ask or join our
            Community!
          </p>
          <a href="/" class="big-underline" target="_blank"
            >Go to the Community</a
          >
        </div>
        <div class="external">
          <p>Check out our Twitter or Facebook help:</p>
          <div class="twitter-icon-container">
            <span>
              <a href="https://twitter.com/spotify">
                <i class="fa fa-twitter"></i>
              </a>
            </span>
          </div>
          <div class="facebook-icon-container">
            <span>
              <a href="https://www.facebook.com/spotifyegypt">
                <i class="fa fa-facebook-f"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
/**
 * Spotify HelpPagesSideBar
 * @displayName Spotify HelpPagesSideBar
 * @example [none]
 */
export default {
  name: "HelpPagesSideBar",
  computed: {
    ...mapGetters({
      isLoggedIn: "Authorization/GetStatus",
      user: "Authorization/user"
    })
  }
};
</script>
<style scoped>
.big-underline {
  text-decoration: underline;
  font-size: larger;
  font-weight: 700;
  letter-spacing: 0.05pc;
}
.big-underline:hover {
  text-decoration: underline;
}
p {
  font-size: 20px;
  margin-bottom: 0px;
  margin-top: 30px;
}
.twitter-icon-container span {
  float: left;
  background-color: #08c4f3;
  margin: 0 5px;
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 13px 0px;
  border-radius: 25px;
}
.twitter-icon-container i {
  color: white;
  font-size: 25px;
}
.facebook-icon-container span {
  float: left;
  background-color: #1b0191;
  margin: 0 5px;
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 13px 15px;
  border-radius: 50px;
}

.facebook-icon-container i {
  color: white;
  font-size: 25px;
}
.sidcontent {
  border-right: solid rgba(214, 211, 211, 0.658) 1px;
  padding-left: 120px;
}
.height42 {
  height: 42px;
}
.header {
  font-size: 50px;
  color: #919496;
  font-weight: 500;
  line-height: 1;
  margin-top: 61px;
  margin-bottom: 45px;
}
.margintop {
  margin-top: 200px;
}

li {
  list-style-type: none;
  cursor: pointer;
  font-style: bold;
  margin-bottom: 5px;
}
a {
  font-weight: 700;
  font-size: 17px;
  color: rgb(14, 14, 185);
}
a:hover {
  color: rgb(2, 2, 87);
  text-decoration: none;
}
h3 {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
}
.external {
  color: #919496;
  font-weight: 400;
  height: 100vh;
}
</style>
