<template>
  <div class="col-sm-9 col-md-7 col-md-offset-4 content" id="article">
    <ul class="nav">
      <li>
        <a href="/Help">Home</a>
      </li>
      /
      <li>
        <a href="HelpAccountHelp">Account Help</a>
      </li>
    </ul>
    <div class=" article ">
      <h1 class="article-header">Account Help</h1>
      <ul class="list-unstyled">
        <li>
          <a href="/HelpFixed/HelpCantLogIn">Can't log in</a>
        </li>
        <li>
          <a href="/HelpFixed/HelpRestPassword">Reset your password</a>
        </li>
        <li>
          <a href="/HelpFixed/HelpFindingAccount">Finding accounts</a>
        </li>
        <li>
          <a href="/HelpFixed/HelpMangePaymentDetail">Manage payment details</a>
        </li>
        <li>
          <a href="/HelpFixed/HelpMadeForYou">Made for you</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
/**
 * Spotify HelpAccountHelp page
 * @displayName Spotify HelpAccountHelp Page
 * @example [none]
 */
export default {
  name: "HelpAccountHelp"
};
</script>
<style scoped>
#article {
  padding-bottom: 100px;
}
.nav {
  margin: 50px 0px;
  background-color: transparent;
}
a {
  margin: 5px;
  font-weight: 700;
  font-size: 17px;
  color: rgb(14, 14, 185);
}
a:hover {
  color: rgb(2, 2, 87);
  text-decoration: none;
}
.article-header {
  font-size: 70px;
  font-weight: 500;
}
</style>
