<template>
  <div class="post">
    <Topbar :pageTitle="post.title" backButton="/" />
    <div class="container">
      <div class="author-container">
        <div class="image" :style="{ 'background-image': 'url(https://eu.ui-avatars.com/api/?background=00AEEF&color=fff&size=106&bold=true&name=' + encodeName(post.author.name) + ')' }"></div>
        <div class="info">
          <p class="author">{{ post.author.name }}</p>
          <p class="created">{{ post.createdAt | dateFormat }}</p>
        </div>
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
import moment from 'moment'

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
  filters: {
    dateFormat: function (createdAt) {
      moment.locale('da');
      return moment(createdAt).format('DD. MMM. HH:mm');
    }
  },
  methods: {
    deletePost: async function(postId) {
      await postService.deletePost(postId);
      this.$router.push({ name: 'hjem' })
    },
    encodeName(name) {
      return window.encodeURIComponent(name);
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.container {
  margin-top: $barsHeight;
  padding: 20px;
  position: relative;
  height: calc(100vh - #{$barsHeight} - #{$barsHeight});
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
    background-size: cover;
    border-radius: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    color: $blue;

    .author {
      margin: 0 0 5px 25px;
      font-size: 13pt;
      font-weight: bold;
    }

    .created {
      margin: 0 0 0 25px;
      font-size: 8pt;
    }
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