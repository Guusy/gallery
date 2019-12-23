import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { loadingMiddleware } from './middlewares/loadingMiddleware'

const INITIAL_STATE = {
  gallery: [],
  section: 'hot',
  sort: 'viral',
  window: 'day',
  showViral: true,
  loading: false,
  errorHome: null,
  errorImageDetail: null
}

export const reducer = (state = INITIAL_STATE, { reducer = (state) => state }) => {
  return reducer(state)
}

export function initializeStore(initialState = INITIAL_STATE) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loadingMiddleware))
  )
}