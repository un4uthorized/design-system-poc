import { createApp } from 'vue'
import App from './App.vue'
import { ComponentLibrary } from './plugin'
import 'nes-design-system-lit/dist/src/nes-design-system-lit'

createApp(App).use(ComponentLibrary).mount('#app')
