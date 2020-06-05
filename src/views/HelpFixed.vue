<template>
  <div class="row">
    <HelpPagesSideBar class="col-4 hide top" />
    <div class="col-8 top"><router-view></router-view></div>
  </div>
</template>
<script>
import HelpPagesSideBar from "@/components/HelpPagesSideBar";
export default {
  name: "HelpFixed",
  components: { HelpPagesSideBar },
};
</script>
<style scoped>
.top {
  margin-top: 80px;
}
@media (max-width: 900px) {
  .hide {
    display: none;
  }
}
</style>
