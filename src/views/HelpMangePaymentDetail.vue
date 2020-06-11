<template>
  <div class="col-sm-9 col-md-10 col-md-offset-4 content" id="article">
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
      <h1 class="article-header">Manage payment details</h1>

      <p>You can manage your Spotify payments any time.</p>

      <div class="drops-contant">
        <div class="drop">
          <button class="item__title" @click="show1 = !show1">
            <span>Update payment details or change payment method</span>
            <i class="fa fa-angle-down floatright" v-if="!show1"></i>
            <i class="fa fa-angle-up floatright" v-if="show1"></i>
          </button>
          <div class="item__content" v-if="show1">
            <p>
              To update your payment details, or change your payment method:
            </p>

            <ol>
              <li>
                Log in to your
                <a href="/login">account page</a>.
              </li>
              <li>
                Under
                <strong>Your plan</strong>, click <strong>UPDATE</strong> next
                to your payment method.
                <br />
                <strong>Note:</strong> If your plan is associated with a
                partner, you’ll need to contact them directly to manage your
                payment.
              </li>
              <li>Enter a new payment method.</li>
            </ol>
            <p>The changes will take effect from your next billing date.</p>

            <p>
              Some payment providers may issue an
              <a href="/HelpFixed/HelpAccountHelp">authorization charge</a> when
              you update your payment details.
            </p>
          </div>
        </div>

        <div class="drop">
          <button class="item__title" @click="show2 = !show2">
            <span>Change billing date</span>
            <i class="fa fa-angle-down floatright" v-if="!show2"></i>
            <i class="fa fa-angle-up floatright" v-if="show2"></i>
          </button>
          <div class="item__content" v-if="show2">
            <p>
              You can view your billing date and manage your plan on
              <a href="/login">your account page</a>.
            </p>

            <p>To change the day of your Spotify payment:</p>

            <ol>
              <li>
                <a href="/HelpFixed/HelpAccountHelp">Cancel</a> your current
                subscription.
              </li>
              <li>
                After
                <a href="/login">your account page</a> changes
                <strong>Spotify Free</strong> (under
                <strong>Your plan</strong>), you can
                <a href="/GetPremium">resubscribe to Premium</a> on the day
                you’d like to be charged.
              </li>
            </ol>
            <p>You'll now be charged on or around this day each month.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="related">
      <h2>Related Articles</h2>
      <div>
        <a href="/HelpFixed/HelpAccountHelp">Payment troubleshooting</a>
      </div>
      <div>
        <a href="/HelpFixed/HelpAccountHelp">Payment methods</a>
      </div>
    </div>
    <div class="community">
      <h2>Community Answers</h2>
      <div class="article">
        <h3>
          <a
            href="https://community.spotify.com/t5/Subscriptions/Changing-credit-card/m-p/394558#M31"
            target="_blank"
            >Changing credit card</a
          >
        </h3>
        <p id="p1gray">
          Hi there &nbsp; I have recently had to change my credit card. How do I
          alter my details so that my Spotify account isn't cancelled?
        </p>
        <div class="gray">
          <span class="author">altancred</span> |
          <span class="kudos"> <strong>5</strong> Kudos </span>
        </div>
      </div>
      <div>
        <h3>
          <a
            href="https://community.spotify.com/t5/Accounts/How-to-change-Premium-subscription/m-p/604146#M77989"
            target="_blank"
            >How to change Premium subscription</a
          >
        </h3>
        <p id="p2gray">
          I cannot find how to cancel my Mobile Premium subscription. There
          appears to be no 'subscripton' page &nbsp;on the app and it is not
          showing up as a standing order/DDebit with my bank.
        </p>
        <div class="gray">
          <span class="author">therealdanfin</span> |
          <span class="kudos"> <strong>128</strong> Kudos </span>
        </div>
      </div>
      <a
        href="https://community.spotify.com/t5/Spotify-Answers/tkb-p/Spotify-Answers"
        target="_blank"
        class="big-underline"
        >More at the Community</a
      >
    </div>
  </div>
</template>
<script>
/**
 * Spotify HelpMangePaymentDetail page
 * @displayName Spotify HelpMangePaymentDetail Page
 * @example [none]
 */
export default {
  name: "HelpMangePaymentDetail",
  data() {
    return {
      show1: false,
      show2: false,
    };
  },
};
</script>
<style scoped>
.nav {
  margin: 50px 0px;
  background-color: transparent;
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
.item__title {
  color: rgb(14, 14, 185);
  background-color: rgba(255, 255, 255, 0.11);
  width: 100%;
  height: 80px;
  font-weight: 700;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: left;
  border-bottom: solid rgb(153, 152, 152) 1px;
}
.floatright {
  float: right;
  font-size: 40px;
}
.drops-contant {
  padding-bottom: 20px;
}
p {
  font-weight: 700;
}
#p1gray {
  color: rgb(153, 152, 152);
}
#p2gray {
  color: rgb(153, 152, 152);
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
.gray {
  color: rgb(153, 152, 152);
}
.related {
  margin-bottom: 50px;
}
</style>
