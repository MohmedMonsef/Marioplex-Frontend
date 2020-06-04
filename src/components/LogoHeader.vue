<template>
  <div class="conatiner px-0 bar">
    <div class="row justify-content-center logo-bar m-0">
      <router-link to="/"> <img src="../assets/logo-black.png"/></router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bar {
  margin: 0px 0px 30px 0px;
  .logo-bar {
    box-sizing: border-box;
    margin: 0px;
    width: auto;
    padding: 0%;
    border-bottom: 1px solid #dfe0e6;
    padding: 28px 0px;
    img {
      width: 190px;
    }
  }
}
</style>
<script>
/**
 * navigates to home page
 * @displayName Logo header
 * @example [none]
 */
export default {};
</script>
