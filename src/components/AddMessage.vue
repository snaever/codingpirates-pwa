<template>
  <div class="add-message">
    <div class="container">
      <form class="form" v-on:submit.prevent="onSubmit">
        <input v-model="message.body" type="text" name="body" id="body" placeholder="Skriv besked" />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddMessage',
    data: function() {
    return {
      message: {
        body: ''
      }
    }
  }
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

  .form {
    display: flex;
  }

  input[type='text'] {
    padding: 10px;
    border: 2px solid $blue;
    box-sizing: border-box;
    margin: 20px 0;
    width: 100%;
    outline: none;
  }

  button {
    display: block;
    width: 60px;
    height: 40px;
    border: none;
    background-color: $blue;
    cursor: pointer;
    text-align: center;
    color: white;
    margin: 20px 0;
    border-right: 2px solid $blue;
  }
}
</style>