<template>
  <div class="login">
    <header class="pixels">
      <img class="logo" src="../assets/img/logo.svg" alt="Coding Pirates" />
    </header>

    <div class="container">
      <div class="loginForm">
        <form action="post">
          <input type="text" name="username" id="username" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="button" value="Log ind" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

.pixels {
  position: relative;
  display: flex;
  justify-content: center;
  height: 40vh;
  width: 100%;
  background-image: url('../assets/img/pixel_grey.svg');
  background-repeat: repeat;
  background-position: center bottom;

  .logo {
    position: absolute;
    width: 185px;
    bottom: -92.5px;
  }
}

.loginForm {
  margin-top: 140px;

  input {
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
  }

  input[type='text'],
  input[type='password'] {
    padding: 0 5px;
    border: 2px solid $blue;
    box-sizing: border-box;
  }

  input[type="button"] {
    display: block;
    width: 100%;
    border: none;
    background-color: $blue;
    cursor: pointer;
    text-align: center;
  }
}
</style>
