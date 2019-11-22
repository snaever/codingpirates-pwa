<template>
  <div class="post">
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
@import '@/assets/scss/_all.scss';

.container {
  margin-top: 80px;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
}
</style>