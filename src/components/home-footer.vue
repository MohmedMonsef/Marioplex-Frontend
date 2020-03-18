<template>
  <div>
    <ul>
      <li class="disabled">
        Useful links
      </li>
      <router-link to="/webplayer" tag="li">
        WebPlayer
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
div {
  height: 400px;
  background-color: black;
  ul {
    list-style-type: none;
    li {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
<script>
export default {};
</script>
