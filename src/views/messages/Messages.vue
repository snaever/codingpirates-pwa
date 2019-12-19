<template>
  <div class="chat">
    <Topbar pageTitle="Besked" backButton="/beskeder" />
    <div class="container" id="container">

      <div v-for="message in orderedMessages" v-bind:key="message._id">
        <div v-if="message.author">
          <div class="message" :class="message.author._id === $store.state.userId ? 'sender' : 'receiver'">
            <p>{{ message.body }}</p>
            <p class="created">{{ message.createdAt | dateFormat }}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="add-message">
      <div class="message-container">
        <form class="form" v-on:submit.prevent="onSubmit">
          <input v-model="message.messages.newBody" type="text" name="newBody" id="newBody" placeholder="Skriv besked" />
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
import moment from 'moment'
import _ from 'lodash'

export default {
  name: 'besked',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      message: {
        messages: {
          body: '',
          author: '',
          _id: ''
        }
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    messageService.getMessageById(to.params.id)
    .then(response => {
      if (!response) {
        next('/');
      } else {
        next(vm => {
          const message = response.data.message;
          vm.message = message;
        });
      }
    });
  },
  methods: {
    onSubmit: async function() {
      if (this.message.messages.newBody) {
        this.message.messages[0].body = this.message.messages.newBody;
      } else {
        this.message.messages[0].body = this.message.messages[0].body
      }
      
      const request = {
        message: this.message
      }

      await messageService.updateMessage(request);
      this.$router.push({ name: 'beskeder' });
    },
    scrollToEnd: function() {
      document.getElementById('container').scrollTop = document.getElementById('container').scrollHeight;
    }
  },
  updated(){
    this.scrollToEnd();
  },
  filters: {
    dateFormat: function(createdAt) {
      moment.locale('da');
      return moment(createdAt).format('DD. MMM. HH:mm');
    }
  },
  computed: {
    orderedMessages: function() {
      return _.orderBy(this.message.messages, 'createdAt', 'asc');
    }
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
  }

  button {
    display: block;
    width: 60px;
    height: 40px;
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