import { App } from 'vue'
import { registerElement } from './register-element'
import { registerCustomize } from './register-customize'

export function globalRegister(app: App): void {
  registerElement(app)
  registerCustomize(app)
}
