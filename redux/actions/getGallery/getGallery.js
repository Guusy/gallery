import { GalleryService } from '../../../services/GalleryService';
import { setErrorAction } from '../setError/setErrorAction'
import { updateGalleryAction } from '../updateGallery/updateGalleryAction';
import { startLoadingAction } from '../startLoading/startLoadingAction';
import { finishLoadingAction } from '../finishLoading/finishLoadingAction';

export const getGallery = () => async (dispatch, getState) => {
    const { section, sort, window, showViral } = getState()
    try {
        dispatch(startLoadingAction())
        const request = await GalleryService.getGallery({ section, sort, window, showViral });
        dispatch(updateGalleryAction(request.data))
        dispatch(finishLoadingAction())
    } catch (error) {
        dispatch(setErrorAction())
        dispatch(finishLoadingAction())
    }
}