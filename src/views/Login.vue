 <template>
  <div>
    <logo-header />
    <!-- login form -->
    <div class="conatiner login-form px-0">
      <div class="row justify-content-center m-0">
        <div class="col-4 m-0" align="center">
          <h2>To continue,log in to Spotify</h2>
          <button class="costum-btn" id="facebook-btn">
            CONTINUE WITH FACEBOOK
          </button>
          <button class="costum-btn" id="apple-btn">
            CONTINUE WITH APPLE
          </button>
          <divider/>
          <form>
            <input
              type="text"
              placeholder="Email address"
              v-model="email"
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
            <div id="wrap">
            <button
              @click.prevent="login()"
              class="costum-btn"
              id="login-btn"
              type="submit"
            >
              LOG IN
            </button>
         
            </div>
           <div id="forget_pass">
              <router-link class="highlight" to="/" tag="p">
                Forget your password?
              </router-link>
           </div>
           <h2>Don't have an account?</h2>
            <router-link class="costum-btn" id="signup_btn" to="/signup" tag="button">
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
  margin:16px 0px;
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
  margin:16px 0px;
   display: block;

  width: 100%;
 
}
#apple-btn:hover {
  background-color: #333;
}
#wrap{
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
// #rem{
//    background-color: #1db954;
//   width: 50%;
//   float: left;
//   display: inline-block;
// }
#forget_pass{
  align-content: center;
  display: block;
  
  padding: 30px;
  border-bottom: 1px solid #dfe0e6;
  margin-bottom: 15px;
}

#signup_btn {
color: #333;
background-color: #ffffff;
border:solid #adadad 2px;
  padding: 14px 14px 14px 18px;
  margin:16px 0px 42px 0px;
  display: block;
   
  width: 100%;
}
#signup_btn:hover {
  color: #fff;
background-color: #616467;
border:solid  #616467 2px;
}

</style>

<script>
// @ is an alias to /src
import LogoHeader from "@/components/logo-header.vue";
import Divider from "@/components/divider.vue";

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
      password: ""
    };
  },
  methods: {
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