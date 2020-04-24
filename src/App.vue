<template>
  <div id="app">
    <div id="loadingscreen" v-if="isLoggedIn ==''" >    
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <router-view v-if="isLoggedIn !=''" />
  </div>
</template>

<style lang="scss">
#loadingscreen{
  // height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  i{
     font-size: 70px;
     margin-top: 40%;
  }
}
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  beforeCreate() {
    window.localStorage.isMySessionActive = "false";
    const token = localStorage.getItem("x-auth-token");
    console.log("nada" + token);
    if (token) {
      this.$store.dispatch("authorization/get_user", false);
      setTimeout(() => {
        var status = this.isLoggedIn;
        if (status == "error") {
          //token is expired
          this.$store.dispatch("authorization/logout");
          this.$router.replace("/login");
        }
      }, 500);
    }
  },
  created() {
    window.localStorage.isMySessionActive = "true";
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "authorization/GetStatus"
    })
  }
};
</script>
