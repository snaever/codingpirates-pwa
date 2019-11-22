import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Kahytten'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Log ind'
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
    component: () => import('../views/Post.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - ' + 'Coding Pirates'
  next()
})

export default router;
