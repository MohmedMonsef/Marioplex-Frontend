<template>
  <div class="account">
    <router-view class="child"></router-view>
  </div>
</template>
<style scoped>
.account{
  background: linear-gradient(#212c39, #121e3d 50%, #090c0f);
  background-repeat: no-repeat;
  height: 100%;
}
.child{
  padding-top: 39px;
}
</style>
<script>
/**
 * User profile where the user is able to edit his/her profile and also set Notification settings (Not Implemented)
 * @displayName User Profile
 * @example [none]
 */
export default {};
</script>
