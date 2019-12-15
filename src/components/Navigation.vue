<template>
  <div class="navigation">
    <div class="container">
      <nav class="nav-container">
        <router-link to="/">
          <img src="../assets/icons/home.svg" alt="Kahytten" class="nav-icon">
        </router-link>
        <router-link to="/kalender">
          <img src="../assets/icons/calendar.svg" alt="Kalender" class="nav-icon">
        </router-link>
        <router-link to="/beskeder">
          <img src="../assets/icons/chat.svg" alt="Flaskepost" class="nav-icon">
        </router-link>
        <router-link to="/mere">
          <img src="../assets/icons/more.svg" alt="Mere" class="nav-icon">
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.navigation {
  background: $light-gray;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;

  .nav-icon {
    width: 35px;
    height: 35px;
  }
}
</style>
