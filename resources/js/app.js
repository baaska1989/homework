require('./bootstrap');

import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.devtools = true;
Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    el: "#app",
    render: (h) => h(App),
});