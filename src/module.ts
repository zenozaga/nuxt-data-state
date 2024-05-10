import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addImports, addImportsDir } from '@nuxt/kit'


// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-data-state',
  },

  setup(resolvedOptions, nuxt) {
      


    /// create resolver
    const { resolve } = createResolver(import.meta.url)


    /// add component
    addComponentsDir({ path: resolve('runtime/components') })
    

    /// add composable
    addImportsDir(resolve('runtime/composables'))


   
  },
})
