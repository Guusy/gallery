import { UPDATE_GALLERY } from "../types";

export const updateGalleryAction = (gallery) => (
    {
        type: UPDATE_GALLERY,
        reducer: (state) => ({ ...state, gallery })
    }
)
