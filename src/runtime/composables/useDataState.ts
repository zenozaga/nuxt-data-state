// Import DataState and DataStateSuccess from types
import type { DataStateSuccess, DataStateType } from '../types'
import { DataState } from '../data-state'

/**
 * Function to create an empty DataState
 * @returns {DataStateType<T>} - An empty DataState.
 */
export const useDataStateEmpty = <T>(): DataStateType<T> => DataState.empty()

/**
 * Function to create a success DataState
 * @param data - The data to pass to the success state.
 * @returns {DataStateSuccess<T>} - A success DataState with the provided data.
 */
export const useDataStateSuccess = <T>(data: T): DataStateSuccess<T> => DataState.success(data)

/**
 * Function to create a loading DataState
 * @returns {DataStateType<T>} - A loading DataState.
 */
export const useDataStateLoading = <T>(): DataStateType<T> => DataState.loading()

/**
 * Function to create an error DataState
 * @param error - The error object to pass to the error state.
 * @returns {DataStateType<T>} - An error DataState with the provided error.
 */
export const useDataStateError = <T>(error: Error): DataStateType<T> => DataState.error(error)
