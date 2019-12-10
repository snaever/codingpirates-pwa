<template>
  <div class="mere">
    <Topbar pageTitle="Mere" />
    <div class="container">
      <div class="menu-items">
        <div class="item">
          <img src="../assets/icons/settings.svg" alt="home" class="more-icon">
          <div class="item-title">Kontoindstillinger</div>
        </div>
        <div class="item">
          <img src="../assets/icons/permissions.svg" alt="home" class="more-icon">
          <div class="item-title">Tilladelser</div>
        </div>
      </div>
      <a v-on:click.prevent="logout()" class="button">Log ud</a>
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
  name: 'more',
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
  margin-top: 80px;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
}

.item {
  border-bottom: 1px solid $dark-gray;
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .more-icon {
    width: 35px;
  }

  .item-title {
    padding-left: 10px;
    font-size: 13pt;
    font-weight: bold;
  }
}

.button {
  width: 100%;
  border: none;
  background-color: $red;
  cursor: pointer;
  text-align: center;
  color: $light-gray;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 100px;
}
</style>