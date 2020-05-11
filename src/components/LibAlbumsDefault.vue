<template>
  <div>
    <svg
      width="50"
      height="49"
      viewBox="0 0 80 79"
      xmlns="http://www.w3.org/2000/svg"
      testid="albums svg"
    >
      <title>Album</title>
      <path
        d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
    <h1>Save your favourite albums</h1>
    <p>Save albums you love to build the collection of your dreams.</p>
    <router-link to="/HomeWebPlayer" class="discover">
      <button class="discover_button" testid="discover button">
        DISCOVER
      </button>
    </router-link>
  </div>
</template>

<style scoped>
svg {
  color: rgb(160, 158, 158);
  margin-left: 41%;
  margin-top: 80px;
}
h1 {
  color: white;
  font-weight: bold;
  display: block;
  margin-left: 22%;
  font-size: 45px;
}
p {
  color: rgb(146, 144, 144);
  font-size: 14px;
  margin-left: 29%;
}
.discover_button {
  border: none;
  border-radius: 20px;
  width: 140px;
  height: 38px;
  background-color: white;
  margin-left: 37%;
  margin-top: 25px;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(31, 31, 31);
  outline: none;
}
.discover_button:hover {
  width: 145px;
  height: 40px;
}
</style>
<script>
/**
 * Appears when user has no albums in his library
 * @displayName Albums Default
 * @example [none]
 */
export default {
  name: "lib-albums-default",
};
</script>
