// Define interfaces for each state
interface DataStateEmpty {
  state: 'empty'
}

interface DataStateLoading {
  state: 'loading'
}

interface DataStateSuccess<T> {
  state: 'success'
  value: T
}

interface DataStateError {
  state: 'error'
  error: Error
  code?: number
}

// Define a discriminated union using the interfaces
type DataStateType<T> =
  | DataStateEmpty
  | DataStateLoading
  | DataStateSuccess<T>
  | DataStateError

// Export the DataState factory functions and interfaces
export type {
  DataStateEmpty,
  DataStateLoading,
  DataStateSuccess,
  DataStateError,
  DataStateType,
}
