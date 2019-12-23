import { ERROR_LOADING_IMAGE_DETAIL } from '../types'

export const setErrorImageDetailAction = (errorMessage) => {
    return {
        type: ERROR_LOADING_IMAGE_DETAIL,
        reducer: (state) => ({ ...state, errorImageDetail: errorMessage })
    }
}