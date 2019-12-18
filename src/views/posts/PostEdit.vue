<template>
  <div class="edit-post">
    <Topbar pageTitle="Rediger post" :backButton="'/post/' + post._id"/>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input v-model="post.title" type="text" name="title" id="title" placeholder="Titel" />
        <textarea v-model="post.body" name="body" id="body" cols="30" rows="10"></textarea>
        <button type="submit">Opdater opslag</button>
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
  name: 'post-rediger',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
    return {
      post: {
        title: '',
        body: '',
        _id: ''
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    postService.getPostById(to.params.id)
    .then(response => {
      if (!response) {
        next('/');
      } else {
        next(vm => {
          const post = response.data.post;
          vm.post = post;
        });
      }
    });
  },
  methods: {
    onSubmit: async function() {
      const request = {
          post: this.post
      }
      await postService.updatePost(request);
      this.$router.push({ name: 'hjem' });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_all.scss';

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
    color: white;
  }
}
</style>
