<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'normalize-scss';
@include normalize();
@import '@/assets/scss/_all.scss';

.container {
  max-width: 748px;
  margin: auto;
  padding: 0 10px;
}
</style>
