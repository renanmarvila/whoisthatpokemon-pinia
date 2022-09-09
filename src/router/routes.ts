import { RouteRecordRaw } from 'vue-router';

import PokemonPage from '../views/PokemonPage.vue';
import PageNotFound from '../views/PageNotFound.vue';
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/pokegame',
    name: 'Home',
    component: PokemonPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
  },
];

export default routes;
