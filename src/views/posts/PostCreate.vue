<template>
  <div class="create-post">
    <Topbar pageTitle="Tilføj post" backButton="/mere"/>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input v-model="post.title" type="text" name="title" id="title" placeholder="Titel" />
        <textarea v-model="post.body" name="body" id="body" cols="30" rows="10" placeholder="Besked"></textarea>
        <button type="submit">Gem opslag</button>
      </form>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as postService from '../../services/PostService'

export default {
  name: 'post-ny',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    onSubmit: async function() {
      const request = {
        post: this.post
      }
      await postService.createPost(request);
      this.$router.push({ name: 'hjem' });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

.container {
  margin-top: $barsHeight;
  padding: 20px;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  overflow: scroll;

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
    color: white;
  }
}
</style>
