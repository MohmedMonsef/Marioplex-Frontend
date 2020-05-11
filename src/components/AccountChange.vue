<template>
  <div class="row" id="row2">
    <div class="col-lg-30%">
      <account-sidebar />
    </div>
    <div class="col-lg-70%" id="grey_div">
      <h1>Change your password</h1>
      <div class="edit_border"></div>
      <div class="white_div">
        <!-- <div class="saved">Password updated</div> -->
        <h2>Current password</h2>
        <input type="password" class="in_text" v-model="password" />
        <!-- <p class="wrong">Sorry, wrong password</p> -->
        <h2>New password</h2>
        <input type="password" class="in_text" v-model="newpassword" />
        <h2>Repeat new password</h2>
        <input type="password" class="in_text" v-model="repeatpassword" />
        <div class="end_border"></div>
        <router-link to="/UserAccount/Account-overview">
          <button class="cancel">CANCEL</button>
        </router-link>
        <button class="save" @click="changePassword()">SET NEW PASSWORD</button>
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
  margin-bottom: 4%;
}
.white_div {
  margin-left: 7%;
  width: 90%;
  height: 600px;
  background: white;
  padding-top: 4%;
}
.in_text {
  margin-left: 5%;
  width: 90%;
  height: 40px;
  margin-bottom: 3%;
  outline: rgb(78, 78, 78);
}
h2 {
  color: gray;
  margin-left: 5%;
  font-size: 16px;
  font-weight: normal;
}
.end_border {
  border-bottom: 1px solid rgb(235, 234, 234);
  width: 90%;
  margin-left: 5%;
  margin-bottom: 4%;
  margin-top: 4%;
}
.cancel {
  background: transparent;
  border: none;
  outline: none;
  color: black;
  width: 20%;
  height: 4%;
  margin-left: 45%;
  margin-top: -1%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}
.save {
  background-color: #1db954;
  border: none;
  outline: none;
  border-radius: 25px;
  color: white;
  width: 28%;
  height: 6%;
  margin-left: 2%;
  margin-top: -1%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}
.save:hover {
  background-color: #36e072;
}
.saved {
  margin-left: 5%;
  width: 90%;
  height: 45px;
  background: rgb(36, 223, 101);
  color: white;
  padding-left: 3%;
  padding-top: 1.5%;
  margin-top: 2%;
  margin-bottom: 5%;
  font-size: 14px;
}
.wrong {
  margin-left: 5%;
  width: 90%;
  color: #eb1e32;
  margin-top: -2%;
  font-size: 15px;
  margin-bottom: 3%;
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
export default {
  name: "Account-change",
  components: {
    AccountSidebar,
  },
  data: function () {
    return {
      password: "",
      newpassword: "",
      repeatpassword: "",
      birthday: "",
      email: "",
      gender: "",
      country: "",
      can_set: false,
      saved: false,
    };
  },
  methods: {
    changePassword() {
      this.req_password();
      this.req_newpassword();
      this.req_repeatpassword();
      if (this.can_set) {
        let edituser = {
          password: this.password,
          newpassword: this.newpassword,
          email: this.email,
          country: this.country,
          gender: this.gender,
          birthday: this.birthday,
        };
        this.saved = true;
        this.$store.dispatch("Authorization/SaveEdit", edituser);
      } else {
        this.saved = false;
        console.log("can not set password");
      }
    },
    req_password: function () {
      if (this.password == "") {
        console.log("password not found");
        this.can_set = false;
      } else {
        console.log("password found");
        this.can_set = true;
      }
      return;
    },
    req_newpassword: function () {
      if (this.newpassword == "") {
        console.log("newpassword not found");
        this.can_set = false;
      } else {
        console.log("newpassword found");
        this.can_set = true;
      }
      return;
    },
    req_repeatpassword: function () {
      if (this.repeatpassword == "") {
        console.log("repeat password not found");
        this.can_set = false;
      } else {
        console.log("repeat password found");
        this.can_set = true;
      }
      return;
    },
  },
};
</script>
