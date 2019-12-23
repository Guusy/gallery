import { ERROR_LOADING_HOME } from '../types'

export const setErrorHomeAction = (errorMessage) => {
    return {
        type: ERROR_LOADING_HOME,
        reducer: (state) => ({ ...state, errorHome: errorMessage })
    }
}