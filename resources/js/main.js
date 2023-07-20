import { createApp } from 'vue'
import App from './App.vue'

// main styles css
import '@css/styles.css'

import router from './router'
import store from './store'

/* Set up using Vue 3 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fas, fab, far)

// Create vue app
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)
// Mount vue app
app.mount('#app')

// Create login status
// app.config.globalProperties.isAuthenticated = true;

router.beforeEach((to, from, next) => {
  const body = document.body
  const currentClass = from.meta.class || ''
  const nextClass = to.meta.class || ''

  if (currentClass) {
    currentClass.split(' ').forEach(cls => {
      body.classList.remove(cls)
    })
  }

  if (nextClass) {
    nextClass.split(' ').forEach(cls => {
      body.classList.add(cls)
    })
  }

  next()
})
