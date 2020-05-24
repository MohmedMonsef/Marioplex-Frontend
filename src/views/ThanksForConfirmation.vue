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
        <button class="proceedbutton" @click="thanksForConfirmation()">Proceed</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ThanksForConfirmation {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, #21accc, #ffff 60%);
}
.row {
  justify-content: center;
}
#first_row {
  padding-top: 80px;
}
h1 {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}
h4 {
  font-size: 12px;
  color: rgb(37, 36, 36);
}
.proceedbutton {
  background-color: #32393f;
  border-radius: 500px;
  border-color: #32393f;
  width: 270px;
  height: 45px;
  padding: 8px 34px;
  display: inline-block;
  color: white;
  margin: 25px 25px 0px 25px;
  align-content: center;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
}
.proceedbutton:hover {
  transform: scale(1.06);
}
button:focus {
  outline: 0 !important;
}
</style>

<script>
export default {
  name: "ThanksForConfirmation",
    props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods:{
    thanksForConfirmation(){
      this.$store.dispatch("Authorization/ConfirmEmail" , this.$route.query.id);
      console.log("NNNNNNNNNN");
    }
  },
    mounted() {
    this.id = this.$route.query.id;
  }
};
</script>
>
