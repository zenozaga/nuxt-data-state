// Define a discriminated union for DataState
type DataStateType<T> =
  | DataStateEmpty
  | DataStateLoading
  | DataStateSuccess<T>
  | DataStateError

type DataStateState = 'empty' | 'loading' | 'success' | 'error'

/**
 * Represents an empty state in the data flow.
 */
class DataStateEmpty {
  // Discriminant property for type narrowing with 'as const'
  readonly state: DataStateState = 'empty' as const
}

/**
 * Represents a loading state in the data flow.
 */
class DataStateLoading {
  // Discriminant property for type narrowing with 'as const'
  readonly state: DataStateState = 'loading' as const
}

/**
 * Represents an error state in the data flow.
 * Stores error information and an optional error code.
 */
class DataStateError {
  // Discriminant property for type narrowing with 'as const'
  readonly state: DataStateState = 'error' as const
  error: Error
  code?: number

  /**
   * Creates an instance of DataStateError.
   * @param error The error object representing the failure.
   * @param code Optional error code to provide additional context.
   */
  constructor(error: Error, code?: number) {
    this.error = error
    this.code = code
  }
}

/**
 * Represents a success state in the data flow.
 * Stores the successful value of type T.
 */
class DataStateSuccess<T> {
  // Discriminant property for type narrowing with 'as const'
  readonly state: DataStateState = 'success' as const
  value: T

  /**
   * Creates an instance of DataStateSuccess.
   * @param value The successful value of type T.
   */
  constructor(value: T) {
    this.value = value
  }
}

/**
 * Factory functions for creating instances of DataState.
 * Use these static methods to instantiate different data states.
 */
const DataState = {
  /**
   * Creates an empty state.
   * @returns A new instance of DataStateEmpty.
   */
  empty: (): DataStateEmpty => new DataStateEmpty(),

  /**
   * Creates a loading state.
   * @returns A new instance of DataStateLoading.
   */
  loading: (): DataStateLoading => new DataStateLoading(),

  /**
   * Creates a success state.
   * @param data The value of type T representing the success.
   * @returns A new instance of DataStateSuccess.
   */
  success: <T>(data: T): DataStateSuccess<T> => new DataStateSuccess(data),

  /**
   * Creates an error state.
   * @param error The error object representing the failure.
   * @param code Optional error code to provide additional context.
   * @returns A new instance of DataStateError.
   */
  error: (error: Error, code?: number): DataStateError =>
    new DataStateError(error, code),
}

// Export the DataState classes and factory functions
export {
  DataState,
  DataStateEmpty,
  DataStateLoading,
  DataStateError,
  DataStateSuccess,
  type DataStateType,
  type DataStateState,
}
