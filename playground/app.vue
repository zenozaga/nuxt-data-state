<template>
  <div class="w-screen min-h-screen flex justify-center items-start ec bg-gray-200 pt-10 md:pt-20 lg:pt-36">
    <div class="text-center container lg:px-10 ">
      <div>
        <h1
          class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white px-10"
        >
          Nuxt DataState Module
        </h1>
        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Simplify state management for data using
          <code
            v-for="name in statesNames"
            :key="name"
            class="font-mono font-medium text-sky-500 dark:text-sky-400 ml-4"
          >{{ name }}</code>
        </p>

        <div class="github mx-auto max-w-max mt-5">
          <a
            href="https://github.com/zenozaga/nuxt-data-state"
            target="_blank"
            class=" flex flex-row items-center justify-center gap-4 border-2 border-gray-500  text-gray-700  py-2 px-6 rounded-full hover:bg-indigo-500 hover:border-white hover:text-white transition"
          >
            <img
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt="Github"
              class="w-8 h-8 rounded-full"
            >

            <span class="font-semibold">Github</span>

          </a>
        </div>
      </div>

      <!-- Group Button -->
      <div>
        <button
          class="mt-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mx-3"
          @click="loadUsers"
        >
          Generate Success
        </button>
        <button
          class="mt-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mx-3"
          @click="generateError"
        >
          Generate Error
        </button>
      </div>

      <div
        v-if="user == null"
        class="mt-10"
      >
        State: none
      </div>

      <DataStateProvider
        v-if="user != null"
        :state="user"
        class="mt-10 lg:mt-20 max-w-3xl mx-auto"
      >
        <template #default>
          <div class="mb-10">
            State: {{ stateName }}
          </div>
        </template>

        <template #loading>
          <LoadingState />
        </template>

        <template #error="{ error }">
          <ErrorState :error="error" />
        </template>

        <template #success="{ data }">
          <div class="p-4">
            <TableState :data="data" />
          </div>
        </template>
      </DataStateProvider>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from './types'
import TableState from './component/TableState.vue'
import ErrorState from './component/ErrorState.vue'
import LoadingState from './component/LoadingState.vue'
import { DataState } from '#imports'

const statesNames = ['loading', 'error', 'success']
const stateName = ref('none')
const user = ref<DataState<User[]> | null>(null)

/// generate user
const generateUsers = (length: number = 7): User[] => {
  return Array.from({ length }, (_, __) => {
    const rand = Math.random()
    const gender = rand > 0.5 ? 'women' : 'men'
    const id = Math.floor(rand * 100)
    const email = `example${id}@gmail.com`
    const name = `User ${id}`
    const avatar = `https://randomuser.me/api/portraits/${gender}/${id}.jpg`

    return {
      id,
      name,
      email,
      avatar,
    }
  })
}

const delayMs = 1000
const delay = (ms: number) => new Promise<void>((resolve: () => void) => setTimeout(resolve, ms))

// Load users and set the state to success
const loadUsers = async () => {
  user.value = DataState.loading()
  stateName.value = 'loading'

  await delay(delayMs)

  const users = generateUsers()
  user.value = DataState.success(users)
  stateName.value = 'success'
}

// Generate an error state
const generateError = async () => {
  user.value = DataState.loading()
  stateName.value = 'loading'

  await delay(delayMs)
  user.value = DataState.error(new Error('Error while fetching user'))
  stateName.value = 'error'
}

// Start with success state
onMounted(() => {
  loadUsers()
})
</script>
