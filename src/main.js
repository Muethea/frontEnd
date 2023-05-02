import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus)

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)
