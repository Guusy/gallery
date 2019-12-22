import { SET_SECTION } from "../../types"

export const setSectionAction = (section) => {
    return {
        type: SET_SECTION,
        reducer: (state) => ({ ...state, section })
    }
}