<template>
  <div class="add-message">
    <div class="container">
      <input type="text" name="message" id="message" placeholder="Skriv besked" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddMessage'
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.add-message {
  background: $dark-gray;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom) + 80px);

  input[type='text'] {
    padding: 10px;
    border: 2px solid $blue;
    box-sizing: border-box;
    border-radius: 100px;
    margin: 20px;
    width: 100%;
    outline: none;
  }
}
</style>