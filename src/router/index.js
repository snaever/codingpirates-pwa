import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Kahytten'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/authentication/Login.vue'),
    meta: {
      title: 'Log ind'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/authentication/Register.vue'),
    meta: {
      title: 'Tilføj bruger'
    }
  },
  {
    path: '/kalender',
    name: 'kalender',
    component: () => import('../views/Calendar.vue'),
    meta: {
      title: 'Kalender'
    }
  },
  {
    path: '/mere',
    name: 'mere',
    component: () => import('../views/More.vue'),
    meta: {
      title: 'Mere'
    }
  },
  {
    path: '/beskeder',
    name: 'beskeder',
    component: () => import('../views/MessagesList.vue'),
    meta: {
      title: 'Flaskepost'
    }
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue'),
    meta: {
      title: 'Chat'
    }
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/posts/Post.vue'),
    meta: {
      title: 'Post'
    }
  },
  {
    path: '/post/new',
    name: 'post-create',
    component: () => import('../views/posts/PostCreate.vue'),
    meta: {
      title: 'Tilføj opslag'
    }
  },
  {
    path: '/post/:id',
    name: 'post-edit',
    component: () => import('../views/posts/PostEdit.vue'),
    meta: {
      title: 'Rediger opslag'
    }
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/Event.vue'),
    meta: {
      title: 'Event'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - ' + 'Coding Pirates'
  next();
});

export default router;
