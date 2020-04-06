<template>
  <div>
    <ul>
      <li class="disabled">
        Useful links
      </li>
      <router-link to="/HomeWebPlayer" tag="li" replace>
        WebPlayer
      </router-link>
      <router-link to="/ForArtist" tag="li">
        For Artist
      </router-link>
      <router-link to="/ArtistPersonalPage" tag="li">
        ArtistPage
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
