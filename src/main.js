// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import materialIcons from 'material-design-icons/iconfont/material-icons.css';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(materialIcons);

Vue.directive('tooltip', (el, binding) => {
  el.innerHTML = `
     ${el.innerHTML}
      <div class="tooltip">
        <div class="tooltip__content">
          ${binding.value}
        </div>
      </div>`;
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
