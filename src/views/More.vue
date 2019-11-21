<template>
  <div class="Mere">
    <Topbar pageTitle="Mere" />
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

</style>