<template>
  <div class="row" id="row2">
    <div class="col-lg-30%">
      <account-sidebar />
    </div>
    <div class="col-lg-70%" id="grey_div">
      <h1>Notification settings</h1>
      <div class="edit_border"></div>
      <div class="white_div">
        <h2>Your Notifications</h2>
        <div class="card col-lg">
          <div class="card-body" id="cardbody">
            <h4 class="card-title" id="cardtitle">
              notification title
            </h4>
            <p class="card-text" id="carddescribtion">
              notification body
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#row2 {
  margin-left: 7%;
}
#grey_div {
  background: #f8f8f8;
  width: 68.5%;
  height: 100%;
  padding-right: 5%;
  padding-bottom: 5%;
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
  height: 600px;
  background: white;
  padding-top: 6%;
  padding-left: 7%;
}
h2 {
  font-size: 23px;
  margin-bottom: 5%;
}
.card {
  width: 92%;
  margin-bottom: 3%;
  background-color: rgba(129, 238, 165, 0.2);
  /* background-color: rgba(248, 136, 136, 0.2); */
  padding-left: 1%;
}
h4 {
  font-size: 20px;
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
export default {
  name: "Account-notifications",
  components: {
    AccountSidebar,
  },
};
</script>
