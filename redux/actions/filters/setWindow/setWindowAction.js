import { SET_WINDOW } from "../../types"

export const setWindowAction = (window) => {
    return {
        type: SET_WINDOW,
        reducer: (state) => ({ ...state, window })
    }
}