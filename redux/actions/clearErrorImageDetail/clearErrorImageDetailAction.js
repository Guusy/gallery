import { CLEAR_ERROR_IMAGE_DETAIL } from "../types";

export const clearErrorImageDetailAction = () => ({
    type: CLEAR_ERROR_IMAGE_DETAIL,
    reducer: (state) => ({ ...state, errorImageDetail: null })
})