import { App } from 'vue'

import YJIcon from '@/base-ui/icon'

const components = [YJIcon]

export function registerCustomize(app: App): void {
  for (const c of components) {
    app.component(c.name, c)
  }
}
