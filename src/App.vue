<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import {initializeFirebase} from '../src/messaging/init';
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
    initializeFirebase();
    // fun();
      // firebase.initializeApp(firebaseConfig);
  //      const messaging = firebase.messaging();
  //     console.log("xxxxxxxx");
  //     messaging.onMessage((payload) => {
  //   console.log('Message received. ', payload);
  //   // ...
  // });
  }
};
</script>

<style lang="scss">
audio {
  position: absolute;
  z-index: 3000;
}
</style>
