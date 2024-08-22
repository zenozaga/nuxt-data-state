<template>
  <div
    class="w-full lg:min-w-[500px] min-h-[200px] overflow-hidden bg-red-400 rounded-2xl flex justify-center items-center"
  >
    <div class="flex flex-col">
      <h3 class="text-red-700 text-2xl font-semibold">
        Error State
      </h3>
      <p class="text-slate-900 text-lg">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IError {
  error: Error
}

defineProps<IError>()
</script>
