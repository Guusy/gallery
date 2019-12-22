import { SET_SORT } from "../../types"

export const setSortAction = (sort) => {
    return {
        type: SET_SORT,
        reducer: (state) => ({ ...state, sort })
    }
}