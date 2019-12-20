<template>
  <div class="calendar">
    <Topbar pageTitle="Kalender" />
    <div class="container">
      <div v-if="events && events.length > 0">
        <div v-for="event in orderedEvents" v-bind:key="event._id">
          <router-link :to="{ name: 'event', params: { id: event._id } }" exact class="calendar-item">
            <div class="calendar-date">{{ event.dateTime | dateFormat }}</div>
            <div class="calendar-event">
              <div class="event-title">{{ event.title }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as eventService from '../services/EventService'
import moment from 'moment';
import _ from 'lodash'

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
  },
  filters: {
    dateFormat: function (dateTime) {
      moment.locale('da');
      return moment(dateTime).format('DD. MMM');
    }
  },
  computed: {
    futureEvents: function () {
      return this.events.filter(function (event) {
        return moment(event.dateTime).isSameOrAfter(moment().format('YYYY-MM-DD'));
      })
    },
    orderedEvents: function () {
      return _.orderBy(this.futureEvents, 'dateTime', 'asc');
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