<template>
  <div class="topbar">
    <div class="container">
      <div class="inner">
        <div v-if="backButton" class="back">
          <router-link :to="backButton">
            <img src="../assets/icons/angle-left.svg" alt="Tilbage" />
          </router-link>
        </div>
        <div v-else class="empty"></div>
        <h1>{{ pageTitle }}</h1>
        <div v-if="addButton" class="back">
          <router-link :to="addButton">
            <img src="../assets/icons/plus.svg" alt="Tilbage" />
          </router-link>
        </div>
        <div v-else class="empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: {
    pageTitle: String,
    backButton: String,
    addButton: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.topbar {
  background: $light-gray;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;

  h1 {
    font-family: $heading-font;
    font-size: 19pt;
  }

  img {
    height: 35px;
    width: 35px;
  }

  .inner {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.empty {
  width: 35px;
  height: 35px;
}

</style>
