<template>
    <div>

        <!-- Render the default slot -->
        <slot name="default" :data="state"></slot>

        <!-- Render the loading slot -->
        <slot v-if="(state instanceof DataStateLoading)"  name="loading"></slot>

        <!-- Render the error slot -->
        <slot v-if="(state instanceof DataStateError)"  name="error" :error="(state.error)"></slot>
        
        <!-- Render the success slot --> 
        <slot v-if="(state instanceof DataStateSuccess)"  name="success" :data="(state.value as T)"></slot>
        

    </div>
</template>


<script setup lang="ts" generic="T extends any">
import { DataState, DataStateLoading, DataStateSuccess, DataStateError } from '../types';

// Define props interface to type-check the state
interface StateInterface {
    state: DataState<T>;
}

// Define props based on the StateInterface
defineProps<StateInterface>();
</script>