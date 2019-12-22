import { SET_SHOW_VIRAL } from "../../types"

export const setShowViralAction = (showViral) => {
    return {
        type: SET_SHOW_VIRAL,
        reducer: (state) => ({ ...state, showViral })
    }
}