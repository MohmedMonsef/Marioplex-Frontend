<template>
    <div>
      <i class="fa fa-lock"></i>
      <h1>Sorry,You are not allowed to view this page!</h1>
      <h2>This might be an authorization problem.</h2>
    </div>
</template>

<style lang="scss" scoped>
div{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(-180deg, #3a4044 0%, #000000 100%);
}
i{
    margin: 10% 45% 2% 45%;
    text-align: center;
    font-size: 60px;
    color:white;
}
h1{
  text-align: center;
  font-weight: 650;
  font-size: 50px;
  color: white;
}
h2{
  text-align: center;
  font-weight: 600;
 color: white;
}
@media screen and (max-width: 800px) {
  h1{
  font-weight: 500;
  font-size: 40px;
  }
  h2{
  font-weight: 500;
  font-size: 30px;
  }
}
</style>

<script>
/**
 * UnAuthorized access by user ban
 * @displayName UnAuthorized Page
 * @example [none]
 */
export default {
};
</script>
