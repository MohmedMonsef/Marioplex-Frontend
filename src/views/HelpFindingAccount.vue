<template>
  <div class="col-sm-9 col-md-10 col-md-offset-1 article content">
    <ul class="nav">
      <li>
        <a href="/Help">Home</a>
      </li>
      /
      <li>
        <a href="/HelpFixed/HelpAccountHelp">Account Help</a>
      </li>
    </ul>
    <div class="article-content">
      <h1 class="article-header">Finding accounts</h1>

      <p>
        Some tips for if you’ve lost track of an account, or are unsure you even
        have one.
      </p>

      <p>
        <strong>Note:</strong> It’s possible to create multiple accounts which
        can lead to unexpected charges or missing music, playlists, etc. Be sure
        to try all these steps to find all possible accounts.
      </p>

      <h2>Check email addresses&nbsp;</h2>

      <p>
        Enter any email addresses you use into our
        <a href="/ForgetPassword" >password reset form</a>. If
        there's an account associated with it, we’ll let you know. You can
        continue to
        <a href="/ForgetPassword" 
          >reset the account’s password</a
        >, then use that email address and the new password to log in.
      </p>

      <p>
        <strong>Tip:</strong>Check your email inboxes (including junk/spam
        folders) for emails from Spotify. If you have any, it’s likely there’s
        an account associated with that email address.
      </p>

      <h2>Check Facebook</h2>

      <p>You can check if you have an account connected to Facebook:</p>

      <ol>
        <li>
          Log into Facebook and select
          <strong>Settings</strong> on the dropdown in the top-right.
        </li>
        <li>
          Choose
          <strong>Apps and Websites</strong>.
        </li>
        <li>
          If you see the Spotify icon, you have a Spotify account connected to
          Facebook.
        </li>
      </ol>
      <p>
        If you find an account this way, choose
        <strong>LOG IN WITH FACEBOOK</strong>to log in. If you don’t want your
        Spotify linked to Facebook,
        <a
          href="https://support.spotify.com/article/i-want-to-use-spotify-without-facebook/"
          target="_blank"
          >learn how to disconnect it here</a
        >.
      </p>

      <p></p>

      <h2>Check your phone number</h2>

      <p>Check your SMS messages for a text from Spotify.</p>

      <p>
        If you created an account with your phone number, you’ll have received
        an SMS message with a pin code to log in.
      </p>

      <p>
        If you find an account this way, choose
        <strong>CONTINUE WITH PHONE NUMBER</strong> to log in.
      </p>

      <h2>Check info on your device</h2>

      <p>
        If you’ve used Spotify on desktop or Android, you can
        <a
          href="https://support.spotify.com/article/finding-usernames-from-cache/"
          target="_blank"
          >find your username with information stored on your device</a
        >. You can
        <a
          href="https://support.spotify.com/article/change-password/"
          target="_blank"
          >reset the account’s password</a
        >, then use that username and the new password to log in.
      </p>
    </div>
    <div class="related">
      <h2>Related Articles</h2>
      <a href="/HelpFixed/HelpFindingAccount">Reset your password</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelpFindingAccount",
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
  font-size: 14px;
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
ul {
  list-style: none;
}
p {
  font-weight: 500;
}

.remvemargen {
  margin-left: 0px;
  color: green;
}
</style>
