<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeCreate: function() {
    this.$store.dispatch('authenticate');
  }
}
</script>

<style lang="scss">
@import 'normalize-scss';
@include normalize();
@import '@/assets/scss/_all.scss';

body {
  font-family: $body-font;
  font-size: 11pt;
}

.container {
  max-width: 788px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .15s;
}

.fade-enter-active {
  transition-delay: .15s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
