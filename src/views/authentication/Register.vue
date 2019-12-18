<template>
  <div class="register">
    <Topbar pageTitle="Tilføj bruger" backButton="/mere"/>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input v-model="name" type="text" name="name" id="name" placeholder="Navn" />
        <input v-model="email" type="email" name="email" id="email" placeholder="Email" />
        <input v-model="password" type="password" name="password" id="password" placeholder="Password" />
        <input v-model="nameOfChild" type="text" name="nameOfChild" id="nameOfChild" placeholder="Barnets navn" />
        <div class="user-type">
          <p>Giv adminrettigheder</p>
          <label class="switch">
            <input v-model="isAdmin" type="checkbox" name="isAdmin" id="isAdmin">
            <span class="slider round"></span>
          </label>
        </div>
        <button type="submit">Tilføj bruger</button>
      </form>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as auth from '../../services/AuthService'

export default {
  name: 'registrer',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      email: '',
      password: '',
      name: '',
      nameOfChild: '',
      isAdmin: false
    }
  },
  methods: {
    onSubmit: async function() {
      const user = {
        email: this.email,
        password: this.password,
        name: this.name,
        nameOfChild: this.nameOfChild,
        isAdmin: this.isAdmin
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

.container {
  margin-top: 120px;

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

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $dark-gray;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: $blue;
  }

  input:focus + .slider {
    box-shadow: 0px;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}

.user-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
