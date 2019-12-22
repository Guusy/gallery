import { START_LOADING } from "../types"

export const startLoadingAction = () => {
    return {
        type: START_LOADING,
        reducer: (state) => ({ ...state, loading: true })
    }
}