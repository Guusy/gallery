import { GalleryService } from '../../../services/GalleryService';
import { updateImageAction } from '../updateImage/updateImageAction';
import { setErrorImageDetailAction } from '../setErrorImageDetail/setErrorImageDetailAction';

export const getImage = (id) => async (dispatch) => {
    try {
        const request = await GalleryService.getImage(id);
        dispatch(updateImageAction(request.data))
    } catch (error) {
        dispatch(setErrorImageDetailAction("Sorry, there was an error loading the image"))
    }
}