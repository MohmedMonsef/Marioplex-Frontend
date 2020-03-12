<template>
  <div>
    <div class="conatiner px-0">
      <div class="row justify-content-center  logo-bar m-0">
        <img src="../assets/logo-black.png" />
      </div>
    </div>
    <!-- Sign Up form -->
    <div class="conatiner signup-form px-0">
      <div class="row justify-content-center  m-0">
        <div class="col-4" align="center">
          <button class="signup-btn" id="facebook-btn">
            SIGN UP WITH FACEBOOK
          </button>
          <br />
          <div id="divider"></div>
          <strong>or</strong>
          <h2>Sign up with your email address</h2>

          <form>
            <input
              class="input_field"
              type="email"
              placeholder="Email"
              v-model="email"
              required
            />
            <br />
            <input
              class="input_field"
              type="email"
              placeholder="Confirm email"
              v-model="email_confirmation"
              required
            />
            <br />
            <input
              class="input_field"
              type="password"
              placeholder="Password"
              v-model="password"
              required
            />
            <br />
            <input
              class="input_field"
              type="text"
              placeholder="What should we call you?"
              v-model="username"
              required
            />
            <br />

            <!-- country -->
            <select v-model="country" class="country_select">
              <option
                v-for="country in countries"
                :key="country.value"
                :disabled="country.disabled"
                >{{ country.text }}</option
              >
            </select>

            <!-- country -->
            <!-- take the date of birth -->
            <div id="birthdate" class="input_field">
              <label>Date of birth</label>
              <input type="text" placeholder="Day" v-model="day" />
              <select v-model="month" class="month_select">
                <option
                  v-for="month in Months"
                  :key="month.value"
                  :value="month.value"
                  :disabled="month.disabled"
                  >{{ month.text }}</option
                >
              </select>

              <input type="text" placeholder="Year" v-model="year" />
            </div>
            <!-- take the date of birth -->

            <!-- Gender -->
            <div id="gender" class="input_field">
              <input
                type="radio"
                class="gender_field gender-radio"
                value="m"
                v-model="gender"
              />
              <label for="Male" class="gender_field gender-radio">Male</label>
              <input
                type="radio"
                class="gender_field gender-radio"
                value="f"
                v-model="gender"
              />
              <label for="Female" class="gender_field gender-label"
                >Female</label
              >
            </div>
            <!-- Gender -->
            <br />
            <button
              @click.prevent="signUp()"
              class="signup-btn"
              id="ordinary-btn"
              type="submit"
            >
              Sign Up
            </button>
            <div>
              Aleady have an account?
              <router-link class="highlight" to="/Login" tag="p" replace>
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
.logo-bar {
  box-sizing: border-box;
  margin: 0%;
  width: auto;
  padding: 0%;
  border-bottom: 1px solid #dfe0e6;
  padding: 28px 0px;
  img {
    width: 180px;
  }
}
#divider {
  width: 91%;
  height: 1px;
  background-color: #dfe0e6;
  margin: 12px 0px;
  z-index: -2;

  position: absolute;
}
strong {
  //position: absolute;
  margin-top: -14px;
  z-index: 100;
  background-color: #fff;
  padding: 10px;
}
.signup-form {
  .input_field {
    width: 100%;
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
  input {
    padding: 0px 11.25px;
    margin-bottom: 16px;
    height: 45px;
    border-radius: 2px;
    border: 1px solid #dfe0e6;
    color: #1c1c1f;
  }
}
.signup-btn {
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px 18px;
  margin-bottom: 14px;
  margin-top: 30.4px;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;

  text-decoration: none;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  width: 100%;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
}

#facebook-btn {
  background-color: #3b5998;
}
#facebook-btn:hover {
  background-color: #3a61b3;
}
#ordinary-btn {
  background-color: #1db954;
}
#ordinary-btn:hover {
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
select {
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #dfe0e6;
  color: #88898c;
  font-size: 0.9375em;
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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

.highlight {
  color: #1db954;
  display: inline-block;
}
.highlight:hover {
  color: #1ed760;
  cursor: pointer;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "SignUp",
  data: function() {
    return {
      //User's data that will be passed from the v-model
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
        { text: "January", value: "1", disabled: false },
        { text: "Febuary", value: "2", disabled: false },
        { text: "Mars", value: "3", disabled: false },
        { text: "April", value: "4", disabled: false },
        { text: "Mai", value: "5", disabled: false },
        { text: "June", value: "6", disabled: false },
        { text: "July", value: "7", disabled: false },
        { text: "August", value: "8", disabled: false },
        { text: "September", value: "9", disabled: false },
        { text: "October", value: "10", disabled: false },
        { text: "November", value: "11", disabled: false },
        { text: "December", value: "12", disabled: false }
      ],
      country: "Choose a country",
      countries: [
        { text: "Choose a country", value: "0", disabled: true },
        { text: "Egypt", value: "1", disabled: false },
        { text: "France", value: "2", disabled: false },
        { text: "USA", value: "3", disabled: false },
        { text: "UK", value: "4", disabled: false },
        { text: "Canada", value: "5", disabled: false },
        { text: "Australia", value: "6", disabled: false },
        { text: "Saudi Arabia", value: "7", disabled: false },
        { text: "China", value: "8", disabled: false },
        { text: "Japan", value: "9", disabled: false },
        { text: "Tokio", value: "10", disabled: false },
        { text: "Mexico", value: "11", disabled: false },
        { text: "Brazil", value: "12", disabled: false }
      ]
    };
  },
  methods: {
    signUp() {
      this.birthday = this.day + "/" + this.month + "/" + this.year; //check date format with back
      let newuser = {
        username: this.username,
        password: this.password,
        country: this.country,
        email: this.email,
        gender: this.gender,
        birthday: this.birthday
      };
      this.$store
        .dispatch("signUp", newuser)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
