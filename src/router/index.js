import Vue from 'vue';
import Router from 'vue-router';
import HomeContainer from '@/containers/HomeContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeContainer,
    },
  ],
});
