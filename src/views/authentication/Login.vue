<template>
  <div class="login">
    <header class="pixels">
      <img class="logo" src="../../assets/img/logo.svg" alt="Coding Pirates" />
    </header>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input v-model="email" type="email" name="email" id="email" placeholder="Email" />
        <input v-model="password" type="password" name="password" id="password" placeholder="Password" />
        <button type="submit">Log ind</button>
      </form>
    </div>
  </div>
</template>

<script>
import * as auth from '../../services/AuthService'

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit: async function() {
      const user = {
        email: this.email,
        password: this.password
      }
      await auth.login(user);
      this.$router.push({ name: 'hjem' });
    }
  }
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
  background-image: url('../../assets/img/pixel_grey.svg');
  background-repeat: repeat;
  background-position: center bottom;

  .logo {
    position: absolute;
    width: 185px;
    bottom: -92.5px;
  }
}

.container {
  margin-top: 140px;

  input {
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    padding: 0 5px;
    border: 2px solid $blue;
    box-sizing: border-box;
  }

  button {
    display: block;
    width: 100%;
    height: 38px;
    border: none;
    background-color: $blue;
    cursor: pointer;
    text-align: center;
    color: white;
  }
}
</style>
