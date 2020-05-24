<template>
  <div class="ConfirmEmail">
    <div class="row">
      <div class="d-none  d-lg-block col-xg-3" id="bouncingball">
        <BouncingBall />
      </div>
      <div class="col-lg-8" id="confirmheader">
        <h1>Please, Confirm Your Email</h1>
        <h6>Check Your Email</h6>
      </div>
      <div class="d-none  d-lg-block col-xg-3" id="bouncingball">
        <BouncingBall />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ConfirmEmail {
  height: 500px;
  //   #94bcdf
  background-image: linear-gradient(180deg, #252a33, #ffff);
}
.row {
  justify-content: center;
}
h1 {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}
h6 {
  font-size: 15px;
  text-align: center;
  color: grey;
}
#confirmheader {
  margin-top: 15%;
}
#bouncingball {
  margin-top: 13%;
}
.col {
  padding: 20px;
}
</style>

<script>
import BouncingBall from "@/components/BouncingBall.vue";
export default {
  name: "EmailConfirmation",
  components: {
    BouncingBall
  },
};
</script>
>
