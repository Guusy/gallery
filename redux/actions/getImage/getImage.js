import { GalleryService } from '../../../services/GalleryService';
import { setErrorAction } from '../setError/setErrorAction'
import { updateImageAction } from '../updateImage/updateImageAction';

export const getImage = (id) => async (dispatch) => {
    try {
        const request = await GalleryService.getImage(id);
        dispatch(updateImageAction(request.data))
    } catch (error) {
        dispatch(setErrorAction())
    }
}