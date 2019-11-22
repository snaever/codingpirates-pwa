<template>
  <div class="event">
    <Topbar pageTitle="Klubaften" backButton="/kalender"/>
      <div class="container">
        <p class="date">21. november</p>
        <p class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat eros, eleifend non quam vel, efficitur molestie diam. Suspendisse eget mauris nec enim pulvinar aliquam et eu eros. Proin dignissim arcu quis venenatis malesuada. Duis vestibulum, risus ut placerat malesuada, turpis turpis feugiat dui, et consequat ex sapien a lectus.</p>
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
@import '@/assets/scss/_all.scss';

.container {
  margin-top: 80px;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  padding-top: 20px;
  overflow: scroll;
}

.date {
  color: $blue;
  font-size: 13pt;
  font-weight: bold;
}

.message {
  line-height: 1.4;
}

</style>