<template>
  <div class="indstillinger">
    <Topbar pageTitle="Indstillinger" backButton="/mere"/>
    <div class="container">
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'

export default {
  name: 'tilladelser',
  components: {
    Navigation,
    Topbar
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
</style>