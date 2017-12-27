import Vue from 'vue';
import Router from 'vue-router';
import Metronome from '@/components/Metronome';

Vue.use(Router);

const routes = [
  { path: '/', component: Metronome },
];

export default new Router({
  routes,
});
