import { FINISH_LOADING } from "../actions/types";

export const loadingMiddleware = store => next => action => {
    const { loading } = store.getState()
    if (!loading || action.type === FINISH_LOADING) {
        next(action);
    }
}