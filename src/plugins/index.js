/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */
import { createPinia } from 'pinia'

// Plugins
import vuetify from './vuetify'
import router from '@/router'
const pinia = createPinia()

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
