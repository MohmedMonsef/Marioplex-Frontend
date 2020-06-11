<template>
  <div class="row" id="row2">
    <div class="col-lg-30% side_bar">
      <account-sidebar />
    </div>
    <div class="col-lg-70%" id="grey_div">
      <div class="saved" v-if="isEdited == 'success' && this.saved == '1'">
        Profile saved
      </div>
      <h1>Edit profile</h1>
      <div class="edit_border"></div>
      <div class="white_div">
        <div class="wrong" v-if="isEdited == 'faild' || this.saved == '2'">
          Sorry, wrong password or email
        </div>
        <h2>Email</h2>
        <input type="text" class="in_text" id="myEmail" v-model="email" />
        <h2>Confirm password</h2>
        <input
          type="password"
          class="in_text"
          id="myPassword"
          v-model="password"
        />
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
            :value="month.text"
            >{{ month.text }}</option
          >
        </select>
        <select v-model="day" class="select_month">
          <option v-for="day in days" :key="day.value" :value="day.text">{{
            day.text
          }}</option>
        </select>
        <select v-model="year" class="select_month">
          <option v-for="year in years" :key="year.value" :value="year.text">{{
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
        <div class="col-sm-60%">
          <router-link to="/UserAccount/Account-overview">
            <button class="cancel">CANCEL</button>
          </router-link>
        </div>
        <div class="col-sm-30%">
          <button class="save" @click="checkEdit()">SAVE PROFILE</button>
        </div>
        <div class="col-sm-60%">
          <router-link to="/UserAccount/Account-overview">
            <button class="cancel">CANCEL</button>
          </router-link>
        </div>
        <div class="col-sm-30%">
          <button class="save" @click="checkEdit()">SAVE PROFILE</button>
        </div>
      </div>
      <br />

      <div class="premium_div" v-if="user.product == 'premium'">
        <div class="wrong" v-if="isEdited == 'carderror'">
          Invalid creditcard number
        </div>
        <div class="wrong" v-if="isEdited == 'dateerror'">
          The expiration date must be upcoming!
        </div>
        <h2>Card number:</h2>
        <input
          type="text"
          class="in_text"
          v-model="CreditNumber"
          placeholder="1111 2222 3333 4444"
          maxlength="16"
        />
        <h2>Expiration date:</h2>
        <select
          v-model="expmonth"
          class="select_month"
          testid="month of expiration input"
          id="month"
        >
          <option
            v-for="month in Months"
            :key="month.value"
            :value="month.value"
            :disabled="month.disabled"
            >{{ month.text }}</option
          >
        </select>
        <select
          v-model="expyear"
          class="select_month"
          testid="year of expiration input"
          id="month"
        >
          <option
            v-for="year in expYear"
            :key="year.value"
            :value="year.value"
            :disabled="year.disabled"
            >{{ year.text }}</option
          >
        </select>

        <h2>
          Plan
        </h2>
        <!--plan -->
        <div id="plan" class="input_field">
          <input
            type="radio"
            class="plan_field plan-radio"
            value="m"
            v-model="Monthly"
          />
          <label for="Monthly" class="plan_field plan-radio">Monthly</label>
          <input
            type="radio"
            class="plan_field plan-radio"
            value="y"
            v-model="Monthly"
          />
          <label for="Yearly" class="plan_field plan-label">Yearly</label>
        </div>

        <div class="col-sm-30%">
          <button @click="updatePremium()" class="premium_update premium_btn">
            Update Premium
          </button>
        </div>
        <div class="col-sm-30%">
          <button @click="deletePremium()" class="premium_del premium_btn">
            Delete Premium
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
.premium_div {
  margin-left: 7%;
  width: 90%;
  background: white;
  padding-top: 4%;
  height: 400px;
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
  margin-top: -1%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  position: absolute;
  left: 45%;
}
.save {
  background-color: #1db954;
  border: none;
  outline: none;
  border-radius: 25px;
  color: white;
  width: 20%;
  height: 4%;
  margin-top: -1%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  position: absolute;
  left: 65%;
}
.save:hover {
  background-color: #36e072;
}
.premium_btn {
  background-color: #1db954;
  border: none;
  outline: none;
  border-radius: 25px;
  color: white;
  width: 20%;
  height: 4%;
  margin-top: -1%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  position: absolute;
}
.premium_btn:hover {
  background-color: #36e072;
}
.premium_update {
  left: 65%;
}
.premium_del {
  left: 42%;
}
.side_bar {
  position: relative;
  width: 23%;
}
#plan {
  display: inline-block;
  margin-left: 5%;
  input {
    margin-top: 3px;
    border-radius: 2px;
  }
  .plan_field {
    display: inline-block;
    float: left;
  }
  label {
    color: #88898c;
    font-size: 0.9375em;
    text-align: left;
    padding-top: 16px;
    margin-right: 15px;
    padding-left: 5px;
  }
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
 * @displayName account edit profile
 * @example [none]
 */
export default {
  name: "Account-edit",
  components: {
    AccountSidebar,
  },
  data: function() {
    return {
      saved: "0",
      can_submit1: false,
      can_submit2: false,
      can_submit3: false,
      birthday: "",
      email: "",
      password: "",
      gender: "f",
      genders: [
        { text: "Female", value: "f" },
        { text: "Male", value: "m" },
      ],
      month: "01",
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
      day: "01",
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
      year: "2000",
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
        { text: "2002", value: "32" },
        { text: "2003", value: "33" },
        { text: "2004", value: "34" },
        { text: "2005", value: "35" },
        { text: "2006", value: "36" },
        { text: "2007", value: "37" },
        { text: "2008", value: "38" },
        { text: "2009", value: "39" },
        { text: "2010", value: "40" },
        { text: "2011", value: "41" },
        { text: "2012", value: "42" },
        { text: "2013", value: "43" },
        { text: "2014", value: "44" },
        { text: "2015", value: "45" },
        { text: "2016", value: "46" },
        { text: "2017", value: "47" },
        { text: "2018", value: "48" },
        { text: "2019", value: "49" },
        { text: "2020", value: "50" },
      ],
      country: "Egypt",
      countries: [
        { text: "Egypt", value: "eg" },
        { text: "France", value: "fr" },
        { text: "USA", value: "us" },
        { text: "Britain", value: "uk" },
        { text: "Canada", value: "ca" },
        { text: "Australia", value: "au" },
        { text: "Saudi Arabia", value: "sa" },
        { text: "China", value: "cn" },
        { text: "Japan", value: "jp" },
        { text: "Korea", value: "kp" },
        { text: "Mexico", value: "mx" },
        { text: "Brazil", value: "br" },
      ],
      //for premium
      expmonth: "0",
      Months: [
        { text: "Month", value: "0", disabled: true },
        { text: "January", value: "1", disabled: false },
        { text: "Febuary", value: "2", disabled: false },
        { text: "March", value: "3", disabled: false },
        { text: "April", value: "4", disabled: false },
        { text: "May", value: "5", disabled: false },
        { text: "June", value: "6", disabled: false },
        { text: "July", value: "7", disabled: false },
        { text: "August", value: "8", disabled: false },
        { text: "September", value: "9", disabled: false },
        { text: "October", value: "10", disabled: false },
        { text: "November", value: "11", disabled: false },
        { text: "December", value: "12", disabled: false },
      ],
      CreditNumber: "",
      Monthly: "x",
      nextMonth: "",
      expYear: [{ text: "Year", value: 0, disabled: true }],
      expyear: "0",
      vsecurity: false,
      validform: false,
    };
  },
  methods: {
    /**
     * check edit function
     * @public This is a public method
     */
    checkEdit() {
      this.req_email();
      this.invalid_email();
      this.req_password();
      setTimeout(() => {
        if (this.can_submit1 && this.can_submit2 && this.can_submit3) {
          var birthDate = new Date(
            this.year + "-" + this.month + "-" + this.day
          );
          this.birthday = birthDate;
          let edituser = {
            email: this.email,
            password: this.password,
            country: this.country,
            gender: this.gender,
            birthday: this.birthday,
          };
          this.saved = "1";
          this.$store.dispatch("Authorization/saveEdit", edituser);
          this.$router.replace("/EmailConfirmation");
        } else {
          this.saved = "2";
        }
      }, 200);
    },
    /**
     * required email function
     * @public This is a public method
     */
    req_email: function() {
      if (this.email == "") {
        this.can_submit1 = false;
      } else {
        this.can_submit1 = true;
      }
      return;
    },
    /**
     * check invalid email function
     * @public This is a public method
     */
    invalid_email: function() {
      if (
        this.email != "" &&
        (this.email.indexOf("@") == -1 ||
          this.email.indexOf("@") == this.email.length - 1 ||
          this.email.indexOf(".com") == -1 ||
          this.email.indexOf(".com") + 4 != this.email.length)
      ) {
        this.can_submit2 = false;
      } else {
        this.can_submit2 = true;
      }
      return;
    },
    /**
     * required password password function
     * @public This is a public method
     */
    req_password: function() {
      if (this.password == "") {
        this.can_submit3 = false;
      } else {
        this.can_submit3 = true;
      }
      return;
    },
    /**
     * delete Premium function
     * @public This is a public method
     */
    deletePremium: function() {
      this.$store.dispatch("Authorization/toFree");
    },
    /**
     * update Premium function
     * @public This is a public method
     */
    updatePremium: function() {
      let update = {
        password: this.password,
      };
      if (this.expyear != "0" && this.expmonth != "0") {
        var today = new Date();
        var day = today.getDate();
        var d = new Date(this.expyear + "-" + this.expmonth + "-" + day);
        update.expiresDate = d;
      }
      if (this.Monthly != "x") {
        if (this.Monthly == "m") update.isMonth = true;
        else update.isMonth = false;
      }
      if (this.CreditNumber != "") {
        update.cardNumber = this.CreditNumber;
      }
      this.saved = "1";
      this.$store.dispatch("Authorization/saveEdit", update);
    },
  },
  computed: {
    ...mapGetters({
      isEdited: "Authorization/isEdited",
      user: "Authorization/user",
    }),
  },
  watch: {
    CreditNumber: function() {
      var res = this.CreditNumber.replace(" ", "");
      var len = res.length;
      if (isNaN(res)) {
        this.CreditNumber = this.CreditNumber.substr(0, len - 1);
      }
    },
  },
  mounted() {
    var today = new Date();
    var mon = (today.getMonth() + 2) % 13;
    if (mon == 0) mon++;
    this.nextMonth =
      this.Months[mon].text + " " + today.getDate() + "," + today.getFullYear();
    var begYear = today.getFullYear();
    for (var i = 0; i < 10; i++) {
      var yearObj = {
        text: begYear.toString().substring(2, 4),
        value: begYear,
        disabled: false,
      };
      begYear++;
      this.expYear.push(yearObj);
    }
  },
};
</script>
