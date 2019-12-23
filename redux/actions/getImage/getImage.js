import { GalleryService } from '../../../services/GalleryService';
import { updateImageAction, setErrorImageDetailAction, clearErrorImageDetailAction } from '../index';

export const getImage = (id) => async (dispatch) => {
    try {
        dispatch(clearErrorImageDetailAction())
        const request = await GalleryService.getImage(id);
        dispatch(updateImageAction(request.data))
    } catch (error) {
        dispatch(setErrorImageDetailAction("Sorry, there was an error loading the image"))
    }
}