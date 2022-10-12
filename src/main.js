import { createApp } from 'vue'
import App from './App.vue'

//BootstrapVue3 is experamental and on production ready:
//https://cdmoro.github.io/bootstrap-vue-3/getting-started/
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
