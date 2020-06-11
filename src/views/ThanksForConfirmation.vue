<template>
  <div class="ThanksForConfirmation">
    <div class="row" id="first_row">
      <h1>Thanks For Confirming Your Email</h1>
    </div>
    <div class="row">
      <h4>To Continue with Marioplex-Spotify click proceed button</h4>
    </div>
    <div class="row">
      <router-link to="/Login">
        <button class="proceedbutton" @click="thanksForConfirmation()">
          Proceed
        </button>
      </router-link>
    </div>
    <div class="stars"></div>
  </div>
</template>

<style lang="scss" scoped>
.ThanksForConfirmation {
  width: 100%;
  height: 100vh;
  background-color: black;
}
.row {
  margin: 0px 5px 0px 5px;
  justify-content: center;
}
#first_row {
  padding-top: 80px;
}
h1 {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
  text-shadow: 2px 2px #5e6063;
}
h4 {
  font-size: 12px;
  color: rgb(116, 110, 110);
}
.proceedbutton {
  background-color: white;
  border-radius: 500px;
  border-color: transparent;
  width: 250px;
  height: 45px;
  padding: 8px 34px;
  display: inline-block;
  color: black;
  margin: 25px 25px 0px 25px;
  align-content: center;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
}
.proceedbutton:hover {
  background-color: rgb(100, 97, 97);
}
button:focus {
  outline: 0 !important;
}
.stars {
  background: url("../assets/stars2.gif");
  width: 100%;
  height: 450px;
  position: absolute;
  top: 300px;
}
@media only screen and (max-width: 870px) {
  .stars {
    top: 425px;
    left: 0;
    height: 290px;
  }
}
</style>

<script>
/**
 * This page appear after the user confirmed his/her email and should press proceed button to continue with Marioplex-Spotify
 * @displayName Thanks For Confirmation
 * @example [none]
 */
export default {
  name: "ThanksForConfirmation",
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    /**
     * Make sure that the user confirmed his/her email before login
     * @public This is a public method
     */
    thanksForConfirmation() {
      if (this.$route.query.type == "signup") {
        this.$store.dispatch(
          "Authorization/ConfirmEmail",
          this.$route.query.id
        );
      } else if (this.$route.query.type == "update") {
        this.$store.dispatch(
          "Authorization/ConfirmUpdate",
          this.$route.query.id
        );
        this.$store.dispatch("Authorization/logout", this.$route.query.id);
      } else {
        this.$store.dispatch(
          "Authorization/ConfirmPremium",
          this.$route.query.id
        );
        this.$store.dispatch("Authorization/logout", this.$route.query.id);
      }
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.type = this.$route.query.type;
  },
};
</script>
