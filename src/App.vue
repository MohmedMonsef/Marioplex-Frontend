<template>
  <div id="app">
    <div id="loadingscreen" v-if="loading">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <router-view v-if="!loading" />
  </div>
</template>

<style lang="scss">
#loadingscreen {
  // height: 200%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  i {
    font-size: 70px;
    margin-top: 40.7vh;
    margin-bottom: 50vh;
  }
}
</style>

<script>
import { initializeFirebase } from "../src/messaging/init";
export default {
  beforeCreate() {
    window.localStorage.isMySessionActive = "false";
    const token = localStorage.getItem("x-auth-token");
    console.log("nada" + token);
    if (token) {
      this.$store.dispatch("Authorization/get_user", false);
      setTimeout(() => {
        var status = this.isLoggedIn;
        if (status == "error") {
          //token is expired
          this.$store.dispatch("Authorization/logout");
          this.$router.replace("/login");
        }
      }, 500);
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);

    window.localStorage.isMySessionActive = "true";
    initializeFirebase();
  },
  data: function () {
    return {
      loading: true,
      componentKey:0
    };
  }
};
</script>
