<template>
  <div class="register">
    <Topbar pageTitle="Tilføj bruger" backButton="/mere"/>
    <div class="container">
      <div class="loginForm">
          <form v-on:submit.prevent="onSubmit">
              <input v-model="name" type="text" name="name" id="name" placeholder="Navn" />
              <input v-model="email" type="email" name="email" id="email" placeholder="Email" />
              <input v-model="password" type="password" name="password" id="password" placeholder="Password" />
              <button type="submit">Tilføj bruger</button>
          </form>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as auth from '../../services/AuthService'

export default {
  name: 'register',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
      return {
          email: '',
          password: '',
          name: ''
      }
  },
  methods: {
    onSubmit: async function() {
      const user = {
          email: this.email,
          password: this.password,
          name: this.name
      }
      const registerPromise = auth.registerUser(user);
      await Promise.all([registerPromise]);
      this.$router.push({ name: 'mere' });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

.loginForm {
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
  }
}
</style>
