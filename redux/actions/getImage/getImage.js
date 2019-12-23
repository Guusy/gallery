import { GalleryService } from '../../../services/GalleryService';
import { updateImageAction, setErrorImageDetailAction } from '../index';

export const getImage = (id) => async (dispatch) => {
    try {
        const request = await GalleryService.getImage(id);
        dispatch(updateImageAction(request.data))
    } catch (error) {
        dispatch(setErrorImageDetailAction("Sorry, there was an error loading the image"))
    }
}