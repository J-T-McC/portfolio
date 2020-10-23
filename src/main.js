import { createApp } from 'vue'
import * as VueScrollTo from 'vue-scrollto';
import Toast from "vue-toastification";
import App from './App.vue'

import './assets/styles/index.css';
import "vue-toastification/dist/index.css";

const Vue = createApp(App);

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -50,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

Vue.use(Toast, {
    maxToasts: 1
});

Vue.mount('#app')

