<template>
  <div class="row" id="row2">
    <div class="col-lg-30%">
      <account-sidebar />
    </div>
    <div class="col-lg-70%" id="grey_div">
      <div class="saved" v-if="isEdited == 'success'">Profile saved</div>
      <h1>Edit profile</h1>
      <div class="edit_border"></div>
      <div class="white_div">
        <div class="wrong" v-if="isEdited == 'faild'">
          Sorry, wrong password
        </div>
        <h2>Email</h2>
        <input type="text" class="in_text" v-model="email" />
        <h2>Confirm password</h2>
        <input type="password" class="in_text" v-model="password" />
        <h2>Gender</h2>
        <select v-model="gender" class="select_gender">
          <option
            v-for="gender in genders"
            :key="gender.value"
            :value="gender.value"
            >{{ gender.text }}</option
          >
        </select>
        <h2>Date of birth</h2>
        <select v-model="month" class="select_month">
          <option
            v-for="month in months"
            :key="month.value"
            :value="month.value"
            >{{ month.text }}</option
          >
        </select>
        <select v-model="day" class="select_month">
          <option v-for="day in days" :key="day.value" :value="day.value">{{
            day.text
          }}</option>
        </select>
        <select v-model="year" class="select_month">
          <option v-for="year in years" :key="year.value" :value="year.value">{{
            year.text
          }}</option>
        </select>
        <h2>Country</h2>
        <select v-model="country" class="select_gender">
          <option
            v-for="country in countries"
            :key="country.value"
            :value="country.value"
            >{{ country.text }}</option
          >
        </select>
        <div class="end_border"></div>
        <router-link to="/UserAccount/Account-overview">
          <button class="cancel">CANCEL</button>
        </router-link>
        <button class="save" @click="save_edit()">SAVE PROFILE</button>
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
  margin-top: 4%;
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
  height: 730px;
  background: white;
  padding-top: 4%;
}
h2 {
  color: gray;
  margin-left: 5%;
  font-size: 16px;
  font-weight: normal;
}
.in_text {
  margin-left: 5%;
  width: 90%;
  height: 40px;
  margin-bottom: 3%;
  outline: rgb(78, 78, 78);
}
.saved {
  margin-left: 7%;
  width: 90%;
  height: 45px;
  background: rgb(36, 223, 101);
  color: white;
  padding-left: 3%;
  padding-top: 1.5%;
  margin-top: 5%;
  font-size: 14px;
}
.wrong {
  margin-left: 5%;
  width: 90%;
  height: 45px;
  background: #eb1e32;
  color: white;
  padding-left: 3%;
  padding-top: 1.5%;
  font-size: 14px;
  margin-bottom: 4%;
}
.select_gender {
  margin-left: 5%;
  margin-bottom: 3%;
  width: 90%;
  height: 40px;
  color: black;
  background: url("../assets/arrow.png") 95% / 2% no-repeat;
  outline: none;
}
.select_month {
  margin-left: 5%;
  margin-bottom: 3%;
  width: 26.5%;
  height: 40px;
  color: black;
  background: url("../assets/arrow.png") 95% / 5% no-repeat;
  outline: none;
  /* margin-right: 2%; */
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
  margin-left: 50%;
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
  width: 20%;
  height: 4.5%;
  margin-left: 5%;
  margin-top: -1%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}
.save:hover {
  background-color: #36e072;
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
import { mapGetters } from "vuex";
export default {
  name: "Account-edit",
  components: {
    AccountSidebar,
  },
  data: function () {
    return {
      saved: false,
      can_submit: false,
      birthday: "",
      email: "",
      password: "",
      newpassword: "",
      repeatpassword: "",
      gender: "0",
      genders: [
        { text: "Female", value: "0" },
        { text: "male", value: "1" },
      ],
      month: "0",
      months: [
        { text: "01", value: "0" },
        { text: "02", value: "1" },
        { text: "03", value: "2" },
        { text: "04", value: "3" },
        { text: "05", value: "4" },
        { text: "06", value: "5" },
        { text: "07", value: "6" },
        { text: "08", value: "7" },
        { text: "09", value: "8" },
        { text: "10", value: "9" },
        { text: "11", value: "10" },
        { text: "12", value: "11" },
      ],
      day: "0",
      days: [
        { text: "01", value: "0" },
        { text: "02", value: "1" },
        { text: "03", value: "2" },
        { text: "04", value: "3" },
        { text: "05", value: "4" },
        { text: "06", value: "5" },
        { text: "07", value: "6" },
        { text: "08", value: "7" },
        { text: "09", value: "8" },
        { text: "10", value: "9" },
        { text: "11", value: "10" },
        { text: "12", value: "11" },
        { text: "13", value: "12" },
        { text: "14", value: "13" },
        { text: "15", value: "14" },
        { text: "16", value: "15" },
        { text: "17", value: "16" },
        { text: "18", value: "17" },
        { text: "19", value: "18" },
        { text: "20", value: "19" },
        { text: "21", value: "20" },
        { text: "22", value: "21" },
        { text: "23", value: "22" },
        { text: "24", value: "23" },
        { text: "25", value: "24" },
        { text: "26", value: "25" },
        { text: "27", value: "26" },
        { text: "28", value: "27" },
        { text: "29", value: "28" },
        { text: "30", value: "29" },
        { text: "31", value: "30" },
      ],
      year: "29",
      years: [
        { text: "1970", value: "0" },
        { text: "1971", value: "1" },
        { text: "1972", value: "2" },
        { text: "1973", value: "3" },
        { text: "1974", value: "4" },
        { text: "1975", value: "5" },
        { text: "1976", value: "6" },
        { text: "1977", value: "7" },
        { text: "1978", value: "8" },
        { text: "1979", value: "9" },
        { text: "1980", value: "10" },
        { text: "1981", value: "11" },
        { text: "1982", value: "12" },
        { text: "1983", value: "13" },
        { text: "1984", value: "14" },
        { text: "1985", value: "15" },
        { text: "1986", value: "16" },
        { text: "1987", value: "17" },
        { text: "1988", value: "18" },
        { text: "1989", value: "19" },
        { text: "1990", value: "20" },
        { text: "1991", value: "21" },
        { text: "1992", value: "22" },
        { text: "1993", value: "23" },
        { text: "1994", value: "24" },
        { text: "1995", value: "25" },
        { text: "1996", value: "26" },
        { text: "1997", value: "27" },
        { text: "1998", value: "28" },
        { text: "1999", value: "29" },
        { text: "2000", value: "30" },
        { text: "2001", value: "31" },
      ],
      country: "1",
      countries: [
        { text: "Egypt", value: "1" },
        { text: "France", value: "2" },
        { text: "USA", value: "3" },
        { text: "UK", value: "4" },
        { text: "Canada", value: "5" },
        { text: "Australia", value: "6" },
        { text: "Saudi Arabia", value: "7" },
        { text: "China", value: "8" },
        { text: "Japan", value: "9" },
        { text: "Tokio", value: "10" },
        { text: "Mexico", value: "11" },
        { text: "Brazil", value: "12" },
      ],
    };
  },
  methods: {
    save_edit() {
      this.req_email();
      this.invalid_email();
      this.req_password();
      if (this.can_submit) {
        this.birthday = this.day + "/" + this.month + "/" + this.year;
        let edituser = {
          email: this.email,
          password: this.password,
          newpassword: this.newpassword,
          country: this.country,
          gender: this.gender,
          birthday: this.birthday,
        };
        this.saved = true;
        this.$store.dispatch("Authorization/SaveEdit", edituser);
      } else {
        this.saved = false;
        console.log("can not submit");
      }
    },
    req_email: function () {
      console.log(this.email);
      if (this.email == "") {
        console.log("required email not found");
        this.can_submit = false;
      } else {
        console.log("required email found");
        this.can_submit = true;
      }
      return;
    },
    invalid_email: function () {
      if (
        this.email != "" &&
        (this.email.indexOf("@") == -1 ||
          this.email.indexOf("@") == this.email.length - 1 ||
          this.email.indexOf(".com") == -1 ||
          this.email.indexOf(".com") + 4 != this.email.length)
      ) {
        console.log("invalid email");
        this.can_submit = false;
      } else {
        console.log("valid email");
        this.can_submit = true;
      }
      return;
    },
    req_password: function () {
      if (this.password == "") {
        console.log("password not found");
        this.can_submit = false;
      } else {
        console.log("password found");
        this.can_submit = true;
      }
      return;
    },
  },
  computed: {
    ...mapGetters({
      isEdited: "Authorization/isEdited",
      user: "Authorization/user",
    }),
  },
};
</script>
