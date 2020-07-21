import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Top from '../views/Top.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Top',
    component: Top,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
