import type { App } from 'vue'

import Dialog from './index.vue'

Dialog.install = (app: App) => {
  app.component(Dialog.name as string, Dialog)
}

export default Dialog
