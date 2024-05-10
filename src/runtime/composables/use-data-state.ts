// Import DataState and DataStateSuccess from types
import { DataState, DataStateSuccess, DataStateError, DataStateLoading } from "../types";



// Function to create a loading DataState
const useDataStateLoading = <T extends any>(): DataState<T> => DataState.loading();

// Function to create a success DataState
const useDataStateSuccess = <T extends any>(data: T): DataStateSuccess<T> => DataState.success(data);

// Function to create an error DataState
const useDataStateError = <T extends any>(error: Error): DataState<T> => DataState.error(error);



export {
    useDataStateLoading,
    useDataStateSuccess,
    useDataStateError,
    DataState,
    DataStateSuccess,
    DataStateError,
    DataStateLoading
}