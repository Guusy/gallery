import { FINISH_LOADING } from "../types"

export const finishLoadingAction = () => {
    return {
        type: FINISH_LOADING,
        reducer: (state) => ({ ...state, loading: false })
    }
}