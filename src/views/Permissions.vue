<template>
  <div class="permissions">
    <Topbar pageTitle="Tilladelser" backButton="/mere"/>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <div class="item">
          <p class="item-title">Der må tages billeder af mit barn</p>
          <div class="switch-container">
            <label class="switch">
              <input v-model="user.permissions.takePhotos" type="checkbox" name="takePhotos" id="takePhotos">
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="item">
          <p class="item-title">Billeder af mit barn på bruges offentligt</p>
          <div class="switch-container">
            <label class="switch">
              <input v-model="user.permissions.usePhotos" type="checkbox" name="usePhotos" id="usePhotos">
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <button type="submit">Opdater tilladelser</button>
      </form>
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as userService from '../services/UserService'
import { getUserId } from '../services/AuthService'

export default {
  name: 'tilladelser',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      user: {
        permissions: {
          takePhotos: false,
          usePhotos: false
        }
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
      const request = {
        user: this.user
      }
      await userService.updateUser(request);
      this.$router.push({ name: 'mere' });
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.container {
  display: flex;
  flex-direction: column;
  margin-top: $barsHeight;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  overflow: scroll;
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

/* The switch - the box around the slider */
.switch-container {
  width: 60px;

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
}

.item {
  border-bottom: 1px solid $dark-gray;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.4;

  .more-icon {
    width: 35px;
    height: 35px;
  }

  .item-title {
    padding-left: 10px;
    font-size: 13pt;
  }
}
</style>