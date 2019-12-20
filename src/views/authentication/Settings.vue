<template>
  <div class="settings">
    <Topbar pageTitle="Konto" backButton="/mere"/>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input v-model="user.name" type="text" name="name" id="name" placeholder="Navn" />
        <input v-model="user.email" type="email" name="email" id="email" placeholder="Email" />
        <input v-model="user.newPassword" type="password" name="newPassword" id="newPassword" placeholder="Password" />
        <input v-model="user.nameOfChild" type="text" name="nameOfChild" id="nameOfChild" placeholder="Barnets navn" />
        <button type="submit">Opdater konto</button>
      </form>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as userService from '../../services/UserService'
import { getUserId } from '../../services/AuthService'
import bcrypt from 'bcrypt-nodejs';

export default {
  name: 'indstillinger',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      user: {
        name: '',
        email: '',
        newPassword: '',
        password: '',
        nameOfChild: ''
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    userService.getUserById(getUserId())
    .then(response => {
      if (!response) {
        next('/');
      } else {
        next(vm => {
          const user = response.data.user;
          vm.user = user;
        });
      }
    });
  },
  methods: {
    onSubmit: async function() {
      if (this.user.newPassword) {
        const unsafePassword = this.user.newPassword;
        this.user.password = bcrypt.hashSync(unsafePassword);
      } else {
        this.user.password = this.user.password;
      }
      
      const request = {
        user: this.user
      }
      await userService.updateUser(request);
      this.$router.push({ name: 'mere' });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

.container {
  margin-top: $barsHeight;
  padding: 20px;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  overflow: scroll;

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