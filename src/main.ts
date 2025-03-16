import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import './styles/index.scss'

import Button from './components/Button/index.vue'
import Icon from './components/Icon/index.vue'
import Dialog from './components/Dialog/index.vue'
import Collapse from './components/Collapse/index.vue'
import CollapseItem from './components/Collapse/item.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const app = createApp(App)
app.use(router)

app.component('CButton', Button)
app.component('CIcon', Icon)
app.component('CDialog', Dialog)
app.component('CCollapse', Collapse)
app.component('CCollapseItem', CollapseItem)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
