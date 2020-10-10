import Vue from 'vue';
import { fireBaseConfig } from '../private-config';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

// firebase
// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp(fireBaseConfig);
firebase.analytics();

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.filter('currency', (value) => {
    return `$${value.toLocaleString()}`;
});

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
