import { ERROR } from '../types'

export const setErrorAction = (errorMessage) => {
    return {
        type: ERROR,
        reducer: (state) => ({ ...state, errorMessage })
    }
}