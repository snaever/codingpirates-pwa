<template>
  <div class="home">
    <div class="home-container">
      <header class="info">
        <div class="container">
          <div class="attendee">
            <div class="image" :style="{ 'background-image': 'url(https://eu.ui-avatars.com/api/?background=00AEEF&color=fff&size=194&bold=true&name=' + encodeName(this.$store.state.nameOfChild) + ')' }"></div>
            <div class="details">
              <h2>{{ this.$store.state.nameOfChild ? this.$store.state.nameOfChild : 'Ukendt bruger' }}</h2>
              <p>Coding Pirates Umbraco</p>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <NextEvent />
        <div v-if="posts && posts.length > 0">
          <div v-for="post in orderedPosts" v-bind:key="post._id">
            <router-link :to="{ name: 'post', params: { id: post._id } }" exact class="post">
              <div class="post">
                <div class="image" :style="{ 'background-image': 'url(https://eu.ui-avatars.com/api/?background=00AEEF&color=fff&size=108&bold=true&name=' + encodeName(post.author.name) + ')' }"></div>
                <div class="box">
                  <p class="author">{{ post.author.name }}</p>
                  <p class="message">{{ post.body }}</p>
                  <p class="created">{{ post.createdAt | dateFormat }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div v-if="posts && posts.length  === 0">Ingen opslag fundet.</div>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import NextEvent from '@/components/NextEvent.vue'
import Navigation from '@/components/Navigation.vue'
import * as postService from '../services/PostService'
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'hjem',
  data: function() {
    return {
      posts: null
    }
  },
  components: {
    NextEvent,
    Navigation
  },
  beforeRouteEnter(to, from, next) {
    postService.getAllPosts()
    .then(res => {
      next(vm => {
        vm.posts = res.data.posts;
      })
    })
  },
  filters: {
    dateFormat: function(createdAt) {
      moment.locale('da');
      return moment(createdAt).format('DD. MMM. HH:mm');
    }
  },
  computed: {
    orderedPosts: function() {
      return _.orderBy(this.posts, 'createdAt', 'desc');
    }
  },
  methods: {
    encodeName(name) {
      return window.encodeURIComponent(name);
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
      background-size: cover;
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
    background-size: cover;
    border-radius: 100%;
  }

  .box {
    background-color: $light-gray;
    width: 93%;
    margin-left: 7%;
    margin-top: 35px;
    padding: 15px;
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
      margin-bottom: 0;
    }

    .created {
      color: $blue;
      margin-bottom: 0;
      font-size: 8pt;
    }
  }
}
</style>