<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
</style>
