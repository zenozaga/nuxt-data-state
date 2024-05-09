// Import DataState and DataStateSuccess from types
import { DataState, DataStateSuccess } from "../types";

// Function to create a loading DataState
export const useDataState = <T extends any>(data: T): DataState<T> => DataState.loading();

// Function to create a success DataState
export const useDataStateSuccess = <T extends any>(data: T): DataStateSuccess<T> => DataState.success(data);

// Function to create an error DataState
export const useDataStateError = <T extends any>(error: Error): DataState<T> => DataState.error(error);
