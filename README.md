# nuxt-data-state

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.
 

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

## Example

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
