import {createStore, applyMiddleware, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(applyMiddleware(ReduxThunk),devTools)

const store = createStore(reducers, enhancer)

export default store
