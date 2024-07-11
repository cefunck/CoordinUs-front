import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoWarning } from 'oh-vue-icons/icons'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

addIcons(IoWarning)

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('v-icon', OhVueIcon)
app.mount('#app')
