<template>
  <div class="mere">
    <Topbar pageTitle="Mere" />
    <div class="container">
      <div class="item">
        <img src="../assets/icons/settings.svg" alt="settings" class="more-icon">
        <div class="item-title">Kontoindstillinger</div>
      </div>
      <router-link to="/tilladelser" class="item">
        <img src="../assets/icons/permissions.svg" alt="permissions" class="more-icon">
        <div class="item-title">Tilladelser</div>
      </router-link>
      <h3>Admin adgang</h3>
      <div class="item">
        <img src="../assets/icons/add-event.svg" alt="add event" class="more-icon">
        <div class="item-title">Tilføj begivenhed</div>
      </div>
      <router-link to="/post/ny" class="item">
        <img src="../assets/icons/add-post.svg" alt="add post" class="more-icon">
        <div class="item-title">Tilføj opslag</div>
      </router-link>
      <router-link to="/registrer" class="item">
        <img src="../assets/icons/add-user.svg" alt="add user" class="more-icon">
        <div class="item-title">Tilføj bruger</div>
      </router-link>
      <div class="item">
        <img src="../assets/icons/delete-user.svg" alt="delete user" class="more-icon">
        <div class="item-title">Slet bruger</div>
      </div>
      <div v-on:click.prevent="logout()" class="item">
        <img src="../assets/icons/sign-out.svg" alt="logout" class="more-icon">
        <div class="logout-title">Logud</div>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as auth from '../services/AuthService';

export default {
  name: 'mere',
  components: {
    Navigation,
    Topbar
  },
  methods: {
    logout: function() {
      auth.logout();
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.container {
  margin-top: $barsHeight;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.item {
  border-bottom: 1px solid $dark-gray;
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: inherit;
  text-decoration: none;

  .more-icon {
    width: 35px;
    height: 35px;
  }

  .item-title {
    padding-left: 10px;
    font-size: 13pt;
    font-weight: bold;
  }

  .logout-title {
    padding-left: 10px;
    font-size: 13pt;
    font-weight: bold;
    color: $red;
  }
}

h3 {
  font-family: $heading-font;
  font-size: 11pt;
  margin: 40px 0 0 0;
  text-align: center;
}
</style>