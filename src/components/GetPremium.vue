<template>
  <div class="home">
    <div class="row header m-0">
      <h1>Get Premium</h1>
      <ul class="row justify-content-center m-0">
        <li class="col-lg-3 col-sm-3 col-md-3">
          <i class="fa fa-check"></i>
          Listen without the distraction of ads
        </li>
        <li class="col-lg-3 col-sm-3 col-md-3">
          <i class="fa fa-check"></i>
          Play music with no phone service
        </li>
        <li class="col-lg-3 col-sm-3 col-md-3">
          <i class="fa fa-check"></i>
          Skip as many songs as you want
        </li>
      </ul>
    </div>
    <div class="row justify-content-center m-0" v-if="!choosingPlan">
      <div id="plan-nav">
        <p id="plan-inline">
          Your plan
        </p>
        <a href="#" @click="choosingPlan = 1">
          Change plan
        </a>
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div class="plans">
        <div class="plans-card" v-if="Yearly && !choosingPlan">
          <h3>Spotify Premium Yearly</h3>
          <p>599.88 EGP</p>
          <h6>Offer terms apply.</h6>
        </div>
        <div class="plans-card" v-if="Monthly && !choosingPlan">
          <span class="card-badge">
            1-month free trial
          </span>
          <h3>Spotify Premium</h3>
          <p>49.99 EGP / month after trial</p>
          <h6>Cancel anytime. Offer terms apply.</h6>
        </div>
        <div class="plans-option" v-if="choosingPlan">
          <span class="card-badge">
            1-month free trial
          </span>
          <h3>Spotify Premium</h3>
          <p>49.99 EGP / month after trial</p>
          <h6>Cancel anytime.</h6>
          <div
            class="choose-option"
            @click="
              choosingPlan = 0;
              Yearly = false;
              Monthly = true;
            "
          >
            <p>
              49.99 EGP / month after trial
            </p>
            <span><i class="fa fa-chevron-right"></i></span>
          </div>
        </div>
        <div class="plans-option" v-if="choosingPlan">
          <h3>Spotify Premium Yearly</h3>
          <p>One year of Spotify Premium, paid once.</p>
          <div
            class="choose-option"
            @click="
              choosingPlan = 0;
              Yearly = true;
              Monthly = false;
            "
          >
            <p>599.88 EGP</p>
            <span><i class="fa fa-chevron-right"></i></span>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center m-0" v-if="!choosingPlan">
      <div class="premiumForm">
        <div
          v-if="
            upgraded == 'carderror' ||
              upgraded == 'dateerror' ||
              upgraded == 'failed'
          "
          class="invalid"
        >
          <div id="error-icon">
            <i class="fa fa-exclamation-circle"></i>
          </div>
          <div id="errors">
            <p v-if="upgraded == 'carderror'">
              Enter a valid credit card number.
            </p>
            <p v-if="vsecurity">
              Please enter the last 3 numbers on the back of your card (or 4
              numbers on the front if Amex).
            </p>
            <p v-if="vmonth">Select the expiration month.</p>
            <p v-if="vyear">Select the expiration year.</p>
            <p v-if="upgraded == 'dateerror'">
              The expiration date must be upcoming!
            </p>
            <p v-if="upgraded == 'failed'">
              There was an error,you should try again
            </p>
          </div>
        </div>
        <p>Card number:</p>
        <input
          type="text"
          id="CreditNumber"
          v-model="CreditNumber"
          placeholder="1111 2222 3333 4444"
          maxlength="16"
        />
        <p>Expiration date:</p>
        <select
          v-model="month"
          class="month_select"
          testid="month of expiration input"
          id="month"
        >
          <option
            v-for="month in Months"
            :key="month.value"
            :value="month.value"
            :disabled="month.disabled"
            >{{ month.text }}</option
          >
        </select>
        <select
          v-model="year"
          class="month_select"
          testid="year of expiration input"
          id="month"
        >
          <option
            v-for="year in expYear"
            :key="year.value"
            :value="year.value"
            :disabled="year.disabled"
            >{{ year.text }}</option
          >
        </select>

        <p>
          Security code
        </p>
        <input
          type="text"
          id="SecurityCode"
          v-model="SecurityCode"
          maxlength="3"
        />
        <p v-if="Monthly">
          You consent to get access to your Spotify subscription immediately,
          and that if you don't cancel before the trial ends on
          <b>{{ nextMonth }}</b>
          you will automatically be charged the subscription fee every month
          until you cancel. You will not be entitled to a refund on
          cancellation. Full terms and instructions on how to cancel are
          available here.
        </p>

        <p v-if="Yearly">
          By purchasing, you authorize Spotify to charge you the price above for
          the duration you selected. Your access to Premium starts immediately.
          You agree that your right of withdrawal, including refund, is
          available within 14 days after your purchase and is lost if you use
          Spotify during that time. After the period you’ve paid for ends, you
          will go back to your previous subscription at the then-current price
          unless you cancel. Non-subscribers will go back to a free account.
          Students must reverify their enrollment or they will be charged the
          standard Premium price. You can see how many months you have left or
          learn how to cancel via your Account page. No partial refunds. Terms
          apply.
        </p>

        <button
          class="costum-btn"
          id="premium-btn"
          @click.prevent="upgrade()"
          testid="get premium button"
        >
          Get Premium
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: calc(50vh);
  color: white;
  background-image: linear-gradient(-180deg, #5bb8f7 0%, #3794d1 100%);
  h1 {
    width: 100%;
    line-height: 1.2;
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    margin: 17vh 0 0 0;
    display: inline-block;
  }
  ul {
    margin: 0%;
    padding: 0%;
    width: 100%;
    list-style-type: none;
    li {
      font-weight: 600;
      text-align: center;
    }
  }
}
#plan-nav {
  width: 460px;
  //position: absolute;
  #plan-inline {
    width: 50%;
    text-align: left;
    display: inline-block;
    margin: 5% 0 0 0;
    padding: 0;
  }
  a {
    width: 50%;
    text-align: right;
    display: inline-block;
    margin: 5% 0 0 0;
    padding: 0;
    color: #525355;
  }
  a:hover {
    color: black;
  }
}
.plans {
  width: 460px;
}
.plans-card {
  border: 1px solid #cacbcf;
  width: 460px;
  height: auto;
  background-color: rgb(236, 239, 243);
  margin: 0;
  border-radius: 5px;
  padding: 3%;
  h3 {
    font-size: 16px;
    font-weight: 600;
    width: 640px;
    display: block;
    width: 100%;
    padding: 3px;
    margin: 0;
  }
  p {
    display: block;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    padding: 3px;
    margin: 0;
  }
  h6 {
    font-size: 12px;
    padding: 3px;
    margin: 0;
  }
}
.plans-option {
  width: 460px;
  height: auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border: 1px solid #cacbcf;
  margin: 3% 0 3% 0;
  border-radius: 5px;
  padding: 3%;
  h3 {
    font-size: 16px;
    font-weight: 600;
    width: 640px;
    display: block;
    width: 100%;
    padding: 3px;
    margin: 0;
  }
  p {
    display: block;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    padding: 3px;
    margin: 0;
  }
  h6 {
    font-size: 12px;
    padding: 3px;
    margin: 0;
  }
}
.choose-option {
  border-top: 1px solid #cacbcf;
  margin: 0 -3% 0 -3%;
  p {
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    padding: 3% 3% 0 4%;
    width: 90%;
    display: inline-block;
  }
}
.card-badge {
  display: inline-block;
  margin-bottom: 12px;
  padding: 0.3em 0.6em;
  background: #3794d1;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  border-radius: 4px;
}
.invalid {
  width: 100%;
  text-align: center;
  background-color: #e22134;
  color: #fff;
  font-size: 18px;
  padding: 14px 14px 12px;
  font-weight: 400;
}
#error-icon {
  display: inline-block;
  width: 10%;
  position: relative;
  justify-content: right;
}
#errors {
  display: inline-block;
  width: 100%;
  p {
    font-size: 10px;
    margin: 0%;
    padding: 0%;
    font-weight: 400;
    text-align: left;
  }
}
.premiumForm {
  width: 460px;
  height: auto;
  padding: 24px;
  margin: 24px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    font-weight: 500;
    font-family: Helvetica, Arial, sans-serif;
    margin: 10px 0px;
  }
}
#CreditNumber {
  width: 100%;
}

.paymentMethod_select {
  background: url("../assets/arrow.png") 90% / 5% no-repeat;
  width: 100%;
  option {
    div {
      border-color: #88898c;
    }
  }
}
.month_select {
  background: url("../assets/arrow.png") 90% / 12% no-repeat;
  width: 45%;
  margin: 3% 5% 3% 0;
}
input {
  margin: 3% 0 3% 0;
}
#premium-btn {
  background-color: #1db954;
  width: 94%;
  justify-self: center;
  transition-duration: 33ms;
  margin: 0%;
}
#premium-btn:hover {
  background-color: #1ed760;
  transform: scale(1.04);
}
@media screen and (max-width: 1000px) {
  .header {
    h1 {
      text-align: left;
      margin: 17vh 0 0 7%;
      padding: 0%;
      font-size: 28px;
      font-weight: 600;
    }
    ul {
      margin: 0%;
      li {
        padding: 0%;
        margin: 0 0 0 7%;
        font-weight: 600;
        text-align: left;
      }
    }
  }
}
</style>
<script>
import { mapGetters } from "vuex";
/**
 * Premium Form to upgrade account
 * @displayName  Premium Form
 * @example [none]
 */
export default {
  name: "premiumform",
  data: function() {
    return {
      CreditNumber: "",
      SecurityCode: "",
      month: "0",
      Months: [
        { text: "Month", value: "0", disabled: true },
        { text: "January", value: "1", disabled: false },
        { text: "Febuary", value: "2", disabled: false },
        { text: "March", value: "3", disabled: false },
        { text: "April", value: "4", disabled: false },
        { text: "May", value: "5", disabled: false },
        { text: "June", value: "6", disabled: false },
        { text: "July", value: "7", disabled: false },
        { text: "August", value: "8", disabled: false },
        { text: "September", value: "9", disabled: false },
        { text: "October", value: "10", disabled: false },
        { text: "November", value: "11", disabled: false },
        { text: "December", value: "12", disabled: false },
      ],
      Monthly: true,
      Yearly: false,
      choosingPlan: 0,
      nextMonth: "",
      expYear: [{ text: "Year", value: 0, disabled: true }],
      year: "0",
      vyear: false,
      vmonth: false,
      vsecurity: false,
      validform: false,
    };
  },
  methods: {
    valid_month: function() {
      if (this.month == "0") {
        return (this.vmonth = true);
      } else {
        return (this.vmonth = false);
      }
    },
    valid_year: function() {
      if (this.year == "0") {
        return (this.vyear = true);
      } else {
        return (this.vyear = false);
      }
    },
    valid_security: function() {
      if (this.SecurityCode.length < 3) {
        return (this.vsecurity = true);
      } else {
        return (this.vsecurity = false);
      }
    },
    upgrade: function() {
      this.valid_year();
      this.valid_security();
      this.valid_month();
      var today = new Date();
      var day = today.getDate();
      var d = new Date(this.year + "-" + this.month + "-" + day);
      let newuser = {
        expiresDate: d,
        cardNumber: this.CreditNumber,
        isMonth: this.Monthly,
      };
      this.$store.dispatch("Authorization/toPremium", newuser);
    },
  },
  watch: {
    CreditNumber: function() {
      var res = this.CreditNumber.replace(" ", "");
      var len = res.length;
      if (isNaN(res)) {
        this.CreditNumber = this.CreditNumber.substr(0, len - 1);
      }
    },
    SecurityCode: function() {
      if (isNaN(this.SecurityCode)) {
        var len = this.SecurityCode.length;
        this.SecurityCode = this.SecurityCode.substr(0, len - 1);
      }
    },
  },
  computed: {
    ...mapGetters({
      upgraded: "Authorization/upgraded",
    }),
  },
  mounted() {
    var today = new Date();
    var mon = (today.getMonth() + 2) % 13;
    if (mon == 0) mon++;
    this.nextMonth =
      this.Months[mon].text + " " + today.getDate() + "," + today.getFullYear();
    var begYear = today.getFullYear();
    for (var i = 0; i < 10; i++) {
      var yearObj = {
        text: begYear.toString().substring(2, 4),
        value: begYear,
        disabled: false,
      };
      begYear++;
      this.expYear.push(yearObj);
    }
  },
};
</script>
