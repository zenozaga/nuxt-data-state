// Import DataState and DataStateSuccess from types
import { DataState } from '../data-state'

// Function to create a loading DataState
const useDataStateLoading = <T>() => ref(DataState.loading<T>())

// Function to create a success DataState
const useDataStateSuccess = <T>(data: T) => ref(DataState.success(data))

// Function to create an error DataState
const useDataStateError = <T>(error: Error) => ref(DataState.error<T>(error))

export {
  useDataStateLoading,
  useDataStateSuccess,
  useDataStateError,
}
