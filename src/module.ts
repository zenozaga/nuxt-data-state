import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addImports,
  addComponentsDir,
} from '@nuxt/kit'

// export all types from types
export type * from './runtime/types'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-data-state',
  },

  setup(_, __) {
    /// create resolver
    const { resolve } = createResolver(import.meta.url)

    // addComponentsDir({ path: resolve('runtime/components') })
    addComponentsDir({
      path: resolve('runtime/components'),
    })

    // add imports types
    addImports({
      name: 'DataStateType',
      from: resolve('./runtime/types'),
      type: true,
    })

    // data state
    addImports({
      name: 'DataState',
      from: resolve('./runtime/data-state'),
      typeFrom: resolve('./runtime/types'),
    })

    /// add composable
    addImportsDir(resolve('runtime/composables'))

    // // add types imports
    // addImports({
    //   name: 'DataStateType',
    //   from: resolve('./types.ts'),
    //   type: true,
    // })
  },
})
