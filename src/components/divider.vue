<template>
  <div class="conatiner px-0">
      <div id="divider"></div>
      <strong>or</strong>
  </div>
</template>
<style lang="scss" scoped>

#divider {
  width: 91%;
  height: 1px;
  background-color: #dfe0e6;
  margin: 12px 0px;
  z-index: -2;

  position: absolute;
}
strong {
  margin-top: -14px;
  z-index: 100;
  background-color: #fff;
  padding: 10px;
}
</style>
<script>
export default {};
</script>