<template>
  <div class="row" id="row2">
    <div class="col-lg-30% side_bar">
      <account-sidebar />
    </div>
    <div class="col-lg-70%" id="grey_div">
      <h1>Change your password</h1>
      <div class="edit_border"></div>
      <div class="white_div">
        <div class="saved" v-if="isEdited == 'success' && this.saved == '1'">
          Password updated
        </div>
        <h2>Current password</h2>
        <input
          type="password"
          class="in_text"
          id="current"
          v-model="password"
        />
        <p class="wrong" v-if="isEdited == 'faild' || this.saved == '2'">
          Sorry, wrong password
        </p>
        <h2>New password</h2>
        <input type="password" class="in_text" id="new" v-model="newpassword" />
        <h2>Repeat new password</h2>
        <input
          type="password"
          class="in_text"
          id="repeat"
          v-model="repeatedPassword"
        />
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
  height: 100%;
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
  margin-top: -1%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  position: absolute;
  left: 42%;
}
.save {
  background-color: #1db954;
  border: none;
  outline: none;
  border-radius: 25px;
  color: white;
  width: 24%;
  height: 4%;
  margin-left: 2%;
  margin-top: -1%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  position: absolute;
  left: 59%;
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
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
import { mapGetters } from "vuex";
/**
 * @displayName account channge password
 * @example [none]
 */
export default {
  name: "Account-change",
  components: {
    AccountSidebar,
  },
  data: function() {
    return {
      password: "",
      newpassword: "",
      repeatedPassword: "",
      canSet1: false,
      canSet2: false,
      canSet3: false,
      canSet4: false,
      saved: "0",
    };
  },
  methods: {
    /**
     * change password function
     * @public This is a public method
     */
    changePassword() {
      this.req_password();
      this.req_newpassword();
      this.req_repeatpassword();
      this.equal_password();
      setTimeout(() => {
        if (this.canSet1 && this.canSet2 && this.canSet3 && this.canSet4) {
          let edituser = {
            password: this.password,
            newpassword: this.newpassword,
            repeatedPassword: this.repeatedPassword,
          };
          this.saved = "1";
          this.$store.dispatch("Authorization/saveEdit", edituser);
        } else {
          this.saved = "2";
        }
      }, 200);
    },
    /**
     * required password function
     * @public This is a public method
     */
    req_password: function() {
      if (this.password == "") {
        this.canSet1 = false;
      } else {
        this.canSet1 = true;
      }
      return;
    },
    /**
     * required new password function
     * @public This is a public method
     */
    req_newpassword: function() {
      if (this.newpassword == "") {
        this.canSet2 = false;
      } else {
        this.canSet2 = true;
      }
      return;
    },
    /**
     * required rpeat password function
     * @public This is a public method
     */
    req_repeatpassword: function() {
      if (this.repeatpassword == "") {
        this.canSet3 = false;
      } else {
        this.canSet3 = true;
      }
      return;
    },
    /**
     * passwords should be equal function
     * @public This is a public method
     */
    equal_password: function() {
      if (this.newpassword != this.repeatedPassword) {
        this.canSet4 = false;
      } else {
        this.canSet4 = true;
      }
      return;
    },
  },
  computed: {
    ...mapGetters({
      isEdited: "Authorization/isEdited",
    }),
  },
};
</script>
