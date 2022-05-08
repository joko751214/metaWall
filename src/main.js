import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './sass/index.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';

library.add(fab, fas, far);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount('#app');
