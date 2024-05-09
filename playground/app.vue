<template>
  <div class="w-screen h-screen flex justify-center items-center ec">

    <div class="text-center">

      <div>
        <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white px-10">Nuxt DataState Module</h1>
        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Simplify state management for data using 
          <code v-for="name in statesNames" :key="name" class="font-mono font-medium text-sky-500 dark:text-sky-400 ml-4">{{name}}</code>
        </p>
      </div>


      <!-- Group Button-->
      <div>
        <button @click="generateUser" class="mt-10 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-xl mx-3">Generate User</button>
        <button @click="generateError" class="mt-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl mx-3">Generate Error</button>
      </div>


      <div class="mt-10" v-if="user == null">
        State: none
      </div>

      <DataStateProvider v-if="user != null" :state="user" class="mt-10">

        <template #default>
          <div>State:</div>
        </template>

        <template #loading>
          <div>Loading...</div>
        </template>

        <template #error="{ error }">
          <div>{{ error }}</div>
        </template>

        <template #success="{ data }">
          <div>{{ data.name }}</div>
        </template>


      </DataStateProvider>

    </div>

  </div>
</template>

<script setup lang="ts">

import { DataState } from '../src/runtime/types';


const statesNames = ['loading', 'error', 'success'];


type User = {
  id: number;
  name: string;
  email: string;
};


const user: Ref<DataState<User>|null> = ref(null);



/// generate user
const generateUser = () => {
  user.value = DataState.loading();
  setTimeout(() => {


    var id = Math.floor(Math.random() * 1000);
    var email = `${id}@gmail.com`;
    var name = `User ${id}`;

    user.value = DataState.success({ id: id, name, email });

  },2000);
};
 

const generateError = () => {
  user.value = DataState.loading();
  setTimeout(() => {
    user.value = DataState.error(Error('Error while fetching user'));
  },2000);
};



</script>
