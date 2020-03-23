<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$store.dispatch("authorization/get_user");
      console.log("bhwjsbvfdhj");
      setTimeout(()=>{
        var status = this.isLoggedIn;
        if (status == "error") {
          this.$store.dispatch("authorization/logout");
          this.$router.replace("/login");
      }
      },500);
    }
   
  }
};
</script>

<style lang="scss"></style>
