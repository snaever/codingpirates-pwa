<template>
  <div class="chat">
    <Topbar pageTitle="Ny besked" backButton="/beskeder" />
    <div class="container">
      <p>View for new messages</p>
    </div>
    <AddMessage />
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import AddMessage from '@/components/AddMessage.vue'

export default {
  name: 'besked',
  components: {
    Navigation,
    Topbar,
    AddMessage
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

</style>