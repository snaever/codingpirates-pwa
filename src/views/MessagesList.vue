<template>
  <div class="messages">
    <Topbar pageTitle="Flaskepost" addButton="/beskeder/ny"/>
    <div class="container">
      <div v-if="messages && messages.length > 0">
        <div v-for="message in orderedMessages" v-bind:key="message._id"> 
          <router-link :to="{ name: 'besked', params: { id: message._id } }" exact class="message">
            <div class="message">
              <div class="message-header">
                <div class="message-subject">{{ message.messages[message.messages.length-1].author.name }}</div>
                <div class="message-date">{{ message.updatedAt | dateFormat }}</div>
              </div>
              <p class="message-content">{{ message.messages[message.messages.length-1].body }}</p>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="messages && messages.length  === 0">Ingen beskeder fundet.</div>
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as messageService from '../services/MessageService'
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'beskeder',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      messages: null
    }
  },
  beforeRouteEnter(to, from, next) {
    messageService.getAllMessages()
    .then(res => {
      next(vm => {
        vm.messages = res.data.messages;
      })
    })
  },
  updated() {
    this.isMyMessages();
  },
  filters: {
    dateFormat: function(createdAt) {
      moment.locale('da');
      return moment(createdAt).format('DD. MMM. HH:mm');
    }
  },
  methods: {
    isMyMessages: function() {
      if(this.messages.author._id === this.$store.state.userId) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    orderedMessages: function() {
      return _.orderBy(this.messages, 'createdAt', 'desc');
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.container {
  margin-top: $barsHeight;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  overflow: scroll;
}

a.message {
  color: inherit;
  text-decoration: none;
}

.message {
  border-bottom: 1px solid $dark-gray;
  padding: 20px 0;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-subject {
    color: $blue;
    font-size: 13pt;
    font-weight: bold;
  }

  &-date {
    opacity: 0.8;
    font-size: 8pt;
  }

  &-content {
    margin: 10px 0 0;
  }
}

a.message-link {
  color: inherit;
  text-decoration: none;
}
</style>