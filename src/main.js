
import { createApp } from 'vue'
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import store from './store'
import App from './App.vue'



createApp(App)
.use(BootstrapVue3)
.use( store )
.mount('#app')

