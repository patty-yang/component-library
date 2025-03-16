import type { InjectionKey, Ref } from 'vue'

export interface CollapseContext {
  activeNames: Ref<string[]>
  handleItemClick: (name: string) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey')
