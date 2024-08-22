import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addImportsDir,
} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-data-state',
  },

  setup(_, __) {
    /// create resolver
    const { resolve } = createResolver(import.meta.url)

    /// add component
    // addComponentsDir({ path: resolve('runtime/components') })
    addComponent({
      name: 'DataStateProvider',
      filePath: resolve('runtime/components/DataStateProvider.vue'),
    })

    // /// add composable
    addImportsDir(resolve('runtime/composables'))

    /// add composable
    addImportsDir(resolve('runtime/data-state'))
  },
})
