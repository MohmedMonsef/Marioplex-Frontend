<template>
  <div class="emptytracks">
    <svg
      id="albumimage"
      width="50"
      height="69"
      viewBox="0 0 80 79"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Album</title>
      <path
        d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
    <h1 id="bigtitle" testid="firsttitle">It's a bit empty here...</h1>
    <h4 id="smalltitle" testid="secondtitle">
      Let's find some songs for your playlist
    </h4>
    <router-link to="/HomeWebPlayer">
      <button id="newreleasesbutton" testid="NewReleasebutton">
        NEW RELEASES
      </button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.emptytracks {
  // margin: top right bottom left
  margin-left: 140px;
  margin-top: 100px;
  position: absolute;
  text-align: center;
  align-content: center;
}
#albumimage {
  color: #c2c1c1;
}
#bigtitle {
  color: white;
  font-weight: bold;
  font-size: 50px;
}
#smalltitle {
  color: #b3b3b3;
  font-size: 15px;
}
button {
  background-color: transparent;
  border: none;
  padding: 10px;
}
#newreleasesbutton {
  background-color: white;
  color: black;
  border-radius: 500px;
  width: 190px;
  height: 40px;
  padding: 8px 34px;
  display: inline-block;
  margin: 25px 25px 0px 25px;
  align-content: center;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
}
#newreleasesbutton:hover {
  transform: scale(1.06);
}
button:focus {
  outline: 0 !important;
}
</style>

<script>
export default {};
</script>
>
