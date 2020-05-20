<template>
  <div>
    <div class="col-sm-9 col-md-10 col-md-offset-1 article content">
      <ul class="nav">
        <li>
          <a href="/Help">Home</a>
        </li>/
        <li>
          <a href="/HelpFixed/HelpAccountHelp">Account Help</a>
        </li>
      </ul>
      <div class="article-content">
        <h1 class="article-header">Reset your password</h1>

        <p>An elephant never forgets. For everyone else there's password reset.</p>

        <ol>
          <li>
            Go to
            <a href="/Login/password-reset/" target="_blank">password reset</a>.
          </li>
          <li>
            Enter your email address and click
            <strong>SEND</strong>.
          </li>
          <li>
            Go to your email inbox and find an email from us with the subject “Reset your password”.
            <br />
            <strong>Tip:</strong> If you don’t see it, check your junk/spam folders&nbsp;or any other filtered folders (e.g. If you use Gmail, it might be in the Social or Promotions tabs
            <em>).</em>
          </li>
          <li>
            Click the
            <strong>Reset password</strong> link in the email. A new web page will open.
          </li>
          <li>
            Type your new password in both fields and click
            <strong>SEND</strong>.
          </li>
          <li>Go back to the app and log in with the email address you used to reset your password and the new password.</li>
        </ol>
        <h2>Didn’t work?</h2>

        <div class="drops-contant">
          <div class="drop">
            <button class="item__title" @click="show1=!show1">
              <span>No account linked to email address?</span>
              <i class="fas fa-angle-down floatright" v-if="!show1"></i>
              <i class="fas fa-angle-up floatright" v-if="show1"></i>
            </button>
            <div class="item__content" v-if="show1">
              <p>If you see the&nbsp;error message "The email address you entered is not connected to a Spotify account", try the above steps again with any other email addresses you have.</p>

              <p>
                <strong>Tip:</strong>Check your email inboxes for emails from Spotify. If you have any, it’s likely there’s an account associated with that email address.
              </p>

              <p>
                If you don’t have access to an email address associated with your Spotify account, you’re unable to reset the password, so you need to
                <a
                  href="/signup"
                  target="_blank"
                >create a new account</a>.
              </p>

              <p></p>
            </div>
          </div>

          <div class="drop">
            <button class="item__title" @click="show2=!show2">
              <span>I’ve not received the email to reset my password</span>
              <i
                class="fas fa-angle-down floatright"
                v-if="!show2"
              ></i>
              <i class="fas fa-angle-up floatright" v-if="show2"></i>
            </button>
            <div class="item__content" v-if="show2">
              <p>If the password reset submitted successfully, but you can’t find the email: &nbsp;</p>

              <ul>
                <li>Check your spam/junk folders.</li>
                <li>Check any other filtered folders (e.g. if you use Gmail, it might be in the Social or Promotions tabs).</li>
              </ul>
              <p>
                If you don’t have access to an email address associated with your Spotify account, you’re unable to reset the password, so you&nbsp;need to
                <a
                  href="/signup"
                  target="_blank"
                >create a new account</a>.
              </p>
            </div>
          </div>

          <div class="drop">
            <button class="item__title" @click="show3=!show3">
              <span>The link in my email doesn’t work</span>
              <i class="fas fa-angle-down floatright" v-if="!show3"></i>
              <i class="fas fa-angle-up floatright" v-if="show3"></i>
            </button>
            <div class="item__content" v-if="show3">
              <p>If you receive the message “password reset link is not valid, or already used” try submitting for a new reset link and, without clicking the link, follow these steps:</p>

              <ol>
                <li>Go to your password reset email.</li>
                <li>
                  Right-click the
                  <strong>Reset password</strong> link and select
                  <strong>Copy link address</strong>.
                  <br />
                  <strong>Note:</strong> If you accidentally click the link before you do this, you’ll have to send for a new one.
                </li>
                <li>Go to your web browser and open a private/incognito window.</li>
                <li>Paste the link into the address bar.</li>
                <li>Press Enter and continue.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="related">
        <h2>Related Articles</h2>
        <div>
          <a href="/HelpFixed/HelpFindingAccount">Finding accounts</a>
        </div>
      </div>

      <div class="community">
        <h2>Community Answers</h2>
        <div class="article">
          <h3>
            <a
              href="https://community.spotify.com/t5/Accounts/Change-Password/m-p/1442274#M224500"
              target="_blank"
            >Change Password</a>
          </h3>
          <p
            id="p1gray"
          >I use to have an account in US, however when I moved to Brazil my account did work anymore, so I created a new one.&nbsp;Now, I want to change my email account for the new one, to the email of the old…</p>
          <div class="gray">
            <span class="author">LTCPoli</span> |
            <span class="kudos">
              <strong>3</strong> Kudos
            </span>
          </div>
        </div>
        <div>
          <h3>
            <a
              href="https://community.spotify.com/t5/Accounts/Can-t-log-in-or-change-password/m-p/1182975#M162407"
              target="_blank"
            >Can't log in or change password</a>
          </h3>
          <p
            id="p2gray"
          >I can't reset my password to log in because the reset email keeps going to an email account I deactived a long time ago. I also can't change the email account that the reset password is sent to since …</p>
          <div class="gray">
            <span class="author">pthai10</span> |
            <span class="kudos">
              <strong>13</strong> Kudos
            </span>
          </div>
        </div>
        <a
          href="https://community.spotify.com/t5/Spotify-Answers/tkb-p/Spotify-Answers"
          target="_blank"
          class="big-underline"
        >More at the Community</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelpRestPassword",
  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  }
};
</script>
<style scoped>
.nav {
  margin: 50px 0px;
  background-color: transparent;
}
#article {
  padding-bottom: 80px;
}
.article-header {
  font-size: 70px;
  font-weight: 500;
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
.big-underline {
  text-decoration: underline;
  font-size: larger;
  font-weight: 700;
  margin-bottom: 100px;
}
.big-underline:hover {
  text-decoration: underline;
}
#p1gray {
  color: rgb(114, 113, 113);
}
#p2gray {
  color: rgb(114, 113, 113);
}
.gray {
  color: rgb(153, 152, 152);
}
.item__title{
 color: rgb(14, 14, 185);
 background-color: rgba(255, 255, 255, 0.11);
 width: 100%;
 height: 80px;
 font-weight: 700;
 font-size: 20px;
 border: none;
 outline: none;
 text-align: left;
 border-bottom: solid  rgb(153, 152, 152) 1px;
}
.floatright{
    float:right;
}
.drops-contant{
    margin-bottom: 50px;
}
.related{
     margin-bottom: 50px;
}
p {
  font-weight: 700;
}
</style>