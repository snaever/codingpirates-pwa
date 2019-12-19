<template>
  <div class="chat">
    <Topbar pageTitle="Besked" backButton="/beskeder" />
    <div class="container">
      <div class="message sender">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat eros, eleifend non quam vel, efficitur molestie diam. Suspendisse eget mauris nec enim pulvinar aliquam et eu eros. Proin dignissim arcu quis venenatis malesuada. Duis vestibulum, risus ut placerat malesuada, turpis turpis feugiat dui, et consequat ex sapien a lectus.</p>
        <p class="created">19 dec. 12:50</p>
      </div>
      <div class="message receiver">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat eros, eleifend non quam vel, efficitur molestie diam. Suspendisse eget mauris nec enim pulvinar aliquam et eu eros. Proin dignissim arcu quis venenatis malesuada. Duis vestibulum, risus ut placerat malesuada, turpis turpis feugiat dui, et consequat ex sapien a lectus.</p>
        <p class="created">19 dec. 13:17</p>
      </div>
      <div class="message sender">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat eros, eleifend non quam vel, efficitur molestie diam. Suspendisse eget mauris nec enim pulvinar aliquam et eu eros. Proin dignissim arcu quis venenatis malesuada. Duis vestibulum, risus ut placerat malesuada, turpis turpis feugiat dui, et consequat ex sapien a lectus.</p>
        <p class="created">19 dec. 12:50</p>
      </div>
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
.container {
  margin-top: $barsHeight;
  padding-bottom: 20px;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight} - 80px);
  overflow: scroll;
}

.message {
  padding: 15px;
  margin-top: 20px;

  p {
    margin: 0;
    line-height: 1.4;
  }

  .created {
    color: $blue;
    margin-top: 10px;
    font-size: 8pt;
  }

  &.sender {
    background-color: $dark-gray;
    margin-left: 15%;
  }

  &.receiver {
    background-color: $light-gray;
    margin-right: 15%;
  }
}
</style>