import { createApp } from 'vue';
import Vue from 'vue';
import App from './App.vue';
/* import style from './assets/StyleComponents.scss' */

const app = createApp({})
/* new Vue({
    render: h => h(App) 
}).$mount("#app"); */

createApp(App).mount('#app')
