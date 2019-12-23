import { GalleryService } from '../../../services/GalleryService';
import { setErrorHomeAction } from '../setErrorHome/setErrorHomeAction'
import { updateGalleryAction } from '../updateGallery/updateGalleryAction';
import { startLoadingAction } from '../startLoading/startLoadingAction';
import { finishLoadingAction } from '../finishLoading/finishLoadingAction';

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