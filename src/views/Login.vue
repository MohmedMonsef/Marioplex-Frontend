<template>
  <div>
    <div class="conatiner-fluid logo-bar">
      <div class="row justify-content-center">
        <img src="../assets/logo-black.png" />
      </div>
    </div>
    <!-- login form -->
    <div class="conatiner-fluid justify-content-center login-form">
      <div class="row justify-content-center">
        <div class="col-sm-4" align="center">
          <h2>To continue,log in to Spotify</h2>
          <button class="login-btn" id="facebook-btn">
           CONTINUE WITH FACEBOOK
          </button>
          <button class="login-btn" id="apple-btn">
            CONTINUE WITH APPLE
          </button>
          <form>
            <input type="text" placeholder="Email address or Username" v-model="email" required />
            <br />
            <input
              type="password"
              placeholder="Password"
              v-model="password"
              required
            />
            <br />
            <button
              @click.prevent="login()"
              class="login-btn"
              id="ordinary-btn"
              type="submit"
            >
              Sign Up
            </button>
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
  input {
    width: 100%;
    height: 45px;
    padding: 0px 11.25px;
    margin-bottom: 16px;
  }
}
.login-btn {
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 14px 14px 18px;
  margin-bottom: 14px;
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

#facebook-btn, .ordinary-btn {
  background-color: #3b5998;
}
#facebook-btn:hover {
  background-color: #3a61b3;
}
#apple-btn {
  background-color: #000000;
}
#apple-btn:hover {
  background-color: #333;
}
#ordinary-btn {
  background-color: #1db954;
}
#ordinary-btn:hover {
  background-color:  #1ed760;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  data: function() {
    return {
      //User's data that will be passed from the v-model
      email: "",
       username: "",
      password: ""
     
    };
  },
  methods: {
    signUp() {
      let newuser = {
        email: this.email,
        password: this.password,
        username: this.username
      };
      this.$store
        .dispatch("signUp", newuser)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    login() {
      let user = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("login", user)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
