<template>
  <div class="home">
    <header class="info">
      <div class="container">
        <div class="attendee">
          <div class="image"></div>
          <div class="details">
            <h2>Pirat Piratson</h2>
            <p>Coding Pirates Umbraco</p>
          </div>
        </div>
      </div>
    </header>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.info {
  height: 20vh;
  width: 100%;
  background-image: url('../assets/img/pixel_blue.svg');
  background-repeat: repeat;
  background-position: center bottom;

  .attendee {
    display: flex;
    width: 100%;
    height: 20vh;
    justify-content: space-around;
    align-items: center;

    .image {
      width: 97px;
      height: 97px;
      background-color: red;
      border-radius: 100%;
    }

    .details {
      h2, p {
        margin: 0;
      }
    }
  }
}
</style>