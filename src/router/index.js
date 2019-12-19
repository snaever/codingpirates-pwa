import Vue from 'vue';
import VueRouter from 'vue-router';
import * as auth from '../services/AuthService';

Vue.use(VueRouter);

const routes = [
  {
    path: '/next-event',
    name: 'next-event',
    component: () => import('../components/NextEvent.vue'),
    meta: {
      title: 'Next Event'
    }
  },
  {
    path: '/',
    name: 'hjem',
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
    path: '/registrer',
    name: 'registrer',
    component: () => import('../views/authentication/Register.vue'),
    meta: {
      title: 'Tilføj bruger'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn() && auth.isAdmin()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/brugere',
    name: 'brugerliste',
    component: () => import('../views/UsersList.vue'),
    meta: {
      title: 'Aktive brugere'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn() && auth.isAdmin()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/bruger/rediger/:id',
    name: 'bruger-rediger',
    component: () => import('../views/authentication/UserEdit.vue'),
    meta: {
      title: 'Rediger bruger'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn() && auth.isAdmin()) {
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
    component: () => import('../views/messages/MessagesList.vue'),
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
  },{
    path: '/beskeder/ny',
    name: 'besked-ny',
    component: () => import('../views/messages/MessageCreate.vue'),
    meta: {
      title: 'Ny besked'
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
    path: '/beskeder/:id',
    name: 'besked',
    component: () => import('../views/messages/Messages.vue'),
    meta: {
      title: 'Besked'
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
    path: '/post/ny',
    name: 'post-ny',
    component: () => import('../views/posts/PostCreate.vue'),
    meta: {
      title: 'Tilføj post'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn() && auth.isAdmin()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/post/rediger/:id',
    name: 'post-rediger',
    component: () => import('../views/posts/PostEdit.vue'),
    meta: {
      title: 'Rediger post'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn() && auth.isAdmin()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/post/:id',
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
    path: '/event/ny',
    name: 'event-ny',
    component: () => import('../views/events/EventCreate.vue'),
    meta: {
      title: 'Tilføj event'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn() && auth.isAdmin()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/event/rediger/:id',
    name: 'event-rediger',
    component: () => import('../views/events/EventEdit.vue'),
    meta: {
      title: 'Rediger event'
    },
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn() && auth.isAdmin()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import('../views/events/Event.vue'),
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
    path: '/indstillinger',
    name: 'indstillinger',
    component: () => import('../views/Settings.vue'),
    meta: {
      title: 'Kontoindstillinger'
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
    path: '/tilladelser',
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
