<template>
  <div>
    <logo-header />
    <!-- login form -->
    <div class="conatiner login-form px-0">
      <div class="row justify-content-center m-0">
        <div class="col-4 m-0" align="center">
          <h2>To continue,log in to Spotify</h2>
          <div class="unlogged" v-if="isLoggedIn == 'login_err'">
            incorrect email or password
          </div>
          <button
            class="costum-btn"
            id="facebook-btn"
            testid="login facebook button"
             @click.prevent="facebook_login()"
          >
            CONTINUE WITH FACEBOOK
          </button>
          <button class="costum-btn" id="apple-btn">
            CONTINUE WITH APPLE
          </button>
          <divider />
          <form>
            <input
              type="text"
              placeholder="Email address"
              v-model="email"
              required
              testid="email input"
            />
            <br />
            <p v-if="req_email" class="invalid" testid="email required error">
              Please enter your Spotify email address.
            </p>
            <input
              type="password"
              placeholder="Password"
              v-model="password"
              required
              testid="password input"
            />
            <br />
            <p
              v-if="req_password"
              class="invalid"
              testid="password required error"
            >
              Please enter your password.
            </p>
            <div id="wrap">
              <button
                @click.prevent="login()"
                class="costum-btn"
                id="login-btn"
                type="submit"
                testid="log in button"
              >
                LOG IN
              </button>
            </div>
            <div id="forget_pass">
              <router-link class="highlight" to="/ForgetPassword" tag="p">
                Forget your password?
              </router-link>
            </div>
            <h2>Don't have an account?</h2>
            <router-link
              class="costum-btn"
              id="signup_btn"
              to="/signup"
              tag="button"
            >
              SIGN up for spotify
            </router-link>
          </form>
        </div>
      </div>
    </div>
    <!-- Login form -->
  </div>
</template>

<style lang="scss" scoped>
@import "../css/global.css";
.login-form {
  h2 {
    font-family: Circular, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 900;
    color: #1c1c1f;
    text-align: center;
    margin-bottom: 18px;
  }
  .unlogged {
    width: 100%;
    text-align: center;
    background-color: #e22134;
    color: #fff;
    font-size: 12px;
    padding: 14px 14px 12px;
    font-weight: 400;
  }
  input {
    width: 100%;
    height: 45px;
    padding: 0px 11.25px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

#facebook-btn {
  background-color: #3b5998;

  padding: 14px 14px 18px 14px;
  margin: 16px 0px;
  //height: 50px;
  display: block;

  width: 100%;
}
#facebook-btn:hover {
  background-color: #3a61b3;
}
#apple-btn {
  background-color: #000000;
  padding: 14px 14px 14px 18px;
  margin: 16px 0px;
  display: block;

  width: 100%;
}
#apple-btn:hover {
  background-color: #333;
}
#wrap {
  overflow: auto;
}
#login-btn {
  background-color: #1db954;
  width: 50%;
  float: right;
  display: inline-block;
}
#login-btn:hover {
  background-color: #1ed760;
}
#forget_pass {
  align-content: center;
  display: block;

  padding: 30px;
  border-bottom: 1px solid #dfe0e6;
  margin-bottom: 15px;
}

#signup_btn {
  color: #333;
  background-color: #ffffff;
  border: solid #adadad 2px;
  padding: 14px 14px 14px 18px;
  margin: 16px 0px 42px 0px;
  display: block;

  width: 100%;
}
#signup_btn:hover {
  color: #fff;
  background-color: #616467;
  border: solid #616467 2px;
}
</style>

<script>
// @ is an alias to /src
import LogoHeader from "@/components/logo-header.vue";
import Divider from "@/components/divider.vue";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    LogoHeader,
    Divider
  },
  data: function() {
    return {
      //User's data that will be passed from the v-model
      email: "",
      password: "",
      //required for validation
      trigger_validation: false,
      can_submit: true
    };
  },
  methods: {
    login() {
      this.trigger_validation = true;
      this.can_submit = true;
      this.req_email;
      this.req_password;

      console.log("in log");
      setTimeout(() => {
        if (this.can_submit) {
          let user = {
            email: this.email,
            password: this.password
          };
          this.$store.dispatch("authorization/login", user);
        }
      }, 200);
    },
    cannotSubmit() {
      this.can_submit = false;
    },
    canSubmit() {
      this.can_submit = this.can_submit && true;
    },
    facebook_login(){
       this.$store.dispatch("authorization/facebook_signUp");
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "authorization/GetStatus"
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
    }
  }
};
</script>
