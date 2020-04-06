<template>

  <div class="container-fluid navbar-container ">
    <div class="row navbar-inner  justify-content-center">
      <div class=" navbar navbar-expand-sm  justify-content-center ">
          <span>
        <ul>
          <router-link to="/ArtistPersonalPage" tag="li">
            <a>home</a>
          </router-link>
          <router-link to="/" tag="li">
            <a>music</a>
          </router-link>
          <router-link to="/" tag="li">
            <a>audiance</a>
          </router-link>
          <router-link to="/" tag="li">
            <a>profile</a>
          </router-link>
        </ul>
        </span>
      </div>
    </div>
  </div>
  
</template>
<style lang="scss" scoped>
.navbar-container {
  background-color: rgba(0, 0, 0,0.6);
  margin: 0%;
  position: fixed;
  /* display: block; */
  display: block;
  justify-content: space-around;

  .navbar-inner {
    padding: 0px 15px;
    display: flex;
    justify-content: space-around;

    .list {
      margin-left: 600px;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
    }
    span{
        width:100%;
    }
    
    ul {
      margin: 0%;
      list-style-type: none;
      display: inline-flex;

      li {
         margin:10px; 
        padding: 28px 17px;
        text-align: center;
        float: right;
        display:block;
        color:white;
        

        a {
          color: #ffffff;
          font-size: 15px;
          text-decoration: none;
          padding: 0%;
          display: block;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
<script>
export default {
    name:"ArtistHeader",
};
</script>
