import type { App } from 'vue'

import Tooltip from './index.vue'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name as string, Tooltip)
}

export default Tooltip
