import type { App } from 'vue'

import Collapse from './index.vue'
import CollapseItem from './item.vue'

const components = [Collapse, CollapseItem]

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name as string, component)
    })
  }
}
