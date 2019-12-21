import { GalleryService } from '../../../services/GalleryService';
import { setErrorAction } from '../setError/setErrorAction'
import { updateGalleryAction } from '../updateGallery/updateGalleryAction';

export const getGallery = () => async (dispatch) => {
    try {
        const request = await GalleryService.getGallery();
        return dispatch(updateGalleryAction(request.data))
    } catch (error) {
        return dispatch(setErrorAction())
    }
}