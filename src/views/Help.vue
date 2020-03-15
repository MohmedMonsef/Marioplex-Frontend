<template>
  <div>
    <div class="nav"></div>
    <search></search>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
export default {
  name: "Home",
  components: {
    Search
  }
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
body {
  font-family: Circular, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: #222326;
}
.nav {
  background-color: black;
  width: 100%;
  height: 80px;
  margin: 0px;
  padding: 0px;
}
</style>
