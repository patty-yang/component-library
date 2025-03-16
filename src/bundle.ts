// 打包的入口文件
import type { App } from 'vue'

import './styles/index.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import Button from './components/Button/index.vue'
import Icon from './components/Icon/index.vue'
import Dialog from './components/Dialog/index.vue'
import Collapse from './components/Collapse/index.vue'
import CollapseItem from './components/Collapse/item.vue'
import Tooltip from './components/Tooltip/index.vue'

const components = [Button, Icon, Dialog, Collapse, CollapseItem, Tooltip]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}

export default {
  install
}

export { install, Button, Icon, Dialog, Collapse, CollapseItem, Tooltip }
