import { CLEAR_ERROR_HOME } from "../types";

export const clearErrorHomeAction = () => ({
    type: CLEAR_ERROR_HOME,
    reducer: (state) => ({ ...state, errorHome: null })
})