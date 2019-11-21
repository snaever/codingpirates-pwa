<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>

<style scoped lang="scss">
@import 'normalize-scss';
@include normalize();
@import '@/assets/scss/_all.scss';
</style>