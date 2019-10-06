import Vue from 'vue';
import Router from 'vue-router';
import Showcase from './views/Showcase.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'showcase',
    component: Showcase
  }, {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue')
  }, {
    path: '/product/:id',
    name: 'product',
    component: () => import('./views/Product.vue')
  }, {
    path: '*',
    name: '404',
    component: () => import('./views/404.vue')
  }],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
