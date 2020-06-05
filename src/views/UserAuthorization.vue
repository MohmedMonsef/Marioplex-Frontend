<template>
  <div>
    <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
@import "../css/global.css";
.login-form {
  h2 {
    font-family: Circular, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 900;
    color: #1c1c1f;
    text-align: center;
    margin-bottom: 18px;
  }
  .unlogged {
    width: 100%;
    text-align: center;
    background-color: #e22134;
    color: #fff;
    font-size: 12px;
    padding: 14px 14px 12px;
    font-weight: 400;
  }
  input {
    width: 100%;
    height: 45px;
    padding: 0px 11.25px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

#facebook-btn {
  background-color: #3b5998;

  padding: 14px 14px 18px 14px;
  margin: 16px 0px;
  //height: 50px;
  display: block;

  width: 100%;
}
#facebook-btn:hover {
  background-color: #3a61b3;
}
#apple-btn {
  background-color: #000000;
  padding: 14px 14px 14px 18px;
  margin: 16px 0px;
  display: block;

  width: 100%;
}
#apple-btn:hover {
  background-color: #333;
}
#wrap {
  overflow: auto;
}
#login-btn {
  background-color: #1db954;
  width: 50%;
  float: right;
  display: inline-block;
}
#login-btn:hover {
  background-color: #1ed760;
}
#forget_pass {
  align-content: center;
  display: block;

  padding: 30px;
  border-bottom: 1px solid #dfe0e6;
  margin-bottom: 15px;
}

#signup_btn {
  color: #333;
  background-color: #ffffff;
  border: solid #adadad 2px;
  padding: 14px 14px 14px 18px;
  margin: 16px 0px 42px 0px;
  display: block;

  width: 100%;
}
#signup_btn:hover {
  color: #fff;
  background-color: #616467;
  border: solid #616467 2px;
}
</style>

<script>

/**
 * Parent page to login and reset password page for a user who forgot his password
 * @displayName User Authorization page
 * @example [none]
 */
export default {

};
</script>
