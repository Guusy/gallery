import { GalleryService } from '../../../services/GalleryService';
import { setErrorAction } from '../setError/setErrorAction'
import { updateGalleryAction } from '../updateGallery/updateGalleryAction';

export const getGallery = () => async (dispatch, getState) => {
    const { section, sort, window, showViral } = getState()
    try {
        const request = await GalleryService.getGallery({ section, sort, window, showViral });
        return dispatch(updateGalleryAction(request.data))
    } catch (error) {
        return dispatch(setErrorAction())
    }
}