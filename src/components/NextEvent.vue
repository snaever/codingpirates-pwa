<template>
    <div class="notice">
        <h3>Næste gang</h3>

        <div v-for="event in events" v-bind:key="event._id">
            {{ event.title }}
        </div>

        <p>Onsdag d. 23 oktober</p>
        <p>17:00 - 18:30</p>
    </div>
</template>

<script>
import * as eventService from '../services/EventService'
import moment from 'moment';
import _ from 'lodash'

export default {
name: 'NextEvent',
data: function() {
    return {
        events: null
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

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
</style>