<template>
  <div>
    <svg
      width="51"
      height="52"
      viewBox="0 0 51 52"
      xmlns="http://www.w3.org/2000/svg"
      testid="playlists svg"
    >
      <title>Add Playlist Icon</title>
      <path
        d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10c0-5.524-4.477-10-10-10zm7 11h-6v6H9v-6H3V9h6V3h2v6h6v2zm7.75-3.655c.118.653.188 1.32.217 2L49 4.234v27.03c-1.65-2.044-4.174-3.356-7-3.356-4.962 0-9 4.037-9 9 0 4.962 4.038 9 9 9s9-4.038 9-9V1.764l-26.25 5.58zM42 43.91c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-25-6.556C15.348 35.31 12.826 34 10 34c-4.963 0-9 4.037-9 9 0 4.96 4.037 9 9 9s9-4.04 9-9V21.97c-.632.476-1.296.912-2 1.285v14.097zM10 50c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 3.858-3.14 7-7 7z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
    <h1>Create your first playlist</h1>
    <p>We’ll help you make the perfect mixtape, minus the tape.</p>
    <button
      @click="changeModalState()"
      class="create_button"
      testid="create playlist button"
    >
      CREATE NEW PLAYLIST
    </button>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-weight: bold;
  display: block;
  margin-left: 22%;
  font-size: 45px;
}
svg {
  color: rgb(160, 158, 158);
  margin-left: 40%;
  margin-top: 80px;
}
p {
  color: rgb(146, 144, 144);
  font-size: 14px;
  margin-left: 28%;
}
.create_button {
  border: none;
  border-radius: 20px;
  width: 226px;
  height: 38px;
  background-color: white;
  margin-left: 32%;
  margin-top: 25px;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(31, 31, 31);
  outline: none;
}
.create_button:hover {
  width: 240px;
  height: 40px;
}
</style>

<script>
/**
 * Appears when user has no playlists in his library
 * @displayName Playlist Default
 * @example [none]
 */
export default {
  name: "lib-playlists-default",
  methods: {
    /**
     * triggers the opening of create playlist popup
     * @public This is a public method
     */

    changeModalState() {
      this.$store.dispatch("Playlist/toggleModal");
    },
  },
};
</script>
