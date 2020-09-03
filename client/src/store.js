import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(logger, thunk))
    applyMiddleware(thunk)
  )

export default store;

