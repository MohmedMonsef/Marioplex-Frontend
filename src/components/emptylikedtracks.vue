<template>
  <div class="emptylikedtracks">
    <svg
      id="addsong"
      width="52"
      height="52"
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Add Song Icon</title>
      <path
        d="M26 0C11.64 0 0 11.643 0 26c0 14.36 11.64 26 26 26s26-11.64 26-26S40.36 0 26 0zm0 50C12.767 50 2 39.234 2 26S12.767 2 26 2c13.234 0 24 10.766 24 24S39.234 50 26 50zm0-32c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.58-8-8-8zm0 14c-3.308 0-6-2.69-6-6s2.692-6 6-6 6 2.69 6 6-2.69 6-6 6z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
    <h1 id="firsttitle" testid="firsttitle">Songs you've liked live here</h1>
    <h4 id="secondtitle" testid="secondtitle">
      Find more of the songs you love in Browse and save to your Liked Songs
    </h4>
    <button class="discoverbutton" testid="discoverbutton">DISCOVER</button>
  </div>
</template>

<style lang="scss" scoped>
.emptylikedtracks {
  position: absolute;
  text-align: center;
  align-content: center;
  top: 15%;
  left: 20%;
}
#addsong {
  color: #c2c1c1;
}
#firsttitle {
  font-weight: bold;
  color: white;
  font-size: 50px;
}
#secondtitle {
  font-size: 15px;
  color: #b3b3b3;
}
button {
  background-color: transparent;
  border: none;
  padding: 10px;
}
.discoverbutton {
  background-color: white;
  color: black;
  border-radius: 500px;
  width: 160px;
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
.discoverbutton:hover {
  transform: scale(1.06);
}
button:focus {
  outline: 0 !important;
}
</style>

<script>
/**
 * @displayName Empty Saved tracks
 * @example [none]
 */
export default {
  name: "emptylikedtracks"
};
</script>
