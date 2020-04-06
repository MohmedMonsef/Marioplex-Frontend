<template>
  <div>
    <svg
      width="52"
      height="54"
      viewBox="0 0 52 54"
      xmlns="http://www.w3.org/2000/svg"
      testid="artists svg"
    >
      >
      <title>Add Artist Icon</title>
      <path
        d="M35.71 34.12l-4.282-2.462c-.43-.247-.724-.668-.808-1.156-.085-.488.05-.984.373-1.36l3.486-4.088c2.212-2.585 3.43-5.886 3.43-9.293v-1.33c0-3.938-1.647-7.74-4.52-10.435C30.474 1.263 26.657-.102 22.66.16 15.176.646 9.31 7.114 9.31 14.887v.875c0 3.41 1.22 6.71 3.432 9.293l3.487 4.09c.32.375.456.87.372 1.36-.085.486-.38.908-.81 1.155l-8.547 4.914C2.775 39.112 0 43.878 0 49.012V53h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916c.946-.544 1.596-1.473 1.782-2.55.187-1.075-.113-2.168-.822-2.998l-3.488-4.09c-1.903-2.224-2.95-5.062-2.95-7.994v-.875c0-6.72 5.04-12.312 11.478-12.73 3.448-.218 6.725.95 9.23 3.3 2.51 2.35 3.89 5.538 3.89 8.975v1.33c0 2.932-1.047 5.77-2.95 7.995l-3.488 4.09c-.708.83-1.008 1.923-.822 3 .187 1.074.836 2.003 1.782 2.547l3.036 1.745c.706-.412 1.455-.755 2.243-1.018zM43 43v-9h-2v9h-9v2h9v9h2v-9h9v-2h-9z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
    <h1>Your artists will appear here.</h1>
    <p>Follow artists you love to add them to Your Library.</p>
    <router-link to="/HomeWebPlayer/search">
      <button class="search_button" testid="search button">
        SEARCH
      </button>
    </router-link>
  </div>
</template>

<style scoped>
svg {
  color: rgb(160, 158, 158);
  margin-left: 39%;
  margin-top: 50px;
}
h1 {
  color: white;
  font-weight: bold;
  display: block;
  margin-left: 20%;
  font-size: 45px;
}
p {
  color: rgb(146, 144, 144);
  font-size: 14px;
  margin-left: 30%;
}
.search_button {
  border: none;
  border-radius: 20px;
  width: 135px;
  height: 38px;
  background-color: white;
  margin-left: 36%;
  margin-top: 25px;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(31, 31, 31);
  outline: none;
}
.search_button:hover {
  width: 140px;
  height: 40px;
}
</style>

<script>
export default {};
</script>
