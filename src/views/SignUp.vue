<template>
  <div>
    <div class="conatiner-fluid logo-bar">
      <div class="row justify-content-center">
        <img src="../assets/logo-black.png" />
      </div>
    </div>
    <!-- Sign Up form -->
    <div class="conatiner-fluid justify-content-center signup-form">
      <div class="row justify-content-center">
        <div class="col-sm-4" align="center">
          <h2>Sign up with your email address</h2>
          <form >
            <input type="email" placeholder="Email" v-model="email" required />
            <br />
            <input
              type="email"
              placeholder="Confirm email"
              v-model="email_confirmation"
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              v-model="password"
              required
            />
            <br />
            <input
              type="text"
              placeholder="What should we call you?"
              v-model="username"
              required
            />
            <br />
            <button @click.prevent="signUp()" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Sign Up form -->
  </div>
</template>

<style lang="scss" scoped>
.logo-bar {
  border-bottom: 1px solid black;
  padding: 28px 0px;
  img {
    width: 150px;
  }
}
.signup-form {
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
    width: 100%;
    height: 45px;
    padding: 0px 11.25px;
    margin-bottom: 16px;
  }
  button {
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    padding: 16px 48px 18px;
    margin-bottom: 14px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    background-color: #1db954;
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
  button:hover {
    background-color: #1ed760;
  }
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
      username: ""
    };
  },
  methods: {
    signUp() {
      let newuser = {
        email: this.email,
        //email_confirmation: this.email_confirmation,
        password: this.password,
        username: this.username
      };
      this.$store
        .dispatch("signUp", newuser)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    
    }
  }
};
</script>
