import Vue from 'vue';
import App from './App.vue';
// Import our custom CSS
import './scss/styles.scss'
import * as Popper from "@popperjs/core"
import "bootstrap"

new Vue({
  render: (h) => h(App),
}).$mount('#app');
