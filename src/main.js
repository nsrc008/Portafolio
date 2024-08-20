import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
import '@/assets/custom_style.css'
import 'material-icons/iconfont/material-icons.css'
import mitt from 'mitt';

const app = createApp(App);
app.use(store);
app.use(router);

const eventBus = mitt();
app.config.globalProperties.$eventBus = eventBus;

app.mount('#app');