import { createApp } from 'vue'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './styles/index.scss'

import Button from './components/Button/index.vue'
import Icon from './components/Icon/index.vue'
import Dialog from './components/Dialog/index.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)
const app = createApp(App)
// app.use(ElementPlus)
app.use(router)

app.component('CButton', Button)
app.component('CIcon', Icon)
app.component('CDialog', Dialog)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
