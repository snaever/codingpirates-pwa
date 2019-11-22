<template>
  <div class="kalender">
    <Topbar pageTitle="Kalender" />
    <div class="container">
      <router-link to="/event" class="calendar-item">
        <div class="calendar-date">21. nov</div>
        <div class="calendar-event">
          <div class="event-title">Klubaften</div>
          <div class="event-description">Der er kage i dag.</div>
        </div>
      </router-link>


      <router-link to="/event" class="calendar-item">
        <div class="calendar-date">21. nov</div>
        <div class="calendar-event">
          <div class="event-title">Klubaften</div>
        </div>
      </router-link>
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