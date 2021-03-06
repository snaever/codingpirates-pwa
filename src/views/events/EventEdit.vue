<template>
  <div class="edit-event">
    <Topbar pageTitle="Rediger event" :backButton="'/event/' + event._id"/>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input v-model="event.title" type="text" name="title" id="title" placeholder="Titel" />
        <textarea v-model="event.body" name="body" id="body" cols="30" rows="10"></textarea>
        <datetime
          type="datetime"
          v-model="event.dateTime"
          name="dateTime"
          id="dateTime"
          class="datetime-picker"
          value-zone="Europe/Copenhagen"
          zone="Europe/Copenhagen"
          :format="{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' }"
          :phrases="{ok: 'Videre', cancel: 'Annuller'}"
          :minute-step="15"
          :min-datetime="dateNow"
          auto
          placeholder="Dato og tid">
        </datetime>
        <div class="event-type">
          <p>Almindelig klubaften?</p>
          <label class="switch">
            <input v-model="event.regularSession" type="checkbox" name="regularSession" id="regularSession">
            <span class="slider round"></span>
          </label>
        </div>
        <button type="submit">Opdater event</button>
      </form>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as eventService from '../../services/EventService'
import 'vue-datetime/dist/vue-datetime.css'
import moment from 'moment'

export default {
  name: 'event-rediger',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      event: {
        title: '',
        body: '',
        _id: '',
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
  computed: {
    dateNow: function() {
      return moment().startOf('day').toISOString();
    }
  },
  methods: {
    onSubmit: async function() {
      const request = {
          event: this.event
      }
      await eventService.updateEvent(request);
      this.$router.push({ name: 'kalender' });
    }
  }
}

import { Settings } from 'luxon'
Settings.defaultLocale = 'da'
</script>

<style lang="scss">
@import '@/assets/scss/_all.scss';

.datetime-picker .vdatetime-popup__header,
.datetime-picker .vdatetime-calendar__month__day--selected > span > span,
.datetime-picker .vdatetime-calendar__month__day--selected:hover > span > span {
  background: $blue;
}

.datetime-picker .vdatetime-year-picker__item--selected,
.datetime-picker .vdatetime-time-picker__item--selected,
.datetime-picker .vdatetime-popup__actions__button {
  color: $blue;
}

.vdatetime.datetime-picker input.vdatetime-input {
  width: 100%;
  height: 38px;
  margin-bottom: 20px;
  padding: 0 5px;
  border: 2px solid $blue!important;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

.container {
  margin-top: $barsHeight;
  padding: 20px;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight} - env(safe-area-inset-bottom) - env(safe-area-inset-top));
  overflow: scroll;

  input {
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
    outline: none;
  }

  input[type='text'] {
    padding: 0 5px;
    border: 2px solid $blue;
    box-sizing: border-box;
  }

  textarea {
    padding: 5px;
    border: 2px solid $blue;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 20px;
    outline: none;
  }

  button {
    display: block;
    width: 100%;
    height: 38px;
    border: none;
    background-color: $blue;
    cursor: pointer;
    text-align: center;
    color: white;
  }
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $dark-gray;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: $blue;
  }

  input:focus + .slider {
    box-shadow: 0px;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}

.event-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
