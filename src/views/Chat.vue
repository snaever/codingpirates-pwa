<template>
    <div class="chat">
        <Topbar pageTitle="Besked" />
            Hej
        <Navigation />
    </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'

export default {
  name: 'chat',
  components: {
    Navigation,
    Topbar
  }
}
</script>