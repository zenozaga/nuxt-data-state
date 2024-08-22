<template name="success">
  <table
    role="table"
    class="w-full lg:min-w-[500px] overflow-hidden bg-white rounded-2xl"
  >
    <thead>
      <tr class="bg-gray-100">
        <th
          v-for="column in columns"
          :key="column"
          class="py-4 text-slate-500"
        >
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody
      role="rowgroup"
      class="px-4"
    >
      <tr
        v-for="u in data"
        :key="u.id"
      >
        <td
          class="py-4"
          role="cell"
        >
          <span class="text-sm font-bold text-indigo-500 p-2 bg-gray-100 rounded-full">{{ u.id }}</span>
        </td>
        <td class="text-center">
          <img
            :src="u.avatar"
            class="size-7 rounded-full mx-auto outline outline-2 outline-offset-2 outline-indigo-300"
          >
        </td>
        <td class="text-center">
          {{ u.name }}
        </td>
        <td>
          <span class="text-indigo-600 font-semibold text-sm hover:opacity-70">
            <a :href="`mailto:${u.email}`">{{ u.email }}</a>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { User } from '~/types'

const columns = ['ID', 'Avatar', 'Name', 'Email']

interface IDataTable {
  data: User[]
}

defineProps<IDataTable>()
</script>
