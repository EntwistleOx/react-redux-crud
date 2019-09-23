import { applyMiddleware, /*compose,*/ createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from '../middleware/logger'
import monitorReducersEnhancer from '../enhancers/monitorReducer'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = (preloadedState) => {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    // const composedEnhancers = compose(...enhancers)
    const composedEnhancers = composeWithDevTools(...enhancers)
    
    const store = createStore(rootReducer, preloadedState, composedEnhancers)
    return store
}

export default configureStore