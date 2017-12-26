import Vue from 'vue';
import Router from 'vue-router';
import Page from '@/components/Page';

Vue.use(Router);

const routes = [
  { path: '/', component: Page },
];

export default new Router({
  routes,
});
