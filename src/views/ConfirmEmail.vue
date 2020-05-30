<template>
  <div class="ConfirmEmail">
    <div class="stars"></div>
    <div class="row">
      <div class="col-lg-8" id="confirmheader">
        <h1>Please, Confirm Your Email</h1>
        <h6>Check Your Email For Confirmation</h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ConfirmEmail {
  width: 100%;
  height: 100vh;
  background-color: black !important;
}
.row {
  margin: 5px;
  justify-content: center;
}
h1 {
  color: rgb(253, 237, 237);
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px #5e6063;
}
h6 {
  font-size: 13px;
  text-align: center;
  color: rgb(116, 110, 110);
}
#confirmheader {
  margin-top: 15%;
}
.col {
  padding: 20px;
}

.stars {
  background: url("../assets/star.gif");
  width: 100%;
  height: 370px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

<script>
/**
 * Ask the user to confirm his/her email when signup for the first time
 * @displayName Email Confirmation
 * @example [none]
 */
export default {
  name: "EmailConfirmation"
};
</script>
