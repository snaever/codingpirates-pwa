import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/kalender',
    name: 'kalender',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/mere',
    name: 'mere',
    component: () => import('../views/More.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
