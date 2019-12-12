<template>
  <div class="post">
    <Topbar pageTitle="Post" backButton="/" />
      <div class="container">
        <div class="author-container">
          <div class="image"></div>
            <p class="author">{{ post.author.name }}</p>
        </div>
        <p class="message">{{ post.body }}</p>
        <div v-if="post.author._id === $store.state.userId">
          <div v-if="post._id" class="controllers">
            <router-link :to="{ name: 'post-rediger', params: { id: post._id } }" exact><img src="../../assets/icons/edit.svg" alt="edit" class="icon"></router-link>
            <a v-on:click.prevent="deletePost(post._id)" href="#"><img src="../../assets/icons/delete.svg" alt="delete" class="icon"></a>
          </div>
        </div>
      </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Topbar from '@/components/Topbar.vue'
import * as postService from '../../services/PostService'

export default {
  name: 'post',
  components: {
    Navigation,
    Topbar
  },
  data: function() {
      return {
          post: {
              title: '',
              body: '',
              author: '',
              id: ''
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
    deletePost: async function(postId) {
      await postService.deletePost(postId);
      this.$router.push({ name: 'hjem' })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.container {
  margin-top: 80px;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
  padding-top: 20px;
  overflow: scroll;
}

.author-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .image {
    width: 53px;
    height: 53px;
    background-color: $blue;
    border-radius: 100%;
  }

  .author {
    margin: 0 0 0 25px;
    color: $blue;
    font-size: 13pt;
    font-weight: bold;
  }
}

.message {
  line-height: 1.4;
}

.controllers {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .icon {
    height: 35px;
    margin: 20px 0 0 20px;
  }
}
</style>