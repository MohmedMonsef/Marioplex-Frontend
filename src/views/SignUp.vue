<template>
  <div>
    <logo-header />
    <!-- Sign Up form -->
    <div class="conatiner signup-form px-0">
      <div class="row justify-content-center m-0">
        <div class="col-4" align="center">
          <button
            class="costum-btn"
            id="facebook-btn"
            testid="login facebook button"
            @click="facebook_signUp()"
          >
            SIGN UP WITH FACEBOOK
          </button>
          <br />
          <divider />
          <h2>Sign up with your email address</h2>

          <form>
            <input
              class="input_field"
              type="email"
              placeholder="Email"
              v-model="email"
              testid="email input"
              id="email"
            />
            <br />
            <p
              v-if="req_email == true"
              class="invalid"
              testid="email required error"
              id="req_email"
            >
              Please enter your email.
            </p>
            <p
              v-if="invalid_email == true"
              testid="email invalid error"
              class="invalid"
              id="invalid_email"
            >
              The email address you supplied is invalid.
            </p>
            <p
              v-if="isLoggedIn == 'signup_err'"
              testid="email not unique error"
              class="invalid"
            >
              This email address is already in use.
            </p>
            <input
              class="input_field"
              type="email"
              placeholder="Confirm email"
              v-model="email_confirmation"
              testid="confirm email input"
              id="confirm_email"
            />
            <br />
            <p
              v-if="req_confirm_email == true"
              testid="confirm email required error"
              class="invalid"
              id="confirm_email_req"
            >
              Please enter your email.
            </p>
            <p
              v-if="invalid_confirm_email == true"
              testid="confirm email invalid error"
              class="invalid"
            >
              The email address you supplied is invalid.
            </p>
            <p
              v-if="
                invalid_email == false &&
                  invalid_confirm_email == false &&
                  req_email == false &&
                  req_confirm_email == false &&
                  matched_email == true
              "
              class="invalid"
              testid="emails not matched error"
              id="mistched_emails"
            >
              Email address doesn't match.
            </p>

            <input
              class="input_field"
              type="password"
              placeholder="Password"
              v-model="password"
              testid="password input"
              id="password"
            />
            <br />
            <p
              v-if="req_password"
              class="invalid"
              testid="password required error"
              id="req_password"
            >
              Enter a password to continue.
            </p>
            <p
              v-if="short_password == true"
              class="invalid"
              testid="password short error"
              id="short_password"
            >
              Your password is too short.
            </p>
            <input
              class="input_field"
              type="text"
              placeholder="What should we call you?"
              v-model="username"
              testid="username input"
              id="username"
              required
            />
            <p
              v-if="req_username == true"
              class="invalid"
              testid="username required error"
              id="req_username"
            >
              What should we call you?
            </p>
            <br />
            <!-- country -->
            <select
              v-model="country"
              class="country_select"
              testid="country input"
            >
              <option
                v-for="country in countries"
                :key="country.value"
                :value="country.value"
                :disabled="country.disabled"
                >{{ country.text }}
              </option>
            </select>
            <p
              v-if="req_country == true"
              class="invalid"
              testid="country required error"
              id="req_country"
            >
              Please enter your country.
            </p>
            <!-- country -->
            <!-- take the date of birth -->
            <div id="birthdate" class="input_field">
              <label>Date of birth</label>
              <input
                type="text"
                placeholder="Day"
                v-model="day"
                testid="day of birth input"
                id="day"
              />
              <select
                v-model="month"
                class="month_select"
                testid="month of birth input"
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

              <input
                type="text"
                placeholder="Year"
                testid="year of birth input"
                v-model="year"
                id="year"
              />
            </div>

            <p
              v-if="valid_day == true"
              class="invalid"
              testid="day of birth error"
              id="req_day"
            >
              Please enter a valid day of the month.
            </p>
            <p
              v-if="valid_month == true"
              class="invalid"
              testid="month of birth error"
              id="req_month"
            >
              Please enter your birth month.
            </p>
            <p
              v-if="valid_year == true"
              class="invalid"
              testid="year of birth error"
              id="req_year"
            >
              Please enter a valid year.
            </p>
            <p
              v-if="valid_age == true"
              class="invalid"
              id="invalid_age"
              testid="year of birth error"
            >
              Sorry, but you don't meet Spotify's age requirements.
            </p>
            <!-- take the date of birth -->

            <!-- Gender -->
            <div id="gender" class="input_field">
              <input
                type="radio"
                id="female_gender"
                class="gender_field gender-radio"
                value="m"
                v-model="gender"
                testid="gender male radio button"
              />
              <label for="Male" class="gender_field gender-radio">Male</label>
              <input
                type="radio"
                class="gender_field gender-radio"
                value="f"
                v-model="gender"
                testid="gender female radio button"
              />
              <label for="Female" class="gender_field gender-label"
                >Female</label
              >
            </div>
            <!-- Gender -->
            <br />

            <p
              v-if="req_gender == true"
              class="invalid"
              testid="gender required error"
              id="req_gender"
            >
              Please indicate your gender.
            </p>
            <button
              @click.prevent="signUp()"
              class="costum-btn"
              id="signup-btn"
              type="submit"
              testid="sign up button"
            >
              Sign Up
            </button>
            <div>
              Aleady have an account?
              <router-link
                class="highlight"
                to="/Login"
                tag="p"
                testid="log in link"
              >
                Log in
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Sign Up form -->
  </div>
</template>

<style lang="scss" scoped>
@import "../css/global.css";

.signup-form {
  .input_field {
    width: 100%;
    margin-bottom: 16px;
  }
  h2 {
    font-family: Circular, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 900;
    color: #1c1c1f;
    text-align: center;
    margin-bottom: 18px;
  }
}
#facebook-btn {
  background-color: #3b5998;
  max-width: 320px;
  width: 100%;
}
#facebook-btn:hover {
  background-color: #3a61b3;
}
#signup-btn {
  background-color: #1db954;
  max-width: 320px;
  width: 100%;
}
#signup-btn:hover {
  background-color: #1ed760;
}
#birthdate {
  label {
    color: #88898c;
    font-size: 0.9375em;
    text-align: left;
    margin-right: 15px;
    margin-top: 15px;
    padding-left: 5px;
    display: block;
  }
  .month_select {
    margin-left: 5%;
    margin-right: 5%;
    background: url("../assets/arrow.png") 90% / 12% no-repeat;
    width: 40%;
  }
  input {
    width: 25%;
  }
}

.country_select {
  width: 100%;
  background: url("../assets/arrow.png") 90% / 5% no-repeat;
}
#gender {
  display: inline-block;
  input {
    margin-top: 3px;
    border-radius: 2px;
  }
  .gender_field {
    display: inline-block;
    float: left;
  }
  label {
    color: #88898c;
    font-size: 0.9375em;
    text-align: left;
    padding-top: 16px;
    margin-right: 15px;
    padding-left: 5px;
  }
}
</style>

<script>
// @ is an alias to /src
import LogoHeader from "@/components/LogoHeader.vue";
import Divider from "@/components/Divider.vue";
import { mapGetters } from "vuex";
/**
 * Signup page to create new account
 * @displayName SignUp page
 * @example [none]
 */
export default {
  name: "SignUp",
  components: {
    LogoHeader,
    Divider,
  },
  data: function() {
    return {
      //User's data that will be passed from the v-model
      trigger_validation: false,
      can_submit: true,
      email: "",
      email_confirmation: "",
      password: "",
      username: "",
      gender: "",
      birthday: "",
      month: "0",
      day: "",
      year: "",
      Months: [
        { text: "Month", value: "0", disabled: true },
        { text: "January", value: "01", disabled: false },
        { text: "Febuary", value: "02", disabled: false },
        { text: "March", value: "03", disabled: false },
        { text: "April", value: "04", disabled: false },
        { text: "May", value: "05", disabled: false },
        { text: "June", value: "06", disabled: false },
        { text: "July", value: "07", disabled: false },
        { text: "August", value: "08", disabled: false },
        { text: "September", value: "09", disabled: false },
        { text: "October", value: "10", disabled: false },
        { text: "November", value: "11", disabled: false },
        { text: "December", value: "12", disabled: false },
      ],
      country: "0",
      countries: [
        { text: "Choose a country", value: "0", disabled: true },
        { text: "Egypt", value: "eg", disabled: false },
        { text: "France", value: "fr", disabled: false },
        { text: "USA", value: "us", disabled: false },
        { text: "Britain", value: "uk", disabled: false },
        { text: "Canada", value: "ca", disabled: false },
        { text: "Australia", value: "au", disabled: false },
        { text: "Saudi Arabia", value: "sa", disabled: false },
        { text: "China", value: "cn", disabled: false },
        { text: "Japan", value: "jp", disabled: false },
        { text: "Korea", value: "kp", disabled: false },
        { text: "Mexico", value: "mx", disabled: false },
        { text: "Brazil", value: "br", disabled: false },
      ],
    };
  },
  methods: {
    /**
     * Signup function takes user information to create new account
     * @public This is a public method
     * @param {String} username username of the user (name of account)
     * @param {String} password password of user (account password)
     * @param {String} country user's country
     * @param {String} email user's email
     * @param {String} gender if the user is male or female
     * @param {String} birthday user's date of birth
     */
    signUp() {
      this.trigger_validation = true;
      this.can_submit = true;
      this.req_email;
      this.invalid_email;
      this.matched_email;
      this.req_password;
      this.short_password;
      this.req_username;
      this.req_country;
      this.req_gender;
      this.valid_day;
      this.valid_month;
      this.valid_year;
      setTimeout(() => {
        if (this.can_submit) {
          // if ( Number(this.day) >= 1 && Number(this.day) <= 9) 
          //      this.day = "0" + this.day;
          // var d = new Date(this.year + "-" + this.month + "-" + this.day);
          // this.birthday = d; //check date format with back
          // let newuser = {
          //   username: this.username,
          //   password: this.password,
          //   country: this.country,
          //   email: this.email,
          //   gender: this.gender,
          //   birthday: this.birthday,
          // };
          // this.$store.dispatch("Authorization/signUp", newuser);
          this.$router.replace("/EmailConfirmation");
        } else return;
      }, 200);
    },
    /**
     * This function allow user to Signup to Spotify with Facebook account
     * @public This is a public method
     */
    facebook_signUp() {
      this.$store.dispatch("Authorization/facebook_signUp");
    },
    /**
     * This function indicates that there is problem occurs while Signup with new account
     * @public This is a public method
     */
    cannotSubmit() {
      this.can_submit = false;
    },
    /**
     * This function indicates that there is No problem occurs while Signup and that new account is created
     * @public This is a public method
     */
    canSubmit() {
      this.can_submit = this.can_submit && true;
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "Authorization/GetStatus",
    }),
    req_email: function() {
      if (this.trigger_validation) {
        if (this.email == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    invalid_email: function() {
      if (this.trigger_validation) {
        var to_check = this.email;
        if (
          this.email != "" &&
          (to_check.indexOf("@") == -1 ||
            to_check.indexOf("@") == to_check.length - 1 ||
            to_check.indexOf(".com") == -1 ||
            to_check.indexOf(".com") + 4 != to_check.length)
        ) {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    req_confirm_email: function() {
      if (this.trigger_validation) {
        if (this.email_confirmation == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    invalid_confirm_email: function() {
      if (this.trigger_validation) {
        var to_check = this.email_confirmation;
        if (
          to_check != "" &&
          (to_check.indexOf("@") == -1 ||
            to_check.indexOf("@") == to_check.length - 1 ||
            to_check.indexOf(".com") == -1 ||
            to_check.indexOf(".com") + 4 != to_check.length)
        ) {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    matched_email: function() {
      if (this.trigger_validation) {
        if (this.email != this.email_confirmation) {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    req_password: function() {
      if (this.trigger_validation) {
        if (this.password == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    short_password: function() {
      if (this.trigger_validation) {
        if (this.password.length <= 7 && this.password != "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    req_username: function() {
      if (this.trigger_validation) {
        if (this.username == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    req_country: function() {
      if (this.trigger_validation) {
        if (this.country == "0") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    valid_day: function() {
      if (this.trigger_validation) {
        if (
          this.day == "" ||
          isNaN(this.day) ||
          Number(this.day) < 1 ||
          Number(this.day) > 31
        ) {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    valid_month: function() {
      if (this.trigger_validation) {
        if (this.month == "0") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    valid_year: function() {
      if (this.trigger_validation) {
        var d = new Date();
        if (
          this.year == "" ||
          isNaN(this.year) ||
          Number(this.year) < 1900 ||
          Number(this.year) > d.getFullYear()
        ) {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    valid_age: function() {
      var d = new Date();
      if (this.trigger_validation) {
        if (
          !isNaN(this.year) &&
          Number(this.year) >= 2000 &&
          Number(this.year) < d.getFullYear()
        ) {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    req_gender: function() {
      if (this.trigger_validation) {
        if (this.gender == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
  },
};
</script>
