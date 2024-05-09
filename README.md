<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt DataState
- Package name: nuxt-data-state
- Description: My new Nuxt module
-->

# nuxt-data-state

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Simple state class helper

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/zenozaga/nuxt-data-state?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->
 

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-data-state

or

yarn add nuxt-data-state
```

```ts
// nuxt.config.ts
// Nuxt 3

import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // This will also enable auto-imports of magic-regexp helpers
  modules: ['nuxt-data-state'],
})
```

## How to use


```html
<template>
  <div>
    <DataStateProvider :state="user">
      <template #loading>
        <div>Loading...</div>
      </template>
      <template #error="{ error }">
        <div>Error: {{ error }}</div>
      </template>
      <template #success="{ data }">
        <div>User: {{ data.name }}</div>
      </template>
    </DataStateProvider>
  </div>
</template>
 
<script setup lang="ts">

type User = {
    name:string
}


const user = ref<DataState<User>>(DataState.loading());

onMounted(() => {

    setTimeout(function(){
        user.value = DataState.success({
            name: "User "+ Date.now()
        })
    },2000)

})
    
</script>
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-data-state/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-data-state

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-data-state.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-data-state

[license-src]: https://img.shields.io/npm/l/nuxt-data-state.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-data-state

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
