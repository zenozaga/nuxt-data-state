<template>
  <div>
    <!-- Render the default slot -->
    <slot
      name="default"
      :data="(state as DataStateType<T>)"
    />

    <slot
      v-if="state.state === 'empty'"
      name="empty"
    />

    <!-- Render the loading slot -->
    <slot
      v-if="state.state === 'loading'"
      name="loading"
    />

    <!-- Render the error slot -->
    <slot
      v-if="state.state === 'error'"
      name="error"
      :error="(state.error as Error)"
      :code="state.code"
    />

    <!-- Render the success slot -->
    <slot
      v-if="state.state === 'success'"
      name="success"
      :data="(state.value as T)"
    />
  </div>
</template>

<script setup lang="ts" generic="T">
import type { DataStateType } from '../types'

// Define props interface to type-check the state
interface IDataStateProvider {
  state: DataStateType<T>
}

// Define props based on the StateInterface
defineProps<IDataStateProvider>()
</script>
