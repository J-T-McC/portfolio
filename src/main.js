import { createApp } from 'vue'
var VueScrollTo = require('vue-scrollto');
import App from './App.vue'

import './assets/styles/index.css';

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

Vue.mount('#app')

