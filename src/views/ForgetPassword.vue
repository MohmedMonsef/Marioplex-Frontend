<template>
  <body>
    <div class="conatiner px-0">
      <div class="row  header m-0">
        <router-link to="/"> <img src="../assets/logo.png"/></router-link>
      </div>
    </div>

    <div class="conatiner reset_body px-0" v-if="normal">
      <div class="row justify-content-center  m-0">
        <div class="col-5" align="center">
          <h1>Password Reset</h1>
          <p>
            Enter the <b> email address</b>
            that you used to register. We'll send you an email with your
            username and a link to reset your password.
          </p>
          <div id="email_label">
            <label>Email address</label>
          </div>
          <br />
          <input type="text" id="email" v-model="email" testid="email input" />
          <p
            class="invalid"
            id="req_error"
            v-if="error"
            testid="email required error"
          >
            This field is required
          </p>
          <button
            class="costum-btn"
            id="send-btn"
            @click.prevent="send()"
            testid="forget password button"
          >
            send
          </button>
          <div>
            If you still need help, contact
            <router-link class="highlight" to="/" tag="p">
              Spotify Support.
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="conatiner reset_body px-0" v-if="submitted" id="submitted">
      <div class="row justify-content-center  m-0">
        <div class="col-6" align="center">
          <h1>Password Reset</h1>
          <p>
            A message has been sent to you by email with instructions on how to
            reset your password.
          </p>
        </div>
      </div>
    </div>

    <div class="conatiner px-0">
      <div class="row footer  m-0"></div>
    </div>
  </body>
</template>
<style lang="scss" scoped>
@import "../css/global.css";
body {
  height: 100%;
  margin: 0;
  #email_label {
    display: flex;
    margin: 0%;
    width: 80%;
    margin-bottom: -20px;
    label {
      float: left;
      font-size: 12px;
      font-weight: 700;
    }
  }
  input {
    margin-top: -35px;
    width: 80%;
    height: 45px;
    padding: 0px 11.25px;
    margin-bottom: 16px;
  }
  .footer {
    background-color: black;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 15%;
  }
  #send-btn {
    background-color: #1db954;
  }
  #send-btn:hover {
    background-color: #1ed760;
  }
  #req_error {
    width: 80%;
  }
}
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
  /* display: inline-block; */
}
h1 {
  font-weight: 700;
}
.reset_body {
  font-size: 16px;
  line-height: 1.5;
  padding: 60px 0px;
  display: block;
}
.reset_body {
  font-size: 16px;
  line-height: 1.5;
  display: block;
}
</style>
<script>
/**
 * Update password if user forget it
 * @displayName Update Password
 * @example [none]
 */
export default {
  data: function() {
    return {
      isNormal: true,
      isError: false,
      isSubmitted: false,
      email: ""
    };
  },
  methods: {
    /**
     * update user's password
     * @public This is a public method
     * @param {String} email email of user want to reset his password
     */
    send() {
      if (this.email == "") {
        this.isNormal = true;
        this.isError = true;
        this.isSubmitted = false;
      } else {
        this.isNormal = false;
        (this.isSubmitted = true), (this.isError = false);
        this.$store
          .dispatch("authorization/reset", { email: this.email })
          .catch(err => console.log(err));
      }
    }
  },
  computed: {
    normal: function() {
      return this.isNormal;
    },
    error: function() {
      return this.isError;
    },
    submitted: function() {
      return this.isSubmitted;
    }
  }
};
</script>
