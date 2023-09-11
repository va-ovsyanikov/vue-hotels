import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

const axiosInstanse  = axios.create({
    baseURL: 'http://localhost:3001/'
})
app.use(VueAxios, axiosInstanse).provide("axios", app.config.globalProperties.axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
