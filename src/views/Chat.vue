<template>
    <div class="chat">
        <Topbar pageTitle="Besked" />
            <div class="container">
                <div class="messages">

                    <div class="message sender">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat eros, eleifend non quam vel, efficitur molestie diam. Suspendisse eget mauris nec enim pulvinar aliquam et eu eros. Proin dignissim arcu quis venenatis malesuada. Duis vestibulum, risus ut placerat malesuada, turpis turpis feugiat dui, et consequat ex sapien a lectus.</p>
                    </div>

                    <div class="message receiver">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat eros, eleifend non quam vel, efficitur molestie diam. Suspendisse eget mauris nec enim pulvinar aliquam et eu eros. Proin dignissim arcu quis venenatis malesuada. Duis vestibulum, risus ut placerat malesuada, turpis turpis feugiat dui, et consequat ex sapien a lectus.</p>
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

export default {
  name: 'chat',
  components: {
    Navigation,
    Topbar
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

.messages {
    margin-top: $barsHeight + 20px;
    position: relative;
    height: calc(100vh - #{$barsHeight} - #{$barsHeight});
}

.message {
    padding: 15px;
    margin-top: 20px;

    p {
        margin: 0;
        line-height: 1.4;
    }

    &.sender {
        background-color: $dark-gray;
        margin-left: 15%;
    }

    &.receiver {
        background-color: $light-gray;
        margin-right: 15%;
    }
}
</style>