<template>
  <div class="bouncingball">
    <div class="container">
      <div class="ball"></div>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<style lang="scss" scoped>
.ball {
  height: 100px;
  width: 100px;
  background-color: #ff1a66;
  border-radius: 50%;
  position: relative;
  animation: bounce 0.9s infinite;
}
@keyframes bounce {
  10% {
    height: 90px;
    width: 90px;
    background-color: yellow;
  }
  30% {
    height: 90px;
    width: 80px;
    background-color: blue;
  }
  50% {
    height: 70px;
    width: 97px;
    transform: translateY(240px);
    background-color: purple;
  }
  75% {
    height: 90px;
    width: 97px;
    background-color: red;
  }
  100% {
    transform: translateY(0px);
  }
}
.shadow {
  background-color: rgba(8, 8, 8, 0.05);
  height: 10px;
  width: 65px;
  border-radius: 50%;
  position: relative;
  margin-top: 35px;
  z-index: -1;
  animation: shrink 0.9s infinite;
}
@keyframes shrink {
  50% {
    transform: scaleX(0.5);
  }
}
</style>

<script>
export default {};
</script>
