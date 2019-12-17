<template>
    <div class="messages">
        <Topbar pageTitle="Flaskepost" addMessage="/beskeder/ny"/>
            <div class="container">
                <router-link to="/beskeder/2" class="message-link">
                    <div class="message">
                        <div class="message-header">
                            <div class="message-subject">Sygdom</div>
                            <div class="message-date">23. okt</div>
                        </div>
                        <div class="message-content">Der er kage i dag.</div>
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
  name: 'beskeder',
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
    height: calc(100vh - #{$barsHeight} - #{$barsHeight});
    overflow: scroll;
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
        font-size: 0.8em;
    }

    &-content {
        margin-top: 10px;
    }
}

a.message-link {
    color: inherit;
    text-decoration: none;
}
</style>