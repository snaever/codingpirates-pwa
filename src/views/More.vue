<template>
  <div class="Mere">
    <Topbar pageTitle="Mere" />
    <div class="container">
      <div class="item">
        <img src="../assets/icons/settings.svg" alt="home" class="more-icon">
        <div class="item-title">Kontoindstillinger</div>
      </div>
      <div class="item">
        <img src="../assets/icons/permissions.svg" alt="home" class="more-icon">
        <div class="item-title">Tilladelser</div>
      </div>
      <router-link to="/login" class="button">Log ud</router-link>
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'

export default {
  name: 'calendar',
  components: {
    Navigation,
    Topbar
  }
}
</script>

<style scoped lang="scss">
@import 'normalize-scss';
@include normalize();
@import '@/assets/scss/_all.scss';
.container {
  margin-top: 80px;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
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
  display: block;
  width: 100%;
  border: none;
  background-color: $red;
  cursor: pointer;
  text-align: center;
  color: $light-gray;
  position: absolute;
  bottom: 20px;
  left: 0;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>