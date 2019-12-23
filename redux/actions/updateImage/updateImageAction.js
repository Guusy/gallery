import { UPDATE_IMAGE } from "../types"

export const updateImageAction = (image) => {
    return {
        type: UPDATE_IMAGE,
        reducer: (state) => ({ ...state, image })
    }
}