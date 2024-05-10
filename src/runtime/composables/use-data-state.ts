import { ref } from "vue";

// Import DataState and DataStateSuccess from types
import { DataState, DataStateSuccess, DataStateError, DataStateLoading } from "../types";



// Function to create a loading DataState
const useDataStateLoading = <T extends any>(): Ref<DataState<T>> => ref(DataState.loading());

// Function to create a success DataState
const useDataStateSuccess = <T extends any>(data: T): Ref<DataState<T>> => ref(DataState.success(data));

// Function to create an error DataState
const useDataStateError = <T extends any>(error: Error): Ref<DataState<T>> => ref(DataState.error(error));



export {
    useDataStateLoading,
    useDataStateSuccess,
    useDataStateError,
    DataState,
    DataStateSuccess,
    DataStateError,
    DataStateLoading
}