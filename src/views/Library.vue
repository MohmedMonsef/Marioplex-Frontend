<template>
  <div class="library">
    <div>
      <router-view class="child"></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.child {
  min-height: 1000px;
}
</style>

<script>
export default {
  
};
</script>
