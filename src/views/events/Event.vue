<template>
  <div class="event">
    <Topbar pageTitle="Event" backButton="/kalender"/>
    <div class="container">
      <h1 class="title">{{ event.title }}</h1>
      <p class="date">{{ event.dateTime | dateFormat }}</p>
      <p class="message">{{ event.body }} </p>
      <div v-if="event.author === $store.state.userId">
        <div v-if="event._id" class="controllers">
          <router-link :to="{ name: 'event-rediger', params: { id: event._id } }" exact><img src="../../assets/icons/edit.svg" alt="edit" class="icon"></router-link>
          <a v-on:click.prevent="deleteEvent(event._id)" href="#"><img src="../../assets/icons/delete.svg" alt="delete" class="icon"></a>
        </div>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as eventService from '../../services/EventService'
import moment from 'moment'

export default {
  name: 'event',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      event: {
        title: '',
        body: '',
        author: '',
        dateTime: '',
        _id: ''
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    eventService.getEventById(to.params.id)
    .then(response => {
        if (!response) {
          next('/');
        } else {
          next(vm => {
            const event = response.data.event;
            vm.event = event;
          });
        }
    });
  },
  filters: {
    dateFormat: function (dateTime) {
      moment.locale('da');
      return moment(dateTime).format('LLL');
    }
  },
  methods: {
    deleteEvent: async function(eventId) {
      await eventService.deleteEvent(eventId);
      this.$router.push({ name: 'kalender' })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.container {
  margin-top: $barsHeight;
  padding: 20px;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  overflow: scroll;
}

h1.title {
  margin: 0;
  font-size: 18pt;
  font-weight: bold;
}

.date {
  color: $blue;
  font-size: 13pt;
  font-weight: bold;
  margin: 10px 0 25px 0;
}

.message {
  line-height: 1.4;
}

.controllers {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .icon {
    height: 35px;
    margin: 20px 0 0 20px;
  }
}
</style>