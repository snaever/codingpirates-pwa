<template>
  <div class="settings">
    <Topbar pageTitle="Konto" backButton="/brugere"/>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input v-model="user.name" type="text" name="name" id="name" placeholder="Navn" />
        <input v-model="user.email" type="email" name="email" id="email" placeholder="Email" />
        <input v-model="user.newPassword" type="password" name="newPassword" id="newPassword" placeholder="Password" />
        <input v-model="user.nameOfChild" type="text" name="nameOfChild" id="nameOfChild" placeholder="Barnets navn" />
        <div class="user-type">
          <p>Giv adminrettigheder</p>
          <label class="switch">
            <input v-model="user.isAdmin" type="checkbox" name="isAdmin" id="isAdmin">
            <span class="slider round"></span>
          </label>
        </div>
        <button type="submit">Opdater konto</button>
        <div v-if="user._id" class="controllers">
          <a v-on:click.prevent="deleteUser(user._id)" href="#"><img src="../../assets/icons/delete.svg" alt="delete" class="icon"></a>
        </div>
      </form>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as userService from '../../services/UserService'
import bcrypt from 'bcrypt-nodejs';

export default {
  name: 'bruger-rediger',
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
        nameOfChild: '',
        isAdmin: false
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    userService.getUserById(to.params.id)
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
      this.$router.push({ name: 'brugerliste' });
    },
    deleteUser: async function(userId) {
      await userService.deleteUser(userId);
      this.$router.push({ name: 'brugerliste' })
    }
  }
}
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

.controllers {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .icon {
    height: 35px;
    margin: 20px 0 0 20px;
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