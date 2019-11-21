<template>
  <div class="topbar">
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: {
    pageTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.topbar {
  background: $light-gray;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: $heading-font;
    font-size: 22pt;
  }
}

</style>
