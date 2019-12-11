import Vue from 'vue';
import VueRouter from 'vue-router';
import * as auth from '../services/AuthService';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Kahytten'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/authentication/Login.vue'),
    meta: {
      title: 'Log ind'
    },
    beforeEnter: (to, from, next) => {
      if(!auth.isLoggedIn()) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/authentication/Register.vue'),
    meta: {
      title: 'Tilføj bruger'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/kalender',
    name: 'kalender',
    component: () => import('../views/Calendar.vue'),
    meta: {
      title: 'Kalender'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/mere',
    name: 'mere',
    component: () => import('../views/More.vue'),
    meta: {
      title: 'Mere'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/beskeder',
    name: 'beskeder',
    component: () => import('../views/MessagesList.vue'),
    meta: {
      title: 'Flaskepost'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue'),
    meta: {
      title: 'Chat'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/posts/Post.vue'),
    meta: {
      title: 'Post'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/post/new',
    name: 'post-create',
    component: () => import('../views/posts/PostCreate.vue'),
    meta: {
      title: 'Tilføj opslag'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/post/:id',
    name: 'post-edit',
    component: () => import('../views/posts/PostEdit.vue'),
    meta: {
      title: 'Rediger opslag'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/Event.vue'),
    meta: {
      title: 'Event'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/permissions',
    name: 'tilladelser',
    component: () => import('../views/Permissions.vue'),
    meta: {
      title: 'Tilladelser'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
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
