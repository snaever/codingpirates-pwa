<template>
  <div class="calendar">
    <Topbar pageTitle="Kalender" />
    <div class="container">

      <div v-if="events && events.length > 0">

        <div v-for="event in events" v-bind:key="event._id">
          <router-link to="/event" class="calendar-item">
            <div class="calendar-date">{{ event.dateFrom }}</div>
            <div class="calendar-event">
              <div class="event-title">{{ event.title }}</div>
            </div>
          </router-link>
        </div>

      </div>

      <div v-if="events && events.length  === 0">Ingen events fundet.</div>

    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as eventService from '../services/EventService'

export default {
  name: 'kalender',
  data: function() {
    return {
      events: null
    }
  },
  components: {
    Navigation,
    Topbar
  },
    beforeRouteEnter(to, from, next) {
    eventService.getAllEvents()
    .then(res => {
      next(vm => {
        vm.events = res.data.events;
      });
    });
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.container {
  margin-top: 80px;
  overflow: scroll;
}

.calendar-item {
  border-bottom: 1px solid $dark-gray;
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: inherit;
  text-decoration: none;

  .calendar-date {
    font-family: $heading-font;
    font-size: 10pt;
    color: $orange;
    width: 35px;
    text-align: center;
  }

  .calendar-event {
    padding-left: 10px;

    .event-title {
      font-size: 13pt;
      font-weight: bold;
    } 

    .event-description {
      padding: 5px 0 0; 
    }
  }
}
</style>