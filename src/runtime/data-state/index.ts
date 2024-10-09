import type {
  DataStateEmpty,
  DataStateLoading,
  DataStateSuccess,
  DataStateError,
} from '../types'

/**
 * Factory functions for creating instances of DataState.
 * Use these static methods to instantiate different data states.
 */
export const DataState = {
  /**
   * Creates an empty state.
   * @returns A new instance of DataStateEmpty.
   */
  empty: (): DataStateEmpty => ({ state: 'empty' }),

  /**
   * Creates a loading state.
   * @returns A new instance of DataStateLoading.
   */
  loading: (): DataStateLoading => ({ state: 'loading' }),

  /**
   * Creates a success state.
   * @param data The value of type T representing the success.
   * @returns A new instance of DataStateSuccess.
   */
  success: <T>(data: T): DataStateSuccess<T> => ({
    state: 'success',
    value: data,
  }),

  /**
   * Creates an error state.
   * @param error The error object representing the failure.
   * @param code Optional error code to provide additional context.
   * @returns A new instance of DataStateError.
   */
  error: (error: Error, code?: number): DataStateError => ({
    state: 'error',
    error,
    code,
  }),
}

export default DataState
