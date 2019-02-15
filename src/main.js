import Vue from 'vue';
import App from './App.vue';
import VueColumnsResizable from './plugins/vue-columns-resizable';

Vue.use(VueColumnsResizable);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
