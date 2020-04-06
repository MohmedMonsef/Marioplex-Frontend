<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  beforeCreate() {
    window.localStorage.isMySessionActive = "false";
    const token = localStorage.getItem("x-auth-token");
    console.log("nada" + token);
    if (token) {
      this.$store.dispatch("authorization/get_user",false);
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
  }
};
</script>

<style lang="scss"></style>
