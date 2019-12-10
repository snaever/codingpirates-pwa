<template>
  <div class="register">
    <div class="loginForm">
        <form v-on:submit.prevent="onSubmit">
            <input v-model="firstname" type="text" name="firstname" id="firstname" placeholder="Fornavn" />
            <input v-model="lastname" type="text" name="lastname" id="lastname" placeholder="Efternavn" />
            <input v-model="email" type="email" name="email" id="email" placeholder="Email" />
            <input v-model="password" type="password" name="password" id="password" placeholder="Password" />
            <button type="submit">Tilføj bruger</button>
        </form>
    </div>
  </div>
</template>

<script>
import * as auth from '../../services/AuthService'

export default {
  name: 'register',
  data: function() {
      return {
          email: '',
          password: '',
          firstname: '',
          lastname: ''
      }
  },
  methods: {
    onSubmit: async function() {
      const user = {
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname
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
