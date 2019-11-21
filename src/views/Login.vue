<template>
  <div class="login">
    <header class="pixels">
      <img class="logo" src="../assets/img/logo.svg" alt="Coding Pirates" />
    </header>
  </div>
</template>

<script>
export default {
  name: 'login'
};
</script>

<style lang="scss" scoped>
.pixels {
  position: relative;
  display: flex;
  justify-content: center;
  height: 40vh;
  width: 100%;
  background-image: url('../assets/img/pixels-grey.png');
  background-repeat: repeat;
  background-position: center bottom;

  .logo {
    position: absolute;
    width: 185px;
    bottom: -92.5px;
  }
}
</style>
