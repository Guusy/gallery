import { GalleryService } from '../../../services/GalleryService';
import { startLoadingAction, finishLoadingAction, updateGalleryAction, setErrorHomeAction } from '../index';

export const getGallery = () => async (dispatch, getState) => {
    const { section, sort, window, showViral } = getState()
    try {
        dispatch(startLoadingAction())
        const request = await GalleryService.getGallery({ section, sort, window, showViral });
        dispatch(finishLoadingAction())
        dispatch(updateGalleryAction(request.data))
    } catch (error) {
        dispatch(finishLoadingAction())
        dispatch(setErrorHomeAction("Sorry, there was an error loading the gallery"))
    }
}