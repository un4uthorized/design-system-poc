import { createApp } from 'vue'
import App from './App.vue'
import { ComponentLibrary } from './plugin'

createApp(App).use(ComponentLibrary).mount('#app')
