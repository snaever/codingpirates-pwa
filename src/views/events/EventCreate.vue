<template>
  <div class="create-event">
    <Topbar pageTitle="Tilføj event" backButton="/mere"/>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input v-model="event.title" type="text" name="title" id="title" placeholder="Titel" />
        <textarea v-model="event.body" name="body" id="body" cols="30" rows="10" placeholder="Beskrivelse"></textarea>
        <input v-model="event.dateFrom" type="text" name="dateFrom" id="dateFrom" placeholder="Dato fra" />
        <input v-model="event.dateTo" type="text" name="dateTo" id="dateTo" placeholder="Dato til (valgfri)" />

<datetime type="datetime" v-model="datetimeTheming" class="theme-orange"></datetime>

        
        <div class="event-type">
          <p>Almindelig klubaften?</p>
          <label class="switch">
            <input v-model="event.regularSession" type="checkbox" name="regularSession" id="regularSession">
            <span class="slider round"></span>
          </label>
        </div>
        <button type="submit">Tilføj event</button>
      </form>
    </div>
    <Navigation />
  </div>
</template>

<script>
import * as eventService from '../../services/EventService'
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import 'vue-datetime/dist/vue-datetime.css'

export default {
    name: 'event-ny',
    components: {
      Navigation,
      Topbar
    },
    data: function() {
        return {
            event: {
                title: '',
                body: '',
                dateTo: '',
                dateFrom: '',
                regularSession: false
            }
        }
    },
    methods: {
        onSubmit: async function() {
            const request = {
                event: this.event
            }
            await eventService.createEvent(request);
            this.$router.push({ name: 'kalender' });
        }
    }
}

import { Settings } from 'luxon'
Settings.defaultLocale = 'da'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

.theme-orange .vdatetime-popup__header,
.theme-orange .vdatetime-calendar__month__day--selected > span > span,
.theme-orange .vdatetime-calendar__month__day--selected:hover > span > span {
  background: #FF9800;
}

.theme-orange .vdatetime-year-picker__item--selected,
.theme-orange .vdatetime-time-picker__item--selected,
.theme-orange .vdatetime-popup__actions__button {
  color: #ff9800;
}


.container {
  margin-top: 120px;

  input {
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
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
  }

  button {
    display: block;
    width: 100%;
    height: 38px;
    border: none;
    background-color: $blue;
    cursor: pointer;
    text-align: center;
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
