<template>
  <div class="front-search front-box">
    <div class="container">
      <div class="row">
        <div class="container text-center col-xs-12 col-md-8 col-md-offset-2">
          <h1>
            <font color="white">
              <strong>How can we help you?</strong>
            </font>
          </h1>
          <div class="search-container">
            <div class="search-box container">
              <form>
                <input
                  type="text"
                  class="form-control"
                  id="search"
                  placeholder="Search"
                  autocomplete="off"
                  v-model="search"
                />
                <div class="icon-container">
                  <i class="fa fa-search"></i>
                </div>
              </form>
            </div>
          </div>
          <div class="results text-left">
            <ul>
            <!--  <li v-for="result in results">{{result.name}}</li>-->
            </ul>
          </div>
        </div>
        <!--<Button class="btn btn-prima "></Button>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data:{results:[{name:"song"},{name:"playlist"}],search:""}
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.front-search {
  width: 100%;
  height: auto;
  padding: 80px;
  background-image: url("../assets/back.jpg");
  background-size: 100% 100%;
}
.row {
  margin-left: -8px;
  margin-right: -8px;
}
.front-search .search-container .search-box {
  position: relative;
  border-radius: 8px;
  border-width: 0;
  background-color: hsla(0, 0%, 100%, 0.8);
  padding: 5px;
  margin-bottom: 25px;
  font-weight: bold;
}
.form-control {
    display: block;
    font-size: 18px;
    line-height: 1.5;
    color: #222326; }
input {
  background-color: #00000000;
  border: 0;
  color: black;
  font-weight: bold;
  height: 30px;
  width: 80%;
}
.icon {
  float: left;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
@media (min-width: 768px) {
  .front-box h1 {
    font-size: 60px;
    line-height: 58px;
    letter-spacing: -0.03em;
    padding: 0;
  }
}
.front-box h1 {
  font-weight: 700;
  font-size: 37px;
  margin: 16px 0 30px;
  line-height: 39px;
  letter-spacing: -0.04em;
  padding: 0 20px;
  font-family: inherit;
}
.icon-container {
  display: inline;
}
.text-center {
  text-align: center;
}
</style>
