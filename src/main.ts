import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BaseDialog from './ui/BaseDialog.vue'
import BaseCard from './ui/BaseCard.vue'
import BaseButton from './ui/BaseButton.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRotateLeft, faArrowLeft, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faRotateLeft)
library.add(faArrowLeft)
library.add(faTriangleExclamation)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BaseDialog', BaseDialog)
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
