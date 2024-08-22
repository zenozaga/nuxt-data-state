<template>
  <div>
    <!-- Render the default slot -->
    <slot
      name="default"
      :data="state"
    />

    <!-- Render the loading slot -->
    <slot
      v-if="(state instanceof DataStateLoading)"
      name="loading"
    />

    <!-- Render the error slot -->
    <slot
      v-if="(state instanceof DataStateError)"
      name="error"
      :error="(state.error)"
    />

    <!-- Render the success slot -->
    <slot
      v-if="(state instanceof DataStateSuccess)"
      name="success"
      :data="(state.value as T)"
    />
  </div>
</template>

<script setup lang="ts" generic="T">
import type { DataState } from '../data-state'
import { DataStateLoading, DataStateSuccess, DataStateError } from '../data-state'

// Define props interface to type-check the state
interface IDataStateProvider {
  state: DataState<T>
}

// Define props based on the StateInterface
defineProps<IDataStateProvider>()
</script>
