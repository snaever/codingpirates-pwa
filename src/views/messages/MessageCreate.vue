<template>
  <div class="chat">
    <Topbar pageTitle="Ny besked" backButton="/beskeder" />
    <div class="container">
      
    </div>
    <div class="add-message">
      <div class="message-container">
        <form class="form" v-on:submit.prevent="onSubmit">
          <input v-model="message.messages.body" type="text" name="body" id="body" placeholder="Skriv besked" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as messageService from '../../services/MessageService'

export default {
  name: 'besked-ny',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      message: {
        messages: {
          body: ''
        }
      }
    }
  },
  methods: {
    onSubmit: async function() {
      const request = {
        message: this.message
      }
      await messageService.createMessage(request);
      this.$router.push({ name: 'beskeder' });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';
.container {
  margin-top: $barsHeight;
  padding: 20px;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight} - env(safe-area-inset-bottom) - env(safe-area-inset-top));
  overflow: scroll;
}

.add-message {
  background: $dark-gray;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom) + 80px);

  .message-container {
    padding: 0 20px;
    max-width: 788px;
    margin: 0 auto;
  }

  .form {
    display: flex;
  }

  input[type='text'] {
    padding: 10px;
    border: 2px solid $blue;
    box-sizing: border-box;
    margin: 20px 0;
    width: 100%;
    outline: none;
    border-radius: 0 !important;
  }

  button {
    display: block;
    width: 60px;
    height: 42px;
    border: none;
    background-color: $blue;
    cursor: pointer;
    text-align: center;
    color: white;
    margin: 20px 0;
    border-right: 2px solid $blue;
  }
}
</style>