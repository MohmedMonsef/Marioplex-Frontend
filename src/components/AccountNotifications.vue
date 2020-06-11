<template>
  <div class="row" id="row2">
    <div class="col-lg-30% side_bar">
      <account-sidebar />
    </div>
    <div class="col-lg-70%" id="grey_div">
      <h1>Notifications</h1>
      <div class="edit_border"></div>
      <div class="white_div">
        <h2>Your Notifications :</h2>
        <div
          class="card col-lg"
          v-for="(notification, index) in notifications"
          @click="goRoute(notification)"
          :key="index"
          :class="{ card2: index % 2 == 1 }"
        >
          <div class="card-body" id="cardbody">
            <h4 class="card-title" id="cardtitle">
              {{ notification.data.title }}
            </h4>
            <p class="card-text" id="carddescribtion">
              {{ notification.data.body }}
            </p>
          </div>
        </div>
        <p v-if="notifications.length == 0" id="empty">
          You can see your notifications here^^
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#row2 {
  margin-left: 7%;
}
@media only screen and (max-width: 880px) {
  #row2 {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
    position: relative;
  }
}
#grey_div {
  background: #f8f8f8;
  width: 68.5%;
  height: auto !important;
  height: 600px;
  padding-right: 5%;
  padding-bottom: 5%;
  position: relative;
}
@media only screen and (max-width: 880px) {
  #grey_div {
    background-color: #f8f8f8;
    width: 77%;
    height: 100%;
    padding-right: 5%;
    padding-bottom: 5%;
    position: relative;
    margin-right: 0%;
  }
}
@media only screen and (max-width: 800px) {
  #grey_div {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    min-height: 2000px;
    padding-right: 5%;
    padding-bottom: 5%;
    position: relative;
  }
}
h1 {
  color: #1db954;
  font-size: 25px;
  font-family: Helvetica, Arial, sans-serif;
  margin-left: 7%;
  margin-top: 8%;
}
.edit_border {
  border-bottom: 1px solid rgb(230, 230, 230);
  width: 90%;
  margin-left: 7%;
  margin-bottom: 3%;
}
.white_div {
  margin-left: 7%;
  width: 90%;
  height: auto !important;
  height: 600px;
  background: white;
  padding-top: 6%;
  padding-left: 7%;
  padding-bottom: 3%;
}
h2 {
  font-size: 23px;
  margin-bottom: 5%;
}
.card {
  width: 92%;
  margin-bottom: 3%;
  background-color: rgba(129, 238, 165, 0.2);
  padding-left: 1%;
  cursor: pointer;
}
.card2 {
  background-color: rgba(248, 136, 136, 0.2);
  cursor: pointer;
}
h4 {
  font-size: 20px;
}
.side_bar {
  position: relative;
  width: 23%;
}
@media only screen and (max-width: 800px) {
  .side_bar {
    visibility: hidden;
    position: absolute;
  }
}
#empty {
  font-size: 25px;
  color: #b91d7d;
  margin-left: 16%;
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
import { mapGetters } from "vuex";
/**
 * @displayName account  notifications
 * @example [none]
 */
export default {
  name: "Account-notifications",
  components: {
    AccountSidebar
  },
  mounted() {
    this.$store.dispatch("Notifications/showUserNotifications");
  },
  computed: {
    ...mapGetters({
      notifications: "Notifications/notifications"
    })
  },
  methods: {
    /**
     * navigation function
     * @public This is a public method
     */
    goRoute(notification) {
      if (notification.data.title == "WOOOOOH NEW ALBUM") {
        this.$router.push("/HomeWebPlayer/album/" + notification.data.albumId);
      }

      if (notification.data.title == "WOOOOOH NEW SONG") {
        this.$router.push(
          "/HomeWebPlayer/ArtistProfile/" + notification.data.artistId
        );
      }

      if (
        notification.data.title == " You seem to have a good musical taste "
      ) {
        this.$router.push(
          "/HomeWebPlayer/UserProfile/" + notification.data.userId
        );
      }

      if (
        notification.data.title == "Look who's getting more followers now ^^"
      ) {
        this.$router.push(
          "/HomeWebPlayer/UserProfile/" + notification.data.userId
        );
      }

      if (notification.data.title == "Knock , Knock ! Who's There ?") {
        this.$router.push(
          "/HomeWebPlayer/UserProfile/" + notification.data.userId
        );
      }
    }
  }
};
</script>
