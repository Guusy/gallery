import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const INITIAL_STATE = {
  gallery: [],
}

export const reducer = (state = INITIAL_STATE, { reducer = (state) => state }) => {
    return reducer(state)
}

export function initializeStore(initialState = INITIAL_STATE) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}