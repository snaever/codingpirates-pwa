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

    <div class="container">
      <div class="notice">
        <h3>Næste gang</h3>
        <p>Onsdag d. 23 oktober</p>
        <p>17:00 - 18:30</p>
      </div>

      <div class="post">
        <div class="image"></div>
        <div class="box">
          <p class="author">Frivillige Frida</p>
          <p class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod et velit eget luctus. Praesent vitae porttitor purus. Nam a nulla a arcu sagittis faucibus in ut nisl. Quisque vel efficitur dui. Praesent sed ipsum aliquam, sodales lacus eget, efficitur nulla.</p>
        </div>
      </div>

      <div class="post">
        <div class="image"></div>
        <div class="box">
          <p class="author">Frivillige Frida</p>
          <p class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod et velit eget luctus. Praesent vitae porttitor purus. Nam a nulla a arcu sagittis faucibus in ut nisl. Quisque vel efficitur dui. Praesent sed ipsum aliquam, sodales lacus eget, efficitur nulla.</p>
        </div>
      </div>

    </div>

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
      background-color: #00aeee;
      border-radius: 100%;
    }

    .details {
      max-width: 220px;

      h2 {
        font-family: $heading-font;
        font-size: 16pt;
        margin: 0;
      }

      p {
        font-family: $body-font;
        margin: 7px 0 0 0;
      }
    }
  }
}

.notice {
  display: block;
  background-color: $dark-gray;
  padding: 15px;
  margin: 20px 0;

  h3 {
    font-family: $heading-font;
    font-size: 11pt;
    margin: 0 0 10px 0;
  }

  p {
    font-family: $body-font;
    font-size: 13pt;
    margin: 5px 0;
  }
}

.post {
  position: relative;

  .image {
    position: absolute;
    top: -15px;
    left: 0;
    width: 53px;
    height: 53px;
    background-color: $blue;
    border-radius: 100%;
  }

  .box {
    background-color: $light-gray;
    width: 93%;
    margin-left: 7%;
    margin-top: 35px;
    padding: 10px;
    box-sizing: border-box;

    @media screen and (min-width: 500px) {
      width: 95%;
      margin-left: 5%;
    }

    @media screen and (min-width: 720px) {
      width: 96%;
      margin-left: 4%;
    }

    .author {
      margin: 0 0 0 25px;
      color: $blue;
      font-size: 13pt;
    }

    .message {
      line-height: 1.4;
    }
  }
}
</style>