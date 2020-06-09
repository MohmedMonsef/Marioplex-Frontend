<template>
  <div>
    <div class="conatiner px-0">
      <div class="row header m-0">
        <router-link to="/"> <img src="../assets/white Marioplex.png"/></router-link>
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div class="reset-form">
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          id="passwordInput"
          testid="password input"
        />
        <br />
        <p
          class="invalid"
          id="req_error"
          v-if="req_password"
          testid="password required error"
        >
          This field is required
        </p>
        <p
          class="invalid"
          id="req_error"
          v-if="short_password"
          testid="short password error"
        >
          This password is too short
        </p>

        <input
          type="password"
          v-model="password_confirmation"
          placeholder="Confirm Password"
          id="confirmInput"
          testid="password confirmation input"
        />
        <p
          class="invalid"
          id="req_error"
          v-if="req_confirm_password"
          testid="confirm password error"
        >
          This field is required
        </p>
        <p
          class="invalid"
          id="req_error"
          v-if="matched_password"
          testid="matched password error"
        >
          passwords doesnot match
        </p>
        <button
          @click.prevent="reset()"
          class="costum-btn"
          id="reset-btn"
          type="submit"
          testid="sign up button"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../css/global.css";

.header {
  background-color: black;
  margin: 0px;
  padding: 0px 15px;
  height: 90px;
  display: block;
  justify-content: space-between;
  box-sizing: border-box;
}
img {
  width: 120px;
  margin-top: 20px;
  margin-left: 10%;
}
.reset-form {
  width: 460px;
  height: auto;
  padding: 24px;
  margin: 24px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
}
input {
  width: 70%;
  margin: 3% 15% 0 15%;
  justify-self: center;
}
input::placeholder {
  text-align: center;
}
#reset-btn {
  background-color: #1db954;
  max-width: 320px;
  width: 80%;
  margin: 3% 10% 0 10%;
}
#reset-btn:hover {
  background-color: #1ed760;
}
p {
  text-align: center;
}
@media screen and (max-width: 450px) {
  .reset-form {
    width: 100%;
  }
}
</style>

<script>
/**
 * Allows user to reset his passwod
 * @displayName Reset Password page
 * @example [none]
 */
export default {
  name: "resetPassword",
  data: function() {
    return {
      //User's data that will be passed from the v-model
      trigger_validation: false,
      can_submit: true,
      password_confirmation: "",
      password: "",
      resettoken: "",
    };
  },
  props: {
    token: {
      type: String,
      required: true,
    },
  },
  methods: {
    reset() {
      this.trigger_validation = true;
      this.can_submit = true;
      this.req_password;
      this.req_confirm_password;
      this.short_password;
      this.matched_password;
      setTimeout(() => {
        if (this.can_submit) {
          let payload = {
            password: this.password,
            token: this.$route.query.token,
          };
          this.$store.dispatch("Authorization/resetPassword", payload);
        } else return;
      }, 200);
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
    req_confirm_password: function() {
      if (this.trigger_validation) {
        if (this.password_confirmation == "") {
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
    matched_password: function() {
      if (this.trigger_validation) {
        if (
          this.password_confirmation != "" &&
          this.password != this.password_confirmation
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
  },
  mounted() {
    this.resettoken = this.$route.query.token;
  },
};
</script>
