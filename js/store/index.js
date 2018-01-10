import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers'
import epicMiddleware from '../middleware/epicMiddleware'

const middlewares = [epicMiddleware]

if (process.env.NODE_ENV !== 'production') {
  // storeEnhancer.push(DevTools.instrument())
  middlewares.push(createLogger())
}

const storeEnhancer = [applyMiddleware(...middlewares)]
const finalCreateStore = compose(...storeEnhancer)(createStore)
const configureStore = initialState => finalCreateStore(rootReducer, initialState)
export default configureStore