<template>
  <div class="post">
    <Topbar pageTitle="Post" backButton="/" />
      <div class="container">
        <div class="author-container">
          <div class="image"></div>
            <p class="author">Frivillige Frida</p>
        </div>
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

.author-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .image {
    width: 53px;
    height: 53px;
    background-color: $blue;
    border-radius: 100%;
  }

  .author {
    margin: 0 0 0 25px;
    color: $blue;
    font-size: 13pt;
    font-weight: bold;
  }
}

.message {
  line-height: 1.4;
}

</style>