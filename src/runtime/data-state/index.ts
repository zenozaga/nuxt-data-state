// Define an abstract class DataState
abstract class DataState<T> {
  // Getter to check if the state is error
  get isError(): boolean {
    return this instanceof DataStateError
  }

  // Getter to convert to success state, throws error if not in success state
  get asSuccess(): DataStateSuccess<T> {
    if (this instanceof DataStateSuccess) {
      return this
    }
    throw new TypeError('DataState is not a success state')
  }

  // Getter to convert to error state, throws error if not in error state
  get asError(): DataStateError<T> {
    if (this instanceof DataStateError) {
      return this
    };
    throw new TypeError('DataState is not an error state')
  }

  // Factory method to create a success state
  static success<T>(data: T): DataStateSuccess<T> {
    return new DataStateSuccess(data)
  }

  // Factory method to create a loading state
  static loading<T>(): DataStateLoading<T> {
    return new DataStateLoading()
  }

  // Factory method to create an error state
  static error<T>(error: Error): DataStateError<T> {
    return new DataStateError(error)
  }
}

// Define a class for loading state, extending DataState
class DataStateLoading<T> extends DataState<T> {}

// Define a class for error state, extending DataState
class DataStateError<T> extends DataState<T> {
  error: Error
  code?: number

  constructor(error: Error) {
    super() // Call the constructor of the base class
    this.error = error
  }
}

// Define a class for success state, extending DataState
class DataStateSuccess<T> extends DataState<T> {
  value: T

  constructor(value: T) {
    super() // Call the constructor of the base class
    this.value = value
  }
}

// Export the classes
export { DataState, DataStateLoading, DataStateError, DataStateSuccess }
