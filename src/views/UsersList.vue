<template>
  <div class="calendar">
    <Topbar pageTitle="Brugere" backButton="/mere" addButton="/registrer" />
    <div class="container">
      <div v-if="users && users.length > 0">
        <div v-for="user in users" v-bind:key="user._id">
          <router-link :to="{ name: 'bruger-rediger', params: { id: user._id } }" exact class="user-item">
            <div class="image" :style="{ 'background-image': 'url(https://eu.ui-avatars.com/api/?background=FF9900&color=fff&size=80&bold=true&name=' + encodeName(user.nameOfChild) + ')' }"></div>
            <div class="single-user">
              <div class="user-name">{{ user.name }}</div>
              <div class="user-child">({{ user.nameOfChild }})</div>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="users && users.length  === 0">Ingen brugere fundet.</div>
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as userService from '../services/UserService'

export default {
  name: 'brugerliste',
  data: function() {
    return {
      users: null
    }
  },
  components: {
    Navigation,
    Topbar
  },
  beforeRouteEnter(to, from, next) {
    userService.getAllUsers()
    .then(res => {
    next(vm => {
        vm.users = res.data.users;
    });
    });
  },
  methods: {
    encodeName(name) {
      return window.encodeURIComponent(name);
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.container {
  margin-top: $barsHeight;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  overflow: scroll;
}

.user-item {
  border-bottom: 1px solid $dark-gray;
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: inherit;
  text-decoration: none;

  .image {
    width: 40px;
    height: 40px;
    background-color: #FF9900;
    background-size: cover;
    border-radius: 100%;
  }

  .single-user {
    padding-left: 10px;

    .user-name {
      font-size: 13pt;
      font-weight: bold;
    } 

    .user-child {
      padding: 5px 0 0; 
    }
  }
}
</style>