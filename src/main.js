import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Quasar } from 'quasar'

import quasarUserOptions from './quasar-user-options'
import Controls from "./controls/controls"
import "@/assets/app.css"
const ACAPP = createApp(App)

Controls(ACAPP)
ACAPP.use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
