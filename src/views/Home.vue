<template>
  <div class="home">
    <div class="home-container">
      <header class="info">
        <div class="container">
          <div class="attendee">
            <div class="image"></div>
            <div class="details">
              <h2>{{ this.$store.state.email ? this.$store.state.email : 'Ukendt bruger' }}</h2>
              <p>Coding Pirates Umbraco</p>
            </div>
          </div>
        </div>
      </header>

      <div class="container">
        <div class="notice">
          <h3>Næste gang</h3>
          <p>Onsdag d. 23 oktober</p>
          <p>17:00 - 18:30</p>
        </div>

        
        <div v-if="posts && posts.length > 0">

          <div v-for="post in posts" v-bind:key="post._id">
            <router-link to="/post" class="post">
              <div class="post">
                <div class="image"></div>
                <div class="box">
                  <p class="author">{{ post.author.firstname }}</p>
                  <p class="message">{{ post.body }}</p>
                </div>
              </div>
            </router-link>

            <div v-if="post.author._id === $store.state.userId">
              <router-link :to="{ name: 'post-edit', params: { id: post._id } }" exact>Rediger</router-link>
              <a v-on:click.prevent="currentPostId = post._id" v-on:click="deletePost" href="#">Slet</a>
            </div>

          </div>

        </div>

        <div v-if="posts && posts.length  === 0">Ingen opslag fundet.</div>

      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import * as postService from '../services/PostService'

export default {
  name: 'home',
  data: function() {
    return {
      posts: null,
      currentPostId: null
    }
  },
  components: {
    Navigation
  },
  beforeCreate: function() {
    fetch(this.$store.state.apiUrl + '/user', {
      method: 'GET'
    })
    // .then(res => res.json())
    .then(res => console.log(res));
  },
  beforeRouteEnter(to, from, next) {
    postService.getAllPosts()
    .then(res => {
      next(vm => {
        vm.posts = res.data.posts;
      });
    });
  },
  methods: {
    deletePost: async function() {
      await postService.deletePost(this.currentPostId);
      const index = this.posts.findIndex(post => post._id === this.currentPostId);
      this.posts.splice(index, 1);
      this.currentPostId = null;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_all.scss';

.home-container {
  height: 100%;
  margin-bottom: 120px;
}

.info {
  height: 160px;
  width: 100%;
  background-image: url('../assets/img/pixel_blue.svg');
  background-repeat: repeat;
  background-position: center bottom;

  .attendee {
    display: flex;
    width: 100%;
    height: 160px;
    justify-content: space-around;
    align-items: center;

    .image {
      width: 97px;
      height: 97px;
      background-color: #00aeee;
      border-radius: 100%;
    }

    .details {
      max-width: 220px;

      h2 {
        font-family: $heading-font;
        font-size: 16pt;
        margin: 0;
      }

      p {
        font-family: $body-font;
        margin: 7px 0 0 0;
      }
    }
  }
}

.notice {
  display: block;
  background-color: $dark-gray;
  padding: 15px;
  margin: 20px 0;

  h3 {
    font-family: $heading-font;
    font-size: 11pt;
    margin: 0 0 10px 0;
  }

  p {
    font-family: $body-font;
    font-size: 13pt;
    margin: 5px 0;
  }
}

a.post {
  color: inherit;
  text-decoration: none;

    &:last-child {
      margin-bottom: 100px;
  }
}

.post {
  position: relative;

  .image {
    position: absolute;
    top: -15px;
    left: 0;
    width: 53px;
    height: 53px;
    background-color: $blue;
    border-radius: 100%;
  }

  .box {
    background-color: $light-gray;
    width: 93%;
    margin-left: 7%;
    margin-top: 35px;
    padding: 10px;
    box-sizing: border-box;

    @media screen and (min-width: 500px) {
      width: 95%;
      margin-left: 5%;
    }

    @media screen and (min-width: 720px) {
      width: 96%;
      margin-left: 4%;
    }

    .author {
      margin: 0 0 0 25px;
      color: $blue;
      font-size: 13pt;
      font-weight: bold;
    }

    .message {
      line-height: 1.4;
    }
  }
}
</style>